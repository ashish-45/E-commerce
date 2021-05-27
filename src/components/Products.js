import React, { useContext } from 'react';
import { productsContext } from './ProductContext';
import './Products.css';
import Banner from './Banner';
import { cartContext } from './CartContext';


const Products = () => {
    // const data = useContext(productsContext);
    const { products } = useContext(productsContext);
    //we use products because of distructionwe need all data which is came from  productcontext component
    const { dispatch } = useContext(cartContext);
    //we use dispatch because of distructionwe need all data which is came from  cartcontext component
    return (
        <div>
            <Banner />
            <h1>Feature Products</h1>
            <div className="products" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map((product) => (
                    <div class="card sm-shadow" style={{ width: '18rem' }} key={product.id}>
                        <img class="card-img-top" src={product.image} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="product-name">{product.name}</h5>
                            <p class="product-price">{product.price}</p>
                            <a href="#" class="btn btn-primary btn-block" onClick={() => dispatch({ type: 'ADD TO CART', id: product.id, product })} >Add to Cart</a>
                            {product.status === 'hot' ? <div className="hot">Hot</div> : ""}
                            {product.status === 'new' ? <div className="new">New</div> : ""}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Products
