import React, { useState, useContext } from 'react';
import Checkout from '../pages/checkout';
import { DataContext } from "../stores/DataContext";

function CartTotal() {
    
    const [isOpen, setIsOpen] = useState(false);
    const {quantity, data} = useContext(DataContext);
    
    let total = 0;
    data.map((index) => {
        total += index.price * quantity[index.id];
    })
    
    return (
        <div className='body'>
            <h2>Cart Totals</h2><hr/>
            <h4><span className='total'>Total</span><span className='amount'>{total}/-</span></h4>
            <button className='checkout' onClick={() => setIsOpen(true)}>PROCEED TO CHECKOUT</button>
            <Checkout open={isOpen} onClose={() => setIsOpen(false)}/>
            
            <style jsx>{`
                .body{
                    position: relative;
                    border: 1px solid rgba(0, 0, 0, .2);
                    padding: 20px;
                    width: 350px;
                    margin: auto;
                    margin-top: 50px;
                }
                h2{
                    margin-bottom: 15px;
                }
                h4{
                    display: flex;
                    justify-content: space-between;
                }
                .checkout{
                    background-color: tomato;
                    border: 1px solid transparent;
                    padding: 8px 30px;
                    margin: 10px;
                    border-radius: 20px;
                    color: white;
                    font-weight: 500;
                    cursor: pointer;
                }
                .amount{
                    color: tomato;
                }
                .checkout:hover{
                    background-color: transparent;
                    color: tomato;
                    border: 1px solid tomato;
                }
                @media (max-width: 450px) {
                    .body{
                        width: 300px;
                    }
                }
            `}</style>
        </div>
    );
}

export default CartTotal;