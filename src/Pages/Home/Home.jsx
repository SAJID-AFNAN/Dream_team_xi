import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Main from '../../Components/MainSection/Main';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
    return (
        <div className='px-24'>
            <Navbar></Navbar>
            <Header></Header>
            <Main></Main>
            <Banner className=""></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;