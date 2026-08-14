import React, { useState, useEffect, useRef, useCallback } from 'react';

// ─── Shimmer Skeleton card ────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="ease-feed-card ease-feed-skeleton" aria-hidden="true">
    <div className="ease-feed-skeleton-img" />
    <div className="ease-feed-skeleton-body">
      <div className="ease-feed-skeleton-line ease-feed-skeleton-line--title" />
      <div className="ease-feed-skeleton-line ease-feed-skeleton-line--sub" />
      <div className="ease-feed-skeleton-line ease-feed-skeleton-line--sub ease-feed-skeleton-line--short" />
      <div className="ease-feed-skeleton-meta">
        <div className="ease-feed-skeleton-avatar" />
        <div className="ease-feed-skeleton-line ease-feed-skeleton-line--name" />
      </div>
    </div>
  </div>
);

// ─── Real feed card ───────────────────────────────────────────────────────────
const FeedCard = ({ item, index }) => (
  <div
    className="ease-feed-card ease-feed-card--real"
    style={{ animationDelay: `${index * 60}ms` }}
  >
    <div
      className="ease-feed-img"
      style={{ background: item.color }}
      role="img"
      aria-label={item.title}
    >
      <span className="ease-feed-emoji">{item.emoji}</span>
    </div>
    <div className="ease-feed-body">
      <span className="ease-feed-category">{item.category}</span>
      <h2 className="ease-feed-title">{item.title}</h2>
      <p className="ease-feed-desc">{item.description}</p>
      <div className="ease-feed-meta">
        <div
          className="ease-feed-avatar"
          style={{ background: item.authorColor }}
          aria-hidden="true"
        >
          {item.author[0]}
        </div>
        <div className="ease-feed-meta-info">
          <span className="ease-feed-author">{item.author}</span>
          <span className="ease-feed-date">{item.date}</span>
        </div>
        <span className="ease-feed-read">{item.readTime}</span>
      </div>
    </div>
  </div>
);

// ─── End-of-feed indicator ────────────────────────────────────────────────────
const EndOfFeed = () => (
  <div className="ease-feed-end">
    <span className="ease-feed-end-icon">✦</span>
    <p className="ease-feed-end-text">You've reached the end</p>
  </div>
);

/**
 * InfiniteScrollFeed — infinite scroll feed with shimmer skeleton loading.
 *
 * @param {function} fetchItems   - Async function(page, pageSize) → Array of items
 * @param {number}   pageSize     - Items per page (default 5)
 * @param {number}   skeletonCount - Number of skeleton cards shown while loading (default 3)
 * @param {ReactNode} renderItem  - Custom render function(item, index) → ReactNode. Optional.
 */
const InfiniteScrollFeed = ({
  fetchItems,
  pageSize = 5,
  skeletonCount = 3,
  renderItem,
}) => {
  const [items, setItems]       = useState([]);
  const [page, setPage]         = useState(1);
  const [loading, setLoading]   = useState(false);
  const [hasMore, setHasMore]   = useState(true);

  const sentinelRef = useRef(null);
  const loadingRef  = useRef(false); // avoid double-fetch in StrictMode

  const load = useCallback(async (currentPage) => {
    if (loadingRef.current || !hasMore) return;
    loadingRef.current = true;
    setLoading(true);

    try {
      const newItems = await fetchItems(currentPage, pageSize);
      setItems(prev => [...prev, ...newItems]);
      if (newItems.length < pageSize) setHasMore(false);
      else setPage(currentPage + 1);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  }, [fetchItems, pageSize, hasMore]);

  // Initial load
  useEffect(() => { load(1); }, []); // eslint-disable-line

  // IntersectionObserver for infinite scroll trigger
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loadingRef.current) {
          setPage(prev => { load(prev); return prev; });
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [load]);

  return (
    <div className="ease-feed-root" role="feed" aria-busy={loading}>
      {/* Loaded items */}
      {items.map((item, i) =>
        renderItem
          ? renderItem(item, i)
          : <FeedCard key={item.id} item={item} index={i % pageSize} />
      )}

      {/* Shimmer skeletons while loading */}
      {loading && Array.from({ length: skeletonCount }).map((_, i) => (
        <SkeletonCard key={`sk-${i}`} />
      ))}

      {/* Sentinel for IntersectionObserver */}
      {hasMore && !loading && <div ref={sentinelRef} className="ease-feed-sentinel" aria-hidden="true" />}

      {/* End of feed */}
      {!hasMore && !loading && <EndOfFeed />}
    </div>
  );
};

export { SkeletonCard, FeedCard };
export default InfiniteScrollFeed;
