import { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Main from "../../Components/MainSection/Main";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  const [addCoin, setAddCoin] = useState(0);
  return (
    <div>
      <div className="px-24">
        <Navbar addCoin={addCoin}></Navbar>
        <Header setAddCoin={setAddCoin}></Header>
        <Main></Main>
        <Banner className="relative"></Banner>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
