import React, { useContext } from 'react';
import { ApiDataContext } from '../Context/ApiDataContext';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi'

const TopProducts = () => {
    const { apiData } = useContext(ApiDataContext);
    const products = apiData.slice(15, 19);
    return (
        <div className='TopProductsWrapper'>
            <h2>Currated picks</h2>
            <div className='TopProducts'>
                {
                    products.map((product) => {
                        return (
                            <ProductCard product={product} key={product.id} />
                        )
                    })
                }
            </div>

            <div className='showMoreBtnWrap'>
                <Link className='showMoreBtnWrap' to='/products'>
                    <button className='showMoreBtn'>Show more</button>
                    <HiArrowNarrowRight className='showMoreBtnIcon' />
                </Link>
            </div>
        </div>
    )
}

export default TopProducts