import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import cross from '../assets/cross.jpeg';
import searchIcon from '../assets/search.jpeg';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  return showSearch ? (
    <div className="border-t border-b bg-gray-100 py-4 px-4 text-center">
      <div className="flex items-center justify-center relative max-w-lg mx-auto bg-white border border-gray-300 rounded-full shadow-sm px-4 py-2">
        <img className="w-5 h-5 mr-3" src={searchIcon} alt="Search icon" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow outline-none bg-inherit text-sm text-gray-800"
          type="text"
          placeholder="Search for products..."
        />
        <img
          onClick={() => setShowSearch(false)}
          className="w-4 h-4 ml-3 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          src={cross}
          alt="Close icon"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
