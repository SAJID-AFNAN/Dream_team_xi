import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
    return (
        <div className='px-24'>
            <Navbar></Navbar>
            <Header></Header>
            <Card></Card>
        </div>
    );
};

export default Home;