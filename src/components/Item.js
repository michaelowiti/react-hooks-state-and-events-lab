import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart,setIsInCart]=useState(false)


  function handleClickItem(){
    setIsInCart((isInCart)=>!isInCart)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClickItem} className={isInCart ? "remove" : "add"}>{isInCart ? "Remove from" :"Add to"} Cart</button>
    </li>
  );
}

export default Item;
