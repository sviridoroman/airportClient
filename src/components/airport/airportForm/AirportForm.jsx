import { useId } from "react";
import cl from "./AirportForm.module.css"
import ButtonSubmit from "../../button/buttonSubmit/ButtonSubmit";

const AirportForm = ({airport, setAirport, handleClick}) => {

  const nameInput = useId();
  const cityInput = useId();
  const countryInput = useId();
  
  return (
    <form className={cl.form_component} onSubmit={handleClick}>
    <div className={cl.form_item}>
      <label htmlFor={nameInput}>Airport name:</label>
      <input type="text" id={nameInput} placeholder="name" value={airport.name} onChange={e => setAirport({...airport, name: e.target.value})} autoComplete="off" />
    </div>
    <div className={cl.form_item}>
      <label htmlFor={cityInput}> Airport city:</label>
      <input type="text" id={cityInput} placeholder="city" value={airport.city} onChange={e => setAirport({...airport, city: e.target.value})} autoComplete="off" />
    </div>
    <div className={cl.form_item}>
      <label htmlFor={countryInput}>Airport country:</label>
      <input type="text" id={countryInput} placeholder="country" value={airport.country} onChange={e => setAirport({...airport, country: e.target.value})} autoComplete="off" />
    </div>
    <ButtonSubmit>Save</ButtonSubmit>
  </form>
  )
}

export default AirportForm;