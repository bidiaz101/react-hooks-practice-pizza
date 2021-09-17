import React, {useEffect} from "react";
import Pizza from "./Pizza";

function PizzaList({ setFormData, pizzaData, setPizzaData }) {
  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(resp => resp.json())
    .then(data => setPizzaData(data))
  }, [])

  const pizzasToDisplay = pizzaData.map(pizza => {
    return <Pizza topping={pizza.topping} size={pizza.size} veg={pizza.vegetarian} setFormData={setFormData} id={pizza.id} key={pizza.id} />
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzasToDisplay}
      </tbody>
    </table>
  );
}

export default PizzaList;
