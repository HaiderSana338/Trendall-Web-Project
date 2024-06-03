import React from "react";
import { Link } from "react-router-dom";
import {scrollToTop} from '../../index.js';
const News = ({heading, image, description, sideClass}) => (
    <Link to="/article" onClick={scrollToTop} className={`article article--${sideClass}`}>
        <div className={`article-container article-container--${sideClass}`}>
            <div className={`article__image-container article__image-container--${sideClass}`}>
                <img src={image} alt="" className={`article__image article__image--${sideClass}`}/>
            </div>
            <div className={`article-info article-info--${sideClass}`}>
                <h3 className={`article__heading article__heading--${sideClass}`}>{heading}</h3>
                <p className={`article__description article__description--${sideClass}`}>{description}</p>
            </div>
        </div>
    </Link>
)
export default News;