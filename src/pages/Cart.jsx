import React, { useContext } from "react";
import CartContext from '../context/CartContext'

const Cart = () => {

// let arr=[]
let ctx = useContext(CartContext)
console.log(ctx.cartArr)
// arr.push = ctx.cartArr

let arr = ctx.cartArr
console.log(arr)


// let sum = 0;
// arr.forEach((ele)=>{

// })
// console.log(sum)


  // console.log(props.cartArr); //[ {},{}]

  // let sum = 0;
  // props.cartArr.forEach((ele) => {
  //   sum = sum + ele.price;
  // });
  // console.log(sum);

  // const handleIncrement = (ele) => console.log(ele);

  // let updatedobj = {
  //   ...ele,
  //   quantity: ele.quantity + 1,
  //   price: ele.price + ele.price / ele.quantity,
  // };

  // console.log(updatedobj);

  // let copyArr = [...props.cartArr]; //[{},{},{}]

  // props.setcartArr(updatedobj);

  
  //   const handleDelete = (ele, index) => {
  //     console.log(ele)
  //     console.log(index)
  //     let filterdArr = props.cartArr.filter((obj)=>obj.id != ele.id )
  //   console.log(filterdArr)
  //   props.setcartArr(filterdArr)
  // }


return (
  <div>
    {arr.length>0 &&
        <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-center rtl:text-right text-black-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>

          <th scope="col" className="px-6 py-3">
             So no
            </th>

            <th scope="col" className="px-6 py-3">
              Product
            </th>

            <th scope="col" className="px-6 py-3">
              title
            </th>

            <th scope="col" className="px-6 py-3">
              Price
            </th>

            <th scope="col" className="px-6 py-3">
              Quantity
            </th>

            <th scope="col" className="px-6 py-3">
             Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {
 arr.map((ele, index)=>{
  return(
    <tr  key={ele.id} className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap dark:text-white"
    >
      {index + 1}
    </th>
    <td className="px-6 py-4 flex justify-center aline-items-center">
      <img src={ele.thumbnail} className="w-36 h-36" alt="" />
    </td>
    <td className="px-6 py-4  text-gray-100">{ele.title}</td>
    <td className="px-6 py-4  text-gray-100">${ele.price.toFixed(2)}</td>
    <td className="px-6 py-4  text-gray-100">
      <button
        className="bg-green-500 px-2 py-1 rounded-sm  text-gray-100"
        onClick={() =>ctx.updateItem(ele, index)}
      >
        +
      </button>
      {ele.quantity}{" "}
      <button
        className="bg-gray-700 px-2 py-1 rounded-sm  text-gray-100"
        onClick={() =>ctx.updateDecrement(ele, index)}
       >
        -
      </button>
    </td>
    <td className="px-6 py-4">
      <button
        className="bg-red-500 px-2 py-1 text-white rounded-sm hover:bg-red-400 "
        onClick={() =>
          (ctx.remove(ele,index))
        }
      >
        Delete
      </button>
    </td>
           </tr>

  )

 })

          }
        </tbody>
      </table>
      {/* <h1 className="text-center my-3 text-3xl">Total = ${sum.toFixed(2)}</h1> */}
    </div>
}
{arr.length ===0 && <h1 className="text-center text-4x mt-28">please add sonme item in the cart</h1>}

  </div>
)
  }
export default Cart
  