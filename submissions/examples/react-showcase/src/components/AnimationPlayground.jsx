/**
 * AnimationPlayground — Interactive animation selector.
 *
 * Renders a labelled `<select>` dropdown of available EaseMotion animation
 * classes.  When the user changes the selection the preview box re-renders
 * with the new class applied, resetting the animation via a key-swap trick
 * so the animation replays on every selection.
 */
import React, { useState, useCallback } from 'react';
import styles from './AnimationPlayground.module.css';

export const ANIMATION_OPTIONS = [
  { label: 'Fade In',     value: 'ease-fade-in' },
  { label: 'Slide Up',    value: 'ease-slide-up' },
  { label: 'Slide Down',  value: 'ease-slide-down' },
  { label: 'Slide Left',  value: 'ease-slide-left' },
  { label: 'Slide Right', value: 'ease-slide-right' },
  { label: 'Zoom In',     value: 'ease-zoom-in' },
  { label: 'Bounce',      value: 'ease-bounce' },
  { label: 'Shake',       value: 'ease-shake' },
  { label: 'Pulse',       value: 'ease-pulse' },
  { label: 'Spin',        value: 'ease-spin' },
  { label: 'Flip',        value: 'ease-flip' },
];

const DEFAULT_ANIMATION = ANIMATION_OPTIONS[0].value;

function AnimationPlayground() {
  const [selectedAnimation, setSelectedAnimation] = useState(DEFAULT_ANIMATION);
  // replayKey increments on each selection so the animation element is
  // remounted (forcing the animation to replay from the start).
  const [replayKey, setReplayKey] = useState(0);

  const handleChange = useCallback((e) => {
    setSelectedAnimation(e.target.value);
    setReplayKey((k) => k + 1);
  }, []);

  return (
    <section className={styles.container} data-testid="animation-playground">
      <h2 className={styles.heading}>Animation Playground</h2>
      <p className={styles.description}>
        Select an animation below to preview it live. Each class maps directly
        to an EaseMotion CSS utility class.
      </p>

      <div className={styles.controls}>
        <label htmlFor="animation-select" className={styles.label}>
          Animation class
        </label>
        <select
          id="animation-select"
          className={styles.select}
          value={selectedAnimation}
          onChange={handleChange}
          data-testid="animation-select"
          aria-label="Select animation"
        >
          {ANIMATION_OPTIONS.map(({ label, value }) => (
            <option key={value} value={value}>
              {label} — .{value}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.previewArea}>
        <div
          key={replayKey}
          className={[styles.previewBox, selectedAnimation].join(' ')}
          data-testid="animation-preview"
          aria-live="polite"
          aria-label={`Animation preview: ${selectedAnimation}`}
        >
          <span className={styles.classLabel}>.{selectedAnimation}</span>
        </div>
      </div>
    </section>
  );
}

export default AnimationPlayground;
