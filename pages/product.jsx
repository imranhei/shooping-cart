import { useContext } from 'react';
import { DataContext } from '../stores/DataContext';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Product = () => {
    
    const {data, handleQuantity, quantity} = useContext(DataContext)
    const router = useRouter();
    const x = router.asPath;
    const r = x.slice(x.indexOf('=')+1, x.length)
    let pro;
    let disable = '';
    
    data.map((e) => {
        if(e.id==r){
            pro = e;
            return
        };
    })
    if(pro){
        disable = pro.quantity === 0 ? 'disabled' : '';
    }
    if(!pro) return null;
    
    return (
        <>
            <Head>
                <title>Hei&apos;s Shop | Product</title>
            </Head>
            <div className='body'>
                <div className='top'>
                    <Image src={`/${pro.image}`} alt='product' height={500} width={500}/>
                    <div className='name-price'>
                        <p className='name'>{`${pro.productName}`}</p>
                        <p className='price'>{`Price: ${pro.price}/-`}</p>
                        <p>{pro.quantity === 0 ? <span id='out-stock'>Out-of-stock</span> : <span id='in-stock'>Available</span>}
                        <span className='quantity'>({`${pro.quantity}`})</span></p>
                        {quantity[pro.id]===0 ? <button className="cart" disabled={`${disable}`} onClick={() => handleQuantity(1, pro.id)}>Add To Cart</button> :
                        <button className="cart" onClick={() => handleQuantity(0, pro.id)}>Remove From Cart</button>}
                    </div>
                </div>
                <p className='desc'>{`${pro.description}`}</p>
                
                <style jsx>{`
                    .body{
                        display: flex;
                        flex-direction: column;
                        margin: 30px 10% 50px;
                    }
                    .top{
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: center;
                    }
                    img{
                        height: 400px;
                        width: 400px;
                        border: 3px tomato;
                        border-right-style: solid;
                    }
                    .name-price{
                        font-size: 1.5rem;
                        font-weight: 600;
                        width: 50%;
                        margin-left: 30px;
                    }
                    #out-stock{
                        color: red;
                    }
                    #in-stock{
                        color: green;
                    }
                    .quantity{
                        margin-left: 5px;
                        color: rgba(0, 0, 0, .4);
                    }
                    p, h5{
                        margin: 10px 0px;
                    }
                    .cart{
                        height: 30px;
                        width: 200px;
                        border: 1px solid transparent;
                        background-color: tomato;
                        color: white;
                        border-radius: 2px;
                        text-align: center;
                        font-size: 1.1rem;
                    }
                    .cart:hover{
                        color: tomato;
                        background-color: transparent;
                        border: 1px solid tomato;
                        cursor: pointer;
                    }
                    .desc{
                        margin: auto;
                        text-align: justify;
                        margin: 5vw 0;
                    }
                    @media (max-width: 700px) {
                        img{
                            height: 250px;
                            width: 250px;
                            border: 0;
                        }
                        .name-price{
                            width: 90%;
                            font-size: 1.1rem;
                            margin: 0;
                        }
                        .cart{
                            font-size: 1rem;
                            width: 170px;
                        }
                    }
                `}</style>
            </div>
        </>
    );
}

export default Product;