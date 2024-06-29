import List from "./List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: "99" },
    { id: 2, name: "orange", calories: 88 },
    { id: 3, name: "banana", calories: 77 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 55 },
  ];
  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "brocoli", calories: 50 },
  ];
  //prop is how u pass data from one component to another component
  // return <List items={fruits} category= "Fruits" />; //List is the component, items={fruits} is a prop being passed to the List compoenet. items and category is the name of the prop.
  return <>
     {fruits.length > 0 && <List items={fruits} category="Fruits"/>} 
     {vegetables.length > 0 && <List items={vegetables} category="Vagetables"/>}

  </>
}

export default App;
