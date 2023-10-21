import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "./Layout.scss";
import FadeUp from "./fadeUp/FadeUp";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
        <FadeUp />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
