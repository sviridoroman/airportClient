import { useState } from "react"
import AirportForm from "./airportForm/AirportForm";

const  CreateAirport = ({create}) => {

  const  [airport, setAirport] = useState({
    name:"",
    city:"",
    country:""
  });

  const addNewAirport = (e) => {
    e.preventDefault();
    const newAirport = {
      ...airport
    }
    create(newAirport);
    setAirport({
      name:"",
      city:"",
      country:""
    });
  }

  return (
    <div>
      <AirportForm  airport={airport} setAirport={setAirport} handleClick={addNewAirport}></AirportForm>
    </div>
  )
}

export default CreateAirport;