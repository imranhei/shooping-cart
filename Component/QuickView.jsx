import Link from 'next/link';
import { useContext } from "react";
import { DataContext } from "../stores/DataContext";

function QuickView(props) {

    if(!props.open) return null;
    const {quantity, handleQuantity} = useContext(DataContext);
    const disable = props.data.quantity === 0 ? 'disabled' : '';

    return (
        <div className='background'>
            <div className="body">
                <p className='close' onClick={props.onClose}>x</p>
                <div className='top'>
                    <img src={`${props.data.image}`}/>
                    <div className='text'>
                        <p>{`${props.data.productName}`}</p>
                        <p>{`Price: ${props.data.price}/-`}</p>
                        <p>{props.data.quantity === 0 ? <span id='out-stock'>Out-of-stock</span> : <span id='in-stock'>Available</span>}
                        <span className='onstock'>({`${props.data.quantity}`})</span></p>
                    </div>
                </div>
                <div className='link'>
                    <Link href={{pathname:`/product/`, query: {id: props.data.id}, }}><a className="detail">Details</a></Link>
                    {/* <Link href={`/product/${props.data.id}`}><a className="detail">Details</a></Link> */}
                    {quantity[props.data.id]===0 ? <button className="cart" disabled={`${disable}`} onClick={() => handleQuantity(1, props.data.id)}>Add To Cart</button> :
                    <button className="cart" onClick={() => handleQuantity(0, props.data.id)}>Remove From Cart</button>}  
                </div>
            </div>

            <style jsx>{`
                .background{
                    position: fixed;
                    top: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.3);
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index:2;
                }
                .body{
                    position: relative;
                    background-color: white;
                    border-radius: 10px;
                    border: 1px solid tomato;
                    padding: 4%;
                    margin: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .close{
                    font-size: 1.6rem;
                    position: absolute;
                    right: 30px;
                    top: 0px;
                    cursor: pointer;
                    color: red;
                }
                .top{                    
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                img{
                    height: 250px;
                    width: 250px;
                    margin: 20px;
                }
                .text{
                    width: 300px;
                    padding-top: 0px;
                    font-weight: 500;
                }
                #in-stock{
                    color: green;
                }
                #out-stock{
                    color: red;
                }
                .onstock{
                    margin-left: 5px;
                    color: rgba(0, 0, 0, .4);
                }
                .link{
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .detail, .cart{
                    height: 30px;
                    width: 150px;
                    border: 1px solid transparent;
                    margin: 10px;
                    background-color: tomato;
                    color: white;
                    border-radius: 2px;
                    text-align: center;
                }
                .cart{
                    font-size: .9rem;
                }
                .detail:hover, .cart:hover{
                    color: tomato;
                    background-color: transparent;
                    border: 1px solid tomato;
                    cursor: pointer;
                }
                @media (max-width: 400px) {
                    .body{
                        width: 300px;
                    }
                    .text{
                        width: 250px;
                    }
                }
            `}
            </style>
        </div>
    );
}

export default QuickView;