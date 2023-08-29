import React, { useState, useEffect } from 'react';
import axios from 'axios';
const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
    const [categoriesData, setCategoriesData] = useState([])
    useEffect(() => {
        fetchcategoryData();
    }, []);

    const fetchcategoryData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/categories');
            setCategoriesData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const newCategoriesData = ["All", ...categoriesData]
    return (
        <>
            {
                categoriesData.length===0 ? "Loading..." :
                    <div className='CategoryFilter'>
                        {newCategoriesData.map((category) => (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category)}
                                style={{
                                    backgroundColor: selectedCategory === category ? '#FF3F6C' : 'transparent',
                                    color: selectedCategory === category ? 'white' : 'black',
                                    padding: '8px 16px',
                                    border: selectedCategory === category ?'2px solid #FF3F6C ': '2px solid whitesmoke',
                                    marginBottom:'10px',
                                    borderRadius:'4px',
                                    marginRight: '6px',
                                    cursor: 'pointer',
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
            }
        </>
    );
};

export default CategoryFilter;
