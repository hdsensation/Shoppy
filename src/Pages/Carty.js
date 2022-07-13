import React from "react";
import { Usecart, Dispatchcart } from '../Components/Cart';


const CartItem = ({ product, index, handleRemove, add, del }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <h3>Price :${product.price}</h3>
                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="button" className="btn btn-danger" onClick={() => del(product)}>-</button>
                            <button type="button" className="btn btn-warning" disabled>QTY :{product.qty}</button>
                            <button type="button" className="btn btn-success" onClick={() => add(product)}>+</button>
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger" onClick={() => handleRemove(index)}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default function Store() {
    const items = Usecart();
    const dispatch = Dispatchcart();
    const totalPrice = items.reduce((total, b) => total + b.price * b.qty, 0);

    const handleRemove = (index) => {
        dispatch({ type: "REMOVE", index });
    };

    const addtocart = (item) => {
        dispatch({ type: 'ADD', item })
        console.log(item)
    }

    const del = (item) => {
        dispatch({ type: 'DEL', item })
    }


    if (items.length === 0) {
        return (
            <main className="alert alert-dark" role="alert">
                <h4>Cart is empty</h4>
            </main>
        );
    }
    return (
        <main>
            <div className="alert alert-dark" role="alert">
            <h2>
                Total price:{" "}
                {totalPrice.toLocaleString("en", {
                    style: "currency",
                    currency: "USD"
                })}
            </h2>
            </div>
            {items.map((item, index) => (
                <CartItem
                    del={del}
                    add={addtocart}
                    handleRemove={handleRemove}
                    key={index}
                    product={item}
                    index={index}
                />
            ))}
        </main>
    );
}
