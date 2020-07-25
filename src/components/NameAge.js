import React, {useState} from "react";


export default function NameAge() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
    <div>
        <p>Display Name: {name} </p>
        <p>Display Age: {age}</p>
    </div>

     
      <div>
          <label>Name: </label>
          <input type="text" placeholder="Max" onChange={e => setName(e.target.value)}/>
     </div>

      <div>
          <label>Age: </label>
          <input type="number" placeholder="38" onChange={e => setAge(e.target.value)} />
        </div>
      </div>
      
    
  );
}


