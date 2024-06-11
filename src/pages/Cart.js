import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cart} = useSelector(state => state);
    
    const[total , setTotal] = useState(0);
    

    useEffect(()=>{
     setTotal(cart.reduce((acc, curr)=> acc + curr.price , 0))
    },[cart])
  return (

    <div className='flex justify-between h-[76vh] '>
    <div className=' h-[76vh]  flex justify-center items-center flex-wrap gap-20 mt-20 mx-10 w-[50vw] overflow-scroll'>
      {
        cart && cart.length ? cart.map((item)=><Card item={item}/>):
        <div className=' w-full flex justify-center items-center '>
         <div className=' flex justify-center items-center flex-col '>
            <p className='font-bold text-3xl'>No Items in card!</p>
            <Link to={'/'}>
                <button className='bg-black mt-7 text-white px-4 py-3 rounded-full'>Shop Now</button>
            </Link>
         </div>
        </div>
      }
      
    </div>

    <div className='w-[50vw] mt-20 '>
    <p className='text-4xl font-semibold'>Your Cart Summary :</p>
    <p className='text-3xl font-semibold mt-3'>Total Items :{cart.length}</p>
    <p className='text-3xl font-semibold mt-3'>Total Price :${total}</p>


    </div>
    </div>
  )
}

export default Cart
