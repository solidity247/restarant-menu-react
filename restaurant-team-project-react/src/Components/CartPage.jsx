import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import "./CartPage.css"

function CartPage({cartItems, setCartItems}) {
    let result = 0
    const updateItemQuantity = (i, num)=>{
        (num === 1 ) ? (cartItems[i].inCart +=1) :( (cartItems[i].inCart > 1) ? cartItems[i].inCart -= 1 : null)
        const copyState = [...cartItems]
        setCartItems(copyState)
    }
    const removeCartItem = (i)=>{
        const copyItems = [...cartItems]
        copyItems.splice( i , 1 )
        setCartItems(copyItems)
    }
    return (
        <div>
        {cartItems.map((ele, index)=> {
            result = result + ele.price * ele.inCart
            return (
            <Card className="CardItem">
            <CardMedia image={ele.img} title={ele.title} className="pictire-container" />
            <CardContent>
              <Typography
                className="card-item-name"
                gutterBottom
                variant="h5"
                component="div"
              >
                {ele.title}
              </Typography>
              <Typography
                className="card-item-description"
                variant="body2"
                color="text.secondary"
              >
                {ele.desc}
              </Typography>
              <Typography
                className="card-item-name"
                variant="h6"
                color="text.black"
              >
                Price: ${ele.price}
              </Typography>
            </CardContent>
            <CardActions className='cart-btn-wrapper'>
     
                <Button className = "quantity-btns-cartpage" onClick = {()=>updateItemQuantity(index, 1)}>+</Button>
                <h4 className='quantity-num-cartpage'>{ele.inCart}</h4>
                <Button className = "quantity-btns-cartpage" onClick={()=> updateItemQuantity(index, -1)}>-</Button>
             
            </CardActions>
                <Button className = "remove-btn-cartpage" onClick={()=>removeCartItem(index)}>Remove</Button>
          </Card>

            )
            })}
        <h2>Subtotal: ${result.toFixed(2)}</h2>
        </div>
  )
}

export default CartPage