import React from 'react';

function CollectionExplore() {
  return (
    <div className="background--black">
        <div className="grid-container">
            <div className="container-section explore-section" id="explore">
                <div className="container__header explore-section__header">
                    <h1 className="container__heading explore-section__heading">Explore Collection</h1>
                    {/* <button className="magnify-tool-trigger">
                        <i className="magnify-tool-icon fa-solid fa-magnifying-glass-plus"></i>
                        <span className="magnify-tool-trigger-text">Zoom in</span>
                    </button> */}
                    <a href="/gallery" className="container__link explore-section__link">See more Collection
                        <i className="container__link-icon fa-solid fa-circle-arrow-right"></i>
                    </a>
                </div>
                <div className="exhibition-section__body">
                    <div className="grid-container grid-container--body">
                        <div className="grid__row">
                            <div className="grid__column-two display-none">
                                <div href="#" className="collection">
                                    <img src="assets\images\P-1-1.png" alt="" className="collection-image image-zoom" data-magnify-src="assets/images/P-1-1.png"/>
                                    <img src="assets\images\drawio.png" alt="" className="collection-image-vector"/>
                                    <img src="assets\images\P-1-2.png" alt="" className="collection-image--regular image-zoom"/>
                                    <p className="collection-description">An ancient Athenian vase is discovered from the Munich Antikensammlungen, part of the esteemed Candelori Collection in Rome since 1539.</p>
                                    <div className="cover-frame">
                                        <img src="assets\images\P-1-1.png" alt="" className="cover-image image-zoom"/>
                                    </div>
                                </div>
                            </div>
                            <div className="grid__column-two">
                                <div className="collection">
                                    <img src="assets\images\P-1-3.png" alt="" className="collection-image image-zoom" data-magnify-src="assets/images/P-1-3.png"/>
                                    <img src="assets\images\P-2.png" alt="" className="collection-image--small collection-image--small-1 image-zoom"/>
                                    <img src="assets\images\P-6.png" alt="" className="collection-image--small collection-image--small-2 image-zoom"/>
                                    <img src="assets\images\P-13-2.png" alt="" className="collection-image--small collection-image--small-3 image-zoom"/>
                                    <p className="collection-description">Explore the Corinthian artifact, accessioned as 1992.1, housed within The Art Museum at Princeton University in Princeton, New Jersey.</p>
                                    <div className="cover-frame">
                                        <img src="assets\images\P-1-3.png" alt="" className="cover-image image-zoom"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CollectionExplore;
