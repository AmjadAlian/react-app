import React from 'react'
import './Product.css';
import Products from './products.jsx'
export default function Product() {
    const products = [
        { id: 1, title: 'product one', desc: 'this is product one', price:1000 },
        { id: 2, title: 'product two', desc: 'this is product two', price:2000},
        { id: 3, title: 'product three', desc: 'this is product three' ,price:3000 },
    ];
    return (
        <>
            <div className='products mt-5'>
                <div className="container">
                    <div className="row">

                        {products.map((product) => {
                            return <Products {...product} key={product.id} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
                    }
