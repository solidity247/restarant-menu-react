import { useState } from "preact/hooks";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CardItem.css";
import ItemModalWindow from "./ItemModalWindow";

export default function CardItem({ menu, productDetails, cartItems, index }) {
  const { id, title, category, price, img, desc } = productDetails;
  const [isModalItem, setIsModalItem] = useState(false);

  function onClickHandler(i) {
    if(cartItems.indexOf(menu[i]) === -1){
      menu[i].inCart = 1
      cartItems.push(menu[i]) 
    }else{
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
            Add To Card
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
