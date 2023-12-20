import React from "react";

import PostCard from "../PostCard/PostCard";
export default function Posts({ posts }) {
  return (
    <div>
      <div className="posts">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
