import React, { useState, useEffect, useRef, useCallback } from 'react';

// --- Skeleton Shimmer Component ---
const ShimmerCard = () => {
  return (
    <div className="ease-feed-card ease-shimmer-wrapper">
      <div className="ease-shimmer-header">
        <div className="ease-shimmer-avatar ease-shimmer-anim"></div>
        <div className="ease-shimmer-title-block">
          <div className="ease-shimmer-line ease-shimmer-anim w-60"></div>
          <div className="ease-shimmer-line ease-shimmer-anim w-40 mt-sm"></div>
        </div>
      </div>
      <div className="ease-shimmer-body">
        <div className="ease-shimmer-line ease-shimmer-anim"></div>
        <div className="ease-shimmer-line ease-shimmer-anim"></div>
        <div className="ease-shimmer-line ease-shimmer-anim w-80"></div>
      </div>
    </div>
  );
};

// --- Actual Feed Content Component ---
const FeedCard = ({ data, isNew }) => {
  return (
    <div className={`ease-feed-card ${isNew ? 'ease-fade-in-up' : ''}`}>
      <div className="ease-feed-header">
        <div className="ease-feed-avatar">{data.user.charAt(0)}</div>
        <div className="ease-feed-meta">
          <span className="ease-feed-name">{data.user}</span>
          <span className="ease-feed-time">{data.time}</span>
        </div>
      </div>
      <div className="ease-feed-content">
        <p>{data.content}</p>
      </div>
    </div>
  );
};

// --- Main Feed Component ---
const InfiniteScrollFeed = ({ fetchMoreData, hasMore }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const observerTarget = useRef(null);

  // Initial load
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    setLoading(true);
    const newItems = await fetchMoreData();
    setItems((prev) => [...prev, ...newItems]);
    setLoading(false);
  };

  // Intersection Observer to trigger fetch on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadData();
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, hasMore, loading]);

  return (
    <div className="ease-feed-container">
      {items.map((item, index) => (
        <FeedCard 
          key={item.id} 
          data={item} 
          // Animate only the newly fetched items
          isNew={index >= items.length - 3} 
        />
      ))}
      
      {/* Loading Skeletons */}
      {loading && (
        <>
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
        </>
      )}

      {/* Intersection Observer Target */}
      {!loading && hasMore && (
        <div ref={observerTarget} className="ease-observer-target"></div>
      )}

      {!hasMore && (
        <div className="ease-feed-end">You've reached the end of the feed.</div>
      )}
    </div>
  );
};

export default InfiniteScrollFeed;
