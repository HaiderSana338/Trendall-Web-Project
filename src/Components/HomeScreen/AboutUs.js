import React from 'react';

function AboutUs() {
  return (
    <div className="app__slider">
      <div className="grid slider1" id="aboutus">
        <img src="assets\images\Screenshot 2024-03-29 214618.png" className="about-us-image" alt=""/>
        <section className="hidden-1">
          <span className="text">We are Trendall centre.We lead the way in</span><br/>
          <span className="text">advancing  knowledge of  the  Ancient Mediterranean.</span><br/>
          <span className="text">As your partner inexploration, we offer unparalleled</span><br/>
          <span className="text">resources and expertise in the  archaeology of South</span><br/>
          <span className="text">Italy and Sicily during the ClassNameical period.</span>
        </section>
        <section className="hidden-4">
          <span className="text--right">We are committed to bringing the latest </span><br/>
          <span className="text--right">discoveries in Greek and Roman art and archaeology </span><br/>
          <span className="text--right">to the forefront of discussion in Australia.Through our </span><br/>
          <span className="text--right">conferences, lectures,and seminars, we bridge the gap</span><br/>
          <span className="text--right">between academia and the wider community, enriching</span><br/>
          <span className="text--right">understanding and appreciation of our shared heritage.</span><br/>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
