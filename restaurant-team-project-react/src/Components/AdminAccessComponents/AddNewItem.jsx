import { useState } from "react";
import ItemManageForm from "./ItemManageForm";

export default function AddNewItem({onFormSubmit}) {
  const [isForm, setIsForm] = useState(false);

  function addItemButtonHandler() {
    // console.log("first")
    setIsForm(true);
  }

  console.log("addNewItemRendered")

  return (
    <div>
      <button onClick={addItemButtonHandler}>Add New Item</button>      
      {isForm && <ItemManageForm setIsForm={setIsForm} onFormSubmit={onFormSubmit} />}
    </div>
  );
}
