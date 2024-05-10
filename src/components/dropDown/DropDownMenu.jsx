import { AiFillDelete, AiOutlineEllipsis, AiOutlineEdit   } from "react-icons/ai";
import cl from "./DropDownMenu.module.css";

const DropDownMenu = ({link, deleteItem}) => {

  return (
    <div className={cl.dropdown}>
      <i className={cl.dropbtn}><AiOutlineEllipsis></AiOutlineEllipsis></i>
      <div className={cl.dropdownContent}>
        <div className={cl.item}>
          <span><a href={link}><AiOutlineEdit style={{verticalAlign: 'text-top'}}></AiOutlineEdit> Edit</a></span>
        </div> 
        <div className={cl.item}>
          <span  onClick={deleteItem} style={{cursor:"pointer"}}><AiFillDelete style={{verticalAlign: 'text-top'}}></AiFillDelete> Delete</span>
        </div> 
      </div>
    </div>
  )
}

export default DropDownMenu;