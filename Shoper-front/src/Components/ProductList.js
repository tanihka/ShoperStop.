import React, { useContext, useState } from 'react';
import ProductCard from './ProductCard'
import { ApiDataContext } from '../Context/ApiDataContext';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { apiData } = useContext(ApiDataContext);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = apiData.filter((product) => {
    const categoryMatch =
      selectedCategory === 'All' || product.category === selectedCategory;
    const searchMatch =
      searchTerm.trim() === '' ||
      product.title.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });


  return (
    <>
    <SearchBar handleSearch={handleSearch}/>
      <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <div className='ProductList'>

        {
          filteredProducts.length===0 ? 'No Products Found' :
          <>
          {
            filteredProducts.map((product) => {
              return (
                <ProductCard product={product} key={product.id} />
              )
            })
          }
          </>
        }
      </div>
    </>
  )
}

export default ProductList