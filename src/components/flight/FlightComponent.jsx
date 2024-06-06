import cl from "./FlightComponent.module.css"
import { useDispatch, useSelector } from "react-redux";
import FlightList from "./flightList/FlightList";
import { useEffect, useState } from "react";
import { fetchFLights, createFlight, deleteFlight } from "../../store/flightsSlice";
import ButtonSubmit from "../button/buttonSubmit/ButtonSubmit";
import Modal from "../modal/Modal";
import CreateFlight from "./CreateFlight";
import { fetchAirports } from "../../store/airportSlice";

const FlightComponent = () => {

  const dispatch = useDispatch();
  const flights = useSelector(state => state.flights.flights);

  const [modal, setModal] = useState(false);
  
  useEffect(() => {
    dispatch(fetchFLights());
    dispatch(fetchAirports());
  }, [dispatch])

  const createNewFlight = (newFlight) => {
    dispatch(createFlight(newFlight));
    setModal(false);
  };
  
  return (
    <div className={cl.component}>
    <div className={cl.component_item}>
      <h1>Flights</h1>
    </div>
    <div className={cl.component_item}>
      <ButtonSubmit onClick={() => setModal(true)}>New</ButtonSubmit>
    </div>
    <div className={cl.component_item}>
      <div className={cl.flightList}>
      <FlightList items={flights} deleteItem={(flightId) => dispatch(deleteFlight(flightId)) }></FlightList>
      </div>   
    </div>
    <Modal visible={modal} setVisible={setModal}>
      <CreateFlight create={createNewFlight}></CreateFlight>
    </Modal>
  </div>
  );
};

export default FlightComponent