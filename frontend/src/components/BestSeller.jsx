// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';

// const BestSeller = () => {

// const {products} = useContext(ShopContext);
// const [BestSeller,setBestSeller]=useState([]);

// useEffect(
//     ()=>{
//         const bestProduct= products.filter((item)=>(item.bestseller))
//         setBestSeller(bestProduct.slice(0,5))
//     },[]
// )

//   return (
//     <div className='my-10'>
//       <div className='text-center text-3xl py-8'>
//         <Title text1={'BEST'} text2={'SELLERs'}/>
//         <p className='w-3/4 m-auto text-xs sm:text-sm md:tet-base text-gray-800'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit magnam explicabo et tempore quaerat, quidem recusandae veniam quis dolor neque, reiciendis itaque. Aspernatur quisquam animi harum distinctio nemo repudiandae.
//         </p>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
//         {BestSeller.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item._id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default BestSeller



import React, { useContext, useState, useEffect } from "react"; 
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem"; 

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [BestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]); // Added products as a dependency

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8 prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-800">
        "Discover our top picks that combine elegance and quality, perfect for enhancing your home décor."
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {BestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

