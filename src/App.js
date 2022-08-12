import "./App.scss";
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import fetchBlogPosts from "./requests/blogPosts";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts(setPosts);
  }, []);

  return (
    <div className="App">
      <div className="row u-equal-height u-clearfix">
        {posts.map((post) => (
          <Card post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
