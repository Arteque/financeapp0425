import React from "react";
import Class from "./Burger.module.scss";
import { useBurger } from "../../Context/BurgerContext";
import { useEffect } from "react";

const Burger = () => {

const {setBurger} = useBurger()  

const menuBarHandler = (e) => {
  e.preventDefault()

  setBurger(prev => !prev)

}


  return (
    
      <button className={`burger ${Class.burger}`} onClick={menuBarHandler}>
        <span className={`icon ${Class.icon}`}>
          <img src="./icon-minimize-menu.svg" alt="White arrow to the left" />
        </span>
        <span className={`text ${Class.text}`}>Minimize Menu</span>
      </button>
    
  );
};

export default Burger;
