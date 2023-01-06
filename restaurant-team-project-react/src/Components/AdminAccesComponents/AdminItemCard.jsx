import {useState} from "react";
import ContentEditable from "react-contenteditable";
import './AdminItemCard.css'

export default function AdminItemCard({ itemDetails, setIsForm }) {

  function editButtonHandler(){
    setIsForm(true)
  }


  // console.log(itemDetails);
  return (
    <div className="admin-item-card">
      {/* <ContentEditable className="aic-id admin-item-line-element" ContentEditable={isEditable} onChange={editValueHandler}> ID {itemDetails.id}</ContentEditable> */}
      <div className="aic-id admin-item-line-element" > ID {itemDetails.id}</div>
      <div className="aic-picture" style={{ backgroundImage: `url(${itemDetails.img})`}}></div>
      <div className="aic-title admin-item-line-element" > {itemDetails.title}</div>
      <div className="aic-category admin-item-line-element" > {itemDetails.category}</div>
      <div className="aic-description admin-item-line-element" > {itemDetails.desc}</div>
      <div className="aic-img-url admin-item-line-element" > {itemDetails.img}</div>
      <div className="aic-price admin-item-line-element" > ${itemDetails.price}</div>
      <button onClick={editButtonHandler}>Edit</button>
      <button>Save</button>
      <button>Delete</button>



      <div className="item-picture"></div>
    </div>
  );
}
