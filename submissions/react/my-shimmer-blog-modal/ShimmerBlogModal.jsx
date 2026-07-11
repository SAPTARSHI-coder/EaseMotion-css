import React, { useState } from "react";
import "./style.css";

const ShimmerBlogModal = ({
  title = "Blog Preview",
  children = "Read articles with a clean and minimal experience.",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="ease-hover-lift blog-open-btn"
        onClick={() => setOpen(true)}
      >
        Open Blog
      </button>

      {open && (
        <div className="blog-overlay ease-fade-in">
          <div className="blog-modal">

            <div className="blog-shimmer"></div>

            <button
              className="blog-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <div className="blog-content">

              <span className="category">
                Technology
              </span>

              <h2>{title}</h2>

              <p>{children}</p>

              <div className="article-box">
                <h3>Latest Article</h3>
                <p>
                  Explore modern ideas, tutorials and creative stories.
                </p>
              </div>

              <button
                className="read-btn ease-hover-lift"
                onClick={() => setOpen(false)}
              >
                Read Article
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ShimmerBlogModal;