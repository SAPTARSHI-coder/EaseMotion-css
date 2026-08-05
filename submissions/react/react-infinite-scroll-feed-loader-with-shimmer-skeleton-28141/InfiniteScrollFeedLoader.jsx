/**
 * InfiniteScrollFeedLoader
 *
 * A modular, copy-paste-ready React component that renders an infinite-scroll
 * social feed with a shimmer-skeleton loading state.
 *
 * Dependencies: React (hooks only), EaseMotion CSS animation utilities.
 * No third-party packages required.
 *
 * Props:
 *   batchSize        {number}   - Cards loaded per scroll trigger  (default: 5)
 *   skeletonCount    {number}   - Skeleton placeholders shown       (default: 3)
 *   maxItems         {number}   - Hard cap before "End of feed"     (default: 50)
 *   loadDelay        {number}   - Simulated fetch delay in ms       (default: 1400)
 *   renderItem       {function} - Custom card renderer (item, idx) => JSX
 *   fetchItems       {function} - Async data-source; receives (start, count)
 *                                 and must resolve to an array of items.
 */

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./style.css";

/* ─── Default mock data source ─────────────────────────────────────────── */

const AVATARS = [
  "https://i.pravatar.cc/56?img=1",
  "https://i.pravatar.cc/56?img=5",
  "https://i.pravatar.cc/56?img=9",
  "https://i.pravatar.cc/56?img=14",
  "https://i.pravatar.cc/56?img=22",
  "https://i.pravatar.cc/56?img=33",
  "https://i.pravatar.cc/56?img=47",
  "https://i.pravatar.cc/56?img=60",
];

const TAGS = [
  "React", "CSS", "Animation", "UX", "Design", "Frontend",
  "JavaScript", "TypeScript", "OpenSource", "WebDev",
];

const BODIES = [
  "Just shipped a new micro-interaction that feels incredibly smooth. Details in the thread below 🧵",
  "Reminder: good animations tell stories. Bad animations just waste time. Know the difference.",
  "Dark mode + glassmorphism + subtle shimmer = chef's kiss UI. Are you using all three?",
  "Infinite scroll done right means the user never feels the load. They just keep flowing.",
  "CSS-only shimmer is often underrated. No JS overhead, pure GPU compositing.",
  "The Intersection Observer API is criminally underused. Stop polling. Start observing.",
  "Component isolation matters. If you can't copy-paste it, it's too coupled.",
  "Accessibility isn't optional. Check prefers-reduced-motion before every animation you ship.",
  "EaseMotion CSS makes it trivial to add polished motion without the bundle bloat.",
  "Good defaults + escape hatches = the perfect API surface for any component.",
];

const defaultFetchItems = async (start, count) => {
  // Simulate a real network call
  await new Promise((res) => setTimeout(res, 0));
  return Array.from({ length: count }, (_, i) => {
    const idx = start + i;
    return {
      id: idx + 1,
      author: `User ${idx + 1}`,
      avatar: AVATARS[idx % AVATARS.length],
      tag: TAGS[idx % TAGS.length],
      body: BODIES[idx % BODIES.length],
      likes: Math.floor(Math.random() * 420) + 10,
      comments: Math.floor(Math.random() * 60),
      timestamp: `${Math.floor(Math.random() * 59) + 1}m ago`,
    };
  });
};

/* ─── ShimmerCard ────────────────────────────────────────────────────────
   Displays a single animated shimmer placeholder card.
   Uses EaseMotion's ease-skeleton classes where available, with fallbacks.
──────────────────────────────────────────────────────────────────────── */
const ShimmerCard = () => (
  <div className="isl-shimmer-card" role="status" aria-label="Loading content">
    {/* Header row */}
    <div className="isl-shimmer-header">
      <div className="isl-shimmer isl-shimmer-avatar ease-skeleton ease-skeleton-circle" />
      <div className="isl-shimmer-header-text">
        <div className="isl-shimmer isl-shimmer-line isl-shimmer-name ease-skeleton ease-skeleton-text" />
        <div className="isl-shimmer isl-shimmer-line isl-shimmer-sub ease-skeleton ease-skeleton-text" />
      </div>
      <div className="isl-shimmer isl-shimmer-badge ease-skeleton" />
    </div>

    {/* Body lines */}
    <div className="isl-shimmer-body">
      <div className="isl-shimmer isl-shimmer-line ease-skeleton ease-skeleton-text" />
      <div className="isl-shimmer isl-shimmer-line ease-skeleton ease-skeleton-text" />
      <div className="isl-shimmer isl-shimmer-line isl-shimmer-line--short ease-skeleton ease-skeleton-text" />
    </div>

    {/* Footer row */}
    <div className="isl-shimmer-footer">
      <div className="isl-shimmer isl-shimmer-pill ease-skeleton" />
      <div className="isl-shimmer isl-shimmer-pill ease-skeleton" />
      <div className="isl-shimmer isl-shimmer-pill ease-skeleton" />
    </div>
  </div>
);

/* ─── FeedCard ────────────────────────────────────────────────────────────
   Renders a single, fully-loaded feed item.
──────────────────────────────────────────────────────────────────────── */
const FeedCard = ({ item, style }) => (
  <article className="isl-feed-card" style={style} aria-label={`Post by ${item.author}`}>
    {/* Header */}
    <header className="isl-feed-header">
      <img
        className="isl-feed-avatar"
        src={item.avatar}
        alt={`Avatar of ${item.author}`}
        width={44}
        height={44}
        loading="lazy"
      />
      <div className="isl-feed-meta">
        <span className="isl-feed-author">{item.author}</span>
        <span className="isl-feed-timestamp">{item.timestamp}</span>
      </div>
      <span className="isl-feed-tag">#{item.tag}</span>
    </header>

    {/* Body */}
    <p className="isl-feed-body">{item.body}</p>

    {/* Footer */}
    <footer className="isl-feed-footer">
      <button className="isl-feed-action" aria-label={`Like post by ${item.author}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <span>{item.likes}</span>
      </button>

      <button className="isl-feed-action" aria-label={`Comment on post by ${item.author}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span>{item.comments}</span>
      </button>

      <button className="isl-feed-action" aria-label={`Share post by ${item.author}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      </button>
    </footer>
  </article>
);

/* ─── EndOfFeedBanner ─────────────────────────────────────────────────── */
const EndOfFeedBanner = () => (
  <div className="isl-end-banner" role="status">
    <span className="isl-end-dot" aria-hidden="true" />
    <span>You've reached the end of the feed</span>
    <span className="isl-end-dot" aria-hidden="true" />
  </div>
);

/* ─── InfiniteScrollFeedLoader ────────────────────────────────────────── */
const InfiniteScrollFeedLoader = ({
  batchSize = 5,
  skeletonCount = 3,
  maxItems = 50,
  loadDelay = 1400,
  renderItem,
  fetchItems,
}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const sentinelRef = useRef(null);
  const loadingRef = useRef(false); // avoids stale-closure race conditions

  const dataSource = fetchItems ?? defaultFetchItems;

  /* Load the initial batch on mount */
  useEffect(() => {
    triggerLoad(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const triggerLoad = useCallback(
    async (startIndex) => {
      if (loadingRef.current) return;
      loadingRef.current = true;
      setLoading(true);
      setError(null);

      try {
        // Enforce the simulated network delay
        const [data] = await Promise.all([
          dataSource(startIndex, batchSize),
          new Promise((res) => setTimeout(res, loadDelay)),
        ]);

        setItems((prev) => {
          const combined = [...prev, ...data];
          if (combined.length >= maxItems) {
            setHasMore(false);
            return combined.slice(0, maxItems);
          }
          return combined;
        });
      } catch (err) {
        setError("Failed to load more posts. Please try again.");
      } finally {
        loadingRef.current = false;
        setLoading(false);
      }
    },
    [batchSize, maxItems, loadDelay, dataSource]
  );

  /* Intersection Observer watches the invisible sentinel element */
  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loadingRef.current) {
          setItems((current) => {
            triggerLoad(current.length);
            return current;
          });
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px 120px 0px" }
    );

    const el = sentinelRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, triggerLoad]);

  return (
    <section className="isl-wrapper" aria-label="Infinite Scroll Feed">
      <h1 className="isl-heading">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.08 6.08l1.91-1.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.92z" />
        </svg>
        Live Feed
      </h1>

      <div className="isl-feed-list">
        {/* Loaded cards */}
        {items.map((item, idx) => (
          renderItem ? (
            <div key={item.id ?? idx} className="isl-feed-card-wrap">
              {renderItem(item, idx)}
            </div>
          ) : (
            <FeedCard
              key={item.id ?? idx}
              item={item}
              style={{ "--enter-delay": `${(idx % batchSize) * 60}ms` }}
            />
          )
        ))}

        {/* Shimmer skeletons */}
        {loading &&
          Array.from({ length: skeletonCount }, (_, i) => (
            <ShimmerCard key={`shimmer-${i}`} />
          ))}

        {/* Error state */}
        {error && (
          <div className="isl-error" role="alert">
            <span>{error}</span>
            <button
              className="isl-retry-btn"
              onClick={() => triggerLoad(items.length)}
            >
              Retry
            </button>
          </div>
        )}
      </div>

      {/* Sentinel element watched by IntersectionObserver */}
      {hasMore && !error && (
        <div
          ref={sentinelRef}
          className="isl-sentinel"
          aria-hidden="true"
        />
      )}

      {/* End-of-feed banner */}
      {!hasMore && <EndOfFeedBanner />}
    </section>
  );
};

export default InfiniteScrollFeedLoader;
export { FeedCard, ShimmerCard, EndOfFeedBanner };
