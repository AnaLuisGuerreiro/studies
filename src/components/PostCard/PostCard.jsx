import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="PostCard">
      <div className="post">
        <img src={post.cover} alt={post.title} />
        <div className="post-card">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
}
