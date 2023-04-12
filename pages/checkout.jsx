import React, { useEffect, useState, useContext } from 'react';
import { DataContext } from "../stores/DataContext";
import Router from 'next/router'

const Checkout = (props) => {
   
    const {handleQuantity} = useContext(DataContext)
    
    const initialValues = {username: "", email: "", phone: "", address: ""}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true);
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            handleQuantity(-5, formValues)
            props.onClose();
            Router.push('/orders')
        }
    }, [formErrors])

    if(!props.open) return null;

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if(!values.username){
            errors.username = "Username is required"
        }
        if(!values.email){
            errors.email = "Email is required"
        }
        else if(!regex.test(values.email)){
            errors.email = "This is not a valid email format!";
        }
        if(!values.phone){
            errors.phone = "Phone is required"
        }
        else if(isNaN(values.phone)){
            errors.phone = "Please only digit"
        }
        else if(values.phone.length <11 || values.phone.length > 11){
            errors.phone = "Please type 11-digit phone number"
        }
        if(!values.address){
            errors.address = "Address is required"
        }
        return errors;
    }

    return (
        <div className='body'>
            <form className="content">
                <h1>Payment</h1>
                <div className="main">
                    <h4>Username</h4>
                    <input type="text" name='username' placeholder='Username' value={formValues.username} onChange={handleChange}/>
                    <p>{formErrors.username}</p>
                    <h4>Email</h4>
                    <input type="text" name='email' placeholder='Email' value={formValues.email} onChange={handleChange}/>
                    <p>{formErrors.email}</p>
                    <h4>Phone</h4>
                    <input type="text" name='phone' placeholder='Phone' value={formValues.phone} onChange={handleChange}/>
                    <p>{formErrors.phone}</p>
                    <h4>Address</h4>
                    <textarea cols="30" rows="5"  name='address' placeholder='Address' value={formValues.address} onChange={handleChange}></textarea>
                    <p>{formErrors.address}</p>
                </div>
                <div className="process">
                    <button onClick={props.onClose} type="button">Cancel</button>
                    <button onClick={handleSubmit} type="button">Confirm Payment</button>
                </div>
            </form>
            
            <style jsx>{`
                .body{
                    position: fixed;
                    top: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.4);
                    height: 100%;
                    width: 100%;
                    display: flex;
                    z-index:2;
                    padding: 30px;
                }
                .content{
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    max-width: 450px;
                    border: 1px solid tomato;
                    border-radius: 10px;
                    overflow: hidden;
                    padding-bottom: 20px;
                    background-color: rgba(0, 0, 0, .9);
                    box-shadow: 5px 5px 20px rgba(0, 0, 0, .5);
                }
                .main{
                    width: 80%;
                }
                h1{
                    background-color: tomato;
                    width: 100%;
                    color: white;
                    text-align: center;
                    padding: 30px;
                    margin-top: 0px;
                }
                h4{
                    margin: 15px 0 5px 2px;
                    color: white;
                    font-weight: 400;
                    text-align: left;
                }
                p{
                    margin: 0;
                }
                input{
                    caret-color: tomato;
                    width: 100%;
                    border: 0;
                    font-size: 1.05rem;
                    background-color: transparent;
                    color: tomato;
                    border-bottom: 1px solid rgba(255, 255, 255, .2);
                }
                input::placeholder{
                    color: rgba(255, 255, 255, .2);
                }
                input:focus{
                    outline: none;
                    border-bottom: 1px solid tomato;
                }
                p{
                    color: red;
                }
                .process{
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    margin: 10px;
                }
                button{
                    margin: 15px;
                    width: 160px;
                    height: 30px;
                    cursor: pointer;
                    background-color: tomato;
                    color: white;
                    border: 1px solid transparent;
                    font-size: 1.0rem;
                }
                button:hover{
                    background-color: transparent;
                    color: tomato;
                    border: 1px solid tomato;
                }
                a{
                    margin: 15px;
                    padding: 3px 15px;
                    cursor: pointer;
                    background-color: tomato;
                    color: white;
                    border: 1px solid transparent;
                    font-size: 1.04rem;
                }
                a:hover{
                    background-color: transparent;
                    color: tomato;
                    border: 1px solid tomato;
                }
                textarea{
                    font-size: 1.05rem;
                    caret-color: tomato;
                    width: 100%;
                    background-color: transparent;
                    color: tomato;
                    resize: vertical;
                }
                textarea:focus{
                    outline: none;
                }
            `}</style>
        </div>
    );
};

export default Checkout