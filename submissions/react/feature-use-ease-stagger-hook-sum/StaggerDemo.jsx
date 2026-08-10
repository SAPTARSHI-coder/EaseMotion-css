import React, { useCallback, useState } from 'react';
import useEaseStagger from './useEaseStagger';
import './style.css';

/**
 * StaggerDemo — remounting grid that demonstrates useEaseStagger with a Replay control.
 *
 * @param {Object} props
 * @param {number} [props.itemCount=6]
 * @param {number} [props.baseDelay=100]
 */
export default function StaggerDemo({ itemCount = 6, baseDelay = 100 }) {
  const [count, setCount] = useState(itemCount);
  const [delay, setDelay] = useState(baseDelay);
  const [replayKey, setReplayKey] = useState(0);

  const stagger = useEaseStagger(count, delay);

  const items = Array.from({ length: count }, (_, index) => ({
    id: `item-${index + 1}`,
    label: `Item ${index + 1}`,
  }));

  const handleReplay = useCallback(() => {
    setReplayKey((key) => key + 1);
  }, []);

  const debugOutput = stagger.delays
    .map((ms, index) => `${index}: ${stagger.classNames[index] || '(none)'} → ${ms}ms`)
    .join('\n');

  return (
    <div className="stagger-demo">
      <header className="stagger-demo__header">
        <h1>useEaseStagger Demo</h1>
        <p>
          Adjust count and base delay, then replay to remount the grid with fresh stagger timing.
        </p>
      </header>

      <div className="stagger-demo__controls">
        <label>
          Count{' '}
          <input
            type="number"
            min={1}
            max={12}
            value={count}
            onChange={(e) => setCount(Math.max(1, Number(e.target.value) || 1))}
          />
        </label>
        <label>
          Base delay (ms){' '}
          <input
            type="number"
            min={0}
            max={500}
            step={10}
            value={delay}
            onChange={(e) => setDelay(Math.max(0, Number(e.target.value) || 0))}
          />
        </label>
        <button type="button" className="replay-btn" onClick={handleReplay}>
          Replay
        </button>
      </div>

      <ul className="stagger-grid" key={replayKey}>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={['stagger-item', stagger.classNames[index]].filter(Boolean).join(' ')}
            style={stagger.styleMaps[index]}
          >
            <span className="stagger-item__label">{item.label}</span>
            <span className="stagger-item__meta">
              {stagger.classNames[index] || 'no delay'} · {stagger.delays[index]}ms
            </span>
          </li>
        ))}
      </ul>

      <pre className="stagger-debug" aria-label="Stagger debug output">
        {stagger.prefersReducedMotion
          ? 'prefers-reduced-motion: all delays zeroed\n\n'
          : ''}
        {debugOutput}
      </pre>
    </div>
  );
}
