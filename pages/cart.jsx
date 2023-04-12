import { useContext } from "react";
import { DataContext } from "../stores/DataContext";
import SelectedItem from '../Component/SelectedItem'
import Head from 'next/head'
import CartTotal from "../Component/CartTotal";

function Cart() {

    const {items, cart} = useContext(DataContext)

    return (
        <>
            <Head>
                <title>Hei&apos;s Shop | Cart</title>
            </Head>
            {items===0 ? 
            <div className="body">
                <   h2 className="no-item">Opps... you didn&apos;t select any items.</h2>
                <style jsx>{`
                    .body{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .no-item{
                        margin-top: 30vh;
                        color: rgb(0, 0, 0, .4);
                        text-align: center;
                    }
                `}</style>
            </div> :
            <div className="body">
                <div className="content">
                    <div className="title">
                        <h4 className="product">Product</h4>
                        <h4 className="sub-titles">Price</h4>
                        <h4 className="sub-titles">Quantity</h4>
                        <h4 className="sub-titles">Subtotal</h4>
                    </div>
                    <hr/>
                </div>
                {
                    cart.map((info) => (
                        <SelectedItem key={info.id} item={info}/>
                    ))
                }
                <CartTotal/>

                <style jsx>{`
                    .body{
                        margin: 5% 10%;
                        text-align: center;
                    }
                    button{
                        font-size: 1.1rem;
                        height: 30px;
                        width: 150px;
                        border: 1px solid transparent;
                        margin: 10px;
                        background-color: tomato;
                        color: white;
                        border-radius: 2px;
                    }
                    button:hover{
                        color: tomato;
                        background-color: transparent;
                        border: 1px solid tomato;
                        cursor: pointer;
                    }
                    .title{
                        display: flex;
                    }
                    .product{
                        width: 49%;
                    }
                    .sub-titles{
                        width: 16%;
                    }
                    hr{
                        border-top: 1px solid  rgba(0, 0, 0, .2);
                    }
                    @media (max-width: 700px) {
                        .content{
                            display: none;
                        }
                        .body{
                            display: flex;
                            flex-direction: column;
                        }
                    }
                `}
                </style>
            </div>
            }
        </>
    )
}

export default Cart;