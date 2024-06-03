import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AirportForm from "./airportForm/AirportForm";
import { useDispatch } from "react-redux";
import { editAirport, fetchAirports } from "../../store/airportSlice";

const UpdateComponent = () => {

  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();

  const [airport, setAirport] = useState({
    name:"",
    city:"",
    country:""
  });

  useEffect(() => {
    dispatch(fetchAirports())
      .unwrap()
      .then(airports => setAirport(airports.find((airport) => airport.id == params.airportId)));
  },[]);

  const updateAirport = async(e) => {
    e.preventDefault();
    dispatch(editAirport(airport));
    navigate("/airport")
  }

  return (
    <div>
      <a href="/airport">{"< previous"}</a>
      <AirportForm airport={airport} setAirport={setAirport} handleClick={updateAirport}></AirportForm>
    </div>
  )
}

export default UpdateComponent;