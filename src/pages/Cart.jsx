import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem  from "../Components/CartItem"
import { useEffect, useState } from "react";

const Cart = () => {
  const [totalAmount,setTotalAmount]=useState(0);
  const {cart} = useSelector((state)=>state);

  // set the amount whenever there is changed in cart
  useEffect(()=>{
    setTotalAmount(
      // reduce function to calculate total amount
      cart.reduce((acc,curr)=>acc+curr.price,0)
    );
  },[cart])
  return(
     <div>
{
  cart.length > 0 ? 
(  <div className="flex max-w-4xl  gap-12 justify-center p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">

  {/* left part of cart */}
      <div className=" flex flex-col justify-center w-4/6 ">
        {
          cart.map((item,index)=>(
          <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
          ))
        }
      </div>


      {/* right part of cart */}
      <div className=" w-full ">

{/* items summary */}

<div className=" h-1/3 flex justify-between flex-col">

        <div className="">
        <h2 className="text-green-600 font-semibold ">Your Cart </h2>
        <h1 className="text-green-600 font-bold text-5xl">Summary</h1>
        <p>
          <span>Total Items </span> {cart.length}
        </p>
        </div>

        {/* price summary */}
        <div className="mt-12 ">
          <p>Total amount :  <span className="font-semibold">{totalAmount}</span></p>
          <button className="text-white border-2  rounded-md font-semibold text-[12px] p-1 px-3 uppercase bg-green-600 w-full h-12 mt-4">
            Check out
          </button>
        </div>


        </div>
      </div>
  </div>)
  :
  
  (  <div className="flex flex-col justify-center items-center mt-60" >
      <h1 className="border-b-2">Cart is Empty</h1>
      <Link to='/'>
        <button className="text-white border-2  rounded-md font-semibold text-[12px] p-1 px-3 uppercase bg-green-600 w-full h-12 mt-4">Shop Now</button>
      </Link>
    </div>)
  
}
     </div>)
};

export default Cart;
