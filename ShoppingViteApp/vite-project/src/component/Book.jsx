import React from 'react'
import { useState } from 'react';
import './Book.css'
function Book({book})
{
  const[count,setCount]=useState(1);
  function increment()
  {
    setCount(count+1)
    console.log("count="+count)
  }
   function decrement()
   {
    setCount(count-1)
    console.log("count="+count)
  }
  function addtocart()
  {
    alert(`Successfully Added${book.title}`)
  }
  return (
    <div className='card'>
      <img src={book.image} width={200} height={200} alt="image" />
      <h3>Title:{book.title}</h3>
      <h4>Price:₹{book.price}</h4>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
<button onClick={increment}>+</button>
      </div>
      <button onClick={addtocart}>Add to cart</button>
    </div>
  )
}

export default Book