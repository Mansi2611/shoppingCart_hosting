import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {remove,add} from '../redux/Slices/CartSlice'


const Product = ({post}) => {
  const dispatch = useDispatch();

  const addToCart=()=>{
    dispatch(add(post));
   toast.success("added to cart");
  }
  const removeFromCart=()=>{
    dispatch(remove(post.id));
   toast.error("Removed from cart");
  //  toast.error("Removed from cart");
  }
  const {cart }= useSelector((state)=>state)
  return (
    <div className="flex flex-col  items-center justify-between
     hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl  border-2  drop-shadow-xl ">
      <div className="text-grey-700 font-semibold text-lg text-left truncate w-40 mt-1">
        <p>{post.title.split(" ").slice(0,2).join(" ")+ "..."}</p>
      </div>
      <div>
      <p>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full" alt="product"></img>
      </div>


      <div className="flex justify-between gap-12 item-center w-full mt-5">

      <div className="text-green-600 font-semibold ">
      <p>{post.price}</p>
      </div>

      <div>
        <button className="text-grey-700  border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase 
        hover:bg-gray-700 
        hover:text-white transition duration-300 ease-in
        ">
          {
            cart.some((p)=>(p.id === post.id)) ?
             <button onClick={removeFromCart}>
              Remove Item
            </button> :
              <button onClick={addToCart}>Add to cart</button>
            
          }
        </button>
      </div>

      </div>
    </div>
  )
};

export default Product;
