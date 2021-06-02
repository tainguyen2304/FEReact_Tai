import React from 'react';

function Product(props) {
    const { product,onAdd } = props; 
    return (
        <div className='col-1'>
            <img className='small' src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={() => onAdd(product)}> Add To Cart </button>
            </div>
        </div>
    )
}
export default Product;
