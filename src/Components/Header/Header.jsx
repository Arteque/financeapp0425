import { useBurger } from "../../Context/BurgerContext";
import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation";

const Header = () => {

  const {burger} = useBurger() 

  return (
      <header className={`main_header ${burger ? 'header__open' : 'header__close'}`}>
        <Logo />
        <Navigation />
        <Burger />
      </header>
  );
};

export default Header;
