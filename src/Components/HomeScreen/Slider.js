import React, { useEffect } from 'react';

function Slider() {
  var images = [
    "assets/images/St_Peter's_Square,_Vatican_City_-_April_2007.jpg",
    "https://c1.wallpaperflare.com/path/38/849/245/museum-antiquity-alexander-the-great-art-history-statue-a76e3895825bed8abff5c3bf64462483.jpg",
    "assets/images/grand_temple_dedicated_to_ancient_greek_god_by_mholtsmeier_dfsazqw.png",
    "assets/images/slider4.png"
  ];

  var currentImageIndex = 0;
  var intervalID;

  function startSlideShow(){
      intervalID = setInterval(nextImage, 3000);
  }

  function nextImage(){
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateImage();
  }

  function updateImage(){
      var imgElement = document.querySelector('.slider-image');
      if (imgElement) {
          imgElement.src = images[currentImageIndex];
      }
  }

  useEffect(() => {
    startSlideShow();
    return () => clearInterval(intervalID); // Cleanup interval when component unmounts
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div className="app__slider">
      <div className="grid slider">
        <img className="slider-image" src="assets/images/St_Peter's_Square,_Vatican_City_-_April_2007.jpg" alt=""/>
        <div className="square-frame"></div>
        <div className="slider-content">
          <h1 className="slider-content__heading">Ancient Mediterranean Archaeology</h1>
          <p className="slider-content__description">Embark on a solemn journey through Ancient Mediterranean Archaeology, where unearthed relics whisper the tales of bygone civilizations ...</p>
          <a href="#explore" className="slider-content__link">Explore Now</a>
          <p className="slider-content__copyright">&copy; Created by La Trobe University</p>
        </div>
      </div>
    </div>
  );
}

export default Slider;
