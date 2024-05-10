import cl from "./AirportList.module.css";
import DropDownMenu from "../../dropDown/DropDownMenu";

const AirportList = ({items, deleteItem}) => {
  
  if(!items.length) {
    return (
      <h1 style={{textAlign:'center'}}>Airports not found</h1>
    )
  }

  return (
      <table className={cl.airportTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) =>
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.country}</td>
            {/* <td><i style={{cursor:"pointer"}}><AiFillDelete onClick={() => deleteItem(item.id)}/></i></td> */}
            <td>
              <DropDownMenu link={`/airport/${item.id}`} deleteItem={() => deleteItem(item.id)}></DropDownMenu>
            </td>
          </tr>
          )}
        </tbody>
      </table>
  )
}

export default AirportList;