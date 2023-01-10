import { useState } from "preact/hooks";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ItemModalWindow from "./ItemModalWindow";
import ModalAddingItem from "./ModalAddingItem"
import "./CardItem.css";

export default function CardItem({ menu, productDetails, cartItems, setCartItems, index }) {
  const { id, title, category, price, img, desc } = productDetails;
  const [isModalItem, setIsModalItem] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);

  // NOTE: prev state was returning previous data which was deleted
  // But we have to set cartItems in order to update the icon with total items  


  // function onClickHandler(i) {
  //   setCartItems(()=>{
  //     if(cartItems.indexOf(menu[i]) === -1){
  //       menu[i].inCart = 1;
  //     }else{
  //       menu[i].inCart +=1;
  //     }  
  //     return menu.filter(item=>item.inCart)
  //   })    
  // }

  function onClickHandler(i) {
    setOpenModalAdd(true)
    setTimeout(()=>setOpenModalAdd(false), 1500)
    if(cartItems.indexOf(menu[i]) === -1){
      menu[i].inCart = 1
      setCartItems([...cartItems, menu[i]]) 
    }else{
      // here we re not setting or updating cartItems thats a reason of bug 
      menu[i].inCart +=1
    }
  }

  function modalCardCall(event){
    if(event.target.id) return
    setIsModalItem(true);
  }

  return (
    <>
      <Card className="CardItem" onClick={modalCardCall} >
        {isModalItem && <ItemModalWindow productDetails={productDetails} addToCartFunc={onClickHandler} index={index} setIsModalItem={setIsModalItem} />}
        {openModalAdd && <ModalAddingItem openModalAdd={openModalAdd} setOpenModalAdd={setOpenModalAdd} />}
        <CardMedia image={img} title={title} className="pictire-container" />
        <CardContent>
          <Typography
            className="card-item-name"
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            className="card-item-description"
            variant="body2"
            color="text.secondary"
          >
            {desc}
          </Typography>
          <Typography
            className="card-item-name"
            variant="h6"
            color="text.secondary"
          >
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button id="addToCartButton" onClick={()=>onClickHandler(index)} size="small">
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
