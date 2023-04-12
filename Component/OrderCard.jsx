import React, { useContext } from 'react';
import { DataContext } from "../stores/DataContext";
import Link from 'next/link';

function OrderyCard(props) {
    
    const hId = props.data.historyId
    const {handleQuantity} = useContext(DataContext)
    
    return (
        <div className='body'>
            <Link href={{pathname:'/historyDetails', query: {id: props.data.historyId},}} ><a>{`id_${props.data.historyId} ${props.data.time}`}</a></Link>
            <p onClick={() => handleQuantity(-10, hId)}>x</p>
            
            <style jsx>{`
                .body{
                    background-color: tomato;
                    border-radius: 3px;
                    margin: 5px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                a{
                    color: white;
                    height: 100%;
                    width: 100%;
                    padding: 7px 0 0 10px;
                 }
                p{
                   margin: 6px 20px;
                   color: white;
                }
                p:nth-child(2){
                    padding: 0px 8px 4px 8px;
                    border-radius: 50%;
                    cursor: pointer;
                    border: 1px solid white;
                    font-weight: 500;
                }
                p:nth-child(2):hover{
                    background-color: white;
                    color: red;
                }
            `}</style>
        </div>
    );
}

export default OrderyCard;