import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

function card(props) {
    
    return (
        <div className="card">
            <div className='img-holder'>
                <Image src={`/${props.id.image}`} height='230px' width='230px'/>
            </div>
            <hr/>
            <div className='text'>
                <Link href={{pathname:`/product/`, query: {id: props.id.id}, }}>{`${props.id.productName}`}</Link>
                <p>{`Price: ${props.id.price}/-`}</p>
                {props.id.quantity === 0 ? <p id='out-stock'>Out-of-stock</p> : <p id='in-stock'>Available</p>}
            </div>
            <a className="quick-view" onClick={() => props.onQuickView(props.id)}>Quick View</a>
            
            <style jsx>{`
                .card{
                    width: 250px;
                    height: 450px;
                    background-color: white;
                    display: flex;
                    flex-direction: column;
                    margin: 10px;
                    align-items: center;
                    border-radius: 5px;
                    border: 1px solid white;
                    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    padding: 10px;
                    position: relative;
                }
                .card:hover{
                    border: 1px solid tomato;
                    box-shadow: 0px 0px 20px rgba(200, 50, 50, 0.5);
                }
                .img-holder{
                    overflow: hidden;
                    transition: transform .5s;
                }
                .img-holder:hover{
                    transform: scale(.9);
                    border: 1px solid tomato;
                }
                .text{
                    width:90%;
                }
                p{
                    line-height: 10px;
                    font-weight: 500;
                    font-size: .9rem;
                }
                hr{
                    width: 90%;
                    border-top: 1px solid  rgba(0, 0, 0, .2);
                }
                a{
                    font-size: .9rem;
                    font-weight: 500;
                    color: #395B64;
                    cursor: pointer;
                }
                a:hover{
                    color: tomato;
                }
                #in-stock{
                    color: green;
                }
                #out-stock{
                    color: red;
                }
                .quick-view{
                    position: absolute;
                    bottom: 20px;
                    border-radius: 4px;
                    font-size: .9rem;
                    background-color: #395B64;
                    color: white;
                    margin: auto;
                    padding: 7px 40px;
                    text-align: center;
                }
                .quick-view:hover{
                    background-color: white;
                    color: tomato;
                    font-weight: 500;
                    border: 1px solid tomato;
                    box-shadow: 0px 0px 10px rgba(200, 50, 50, 0.5);
                }
            `}
            </style>
        </div>
    );
}

export default card;