import React from "react";
import "./NewProduct.css";
import { useContext } from "react";

import { cartContext } from "./cartContext";

const NewProduct = ({ Product }) => {

    const {cart,setCart}=useContext(cartContext)

  const name =
    Product.name.length > 21
      ? Product.name.substring(0, 20) + "..."
      : Product.name;

    const addCart =()=>{
        setCart([...cart,Product])
    };
    const removeCart= ()=>{
        setCart(cart.filter(item=>item.id !== Product.id));
    };


  return (
    <div className="product">
      <div className="img">
        <img src={Product.pic} alt={Product.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>price Rs : ₹ {Product.amt}</p>
        {cart.includes(Product) ? (
          <button className="removeBtn" onClick={removeCart}>Remove From Cart</button>
        ) : (
          <button onClick={addCart} >Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default NewProduct;
