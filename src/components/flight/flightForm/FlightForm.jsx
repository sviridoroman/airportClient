import { useId } from "react";
import cl from "./FlightForm.module.css";
import ButtonSubmit from "../../button/buttonSubmit/ButtonSubmit";
import { useSelector } from "react-redux";
import DropDownSelect from "../../dropDown/DropDownSelect";

const FlightForm = ({flight, setFlight, handleClick, headerTitle}) => {

  const airports = useSelector(state => state.airports.airports);

  const arrivalDateInput = useId();
  const airportIdInput = useId();
  const priceInput = useId();
  const completedInput = useId();

  return (
    <form className={cl.form_component} onSubmit={handleClick}>
    <div className={cl.form_item}>
      <label htmlFor={arrivalDateInput}>arrival date:</label>
      <input type="date" id={arrivalDateInput} value={flight.arrivalDate} onChange={e => setFlight({...flight, arrivalDate: e.target.value})} autoComplete="off" />
    </div>
    <div className={cl.form_item}>
      <label htmlFor={airportIdInput}> Airport:</label>
      <DropDownSelect list={airports} title={headerTitle} setValue={e => setFlight({...flight, airportId: e.id})}></DropDownSelect>
    </div>
    <div className={cl.form_item}>
      <label htmlFor={priceInput}>price:</label>
      <input type="text" id={priceInput} placeholder="country" value={flight.price} onChange={e => setFlight({...flight, price: e.target.value})} autoComplete="off" />
    </div>
    <div className={cl.form_item}>
      <label htmlFor={completedInput}>completed</label>
      <input checked={flight.completed == true ? true : false} type="checkbox" id={completedInput} placeholder="country" 
      value={flight.completed} onChange={e => setFlight({...flight, completed: e.target.checked})} autoComplete="off" />
    </div>
    <ButtonSubmit>Save</ButtonSubmit>
  </form>
  )
};

export default FlightForm;