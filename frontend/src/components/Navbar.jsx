
// import React, { useContext, useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import profile from '../assets/profile.jpeg';
// import search from '../assets/search.jpeg';
// import cart from '../assets/cart.jpeg';
// import menu from '../assets/menu.jpeg';
// import dropdown from '../assets/dropdown.jpeg';
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const { setShowSearch,getCartCount} = useContext(ShopContext); // Corrected destructuring here

//   return (
//     <div className='flex items-center justify-between py-6 px-4 md:px-10 font-medium relative bg-white shadow-md'>
//       {/* Left-aligned heading */}
//       <h1 className='text-2 md:text-3xl font-bold text-brown-700'>
//         SHEELA DECOR'S
//       </h1>

//       {/* Centered navigation */}
//       <ul className='hidden md:flex gap-6 lg:gap-8 text-sm lg:text-base text-gray-700 flex-1 justify-center'>
//         <NavLink to='/' className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}`}>
//           <p>HOME</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/collection' className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}`}>
//           <p>COLLECTION</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/about' className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}`}>
//           <p>ABOUT</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/contact' className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}`}>
//           <p>CONTACT US</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//       </ul>

//       {/* Right-aligned icons */}
//       <div className='flex items-center gap-4 md:gap-6'>
//         <img onClick={() => setShowSearch(true)} src={search} className='w-5 cursor-pointer' alt="Search Icon" />
//         <div className='group relative'>
//           <img className='w-10 md:w-20 cursor-pointer' src={profile} alt="Profile Icon" />
//           <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
//             <div className='flex flex-col gap-2 w-32 py-2 px-4 bg-blue-100 text-gray-500 rounded'>
//               <p className='cursor-pointer hover:text-black'>My Profile</p>
//               <p className='cursor-pointer hover:text-black'>Orders</p>
//               <p className='cursor-pointer hover:text-black'>Logout</p>
//             </div>
//           </div>
//         </div>
//         <Link to='/cart' className='relative'>
//           <img src={cart} className='w-8 md:w-10' alt="Cart Icon" />
//           <p className='absolute right-[-5px] bottom-[-5px] w-4 h-4 text-center leading-4 bg-red-500 text-white rounded-full'>{getCartCount}</p>
//         </Link>
//         <img
//           onClick={() => setVisible(true)}
//           src={menu}
//           className='w-6 cursor-pointer sm:hidden'
//           alt="Menu Icon"
//         />
//       </div>

//       {/* Sidebar menu for small screens */}
//       {visible && (
//         <div className='absolute top-0 right-0 bottom-0 bg-white transition-all w-full md:w-64 p-4 shadow-lg'>
//           <div className='flex flex-col text-gray-600'>
//             <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
//               <img className='h-4 rotate-180' src={dropdown} alt="Back Icon" />
//               <p>Back</p>
//             </div>
//             <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/'>Home</NavLink>
//             <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/collection'>Collection</NavLink>
//             <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/about'>About</NavLink>
//             <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/contact'>Contact us</NavLink>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;




import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import profile from '../assets/profile.jpeg';
import search from '../assets/search.jpeg';
import cart from '../assets/cart.jpeg';
import menu from '../assets/menu.jpeg';
import dropdown from '../assets/dropdown.jpeg';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext); // Corrected destructuring here

  return (
    <div className='flex items-center justify-between py-6 px-4 md:px-10 font-medium relative bg-white shadow-md'>
      {/* Left-aligned heading */}
      <h1 className='text-2 md:text-3xl font-bold text-brown-700'>
        SHEELA DECOR'S
      </h1>

      {/* Centered navigation */}
      <ul className='hidden md:flex gap-6 lg:gap-8 text-sm lg:text-base text-gray-700 flex-1 justify-center'>
        <NavLink to='/' className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}`}>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}`}>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}`}>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-blue-500 font-bold' : 'text-gray-700'}`}>
          <p>CONTACT US</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      {/* Right-aligned icons */}
      <div className='flex items-center gap-4 md:gap-6'>
        <img onClick={() => setShowSearch(true)} src={search} className='w-5 cursor-pointer' alt="Search Icon" />
        <div className='group relative'>
          <Link to='/login'><img className='w-10 md:w-20 cursor-pointer' src={profile} alt="Profile Icon" /></Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-32 py-2 px-4 bg-blue-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={cart} className='w-8 md:w-10' alt="Cart Icon" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 h-4 text-center leading-4 bg-red-500 text-white rounded-full'>{getCartCount()}</p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={menu}
          className='w-6 cursor-pointer sm:hidden'
          alt="Menu Icon"
        />
      </div>

      {/* Sidebar menu for small screens */}
      {visible && (
        <div className='absolute top-0 right-0 bottom-0 bg-white transition-all w-full md:w-64 p-4 shadow-lg'>
          <div className='flex flex-col text-gray-600'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img className='h-4 rotate-180' src={dropdown} alt="Back Icon" />
              <p>Back</p>
            </div>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/'>Home</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/collection'>Collection</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/about'>About</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b border-gray-200' to='/contact'>Contact us</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
