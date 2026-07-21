import React, { useEffect, useRef } from 'react';
import './style.css';

// feed with shimmer loader
export default function InfiniteScrollFeed({
  items = [],
  fetchMore,
  renderItem,
  hasMore = true,
  isLoading = false,
  loadingText = "Loading more items..."
}) {
  const observerTarget = useRef(null);

  // observer for scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // fire fetch when visible
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          fetchMore();
        }
      },
      { threshold: 0.1 }
    );

    const target = observerTarget.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [fetchMore, hasMore, isLoading]);

  return (
    <div className="feed-container ease-fade-in">
      {/* items */}
      <div className="feed-items">
        {items.map((item, index) => (
          <div key={index} className="feed-item ease-slide-up">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
      
      {/* loading skeleton */}
      {hasMore && (
        <div ref={observerTarget} className="scroll-observer-target">
          {isLoading && (
            <div className="shimmer-container">
              <div className="shimmer-card">
                <div className="shimmer-avatar ease-pulse"></div>
                <div className="shimmer-lines">
                  <div className="shimmer-line ease-pulse"></div>
                  <div className="shimmer-line short ease-pulse"></div>
                </div>
              </div>
              {/* sr only */}
              <span className="sr-only">{loadingText}</span>
            </div>
          )}
        </div>
      )}
      
      {/* end state */}
      {!hasMore && items.length > 0 && (
        <p className="feed-end-message">You've reached the end of the feed.</p>
      )}
    </div>
  );
}
