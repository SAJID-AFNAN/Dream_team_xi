import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import Main from '../../Components/MainSection/Main';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
    return (
        <div className='px-24'>
            <Navbar></Navbar>
            <Header></Header>
            <Main></Main>
        </div>
    );
};

export default Home;