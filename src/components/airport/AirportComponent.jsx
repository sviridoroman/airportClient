import { useEffect, useState } from "react";
import AirportList from "./airportList/AirportList";
import cl from './AirportComponent.module.css';
import Modal from "../modal/Modal";
import CreateComponent from "./CreateComponent";
import ButtonSubmit from "../button/buttonSubmit/ButtonSubmit";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirports, deleteAirport, createAirport } from "../../store/airportSlice";
const AirportComponent = () => {
  
  const dispatch = useDispatch();
  const airports = useSelector(state => state.airports.airports);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(fetchAirports());
  }, [dispatch]);

  const addNewAirport = (newAirport) => {
    dispatch(createAirport(newAirport));
    setModal(false);
  };

  return (
      <div className={cl.component}>
        <div className={cl.component_item}>
          <h1>Airports</h1>
        </div>
        <div className={cl.component_item}>
          <ButtonSubmit onClick={() => setModal(true)}>New</ButtonSubmit>
        </div>
        <div className={cl.component_item}>
          <div className={cl.airportList}>
            <AirportList items={airports} deleteItem={(airportId) => dispatch(deleteAirport(airportId))} title='Airports list'/>
          </div>   
        </div>
        <Modal visible={modal} setVisible={setModal}>
          <CreateComponent create={addNewAirport}></CreateComponent>
        </Modal>
      </div>
  )
}

export default AirportComponent;