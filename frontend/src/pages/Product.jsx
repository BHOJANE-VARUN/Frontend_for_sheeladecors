
// import React, { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext"; 
// import star from '../assets/star.jpeg';
// import dstar from '../assets/dstar.jpeg';

// const Product = () => {
//   const { productID } = useParams();  
//   const { products, currency, addToCart } = useContext(ShopContext);  
//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   useEffect(() => {
//     console.log("Product ID:", productID);

//     if (!productID) {
//       console.error("Error: productID is undefined or null");
//       return;
//     }

//     const foundProduct = products.find(product => product._id === productID);

//     if (foundProduct) {
//       setProductData(foundProduct);  // Set product data
//       setImage(foundProduct.image[0]);  // Set the first image
//     } else {
//       console.error(`Error: Product with ID ${productID} not found.`);
//     }
//   }, [productID, products]);  // Trigger re-fetch if productID or products change

//   if (!productData) {
//     return <div>Loading...</div>;  // Show a loading message while product data is being fetched
//   }

//   return (
//     <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center py-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
//       {/* Image on the Left */}
//       <img 
//         src={image} 
//         alt={productData.name} 
//         className="sm:w-[400px] sm:h-[400px] object-contain mb-6 sm:mr-8" 
//       />
      
//       <div className="sm:w-[50%] text-center sm:text-left">
//         <h1 className="text-2xl font-semibold mb-4">{productData.name}</h1>
        
//         <div className="flex items-center space-x-1 mb-4">
//           <img src={star} alt="star" className="w-5 h-5" />
//           <img src={star} alt="star" className="w-5 h-5" />
//           <img src={star} alt="star" className="w-5 h-5" />
//           <img src={star} alt="star" className="w-5 h-5" />
//           <img src={dstar} alt="dimmed star" className="w-3 h-3" />
//           <p className="pl-2">(123)</p>
//         </div>
//         <p className="text-xl font-bold">{currency}{productData.price}</p>
//         <p className="text-lg mb-4">{productData.description}</p>      
//         <p className="text-lg mb-4">{productData.measurement}</p>      
//         <p className="text-lg mb-4">{productData.bestseller}</p>      

//         <button onClick={() => addToCart(productData._id)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
//         <hr className="mt-8 sm:w-4/5"/>
//         <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
//             <p>100% Original Product</p>
//             <p>Cash on delivery available on this product</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;




import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext"; 
import star from '../assets/star.jpeg';
import dstar from '../assets/dstar.jpeg';

const Product = () => {
  const { productID } = useParams();  
  const { products, currency, addToCart } = useContext(ShopContext);  
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  useEffect(() => {
    console.log("Product ID:", productID);

    if (!productID) {
      console.error("Error: productID is undefined or null");
      return;
    }

    const foundProduct = products.find(product => product._id === productID);

    if (foundProduct) {
      setProductData(foundProduct);  // Set product data
      setImage(foundProduct.image[0]);  // Set the first image
    } else {
      console.error(`Error: Product with ID ${productID} not found.`);
    }
  }, [productID, products]);

  if (!productData) {
    return <div>Loading...</div>;  // Show a loading message while product data is being fetched
  }

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center py-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Image on the Left */}
      <img 
        src={image} 
        alt={productData.name} 
        className="sm:w-[400px] sm:h-[400px] object-contain mb-6 sm:mr-8" 
      />
      
      <div className="sm:w-[50%] text-center sm:text-left">
        <h1 className="text-2xl font-semibold mb-4">{productData.name}</h1>
        
        <div className="flex items-center space-x-1 mb-4">
          <img src={star} alt="star" className="w-5 h-5" />
          <img src={star} alt="star" className="w-5 h-5" />
          <img src={star} alt="star" className="w-5 h-5" />
          <img src={star} alt="star" className="w-5 h-5" />
          <img src={dstar} alt="dimmed star" className="w-3 h-3" />
          <p className="pl-2">(123)</p>
        </div>
        <p className="text-xl font-bold">{currency}{productData.price}</p>
        <p className="text-lg mb-4">{productData.description}</p>      
        <p className="text-lg mb-4">{productData.measurement}</p>      
        <p className="text-lg mb-4">{productData.bestseller}</p>      

        <button onClick={() => addToCart(productData._id)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
        <hr className="mt-8 sm:w-4/5"/>
        <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery available on this product</p>
            <p>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
