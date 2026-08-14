/**
 * EaseMotion CSS — LogStream
 * ============================================================
 * Auto-scrolling log viewer.
 *
 * The failure this exists to fix: auto-scroll that fights the reader.
 * The user scrolls up to read a stack trace, a new line arrives, and
 * they are yanked back to the bottom. On a busy stream this makes the
 * log genuinely unreadable — the one moment you need to look at it is
 * the one moment it will not hold still.
 *
 * Following stops the instant the user scrolls away from the bottom, and
 * resumes only when they return there or press the jump control. That is
 * the whole design: the reader decides, not the stream.
 *
 * Announcement is deliberately NOT wired to a live region. A log emitting
 * several lines a second would make a screen reader unusable. The region
 * is a focusable, scrollable log the user can read on demand, and only
 * error-level lines are announced.
 * ============================================================
 */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

const LEVELS = {
  debug: { label: 'Debug', mark: '·' },
  info: { label: 'Info', mark: 'i' },
  warn: { label: 'Warning', mark: '!' },
  error: { label: 'Error', mark: '×' },
};

/** Distance from the bottom still treated as "at the bottom", in px. */
const BOTTOM_THRESHOLD = 24;

/**
 * @param {object} props
 * @param {Array<{id, level?, time?, text}>} props.lines
 * @param {number}  [props.height=320]
 * @param {number}  [props.maxLines=1000]  Older lines are dropped.
 * @param {boolean} [props.showTime=true]
 * @param {string}  [props.label='Log output']
 * @param {string}  [props.className]
 */
export default function LogStream({
  lines = [],
  height = 320,
  maxLines = 1000,
  showTime = true,
  label = 'Log output',
  className = '',
  ...rest
}) {
  const viewportRef = useRef(null);
  const [following, setFollowing] = useState(true);
  const [missed, setMissed] = useState(0);
  const lastCount = useRef(lines.length);

  const safeMax = Number.isFinite(maxLines) && maxLines > 0 ? Math.floor(maxLines) : 1000;

  // Dropping from the front bounds memory and DOM size — an unbounded
  // log viewer is a slow memory leak on any long-running stream.
  const visible = lines.length > safeMax ? lines.slice(-safeMax) : lines;

  const atBottom = useCallback(() => {
    const node = viewportRef.current;
    if (!node) return true;

    return node.scrollHeight - node.scrollTop - node.clientHeight <= BOTTOM_THRESHOLD;
  }, []);

  const onScroll = useCallback(() => {
    const bottom = atBottom();
    setFollowing(bottom);
    if (bottom) setMissed(0);
  }, [atBottom]);

  const jumpToLatest = useCallback(() => {
    const node = viewportRef.current;
    if (!node) return;

    node.scrollTop = node.scrollHeight;
    setFollowing(true);
    setMissed(0);
  }, []);

  // useLayoutEffect, not useEffect: scrolling must happen in the same
  // frame the new lines paint, or the viewport visibly jumps.
  useLayoutEffect(() => {
    const grew = lines.length - lastCount.current;
    lastCount.current = lines.length;

    if (grew <= 0) return;

    if (following) {
      const node = viewportRef.current;
      if (node) node.scrollTop = node.scrollHeight;
    } else {
      // Counting what arrived while paused is what makes the jump
      // control informative rather than just a scroll button.
      setMissed((n) => n + grew);
    }
  }, [lines.length, following]);

  // Only errors are announced. A live region on the whole stream would
  // make a screen reader unusable at any real log rate.
  const lastError = visible.filter((l) => l?.level === 'error').slice(-1)[0];

  const classes = [
    'ease-log-ad',
    following ? 'ease-log-ad--following' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      <div
        className="ease-log-ad__viewport"
        ref={viewportRef}
        style={{ height: `${height}px` }}
        onScroll={onScroll}
        tabIndex={0}
        role="log"
        aria-label={label}
        // `off` deliberately: the region is readable on demand rather
        // than announced continuously.
        aria-live="off"
      >
        {visible.length === 0 ? (
          <p className="ease-log-ad__empty">No output yet</p>
        ) : (
          <ol className="ease-log-ad__list">
            {visible.map((line, index) => {
              const level = line?.level in LEVELS ? line.level : 'info';

              return (
                <li
                  className={`ease-log-ad__line ease-log-ad__line--${level}`}
                  key={line?.id ?? index}
                >
                  {/* Glyph as well as colour, so level survives greyscale. */}
                  <span className="ease-log-ad__mark" aria-hidden="true">
                    {LEVELS[level].mark}
                  </span>
                  <span className="ease-log-ad__sr">{LEVELS[level].label}:</span>

                  {showTime && line?.time && (
                    <span className="ease-log-ad__time">{line.time}</span>
                  )}

                  <span className="ease-log-ad__text">{line?.text}</span>
                </li>
              );
            })}
          </ol>
        )}
      </div>

      {!following && (
        <button className="ease-log-ad__jump" type="button" onClick={jumpToLatest}>
          {missed > 0 ? `${missed} new line${missed === 1 ? '' : 's'}` : 'Jump to latest'}
        </button>
      )}

      <span className="ease-log-ad__sr" role="status" aria-live="polite">
        {lastError ? `Error: ${lastError.text}` : ''}
      </span>
    </div>
  );
}
