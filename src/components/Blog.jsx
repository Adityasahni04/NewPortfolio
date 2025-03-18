import React from "react";
import "../Styles/Blog.css";

const Blog = ({ title, image, likes, comments, para1, para2, para3 }) => {
  return (
      <div className="blogContent">
        <div className="left-content">
          <img src={image} alt={title} />
        </div>
        <div className="right-content">
          <div className="blog-heading">
            <h4>{title}</h4>
          </div>
          <div className="author-details">
            <div className="author-name">
              <p>By: Aditya</p>
            </div>
            <div className="stats">
              <span className="like">
                <i className="fa-regular fa-heart"></i> {likes}
              </span>
              <span className="comment">💬 {comments}</span>
            </div>
          </div>
          <div className="blog-content">
            <p>{para1}</p>
            <p>{para2}</p>
            <p>{para3}</p>
            <a href="#" className="read-more-link">
              <p className="link-readmore">Read more &gt;&gt;</p>
            </a>
          </div>
        </div>
      </div>
  );
};

export default Blog;
