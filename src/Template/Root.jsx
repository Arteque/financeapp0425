import { Outlet } from "react-router-dom";

import Header from "../Components/Header/Header";

import RouteChangeLoader from "../Components/RouteChangeLoader/RouteChangeLoader";
import { useLoading } from "../Context/LoadingContext";
import Loader from "../Components/Loader/Loader";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  const { loading } = useLoading();
  return (
    <>
      <RouteChangeLoader />
      {loading && <Loader />}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
