import React from 'react';

function SignIn() {
  return (
    <div className="grid-container">
        <div className="banner" id="sign-in">
            <div className="banner-info">
                <div className="banner__heading">BECOME <br/> OUR MEMBER</div>
                <div className="banner__content">
                    <div className="banner__description">"Join us today and unlock exclusive benefits! Gain access to premium content, special events, and insider updates. Become a valued member of our community and support our mission. Join now!"</div>
                    <div className="banner__button">
                        <a href="#" className="banner__link">
                            Create Account
                            <i className="banner__link-icon fa-solid fa-circle-chevron-right"></i>
                        </a>
                        <div className="banner__link-back"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SignIn;
