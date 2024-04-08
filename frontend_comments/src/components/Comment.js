import React from 'react';

const Comment = ({ comment }) => {
  const { author, text, date, likes, image } = comment;

  return (
    <div className="comment">
      <div className="comment-header">
        <img src={image} alt="Author" className="avatar" />
        <div>
          <h3>{author}</h3>
          <p>{date}</p>
        </div>
      </div>
      <p>{text}</p>
      <div className="comment-footer">
        <span>Likes: {likes}</span>
      </div>
    </div>
  );
};

export default Comment;
