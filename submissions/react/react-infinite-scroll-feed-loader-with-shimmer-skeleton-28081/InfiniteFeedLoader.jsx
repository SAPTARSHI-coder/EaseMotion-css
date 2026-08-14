import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Infinite Scroll Feed Loader with Shimmer Skeleton
 * 
 * @param {Function} fetchMoreData - Async function that returns a Promise resolving to new data array.
 * @param {Function} renderItem - Component render function for a single item (receives item and index).
 * @param {Boolean} hasMore - Boolean indicating if there is more data to fetch.
 */
const InfiniteFeedLoader = ({ fetchMoreData, renderItem, hasMore = true }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initial load state
  const [isFetchingMore, setIsFetchingMore] = useState(false); // Pagination state
  
  const loaderRef = useRef(null);

  // Initial Load
  useEffect(() => {
    let isMounted = true;
    
    const loadInitial = async () => {
      setIsLoading(true);
      try {
        const initialData = await fetchMoreData();
        if (isMounted) setData(initialData);
      } catch (error) {
        console.error("Error fetching initial data", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    
    loadInitial();
    
    return () => { isMounted = false; };
  }, [fetchMoreData]);

  // Intersection Observer for Infinite Scroll
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    // If the loader element is visible, we have more data, and we aren't already fetching...
    if (target.isIntersecting && hasMore && !isFetchingMore && !isLoading) {
      loadMore();
    }
  }, [hasMore, isFetchingMore, isLoading]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "100px", // Trigger slightly before the user reaches the bottom
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    
    if (loaderRef.current) observer.observe(loaderRef.current);
    
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [handleObserver]);

  const loadMore = async () => {
    setIsFetchingMore(true);
    try {
      const moreData = await fetchMoreData();
      setData(prev => [...prev, ...moreData]);
    } catch (error) {
      console.error("Error fetching more data", error);
    } finally {
      setIsFetchingMore(false);
    }
  };

  // The Shimmer Skeleton Component
  const ShimmerCard = () => (
    <div className="ease-shimmer-card">
      <div className="ease-shimmer-header">
        <div className="ease-shimmer-avatar ease-shimmer-anim"></div>
        <div className="ease-shimmer-text-group">
          <div className="ease-shimmer-line title ease-shimmer-anim"></div>
          <div className="ease-shimmer-line subtitle ease-shimmer-anim"></div>
        </div>
      </div>
      <div className="ease-shimmer-body">
        <div className="ease-shimmer-line full ease-shimmer-anim"></div>
        <div className="ease-shimmer-line full ease-shimmer-anim"></div>
        <div className="ease-shimmer-line short ease-shimmer-anim"></div>
      </div>
    </div>
  );

  return (
    <div className="ease-infinite-feed">
      
      {/* Actual Data */}
      <div className="ease-feed-content">
        {data.map((item, index) => renderItem(item, index))}
      </div>

      {/* Loading States (Initial or Pagination) */}
      {(isLoading || isFetchingMore) && (
        <div className="ease-feed-loading-container">
          <ShimmerCard />
          <ShimmerCard />
          <ShimmerCard />
        </div>
      )}
      
      {/* Intersection Observer Target */}
      <div 
        ref={loaderRef} 
        className="ease-scroll-trigger"
        aria-hidden="true"
      />

      {/* End of Feed Message */}
      {!hasMore && !isLoading && (
        <div className="ease-feed-end">
          <p>You've caught up on everything!</p>
        </div>
      )}

    </div>
  );
};

export default InfiniteFeedLoader;
