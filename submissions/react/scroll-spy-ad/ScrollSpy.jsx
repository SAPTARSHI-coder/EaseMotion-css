/**
 * EaseMotion CSS — ScrollSpy
 * ============================================================
 * Section navigation that highlights whatever is currently in view.
 *
 * Uses IntersectionObserver rather than a scroll listener. A scroll
 * handler fires dozens of times per second and calls getBoundingClientRect
 * on every section each time, which forces synchronous layout — the
 * classic cause of janky scrolling on documentation pages.
 *
 * Two details that are easy to get wrong:
 *
 *   rootMargin must account for a sticky header. Without it, a section
 *   "enters the viewport" while still hidden behind the header, so the
 *   nav highlights the next item before the user can see it.
 *
 *   With several sections visible at once, `isIntersecting` alone is
 *   ambiguous — every visible section reports true. The topmost visible
 *   section is selected by comparing boundingClientRect.top, which is
 *   what a reader actually perceives as "current".
 * ============================================================
 */

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * @param {object} props
 * @param {Array<{id: string, label: string}>} props.sections
 * @param {number}  [props.offset=0]     Sticky header height, in px.
 * @param {string}  [props.label='Page sections']
 * @param {(id: string) => void} [props.onChange]
 * @param {string}  [props.className]
 */
export default function ScrollSpy({
  sections = [],
  offset = 0,
  label = 'Page sections',
  onChange,
  className = '',
  ...rest
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? null);
  const observerRef = useRef(null);
  const visibleRef = useRef(new Map());
  const onChangeRef = useRef(onChange);

  // Held in a ref so an inline arrow passed as onChange does not tear
  // down and rebuild the observer on every parent render.
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const ids = sections.map((section) => section.id).filter(Boolean);
    if (ids.length === 0) return undefined;

    const visible = visibleRef.current;
    visible.clear();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        });

        if (visible.size === 0) return;

        // Topmost visible section wins — with several on screen at once,
        // isIntersecting alone cannot disambiguate.
        let bestId = null;
        let bestTop = Infinity;

        visible.forEach((top, id) => {
          if (top < bestTop) {
            bestTop = top;
            bestId = id;
          }
        });

        if (bestId) {
          setActiveId((previous) => {
            if (previous !== bestId) onChangeRef.current?.(bestId);
            return bestId;
          });
        }
      },
      {
        // Negative top margin pulls the trigger line below a sticky header,
        // so a section is only "current" once actually visible.
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: 0,
      },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    observerRef.current = observer;

    // Disconnect on unmount and whenever sections/offset change, or
    // observers accumulate and keep firing against stale nodes.
    return () => {
      observer.disconnect();
      observerRef.current = null;
      visible.clear();
    };
  }, [sections, offset]);

  const handleClick = useCallback(
    (event, id) => {
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();

      const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: prefersReduced ? 'auto' : 'smooth',
      });

      // Move focus to the section so keyboard users actually land there —
      // scrolling alone leaves focus in the nav.
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });

      setActiveId(id);
    },
    [offset],
  );

  if (sections.length === 0) return null;

  const classes = ['ease-spy-ad', className].filter(Boolean).join(' ');

  return (
    <nav className={classes} aria-label={label} {...rest}>
      <ul className="ease-spy-ad__list">
        {sections.map((section) => {
          const isActive = section.id === activeId;

          return (
            <li className="ease-spy-ad__item" key={section.id}>
              <a
                className={
                  isActive
                    ? 'ease-spy-ad__link ease-spy-ad__link--active'
                    : 'ease-spy-ad__link'
                }
                href={`#${section.id}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={(event) => handleClick(event, section.id)}
              >
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
