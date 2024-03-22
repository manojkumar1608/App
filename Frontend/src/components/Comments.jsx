import React from 'react'

// src/components/Comments.js

const Comments = ({ comments }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="flex space-x-2">
            <img
              src={comment.avatarUrl}
              alt={`${comment.username}'s avatar`}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-semibold">{comment.username}</p>
              <p className="text-gray-600">{comment.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
