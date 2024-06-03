import React from 'react'; 
import Header from '../Components/HomeScreen/Header';
import PinterestLayout from '../Components/Gallery/PinterestLayout';
import Footer from '../Components/HomeScreen/Footer';

function Gallery() {

    return (
        <div className="app">
            <Header />
            <div className="app__container">
                <div className="background--black-full" style={{paddingBottom:'10px'}}>
                    <div className="grid-container">
                        <h1 className='page-header gallery-header'>GALLERY</h1>
                        
                        <PinterestLayout/>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Gallery;