import React from 'react';

const Post = ({ title, date, author, content, time, image1}) => {
  return (
    <div className="post">
      <h1 className='post-heading'>{title}</h1>
      <div className='post-info'>
        <div className='post-author'>
            <img className='post-author-avatar' src='https://i.pinimg.com/564x/65/d6/c4/65d6c4b0cc9e85a631cf2905a881b7f0.jpg' alt="Image 1"/>
            <p className='post-author-name'>Created by <strong>{author}</strong></p>
        </div>
        <div className='post-create'>
            <span className='post-date'>Posted on {date}</span>
            <span className='post-time'>At {time}</span>
        </div>
      </div>
      <img className='post-image' src={image1} alt="Image 1"/>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}

export default Post;
