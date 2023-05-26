import React from 'react'

const Item = ({item,index,deleteHandler, editHandler}) => {
  return (
    <div className='flex felx-row gap-3 mt-2'>
      <p>{item}</p> 
      <button onClick={() => editHandler(index)} className='border border-black p-1'>Edit</button>
      <button onClick={() => deleteHandler(index)} className=' p-1 border border-black'>Delete</button>  
    </div>
  )
}

export default Item
