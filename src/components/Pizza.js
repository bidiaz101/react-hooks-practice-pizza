import React from "react";

function Pizza({ topping, size, veg, id, setFormData }) {
  function handleEdit(){
    setFormData({
      topping: topping,
      size: size,
      vegetarian: veg,
      id: id
    })
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{veg ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEdit}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
