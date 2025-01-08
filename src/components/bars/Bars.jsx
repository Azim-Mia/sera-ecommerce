import {useState} from 'react';
import "./bars.css";
const Bars =() =>{
const [burger_class, setBurgerClass] =useState("burger-bar unClicked");
const [menu_class,setMenuClass] =useState("menu hidden");
const [isMenuClicked,setIsClicked] =useState(false);
  const updateMenu=()=>{
    if(!isMenuClicked){
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    }else{
     setBurgerClass("burger-bar unClicked");
      setMenuClass("menu hidden");
    }
    setIsClicked(!isMenuClicked)
  }
  return ( <>
  <div className="burger_menu" onClick={updateMenu}> 
  <div className={burger_class}></div>
    <div className={burger_class}></div>
    <div className={burger_class}></div>
  </div>
  <div className ={menu_class}>
  <ul className="p-2 text-center text-white">
    <li className=" p-1 hover:text-black border-b mt-1">category products</li>
    <li className="p-1 hover:text-black border-b mt-1">Top Sell product</li>
    <li className="p-1 hover:text-black border-b mt-1">discount Product</li>  
  </ul>
  </div>
  </>)
}
export default Bars;