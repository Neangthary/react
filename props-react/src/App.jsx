//props = read-only properties that are shared 
//between components. A parent component can send data to 
//a child component. <Componet key=value />
 
//this is parent component

import Student from "./Student.jsx";

function App() {
 return(
  <>
    <Student name="Thary" age={21} isStudent={false}/>
    <Student name="Jonh" age={34} isStudent={true}/>
    <Student name="Sarah" age={12} isStudent={false}/>
    <Student name="Sal" age={24} isStudent={true}/>
    <Student/>
  </>
 );
}

export default App
