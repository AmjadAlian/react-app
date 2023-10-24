import React from 'react'

export default function products(props) {
    return (
        <>
            <div className="col-md-4 mt-3">
                <div className="product">
                    <h2>
                        {props.title}
                    </h2>
                    <p>{props.desc}</p>
                    <span> {props.price} </span>
                </div>

            </div>
        </>

    )
}
