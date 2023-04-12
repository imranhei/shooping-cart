import React, { useContext } from 'react';
import Card from './Card'
import { DataContext } from "../stores/DataContext";

function Product (props) {
    
    const {data} = useContext(DataContext);
  
    return (
        <div>
        {
            data.map((info) => (
                <Card key={info.id} id={info} onQuickView={props.onQuickView}/>
            ))
        }
        
        <style jsx>{`
            div{
                display:flex;
                flex-wrap: wrap;
                justify-content: center;
            }
        `} 
        </style>
        </div>
    );
}

export default Product;