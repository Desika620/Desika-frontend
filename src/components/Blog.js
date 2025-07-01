import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/blog')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="blog-loading">
        <div className="container">
          <div className="loading-spinner"></div>
          <p>Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="blog">
      <div className="container">
        <h1 className="section-title">My Blog</h1>
        <div className="blog-posts">
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <div className="post-image">
                <img src={`https://via.placeholder.com/600x400?text=${post.title}`} alt={post.title} />
                <div className="post-category">{post.category}</div>
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;