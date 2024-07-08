
// React hook = special function that allows functional components 
// to use React festures without writing class components (React v16.8)
// (useState, useeEffect, useContext, useReducer, useCallback, and more...)

// useState() = A React hook that allows the 
// creation of a stateful variable AND a setter function 
// to update its value in the Virtual DOM. [name, setName]

// import React, {useState} from 'react'
import Counter from './Counter.jsx';

// import MyComponent  from "./MyComponent.jsx"
// function App() {
//   const [name, setName] = useState("Guest"); //Guest is a initially (name)

//   const [age, setAge] = useState(0);
//   const [isEmployed, setisEmployed] = useState(false);

//   const updateName = () => {
//       setName("Thary")
//   }
//   const incrementAge = () => {
//       setAge(age + 3)
//   }
//   const toggleEmployedStatus = () => {
//     setisEmployed(!isEmployed)
//   }

//   return(<div>
//               <p>Name: {name}</p>
//               <button onClick={updateName}>Set Name</button>

//               <p>Age: {age}</p>
//               <button onClick={incrementAge}>Increment Age</button>

//               <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
//               <button onClick={toggleEmployedStatus}>Toggle Status</button>
//           </div>)
// }
  function App(){
    return(<Counter/>)
  }

export default App
