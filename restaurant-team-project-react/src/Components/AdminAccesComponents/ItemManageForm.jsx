import React from "react";
import "./ItemManageForm.css";

export default function ItemManageForm({ itemDetails, setIsForm, onFormSubmit, dataIndex }) {
  function onSubmitHandler(event) {
    event.preventDefault();
    const collectedInfo = {
      id: event.target.id.value,
      title: event.target.title.value,
      category: event.target.category.value,
      price: event.target.price.value,
      img: event.target.img.value,
      desc: event.target.desc.value,
    };
    onFormSubmit({collectedInfo, dataIndex});
    setIsForm(false)
}

function cancelHandler(){
      setIsForm(false)
  }


  const formHeader = itemDetails? "Edit item" : "Add item"

  return (
    <div className="item-manage-container">
      <form className="item-manage-form" onSubmit={onSubmitHandler}>
        <h2>{formHeader}</h2>
        <div
          className="form-picture"
          style={{ backgroundImage: `url(${itemDetails.img})` }}
        ></div>
        <label id="id"> ID </label>
        <input type="text" id="id" value={itemDetails.id || ""} />
        <label id="title"> Name </label>
        <input type="text" id="title" value={itemDetails.title || ""} />
        <label id="category"> Category </label>
        <input type="text" id="category" value={itemDetails.category || ""} />
        <label id="desc"> Description </label>
        <input type="text" id="desc" value={itemDetails.desc || ""} />
        <label id="img"> Picture src </label>
        <input type="text" id="img" value={itemDetails.img || ""} />
        <label id="price"> Price $ </label>
        <input
          type="number"
          id="price"
          step="0.01"
          value={itemDetails.price || ""}
        />
        <input type="submit" />
        <button type="button" onClick={cancelHandler}>Cancel</button>
      </form>
    </div>
  );
}
