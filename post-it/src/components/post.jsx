import React from 'react';
import './post.css'; // Assuming you have some CSS for styling

const Post = ({ title, content }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
        </div>
    );
};

export default Post;