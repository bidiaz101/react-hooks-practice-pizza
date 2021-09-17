import React, { useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [formData, setFormData] = useState({
    topping: "",
    size: "Small",
    vegetarian: false,
    id: 0
  })
  const [pizzaData, setPizzaData] = useState([])

  return (
    <>
      <Header />
      <PizzaForm 
        formData={formData} 
        setFormData={setFormData}
        pizzaData={pizzaData}
        setPizzaData={setPizzaData}
      />
      <PizzaList 
        setFormData={setFormData} 
        pizzaData={pizzaData}
        setPizzaData={setPizzaData}
      />
    </>
  );
}

export default App;
