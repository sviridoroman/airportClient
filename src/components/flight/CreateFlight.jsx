import { useState } from "react"
import FlightForm from "./flightForm/FlightForm";

const  CreateFlight = ({create}) => {

  const  [flight, setFlight] = useState({
    arrivalDate:"",
    airportId:"",
    price:"",
    completed:false
  });

  const addNewFlight = (e) => {
    e.preventDefault();
    const newFlight = {
      ...flight
    }
    create(newFlight);
    setFlight({
      arrivalDate:"",
      airportId:"",
      price:"",
      completed:false
    });
  }

  return (
    <div>
      <FlightForm flight={flight} setFlight={setFlight} handleClick={addNewFlight} headerTitle="Select"></FlightForm>
    </div>
  )
}

export default CreateFlight;