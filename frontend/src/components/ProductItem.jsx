
// import React from "react";
// import { Link } from "react-router-dom";
// import { useContext } from "react"; // Make sure to import useContext
// import { ShopContext } from "../context/ShopContext";

// const ProductItem = ({ id, image, name, price }) => {
//   const { currency } = useContext(ShopContext);

//   return (
//     <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
//       <div           
//         className="image-container"
//         style={{
//           width: "200px", // Set the width of the container
//           height: "200px", // Set the height of the container
//           overflow: "hidden", // Hide overflowed parts of the image
//         }}
//       >
//         <img
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover", // Ensures the image covers the container fully
//           }}
//           src={image[0]}
//           alt={name}
//         />
//       </div>
//       <p className="pt-3 pb-1 text-sm">{name}</p>
//       <p className="text-sm font-medium">
//         {currency}
//         {price}
//       </p>
//     </Link>
//   );
// };

// export default ProductItem;

import React, { useContext } from "react"; // Consolidate imports
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div
        className="overflow-hidden relative"
        style={{
          width: "200px", // Set the width of the container
          height: "200px", // Set the height of the container
        }}
      >
        <img
          className="transition-transform duration-300 transform hover:scale-105" // Adds zoom effect
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image covers the container fully
          }}
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;


