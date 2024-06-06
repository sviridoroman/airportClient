import { useState } from "react";

  const DropDownSelect = ({ title, list, setValue}) => {

    const [isListOpen, setIsListOpen] = useState(false);
    const [headerTitle, setHeaderTitle] = useState(title);
    const [selectedItem, setSelectedItem] = useState();

    const toggleList = () => {
      setIsListOpen(!isListOpen);
    };

    const selectItem = (item) => {
      setIsListOpen(false);
      setValue(item);
      setHeaderTitle(item.name + ", " + item.city + ", " + item.country);
      setSelectedItem(item);
    };

    return (
      <div className="dd-wrapper">
        <button type="button" className="dd-header" onClick={toggleList}>
        <div className="dd-header-title">{
            headerTitle? headerTitle: title
          }
          </div>
        </button>
        {isListOpen && (
          <div className="dd-list">
            {list.map((item) => (
              <button type="button" className="dd-list-item" key={item.id} onClick={() => selectItem(item)}>
                {`${item.name}, ${item.city}, ${item.country}`}{item == selectedItem && ' selected'}
              </button>
            ))}
          </div>
        )}

      </div>
    )
  };

  export default DropDownSelect