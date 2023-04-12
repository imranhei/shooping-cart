import React, { useContext } from 'react';
import { DataContext } from "../stores/DataContext";
import Link from 'next/link';

function SelectedItem(props) {

    const {quantity, handleQuantity} = useContext(DataContext);
    const atLeast = quantity[props.item.id]===1 ? 'disabled' : '';
    const atMost = (quantity[props.item.id]===5 || props.item.quantity===quantity[props.item.id]) ? 'disabled' : '';
    
    return (
        <>
            <div className='body'>
                <div className='product'>
                    <img src={`/${props.item.image}`}/>
                    <Link href={`/product/${props.item.id}`}><a>{`${props.item.productName}`}</a></Link>
                </div>
                <h4 className='subtitle'>{`${props.item.price}/-`}</h4>
                <div className='subtitle quantity'>
                    <div className='holder'>
                        <button onClick={() => handleQuantity(-1, props.item.id)} className='decrement' disabled={`${atLeast}`}>--</button>
                        <span className='items'>{`${quantity[props.item.id]}`}</span>
                        <button onClick={() => handleQuantity(1, props.item.id)} className='increment' disabled={atMost}>+</button>
                    </div>
                </div>
                <h4 className='subtitle'>{props.item.price * quantity[props.item.id]}</h4>
                <button className='delete' onClick={() => handleQuantity(0, props.item.id)}>x</button>
            </div><hr/>

            <div className="media">
                <div className="body-2">
                    <img src={`/${props.item.image}`}/>
                    <Link href={`/product/${props.item.id}`}><a>{`${props.item.productName}`}</a></Link>
                    <h4>{`Price: ${props.item.price}/-`}</h4>
                    <div className='holder'>
                        <button onClick={() => handleQuantity(-1, props.item.id)} className='decrement' disabled={`${atLeast}`}>--</button>
                        <span className='items'>{`${quantity[props.item.id]}`}</span>
                        <button onClick={() => handleQuantity(1, props.item.id)} className='increment' disabled={atMost}>+</button>
                    </div>
                    <h4>{`Subtotal: ${props.item.price * quantity[props.item.id]}`}</h4>
                    <button className='delete' onClick={() => handleQuantity(0, props.item.id)}>x</button>
                </div>
            </div>
            <style jsx>{`
                .body{
                    display: flex;
                    align-items: center;
                }
                .product{
                    width: 49%;
                    display: flex;
                    align-items: center;
                }
                img{
                    height: 100px;
                    width: 100px;
                }
                h4{
                    font-weight: 500;
                }
                .product>a{
                    margin-left: 15px;
                    text-align: left;
                    font-weight: 500;
                }
                .subtitle{
                    width: 16%;
                }
                .quantity{
                    display:flex;
                    justify-content: center;
                }
                .holder{
                    display:flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 70px;
                    height: 28px;
                    border: 1px solid black;
                    border-radius: 8px;
                    font-weight: 500;
                }
                .items{
                    width: 25px;
                    border-left: 1px solid rgba(0, 0, 0, .4);
                    border-right: 1px solid rgba(0, 0, 0, .4);
                }
                button{
                    border: 0;
                    font-size: 1.2rem;
                    background-color: transparent;
                    cursor: pointer;
                    border-radius: 10px;
                }
                .decrement{
                    letter-spacing: -3px;
                }
                hr{
                    border-top: 1px solid  rgba(0, 0, 0, .2);
                }
                a:hover{
                    color: tomato;
                }
                .delete{
                    color: white;
                    padding: 1.5px 8px;
                    border-radius: 50%;
                    background-color: tomato;
                    border: 1px solid tomato;
                }
                .delete:hover{
                    color: tomato;
                    background-color: transparent;
                    border: 1px solid tomato;
                }
                .increment:active, .decrement:active{
                    color: tomato;
                }
                .media{
                    display: none;
                }
                @media (max-width: 700px) {
                    .body{
                        display: none;
                    }
                    .media{
                        display: inline;
                    }
                    .body-2{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin: auto;
                        width: 300px;
                        border: 1px solid rgba(0, 0, 0, .2);
                        padding: 10px 10px 20px;
                    }
                    .body-2 > img{
                        height: 200px;
                        width: 200px;
                        margin-bottom: 15px;
                    }
                    .body-2 > h4{
                        margin: 10px 0;
                    }
                }
                
            `}</style>
        </>
    );
}

export default SelectedItem;