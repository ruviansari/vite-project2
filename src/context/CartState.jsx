import React from "react";
import CartContext from "./CartContext";
import { useState } from "react";
const CartState = (props) => {
  const [cartArr, setCartArr] = useState([]);

  const [searchValue, setsearchValue] = useState("");

  let handleAddToCart = (ans) => {
    console.log(ans);
    ans.quantity = 1;
    let find = cartArr.find((item) => item.id === ans.id);
    if (find) {
      alert("item already added");
    } else {
      setCartArr([...cartArr, ans]);
    }
  };

  function updateItem(obj, i) {
    console.log(obj);
    console.log(i);
    let updatedobj = {
      ...obj,
      quantity: obj.quantity + 1,
      price: obj.price + obj.price / obj.quantity,
    };
    console.log(updatedobj);

    let updatedArr = [...cartArr];
    updatedArr[i] = updatedobj;
    setCartArr(updatedArr);
  }

  function updateDecrement(obj, i) {
    console.log(obj);
    console.log(i);
    let updatedobj = {
      ...obj,
      quantity: obj.quantity - 1,
      price: obj.price - obj.price / obj.quantity,
    };
    if (updatedobj.quantity < 1) {
      return;
    }
    console.log(updatedobj);
    let updatedArr = [...cartArr];
    updatedArr[i] = updatedobj;
    setCartArr(updatedArr);
  }

  function remove(ans, i) {
    console.log(ans);
    console.log(i);
    let copyArr = [...cartArr];
    copyArr.splice(i, 1);
    console.log(copyArr);
    setCartArr(copyArr);
  }

  return (
    <CartContext.Provider
      value={{
        cartArr,
        handleAddToCart,
        remove,
        updateItem,
        updateDecrement,
        searchValue,
        setsearchValue,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
