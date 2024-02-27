import Navbar from "../../Shard/Navbar/Navbar";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div className="md:max-w-6xl px-4 mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
           
        </div>
    );
};

export default Home;