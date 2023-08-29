import React from 'react';
import {BiSearch} from 'react-icons/bi'

const SearchBar = ({ handleSearch }) => {

  return (
    <div className='SearchBar'>
      <input type="text" placeholder='search for products....'  onChange={handleSearch} />
      <BiSearch className='searchIcon'/>
    </div>
  );
};

export default SearchBar;
