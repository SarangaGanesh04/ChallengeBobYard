import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './models';

const FetchComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/comments/');
        setComments(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="comments-container">
      {loading ? (
        <p>Loading comments...</p>
      ) : (
        <>
          {comments.map(comment => (
            <Comment key={comment.pk} comment={comment.fields} />
          ))}
        </>
      )}
    </div>
  );
};

export default FetchComments;
