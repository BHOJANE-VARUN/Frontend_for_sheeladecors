// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';

// const Orders = () => {

// const{products, currency,}=useContext(ShopContext);

//   return (
//     <div className='border-t pt-16'>
//       <div className='text-2xl'>
//         <Title text1={'MY'} text2={'ORDERS'}/>
//       </div>
//       <div>
//         {
//           products.slice(1,4).amp((item,index)=>(
//             <div key={index} className='py-4 border-b text-gray-700 flex flex-col md:flex-row md:item-center md:justify-between gap-4'>
//                <div className='flex item-start gap-6 text-sm'>
//                 <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
//                </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Orders





// // import React, { useContext, useEffect } from 'react';
// // import { ShopContext } from '../context/ShopContext';
// // import Title from '../components/Title';

// // const Orders = () => {
// //   const { products = [], currency = '' } = useContext(ShopContext);

// //   // Log products to check the structure
// //   useEffect(() => {
// //     console.log(products);
// //   }, [products]);

// //   return (
// //     <div className='border-t pt-16'>
// //       <div className='text-2xl'>
// //         <Title text1={'MY'} text2={'ORDERS'} />
// //       </div>
// //       <div className='mt-4'>
// //         {products.length > 0 ? (
// //           products.map((product, index) => (
// //             <div key={index} className='p-4 border-b'>
// //               {/* Adjust property names if necessary based on the structure */}
// //               <h3 className='text-lg font-semibold'>{product.name || "Unnamed Product"}</h3>
// //               <p>Price: {currency} {product.price}</p>
// //               <p>Quantity: {product.quantity}</p>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No orders found.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Orders;



import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {
          products.slice(1, 4).map((item, index) => (  // Corrected .map() method here
            <div key={index} className='py-4 border-b text-gray-700 flex flex-col md:flex-row md:item-center md:justify-between gap-4'>
               <div className='flex item-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                <div>
                <p className='sm:text-base font-medium'>{item.name}</p> 
                <div className='flex item-center gap-3 mt-2 text-base text-gray-700'>
                   <p className='text-lg'>{currency}{item.proce}</p>
                   <p className=''>Quantity:1</p>
                   <p>size:</p>
                </div>
                <p className='mt-2'>Date: <span className='text-gray-400'>25,july,2024</span></p>
                </div>
               </div>
               <div className='md:1-1/2 flex justify-between'>
                <div className='flex item-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p>Ready to ship</p>
                </div>
               </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Orders;

