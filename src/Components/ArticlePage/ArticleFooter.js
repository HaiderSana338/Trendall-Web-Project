import React from 'react';

const ArticleFooter = () => {
  return (
    <div className="article-footer">
      <h3 className='share-article'>Share this article on: </h3>
      <div className="social-media">
            <a href="#" className="social-icon social-icon-article">
                <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon social-icon-article">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon social-icon-article">
                <i className="fab fa-google"></i>
            </a>
            <a href="#" className="social-icon social-icon-article">
                <i className="fab fa-linkedin-in"></i>
            </a>
        </div>  
    </div>
  );
}

export default ArticleFooter;
