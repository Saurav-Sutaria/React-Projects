import React, { useState } from 'react'
import Items from './components/Items';

const App = () => {
  const [currItem,setCurrItem] = useState("");
  const [items,setItems] = useState([]);
  const inputChangeHandler = (event) => {
    setCurrItem(event.target.value)
  }
  const addItemHandler = () => {
    if(currItem.trim() !== ''){
      setItems([...items,currItem.trim()])
      setCurrItem("")
    }
    
  }
  return (
    <>
      <h1>My TODO App</h1>
      <div className='mt-4'>
        <input 
        className='border border-black'
        type='text'
        value={currItem} 
        onChange={inputChangeHandler}
        placeholder='Enter your task here'
        required />
        <button onClick={addItemHandler}>Add</button>
      </div>
      <Items items={items} setItems={setItems}/>
    </>
  )
}

export default App
