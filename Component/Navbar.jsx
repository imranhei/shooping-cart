import Link from "next/link";
import {useRouter} from 'next/router'
import { useContext } from "react";
import { DataContext } from "../stores/DataContext";

const Navbar = () => {
    
    const router = useRouter()
    function isActive(route){
        if(route == router.pathname){
            return "active"
        }
        else ""
    }
    const x = '1.2rem';
    const {items} = useContext(DataContext)
    
    return (
        
        <nav className="navbar">
            <Link href="/"><a className="brand">Hei's SHOP</a></Link>
            <div className="menu-holder">
                <ul className="nav-menu">
                    <li className={`nav-item ${isActive("/")}`}>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/orders"><a>My Orders</a></Link>
                    </li>
                    
                    <li className={`nav-item cart ${isActive("/cart")}`}>
                        <Link href="/cart">
                            {items===0 ? <a>Cart</a> : <a>Cart <span className="item-holder"><span className="items">{items}</span></span></a>}
                        </Link>
                    </li>
                </ul>
            </div>
            
            <style jsx>{`
                .navbar{
                    position: fixed;
                    height: 60px;
                    width: 100%;
                    top: 0;
                    z-index: 1;
                    background-color: #E7F6F2;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 5%;
                    font-weight: 500;
                    box-shadow: 0px 0px 20px rgba(250, 50, 50, .5);
                }
                .brand{
                    font-size: 2rem;
                    color: #2C3333;
                }
                .menu-holder ul{
                    display: flex;
                    list-style: none;
                }
                .menu-holder ul li a{
                    color: #2C3333;
                    padding: 3px 15px;
                    border-radius: 3px;
                    border: 1px solid rgba(0, 0, 0, 0);
                }
                .menu-holder ul li a:hover{
                    border: 1px solid tomato;
                    transition: all ease-in .2s;
                    box-shadow: 0px 0px 10px rgba(200, 50, 50, 0.1);
                }
                .active > a{
                    color: tomato !important;
                }
                .cart{
                    position: relative;
                }
                .item-holder{
                    position: absolute;
                    top: -10px;
                    right: 2px;
                    height: 20px;
                    width: 20px;
                    background-color: tomato;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .items{
                    font-size: .8rem;
                    color: white;
                }
                @media (max-width:600px) {
                    .navbar{
                        padding: 2%;
                    }
                    .brand{
                        font-size: 1.1rem;
                    }
                    .menu-holder ul li a{
                        color: #2C3333;
                        padding: 3px 6px;
                        border-radius: 3px;
                        border: 1px solid rgba(0, 0, 0, 0);
                        font-size: .9rem;
                    }
                    .item-holder{
                        top: -8px;
                        right: -5px;
                        height: 18px;
                        width: 18px;
                    }
                    .items{
                        font-size: .7rem;
                    }
                }
            `}
            </style>
        </nav>
        
    )
}

export default Navbar;
