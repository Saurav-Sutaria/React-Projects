import React from "react";
import Item from "./Item";
const Items = ({ items,setItems }) => {
  function deleteHandler(index){
    const updatedItems = [...items]; // Make a copy of the items array
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }
  function editHandler(index){

  }
  return (
    <>
      <div className="mt-3">Pending Tasks : {items.length}</div>
      <div className="mt-1">
        {
          items.map((item, idx) => (
            <Item 
            key={idx} 
            index={idx}
            item={item} 
            deleteHandler={deleteHandler}
            editHandler={editHandler}/>
          ))
        }
      </div>
    </>
    
  );
};

export default Items;
