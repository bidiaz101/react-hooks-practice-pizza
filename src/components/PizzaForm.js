import React from "react";

function PizzaForm({formData, setFormData, pizzaData, setPizzaData}) {
  function handleSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${formData.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => {
      const newPizzas = pizzaData.map(pizza => {
        if(pizza.id===data.id){
          const newPizza = {
            id: pizza.id,
            topping: data.topping,
            size: data.size,
            vegetarian: data.vegetarian
          }
          return newPizza
        } else {
          return pizza
        }
      })
      setPizzaData(newPizzas)
    })
  }

  function handleChange(e) {
    if(e.target.name.includes("vegetarian")) {
      setFormData({
        ...formData, 
        vegetarian: e.target.value === "Vegetarian"
      })
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={formData.topping}
            placeholder="Pizza Topping"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select 
            className="form-control" 
            name="size" 
            value={formData.size}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={formData.vegetarian}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!formData.vegetarian}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
