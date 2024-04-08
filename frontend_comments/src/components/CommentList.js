import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/comments/')
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map(comment => (
          <li key={comment.pk}>
            <p>Author: {comment.author}</p>
            <p>Date: {comment.date}</p>
            <p>Text: {comment.text}</p>
            <p>Likes: {comment.likes}</p>
            <img src={comment.image} alt="Comment Image" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
