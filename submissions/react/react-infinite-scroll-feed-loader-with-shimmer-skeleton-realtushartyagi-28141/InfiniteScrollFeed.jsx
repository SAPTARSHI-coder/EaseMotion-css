import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * ShimmerCard – a single skeleton placeholder card shown while loading.
 */
function ShimmerCard() {
  return (
    <div className="ease-iss-shimmer">
      <div className="ease-iss-shimmer-avatar" />
      <div className="ease-iss-shimmer-body">
        <div className="ease-iss-shimmer-line ease-iss-shimmer-line--title" />
        <div className="ease-iss-shimmer-line ease-iss-shimmer-line--sm" />
        <div className="ease-iss-shimmer-line ease-iss-shimmer-line--md" />
      </div>
    </div>
  );
}

/**
 * FeedCard – a rendered feed item.
 */
function FeedCard({ item }) {
  return (
    <div className="ease-iss-card">
      <img src={item.avatar} alt={item.author} className="ease-iss-avatar" />
      <div className="ease-iss-content">
        <div className="ease-iss-header">
          <span className="ease-iss-author">{item.author}</span>
          <span className="ease-iss-time">{item.time}</span>
        </div>
        <p className="ease-iss-text">{item.text}</p>
      </div>
    </div>
  );
}

/**
 * InfiniteScrollFeed
 * Renders a feed list with infinite scroll and shimmer skeleton loading,
 * using EaseMotion CSS for all animations.
 *
 * Props:
 * - fetchItems: (page: number) => Promise<Array> - async function returning new feed items.
 * - skeletonCount: number - Number of shimmer cards to show while loading (default: 3).
 * - endMessage: string - Message shown when all items are loaded.
 */
export default function InfiniteScrollFeed({
  fetchItems,
  skeletonCount = 3,
  endMessage = "You've reached the end!",
}) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const sentinelRef = useRef(null);

  const load = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const newItems = await fetchItems(page);
      if (!newItems || newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems(prev => [...prev, ...newItems]);
        setPage(prev => prev + 1);
      }
    } catch {
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [fetchItems, loading, hasMore, page]);

  // Initial load
  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) load(); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [load]);

  return (
    <div className="ease-iss-feed">
      {items.map((item) => (
        <FeedCard key={item.id} item={item} />
      ))}

      {loading && Array.from({ length: skeletonCount }).map((_, i) => (
        <ShimmerCard key={`sk-${i}`} />
      ))}

      {!hasMore && (
        <p className="ease-iss-end">{endMessage}</p>
      )}

      <div ref={sentinelRef} className="ease-iss-sentinel" />
    </div>
  );
}
