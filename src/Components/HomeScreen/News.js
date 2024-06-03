import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../..";
const News = ({heading, image, description, id}) => (
    <div className="grid__column-four">
        <Link to={`/article/${id}`} className="article" onClick={scrollToTop}>
            <div className="article-border"></div>
            <div className="article-container">
                <div className="article__image-container">
                    <img src={image} alt="" className="article__image"/>
                </div>
                <div className="article-info">
                    <h3 className="article__heading">{heading}</h3>
                    <p className="article__description">{description}</p>
                </div>
            </div>
        </Link>
    </div>
)
export default News;