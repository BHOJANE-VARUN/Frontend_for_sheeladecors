// // import React, { useContext, useEffect } from 'react'
// // import { ShopContext } from '../context/ShopContext'

// // const Cart = () => {

// // const {products, currency, cartItems}=useContext(ShopContext);

// // const [cartData, setCartData]=useState([]);

// // useEffect(()=>{
// //    const tempData=[];
// //    for(const items in cartItems){
// //     for(const item in cartItems[items]){
// //       if(cartItems[items][item]>0){
// //         tempData.push({
// //           _id:items,
// //           quantity:cartItems[items][item]
// //         })
// //       }
// //     }
// //    }
// //    setCartData(tempData);
// // },[cartItems])

// //   return (
// //     <div className='border-t py-14'>
// //       <div className='text-2xl mb-3'>
// //         <Title text1={'YOUR'} text2={'CART'}/>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Cart


// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title'; // Assuming Title is a custom component in your project

// const Cart = () => {
//   const { products, currency, cartItems } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     const tempData = [];
//     for (const itemId in cartItems) {
//       if (cartItems[itemId] > 0) {
//         tempData.push({
//           _id: itemId,
//           quantity: cartItems[itemId],
//         });
//       }
//     }
//     setCartData(tempData);
//   }, [cartItems]);

//   return (
//     <div className='border-t py-14'>
//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'} />
//       </div>
//       <div>
//         {
//           cartData.map((item)=>{
//             const productData=products.find((product)=>product._id==item._id);
//             return(
//               <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//                   <div className='flex items-start gap-6'>
//                       <img className='w-16 sm:w-20' src={productData.image[0]}/>
//                       <div>
//                          <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                       </div>
//                   </div>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title'; 
// import bin from '../assets/bin.jpeg';
// import CartTotal from '../components/CartTotal';


// const Cart = () => {
//   const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     const tempData = [];
//     for (const itemId in cartItems) {
//       if (cartItems[itemId] > 0) {
//         tempData.push({
//           _id: itemId,
//           quantity: cartItems[itemId],
//         });
//       }
//     }
//     setCartData(tempData);
//   }, [cartItems]);

//   return (
//     <div className='border-t py-14'>
//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'} />
//       </div>
//       <div>
//         {cartData.map((item, index) => { // Added index here
//           const productData = products.find((product) => product._id === item._id);
//           return (
//             <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//               <div className='flex items-start gap-6'>
//                 <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
//                 <div>
//                   <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                   <div className='flex-item-center gap-5 mt-2'>
//                     <p>{currency}{productData.price}</p>
//                     <p>{productData.measurement}</p>
//                   </div>
//                 </div>
//               </div>
//               <input className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type='number' min={1} defaultValue={item.quantity}/>
//               <img onClick={()=>updateQuantity(item._id,0)} className='w-4 mr-4 sm:w-10 cursor-pointer' src={bin} alt=''/>
//             </div>
//           );
//         })}
//       </div>
//       <div className='flex justify-end my-20'>
//         <div className='w-full sm:w-[450px]'>
//           <CartTotal/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title'; 
import bin from '../assets/bin.jpeg';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity,navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        tempData.push({
          _id: itemId,
          quantity: cartItems[itemId],
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t py-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {cartData.map((item, index) => { // Using map's index as key
          const productData = products.find((product) => product._id === item._id);
          return (
            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex-item-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
                    <p>{productData.measurement}</p>
                  </div>
                </div>
              </div>
              <input
                className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                type='number'
                min={1}
                defaultValue={item.quantity}
                onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
              />
              <img
                onClick={() => updateQuantity(item._id, 0)}
                className='w-4 mr-4 sm:w-10 cursor-pointer'
                src={bin}
                alt=''
              />
            </div>
          );
        })}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
