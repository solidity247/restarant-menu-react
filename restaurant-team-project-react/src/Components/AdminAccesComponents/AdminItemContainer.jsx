import {useState} from "react";
import AdminItemCard from "./AdminItemCard";
import ItemManageForm from "./ItemManageForm";


export default function AdminItemContainer({itemDetails, dataIndex, onFormSubmit}) {
    const [isForm, setIsForm] = useState(false)
    const editModeClass = isForm? "item-manage-form-background" : ""




  return (
    <div className={editModeClass}>
      <AdminItemCard setIsForm={setIsForm} itemDetails={itemDetails}></AdminItemCard>
      {!isForm || <ItemManageForm dataIndex={dataIndex} setIsForm={setIsForm} itemDetails={itemDetails} onFormSubmit={onFormSubmit} ></ItemManageForm>}
    </div>
  );
}
