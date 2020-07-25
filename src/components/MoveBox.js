import React, { useState } from 'react';


export default function MoveBox() {
  const [offsetTop, setOffsetTop] = useState(0);
  

  function moveBoxUp() {
    setOffsetTop(offsetTop - 50);
  }
  function moveBoxDown() {
    setOffsetTop(offsetTop + 50);
  }
 
  return (
    <div>
      <h1>Move the Box</h1>

      <button onClick={moveBoxUp}> Move Up </button>
      <button onClick={moveBoxDown}> Move Down</button>
     

      
      <div className='box'
        style={{
          transform: `translateY(${offsetTop}px)`
        }}
      />

      
    </div>
  );
}