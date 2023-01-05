import { useState } from 'preact/hooks'
import React from 'react'

function CartPage({cartItems}) {
    const [result, setResult] = useState(0)

    // console.log(result)
    //TODO :
    // add total price 
    return (
        <div>
        {cartItems.map(ele=> {
            return <p>{ele.title + ele.price}</p>
            })}
        <h6>Total:{result}</h6>
    </div>
  )
}

export default CartPage