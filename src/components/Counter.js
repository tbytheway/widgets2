import React, { useState } from 'react';

export default function Counter() {

      const [count, setCount] = useState(0)
      
    return (

   <div>
    <h1>{count}</h1>
   <button onClick={() => setCount(count + 1)}>Add</button>
    <button onClick={() => setCount(count - 1)}>Sub</button>
  </div>
    );

};