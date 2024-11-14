// import React, { useContext, useState, useEffect } from 'react'; // Added useEffect
// import { ShopContext } from '../context/ShopContext';
// import dropdown from '../assets/dropdown.jpeg';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem'; // Ensure this is correctly imported

// const Collection = () => {
//   const {products,search, showSearch}=useContext(ShowContext);
//   const { products } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [subCategory, setSubCategory] = useState([]);
//   const[sortType,setSortType]=useState('relevant')

//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory((prev) => prev.filter((item) => item !== e.target.value));
//     } else {
//       setCategory((prev) => [...prev, e.target.value]);
//     }
//   };

//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
//     } else {
//       setSubCategory((prev) => [...prev, e.target.value]);
//     }
//   };

//   const applyFilter = () => {
//     let productsCopy = products.slice();
//     if(showSearch && search){
//       productsCopy=productsCopy.filter(item=>item.name.tpLowerCase().includes(search.toLowerCase()))
//     }
    
//     // Fix typo in category.length
//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item => category.includes(item.category));
//     }

//     // Optionally, add subCategory filtering here if needed
//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
//     }
//     if(subCategory.length>0){
//        productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory))
//     }

//     setFilterProducts(productsCopy);
//   };

//   const sortProduct=()=>{
//     let fpCopy = filterProducts.slice();
//     switch(sortType){
//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
//         break;

//         case 'high-low':
//           setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
//           break;

//           default:
//             applyFilter();
//             break;
//     }
//   }

//   useEffect(() => {
//     applyFilter();
//   }, [category, subCategory, products,search,showSearch]); 

//   useEffect(()=>{
// sortProduct();
//   },[sortType])

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
//       {/* Filter Options */}
//       <div className='min-w-60'>
//         <p
//           className='my-2 text-xl flex items-center cursor-pointer gap-2'
//           onClick={() => setShowFilter(!showFilter)}
//         >
//           FILTERS <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={dropdown} alt="" />
//         </p>
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value="Sofa" onChange={toggleCategory} /> Sofa
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value="Chairs" onChange={toggleCategory} /> Chairs
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value="Curtains" onChange={toggleCategory} /> Curtains
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value="Rugs" onChange={toggleCategory} /> Rugs
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value="Wallpaper" onChange={toggleCategory} /> Wallpaper
//             </p>
//           </div>
//         </div>
//         {/* Subcategories */}
//         <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>TYPE OF SOFAS</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value="Sectional sofas" onChange={toggleSubCategory}/> Sectional sofas
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value="Camelback sofas" onChange={toggleSubCategory}/> Camelback sofas
//             </p>
            
            
//             <p className='mb-3 text-sm font-medium'>TYPE OF CURTAINS</p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value="Wave Fold curtains" onChange={toggleSubCategory}/> Wave Fold curtains
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value="Single Panel Curtains" onChange={toggleSubCategory}/> Single Panel Curtains
//             </p>
//             <p className='mb-3 text-sm font-medium'>TYPE OF WALLPAPERS</p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value="Floral Wallpaper" onChange={toggleSubCategory}/> Floral Wallpaper
//             </p>
//             <p className='flex gap-2'>
//               <input className='w-3' type="checkbox" value="3D Wallpaper" onChange={toggleSubCategory}/> 3D Wallpaper
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className='flex-1'>
//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//           <Title text1="ALL" text2="COLLECTION" />
//           {/* Sort */}
//           <select onChange={(e)=>setSortType(e.currentTarget.value)} className='border border-gray-300 text-sm px-2'>
//             <option value="relavent">Sort by Relevant</option>
//             <option value="low-high">Sort by Low to High</option>
//             <option value="high-low">Sort by High to Low</option>
//           </select>
//         </div>
//         {/* Map Products */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//           {filterProducts.map((item) => (
//             <ProductItem
//               key={item._id}
//               name={item.name}
//               id={item._id}
//               price={item.price}
//               image={item.image}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collection;


import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import dropdown from '../assets/dropdown.jpeg';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={dropdown} alt="" />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Sofa" onChange={toggleCategory} /> Sofa
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Chairs" onChange={toggleCategory} /> Chairs
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Curtains" onChange={toggleCategory} /> Curtains
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Rugs" onChange={toggleCategory} /> Rugs
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Wallpaper" onChange={toggleCategory} /> Wallpaper
            </p>
          </div>
        </div>
        {/* Subcategories */}
        <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE OF SOFAS</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Sectional sofas" onChange={toggleSubCategory}/> Sectional sofas
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Camelback sofas" onChange={toggleSubCategory}/> Camelback sofas
            </p>
            
            
            <p className='mb-3 text-sm font-medium'>TYPE OF CURTAINS</p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Wave Fold curtains" onChange={toggleSubCategory}/> Wave Fold curtains
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Single Panel Curtains" onChange={toggleSubCategory}/> Single Panel Curtains
            </p>
            <p className='mb-3 text-sm font-medium'>TYPE OF WALLPAPERS</p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Floral Wallpaper" onChange={toggleSubCategory}/> Floral Wallpaper
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="3D Wallpaper" onChange={toggleSubCategory}/> 3D Wallpaper
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1="ALL" text2="COLLECTION" />
          {/* Sort */}
          <select onChange={(e) => setSortType(e.currentTarget.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by Relevant</option>
            <option value="low-high">Sort by Low to High</option>
            <option value="high-low">Sort by High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

