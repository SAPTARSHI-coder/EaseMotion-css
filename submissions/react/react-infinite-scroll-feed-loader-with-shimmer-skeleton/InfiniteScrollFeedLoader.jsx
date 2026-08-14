import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const InfiniteScrollFeedLoader = ({ batchSize = 6 }) => {
  const [items, setItems] = useState(
    Array.from({ length: batchSize }, (_, i) => `Feed Item ${i + 1}`)
  );
  const [loading, setLoading] = useState(false);

  const observerRef = useRef(null);

  const loadMore = () => {
    setLoading(true);

    setTimeout(() => {
      const start = items.length;
      const nextItems = Array.from(
        { length: batchSize },
        (_, i) => `Feed Item ${start + i + 1}`
      );

      setItems((prev) => [...prev, ...nextItems]);
      setLoading(false);
    }, 1200);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading) {
          loadMore();
        }
      },
      {
        threshold: 1,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loading, items]);

  return (
    <div className="feed-wrapper">
      {items.map((item, index) => (
        <div key={index} className="feed-card">
          {item}
        </div>
      ))}

      {loading && (
        <div className="shimmer-list">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="shimmer-card">
              <div className="shimmer shimmer-avatar"></div>
              <div className="shimmer-content">
                <div className="shimmer shimmer-line"></div>
                <div className="shimmer shimmer-line short"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div ref={observerRef} className="observer-trigger"></div>
    </div>
  );
};

export default InfiniteScrollFeedLoader;