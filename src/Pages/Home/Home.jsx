import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Main from "../../Components/MainSection/Main";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="px-24">
        <Navbar></Navbar>
        <Header></Header>
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
