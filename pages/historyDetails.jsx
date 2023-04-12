import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { DataContext } from "../stores/DataContext";
import Head from 'next/head';

function HistoryDetails() {
    const {history} = useContext(DataContext)
    const router = useRouter();
    const x = router.asPath;
    const r = x.slice(x.indexOf('=')+1, x.length)
    let hisDetail;
    
    history.map((e) => {
        if(e.historyId==r){
            hisDetail = e;
            return
        };
    })
    if(!history.length) return null;
    
    return (
        <>
            <Head>
                <title>Hei&apos;s Shop | History</title>
            </Head>
            <div className='body'>
                <div className="content">
                    <div className="person">
                        <h3>{`Name: ${hisDetail.username}`}</h3>
                        <h3>{`Phone: ${hisDetail.phone}`}</h3>
                        <h3>{`Email: ${hisDetail.email}`}</h3>
                        <h3>{`Address: ${hisDetail.address}`}</h3>
                        <h3>{`Time: ${hisDetail.time}`}</h3>
                        <hr />
                        <p><span className='product'>Product</span>
                        <span className='quantity'>Quantity</span>
                        <span className='price'>Price</span></p>
                    </div>
                    <hr/>
                    {
                        hisDetail.product.map((info) => (
                            <div key={info.historyId}>
                                <p ><span className='product name'>{info.productName}</span>
                                <span className='quantity'>{info.quantity}</span>
                                <span className='price'>{info.price}</span></p>
                                <hr/>
                            </div>

                        ))
                    }
                    <h3>{`Total Bill: ${hisDetail.total}/-`}</h3>
                </div>
                <style jsx>{`
                    .body{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 30px;
                    }
                    .content{
                        width: 100%;
                        max-width: 800px;
                        border: 1px solid rgba(0, 0, 0, .2);
                        padding: 50px 20px;
                    }
                    h3{
                        font-weight: 500;
                        font-size: 1rem;
                    }
                    p{
                        width: 100%;
                        display: flex;
                        text-align: center;
                    }
                    .name{
                        text-align: left;
                    }
                    .product{
                        width: 60%;
                    }
                    .quantity, .price{
                        width: 20%;
                    }
                    @media (max-width: 500px) {
                        .body, h3{
                            font-size: .8rem;
                        }
                    }
                `}</style>
            </div>
        </>
    );
}

export default HistoryDetails;