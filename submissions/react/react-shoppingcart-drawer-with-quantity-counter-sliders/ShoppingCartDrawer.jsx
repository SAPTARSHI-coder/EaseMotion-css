import React, { useState } from "react";


function ShoppingCartDrawer() {
    const [qty, setQty] = useState(1)
  return (

    <div className="ease-fade-in">
        
        <h1>Shopping Cart</h1>

       <h3>Wireless Mouse</h3>

        <p>Quantity:{qty}</p>

        <button className="ease-hover-lift" onClick={()=>{
            if(qty<10)
                {
            setQty(qty+1)
            }
        }
        }>+</button>

        <button className="ease-hover-lift" onClick={()=>{
            if(qty>1)
                {
                setQty(qty-1)
            }
        }
        }>-</button>

        <input
            type="range"
            min="1"
            max="10"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
        />

    </div>
  )
}

export default ShoppingCartDrawer
