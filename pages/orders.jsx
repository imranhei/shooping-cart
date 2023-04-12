import React, { useContext } from 'react';
import { DataContext } from "../stores/DataContext";
import OrderCard from '../Component/OrderCard'
import Head from 'next/head'

function Orders() {

    const {history} = useContext(DataContext)
    
    return (
        <>
            <Head>
                <title>Hei&apos;s Shop | Orders</title>
            </Head>
            <div className='body'>
            <h1>My Orders</h1>
            <hr />
            {history.length===0 ? null: 
            <div className='card'>
            {
                    history.map((info) => (
                        <OrderCard key={info.historyId} data={info}/>
                    ))
                }
            </div>}
            
                <style jsx>{`
                    .body{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin: 0 10%;
                    }
                    hr{
                        width: 100%;
                        border-top: 1px solid  rgba(0, 0, 0, .2);
                        margin: 0;
                    }
                    .card{
                        width: 100%;
                        height: 40px;
                        border-radius: 4px;
                        display: flex;
                        flex-direction: column;
                    }
                    @media (max-width: 500px) {
                        .body{
                            font-size: .8rem;
                        }
                        h1{
                            font-size: 1.4rem;
                        }
                    }
                `}</style>

            </div>
        </>
    );
}

export default Orders;