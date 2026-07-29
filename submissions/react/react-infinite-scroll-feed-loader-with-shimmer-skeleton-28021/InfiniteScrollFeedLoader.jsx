import React, { useState, useEffect, useRef, useCallback } from "react";
import "./style.css";

/**
 * InfiniteScrollFeedLoader
 * A modular, premium React component for infinite scrolling feeds with customizable shimmer skeletons.
 */
const InfiniteScrollFeedLoader = ({
  fetchMoreData,
  renderItem,
  hasMore = true,
  batchSize = 6,
  rootMargin = "150px",
  threshold = 0,
  shimmerType = "social", // "social" | "product" | "text" | "gallery"
  shimmerCount = 3,
  theme = "glass", // "light" | "dark" | "glass"
  endOfFeedMessage = "You've caught up on everything!",
  emptyMessage = "No items to show.",
  useManualLoad = false, // Toggle manual click loading vs automatic scroll loading
  scrollContainerRef = null, // Optional custom scroll parent ref (defaults to viewport)
  staggerDelay = 60, // Delay in ms between item entrance animations
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [error, setError] = useState(null);

  const loaderRef = useRef(null);

  // Fetch initial data chunk
  const loadInitial = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const initialData = await fetchMoreData(true); // pass true for initial call
      setData(initialData || []);
    } catch (err) {
      console.error("Error fetching initial data:", err);
      setError("Failed to load feed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [fetchMoreData]);

  // Load more pages
  const loadMore = useCallback(async () => {
    if (isFetchingMore || isLoading || !hasMore) return;
    setIsFetchingMore(true);
    setError(null);
    try {
      const moreData = await fetchMoreData(false); // pass false for pagination
      setData((prev) => [...prev, ...(moreData || [])]);
    } catch (err) {
      console.error("Error loading more data:", err);
      setError("Failed to load more items.");
    } finally {
      setIsFetchingMore(false);
    }
  }, [fetchMoreData, isFetchingMore, isLoading, hasMore]);

  // Trigger load initial on mount and whenever fetchMoreData changes
  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  // Handle observer trigger for infinite scroll
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (
        target.isIntersecting &&
        hasMore &&
        !isLoading &&
        !isFetchingMore &&
        !useManualLoad &&
        !error
      ) {
        loadMore();
      }
    },
    [hasMore, isLoading, isFetchingMore, useManualLoad, error, loadMore]
  );

  // Set up IntersectionObserver
  useEffect(() => {
    if (useManualLoad) return;

    const observerOptions = {
      root: scrollContainerRef ? scrollContainerRef.current : null,
      rootMargin,
      threshold,
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);

    const currentTrigger = loaderRef.current;
    if (currentTrigger) {
      observer.observe(currentTrigger);
    }

    return () => {
      if (currentTrigger) {
        observer.unobserve(currentTrigger);
      }
    };
  }, [handleObserver, rootMargin, threshold, useManualLoad, scrollContainerRef]);

  // Render a specific shimmer card structure based on selected type
  const renderShimmerSkeleton = () => {
    return Array.from({ length: shimmerCount }).map((_, index) => {
      switch (shimmerType) {
        case "product":
          return (
            <div key={index} className="ease-shimmer-product ease-skeleton-shimmer ease-fade-in">
              <div className="ease-shimmer-product-image ease-skeleton-image ease-skeleton-shimmer"></div>
              <div className="ease-shimmer-product-info">
                <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "80%" }}></div>
                <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "40%", height: "14px" }}></div>
                <div className="ease-shimmer-product-meta">
                  <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "30%", height: "20px", marginBottom: 0 }}></div>
                  <div className="ease-skeleton-circle ease-skeleton-shimmer" style={{ width: "24px", height: "24px" }}></div>
                </div>
              </div>
            </div>
          );
        case "gallery":
          return (
            <div key={index} className="ease-shimmer-gallery-item ease-skeleton-shimmer ease-fade-in">
              <div className="ease-shimmer-gallery-bg ease-skeleton-image ease-skeleton-shimmer"></div>
              <div className="ease-shimmer-gallery-overlay">
                <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "60%" }}></div>
                <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "30%", height: "12px", marginBottom: 0 }}></div>
              </div>
            </div>
          );
        case "text":
          return (
            <div key={index} className="ease-shimmer-text-card ease-skeleton-shimmer ease-fade-in">
              <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "35%", height: "14px" }}></div>
              <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "100%" }}></div>
              <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "90%" }}></div>
              <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "55%", marginBottom: 0 }}></div>
            </div>
          );
        case "social":
        default:
          return (
            <div key={index} className="ease-shimmer-social ease-skeleton-shimmer ease-fade-in">
              <div className="ease-shimmer-social-header">
                <div className="ease-skeleton-avatar ease-skeleton-shimmer"></div>
                <div className="ease-shimmer-social-meta">
                  <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "120px", height: "14px" }}></div>
                  <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "70px", height: "10px", marginBottom: 0 }}></div>
                </div>
              </div>
              <div className="ease-shimmer-social-body">
                <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "100%" }}></div>
                <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "85%" }}></div>
                <div className="ease-skeleton-text ease-skeleton-shimmer" style={{ width: "45%", marginBottom: 0 }}></div>
              </div>
            </div>
          );
      }
    });
  };

  const isInitialLoading = isLoading && data.length === 0;
  const isFetchingNext = isFetchingMore;

  return (
    <div className={`ease-scroll-feed-container ease-theme-${theme}`}>
      {/* Feed Content */}
      {data.length > 0 && (
        <div className={`ease-feed-content-wrapper ease-layout-${shimmerType}`}>
          {data.map((item, index) => {
            // Apply standard EaseMotion fade-in and slide-up with custom stagger delay
            const style = {
              animationDelay: `${index * staggerDelay}ms`,
            };
            return (
              <div
                key={item.id || index}
                className="ease-feed-item-animate ease-slide-up ease-fade-in"
                style={style}
              >
                {renderItem(item, index)}
              </div>
            );
          })}
        </div>
      )}

      {/* Initial Empty State */}
      {!isLoading && data.length === 0 && !error && (
        <div className="ease-feed-empty-state ease-fade-in">
          <p>{emptyMessage}</p>
          <button className="ease-feed-retry-btn" onClick={loadInitial}>
            Refresh Feed
          </button>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="ease-feed-error-state ease-fade-in">
          <p className="ease-feed-error-text">{error}</p>
          <button
            className="ease-feed-retry-btn"
            onClick={data.length === 0 ? loadInitial : loadMore}
          >
            Retry Loading
          </button>
        </div>
      )}

      {/* Loading Skeletons */}
      {(isInitialLoading || isFetchingNext) && (
        <div className={`ease-feed-loading-wrapper ease-layout-${shimmerType}`}>
          {renderShimmerSkeleton()}
        </div>
      )}

      {/* Trigger element for Infinite Scroll or Manual Button */}
      <div className="ease-feed-trigger-area">
        {hasMore && !isInitialLoading && !error && (
          <>
            {useManualLoad ? (
              <button
                className="ease-feed-load-more-btn ease-hover-lift"
                onClick={loadMore}
                disabled={isFetchingNext}
              >
                {isFetchingNext ? "Loading..." : "Load More"}
              </button>
            ) : (
              <div
                ref={loaderRef}
                className="ease-feed-observer-trigger"
                aria-hidden="true"
              >
                {isFetchingNext ? "" : ""}
              </div>
            )}
          </>
        )}

        {/* End of Feed Message */}
        {!hasMore && !isInitialLoading && data.length > 0 && (
          <div className="ease-feed-end-message ease-fade-in">
            <span>{endOfFeedMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfiniteScrollFeedLoader;
