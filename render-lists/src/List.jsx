import PropTypes from 'prop-types'

function List(props) {
  const itemList = props.items;
  const category = props.category;

  // fruits.sort((a,b) =>a.name.localeCompare(b.name)); //ALPHAETICAL
  // fruits.sort((a,b) =>b.name.localeCompare(a.name)); //Reverse ALPHAETICAL
  // fruits.sort((a,b) => a.calories - b.calories); //NUMERIC
  // fruits.sort((a,b)=> b.calories - a.calories); //REVERSE NUMERIC

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}: &nbsp;
  //                                         <b>{highCalFruit.calories}</b></li>);

  // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;
  //                                         <b>{fruit.calories}</b></li>)

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                name: PropTypes.string,
                                calories:PropTypes.number
    })),
}
List.defaultProps = {
    category: "Category",
    items:[],
}

export default List;
