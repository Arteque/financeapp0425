import { Outlet } from "react-router-dom";

import Header from "../Components/Header/Header";

import Footer from "../Components/Footer/Footer";
import { BurgerProvider } from "../Context/BurgerContext";

const Root = () => {
  return (
    <>
      <BurgerProvider>
        <Header />
      </BurgerProvider>
      <main className="main_content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
