import { useEffect, useState } from "react";
import AirportList from "./airportList/AirportList";
import AirportService from "./AirportService"
import cl from './AirportComponent.module.css'
import Modal from "../modal/Modal";
import CreateComponent from "./CreateComponent";
const AirportComponent = () => {

  const [airports, setAirports] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setAirports(await AirportService.getAllAirports())
    }
    fetchData();
  },[]);

  const createAirport = async (newAirport) => {
    await AirportService.postAirport(newAirport);
    setAirports((await AirportService.getAllAirports()));
    setModal(false);
  };

  const deleteAirport = async (airportId) => {
    await AirportService.deleteAirport(airportId);
    setAirports((await AirportService.getAllAirports()));
  };

  return (
      <div className={cl.component}>
        <div className={cl.component_item}>
          <h1>Airports</h1>
        </div>
        <div className={cl.component_item}>
          <button onClick={() => setModal(true)}>New</button>
        </div>
        <div className={cl.component_item}>
          <div className={cl.airportList}>
            <AirportList items={airports} deleteItem={deleteAirport} title='Airports list'/>
          </div>   
        </div>
        <Modal visible={modal} setVisible={setModal}>
          <CreateComponent create={createAirport}></CreateComponent>
        </Modal>
      </div>
  )
}

export default AirportComponent;