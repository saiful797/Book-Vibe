import Banner from "../Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    return (
        <div className="space-y-4">
            <Banner></Banner>
            <p className="text-6xl text-center">This is Home</p>
            <Books></Books>
        </div>
    );
};

export default Home;