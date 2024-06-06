import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FlightForm from "./flightForm/FlightForm";
import { useDispatch } from "react-redux";
import { editFlight, fetchFLights } from "../../store/flightsSlice";
import { fetchAirports } from "../../store/airportSlice";

const UpdateFlight = () => {

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const [flight, setFlight] = useState({
    arrivalDate:"",
    airportId:"",
    price:"",
    completed:""
  });

  const [selectedAirport, setSelectedAirport] = useState();

  const airports = dispatch(fetchAirports());
  const flights = dispatch(fetchFLights());

  const fetchAndSetFLight = () => {
    flights
    .unwrap()
    .then(flights => setFlight(flights
      .find((flight) => flight.id == params.flightId)));
  };

  const setHeaderTitle = () => {
    console.log(flight)
  }

  useEffect(() => {

    fetchAndSetFLight();
    setHeaderTitle();
    
      // .unwrap()
      // .then(airports => {
      //   // console.log(airports.find((airport) => airport.id == "fc15ffbd-2dc0-456a-8ed7-76f902d74fc4"));
      //   console.log(flight.airportId)
      //   setSelectedAirport(airports.find((airport) => airport.id == flight.airportId))});
  },[dispatch])

  const updateFlight = (e) => {
    e.preventDefault();
    dispatch(editFlight(flight));
    navigate("/flight")
  };

  return (
    <div>
      <a href="/flight">{"< previous"}</a>
      <FlightForm flight={flight} setFlight={setFlight} handleClick={updateFlight} headerTitle={selectedAirport}></FlightForm>
    </div>
  )
}

export default UpdateFlight;