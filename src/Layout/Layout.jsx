import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";

export default function Layout() {
  return (
    <>
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />

    </>
  );
}