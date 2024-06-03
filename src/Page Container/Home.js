import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector hook from React Redux
import Header from '../Components/HomeScreen/Header';
import Slider from '../Components/HomeScreen/Slider';
import AboutUs from '../Components/HomeScreen/AboutUs';
import Articles from '../Components/HomeScreen/Articles';
import Exhibitions from '../Components/HomeScreen/Exhibitions';
import CollectionExplore from '../Components/HomeScreen/CollectionExplore';
import Navigation from '../Components/HomeScreen/Navigation';
import Search_banner from '../Components/HomeScreen/Search-banner';
import Member_banner from '../Components/HomeScreen/Member-banner';
import Footer
 from '../Components/HomeScreen/Footer';
function HomeScreen() {
    const loggedIn = useSelector((state) => state.auth.loggedIn); // Get logged in state from Redux

    return (
        <div className="app">
            <img className="background-behind" src="assets\images\fixed-background.jpg" alt=""/>
            <Header />
            <Slider />
            {/* <AboutUs /> */}
            <div className="app__container">
                <div className="background--black">
                    <div className="grid-container">
                        <Articles />
                        <Exhibitions />
                    </div>
                </div>
                <Search_banner />
                <CollectionExplore />
                {/* Conditionally render Member_banner based on loggedIn state */}
                {!loggedIn && <Member_banner />}
                <Navigation />
            </div>
            <Footer />
        </div>
    );
}

export default HomeScreen;
