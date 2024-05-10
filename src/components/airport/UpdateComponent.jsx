import { useEffect, useState } from "react";
import AirportService from "./AirportService";
import { useNavigate, useParams } from "react-router-dom";
import AirportForm from "./airportForm/AirportForm";

const UpdateComponent = () => {

  const params = useParams();
  const navigate = useNavigate();
  const [airport, setAirport] = useState({
    name:"",
    city:"",
    country:""
  });

  useEffect(() => {
    async function fetchData() {
      setAirport(await AirportService.getAirport(params.airportId))
    }
    fetchData();
  },[]);

  const updateAirport = async(e) => {
    e.preventDefault();
    await AirportService.putAirport(params.airportId, airport);
    navigate("/airport");
  }

  return (
    <div>
      <a href="/airport">{"< previous"}</a>
      <AirportForm airport={airport} setAirport={setAirport} handleClick={updateAirport}></AirportForm>
    </div>
  )
}

export default UpdateComponent;