import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/cart-slice';

const Card = ({item}) => {
const {cart} = useSelector(state => state);
const dispatch = useDispatch();

  function handleAddToCart(){
    dispatch(addToCart(item));

  }
  function removeCart(){
    dispatch(removeFromCart(item.id));
    
  }
   return (
    <div className='max-w-[250px]  border-2 border-black p-5 shadow-xl shadow-black rounded-2xl '>
      <div>
        <img className=' h-[180px] w-[230px] overflow-hidden'  src={item.image}/>
      </div>
      <div className='truncate text-slate-500 font-semibold mt-5'>
        {item.title}
      </div>
      <div className='flex justify-between mt-3'>
        <div className='font-bold'>${item.price}</div>
        <div className='text-red-500'>{item.rating.count} left!</div>
      </div>
      <button 
      onClick={
        
        cart.some((data)=>data.id === item.id) ? removeCart : handleAddToCart

      } className='bg-black text-white py-2 px-3 rounded-full w-full mt-5'>
      {
        cart.some((data)=> data.id  ===item.id) ?   "Remove from Cart" : "Add To Cart"
      }
      </button>
    </div>
  )
}

export default Card
