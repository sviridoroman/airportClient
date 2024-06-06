import DropDownMenu from "../../dropDown/DropDownMenu";
import cl from "./FlightList.module.css";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const FlightList = ({items, deleteItem}) => {

  if(!items.length) {
    return (
      <h1 style={{textAlign:'center'}}>Airports not found</h1>
    )
  }

  return (
      <table className={cl.airportTable}>
        <thead>
          <tr>
            <th>arrivalDate</th>
            <th>airport</th>
            <th>price</th>
            <th>completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) =>
          <tr key={item.id}>
            <td>{item.arrivalDate}</td>
            <td>{item.airportId}</td>
            <td>{item.price}</td>
            <td>
              {  
                item.completed == true ?
                <AiOutlineCheckCircle/>
                :
                <AiOutlineCloseCircle />
              }
            </td>
            {/* <td><i style={{cursor:"pointer"}}><AiFillDelete onClick={() => deleteItem(item.id)}/></i></td> */}
            <td>
              <DropDownMenu link={`/flight/${item.id}`} deleteItem={() => deleteItem(item.id)}></DropDownMenu>
            </td>
          </tr>
          )}
        </tbody>
      </table>
  )
};

export default FlightList