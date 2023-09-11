import {MdDelete} from 'react-icons/md' 
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import {remove} from '../redux/Slices/CartSlice'


const CartItem = ({item}) => {

  const dispatch = useDispatch();
function removeFromCart(){
dispatch(remove(item.id));
toast.error("removed from the cart");
}

  return (


    <div >
<div className='flex mt-5 w-full items-center gap-x-10  border-b-2 border-gray-500 hover:scale-110 transition duration-300 ease-in gap-5 p-4 mt-10 ml-5 mr-5' >
  <div className="w-1/3">
    <img src={item.image} alt='product' className='h-full w-full'></img>
  </div>

  <div className='flex flex-col w-2/3 gap-6 '>
    <h1  className="text-grey-700 font-semibold text-lg text-left truncate mt-1">{item.title}</h1>
    <h1 className='w-80 mt-1'>{item.description.split(" ").slice(0,20).join(" ")+"..."}</h1>

    <div className='flex  justify-between p-[20px]'>
      <p className="text-green-600 font-semibold ">{item.price}</p>
      <div className='bg-red-300 rounded-full w-[40px] h-[40px] flex items-center justify-center'  onClick={removeFromCart}>
      <MdDelete className="text-2xl " ></MdDelete>
      </div>
     
    </div>
  </div>

</div>
    </div>
  )
};

export default CartItem;
