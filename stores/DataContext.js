import React, {createContext, useState} from 'react';
import Data from '../data.json';
import Router from 'next/router'

let historyId = 0;
const length = Data.length;

export const DataContext = createContext();

function DataContextProvider({children}) {

    const [record, setRecord] = useState({
        data: Data,
        quantity: Array(length).fill(0),
        items: 0
    });
    const [cart, setCart] = useState([]);
    const [history, setHistory] = useState([]);
    
    const handleQuantity = (value, id) => {
        const q = record.quantity;
        
        if(value === -5){ //Execute when checkout done
            let cost = 0;
            
            const products = cart.map((e) => {
                return {productName: e.productName, price: e.price, quantity: record.quantity[e.id]};
            });

            cart.map((pro) => {
                cost += pro.price * record.quantity[pro.id];
            });

            const tempHistory = history;
            
            tempHistory.push({historyId, time: Date().toLocaleString().split(" ", 5).join(" "), ...id, product: products, total: cost})
            setHistory(tempHistory)
            historyId++;
            setCart([])
            const newQuantity = record.data
            newQuantity.map((e) => {
                e.quantity -= record.quantity[e.id]
            })
            setRecord({...record, data: newQuantity, items: 0, quantity: Array(length).fill(0)})
        }
        else if(value === -10){ //history remove
            const index = history.findIndex(object => {
                return object.historyId === id;
            });
            const newHistory = history;
            newHistory.splice(index, 1);
            setHistory(newHistory);
            Router.push('/orders');
        }
        else if(value === 0){
            q[id] = 0;
            setRecord({...record, items: --record.items, quantity: q});
            
            const index = cart.findIndex(object => {
                return object.id === id;
              });
            const newItem = cart;
            newItem.splice(index, 1);
            setCart(newItem);
        }
        else{
            if(q[id] === 0 && value===1){
                setRecord({...record, items: ++record.items});
            }
            if(q[id]===0){
                const tempCart = cart;
                const selectedItem = record.data.find(x => x.id === id);
                tempCart.push(selectedItem);
                setCart(tempCart);
            }
            q[id] += value;
            setRecord({...record, quantity: q});
        }
    }

    return (
        <DataContext.Provider value={{...record, handleQuantity, cart, history}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;