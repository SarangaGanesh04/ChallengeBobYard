import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/comments/');
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const deleteComment = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/comments/${id}/`);
      fetchComments();
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p><strong>Author:</strong> {comment.author}</p>
            <p><strong>Text:</strong> {comment.text}</p>
            <p><strong>Date:</strong> {comment.date}</p>
            <p><strong>Likes:</strong> {comment.likes}</p>
            {comment.image && <img src={comment.image} alt="Comment Image" />}
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
