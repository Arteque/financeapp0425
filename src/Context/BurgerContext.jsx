import { createContext, useContext, useState } from "react";

const BurgerContext = createContext()

const useBurger = () =>  useContext(BurgerContext)

const BurgerProvider = ({children}) => {
    const [burger, setBurger] = useState(false)


    return (
        <BurgerContext.Provider value={{burger, setBurger}}>
            {children}
        </BurgerContext.Provider>
    )
}

export {useBurger, BurgerProvider}