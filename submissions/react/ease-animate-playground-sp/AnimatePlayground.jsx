import React, { useState, useMemo, useCallback } from 'react';
import './style.css';

/**
 * Animate — React wrapper for EaseMotion CSS animations.
 * Maps declarative props to ease-* utility classes.
 *
 * Props:
 *   type      — animation name (fade-in, slide-up, zoom-in, bounce, spin…)
 *   duration  — 'fast' | 'medium' | 'slow' | number (ms)
 *   delay     — delay in ms
 *   hover     — hover effect (grow, lift, glow, shimmer…)
 *   tag       — HTML element tag (default: 'div')
 *   className — additional CSS classes
 */
export function Animate({
  type,
  duration = 'medium',
  delay = 0,
  hover,
  tag: Tag = 'div',
  className = '',
  style = {},
  children,
  ...props
}) {
  const classes = [];

  if (type) {
    const animClass = type === 'spin' ? 'ease-rotate' : `ease-${type}`;
    classes.push(animClass);
  }

  if (duration === 'fast' || duration === 'medium' || duration === 'slow') {
    classes.push(`ease-duration-${duration}`);
  }

  if (hover) {
    classes.push(`ease-hover-${hover}`);
  }

  if (className) {
    classes.push(className);
  }

  const inlineStyle = { ...style };

  if (delay > 0) {
    inlineStyle.animationDelay = `${delay}ms`;
  }

  if (typeof duration === 'number') {
    inlineStyle.animationDuration = `${duration}ms`;
  }

  return (
    <Tag className={classes.filter(Boolean).join(' ')} style={inlineStyle} {...props}>
      {children}
    </Tag>
  );
}

/* ── Playground configuration ─────────────────────────────── */

const ANIMATION_TYPES = [
  { value: 'fade-in', label: 'Fade In' },
  { value: 'slide-up', label: 'Slide Up' },
  { value: 'slide-down', label: 'Slide Down' },
  { value: 'slide-in-left', label: 'Slide Left' },
  { value: 'slide-in-right', label: 'Slide Right' },
  { value: 'zoom-in', label: 'Zoom In' },
  { value: 'zoom-out', label: 'Zoom Out' },
  { value: 'bounce', label: 'Bounce' },
  { value: 'spin', label: 'Spin' },
  { value: 'pulse', label: 'Pulse' },
  { value: 'shake', label: 'Shake' },
];

const DURATION_OPTIONS = [
  { value: 'fast', label: 'fast (150ms)' },
  { value: 'medium', label: 'medium (300ms)' },
  { value: 'slow', label: 'slow (600ms)' },
  { value: 'custom', label: 'custom (ms)' },
];

const HOVER_OPTIONS = [
  { value: '', label: 'None' },
  { value: 'grow', label: 'grow' },
  { value: 'lift', label: 'lift' },
  { value: 'glow', label: 'glow' },
  { value: 'shimmer', label: 'shimmer' },
  { value: 'scale', label: 'scale' },
];

const TAG_OPTIONS = ['div', 'section', 'article', 'span', 'button'];

const PRESETS = [
  {
    name: 'Hero entrance',
    type: 'fade-in',
    duration: 'medium',
    delay: 0,
    hover: '',
    tag: 'div',
    className: '',
  },
  {
    name: 'Staggered card',
    type: 'slide-up',
    duration: 'medium',
    delay: 200,
    hover: 'lift',
    tag: 'div',
    className: 'ease-card',
  },
  {
    name: 'CTA button',
    type: 'zoom-in',
    duration: 'fast',
    delay: 300,
    hover: 'grow',
    tag: 'button',
    className: 'ease-btn ease-btn-primary',
  },
  {
    name: 'Attention shake',
    type: 'shake',
    duration: 'slow',
    delay: 0,
    hover: '',
    tag: 'div',
    className: '',
  },
];

const PROPS_REFERENCE = [
  { prop: 'type', type: 'string', def: '—', desc: "Animation name (e.g. 'fade-in', 'slide-up', 'zoom-in')" },
  { prop: 'duration', type: "'fast' | 'medium' | 'slow' | number", def: "'medium'", desc: 'Duration keyword or milliseconds' },
  { prop: 'delay', type: 'number', def: '0', desc: 'Delay in ms before animation starts' },
  { prop: 'hover', type: 'string', def: '—', desc: "Hover effect (e.g. 'lift', 'glow', 'grow')" },
  { prop: 'tag', type: 'string', def: "'div'", desc: 'HTML tag to render' },
  { prop: 'className', type: 'string', def: "''", desc: 'Additional CSS classes' },
];

function buildJsx({ type, duration, delay, hover, tag, className, customDuration }) {
  const props = [];
  if (type) props.push(`type="${type}"`);
  if (duration === 'custom' && customDuration) {
    props.push(`duration={${customDuration}}`);
  } else if (duration && duration !== 'medium') {
    props.push(`duration="${duration}"`);
  }
  if (delay > 0) props.push(`delay={${delay}}`);
  if (hover) props.push(`hover="${hover}"`);
  if (tag && tag !== 'div') props.push(`tag="${tag}"`);
  if (className) props.push(`className="${className}"`);

  const propsStr = props.length ? ' ' + props.join(' ') : '';
  return `<Animate${propsStr}>\n  Your content here\n</Animate>`;
}

/**
 * AnimatePlayground — interactive props explorer for the Animate wrapper.
 */
export default function AnimatePlayground() {
  const [type, setType] = useState('fade-in');
  const [duration, setDuration] = useState('medium');
  const [customDuration, setCustomDuration] = useState(400);
  const [delay, setDelay] = useState(0);
  const [hover, setHover] = useState('');
  const [tag, setTag] = useState('div');
  const [className, setClassName] = useState('ap-preview-card');
  const [previewKey, setPreviewKey] = useState(0);
  const [copyStatus, setCopyStatus] = useState('');

  const resolvedDuration = duration === 'custom' ? customDuration : duration;

  const jsxOutput = useMemo(
    () => buildJsx({ type, duration, delay, hover, tag, className, customDuration }),
    [type, duration, delay, hover, tag, className, customDuration]
  );

  const applyPreset = useCallback((preset) => {
    setType(preset.type);
    setDuration(preset.duration);
    setDelay(preset.delay);
    setHover(preset.hover);
    setTag(preset.tag);
    setClassName(preset.className || 'ap-preview-card');
    setPreviewKey((k) => k + 1);
  }, []);

  const replay = useCallback(() => {
    setPreviewKey((k) => k + 1);
  }, []);

  const copyJsx = useCallback(() => {
    navigator.clipboard.writeText(jsxOutput).then(
      () => setCopyStatus('JSX copied to clipboard!'),
      () => setCopyStatus('Copy failed — select manually.')
    );
  }, [jsxOutput]);

  return (
    <div className="ap-root">
      <header className="ap-header ease-fade-in">
        <p className="ap-eyebrow">EaseMotion CSS · React Integration</p>
        <h1>&lt;Animate&gt; Props Playground</h1>
        <p className="ap-subtitle">
          Adjust props live and watch the animation update. Copy the generated JSX
          into your own React project.
        </p>
      </header>

      <div className="ap-layout">
        {/* ── Controls ─────────────────────────────────── */}
        <aside className="ap-panel" aria-label="Animate props controls">
          <h2 className="ap-panel-title">Props</h2>

          <div className="ap-control">
            <label htmlFor="ap-type">type</label>
            <select id="ap-type" value={type} onChange={(e) => setType(e.target.value)}>
              {ANIMATION_TYPES.map((a) => (
                <option key={a.value} value={a.value}>{a.label}</option>
              ))}
            </select>
          </div>

          <div className="ap-control">
            <label htmlFor="ap-duration">duration</label>
            <select
              id="ap-duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              {DURATION_OPTIONS.map((d) => (
                <option key={d.value} value={d.value}>{d.label}</option>
              ))}
            </select>
          </div>

          {duration === 'custom' && (
            <div className="ap-control">
              <label htmlFor="ap-custom-dur">
                custom ms
                <span className="ap-value">{customDuration}ms</span>
              </label>
              <input
                id="ap-custom-dur"
                type="range"
                min="100"
                max="2000"
                step="50"
                value={customDuration}
                onChange={(e) => setCustomDuration(Number(e.target.value))}
              />
            </div>
          )}

          <div className="ap-control">
            <label htmlFor="ap-delay">
              delay (ms)
              <span className="ap-value">{delay}ms</span>
            </label>
            <input
              id="ap-delay"
              type="range"
              min="0"
              max="1000"
              step="50"
              value={delay}
              onChange={(e) => setDelay(Number(e.target.value))}
            />
          </div>

          <div className="ap-control">
            <label htmlFor="ap-hover">hover</label>
            <select id="ap-hover" value={hover} onChange={(e) => setHover(e.target.value)}>
              {HOVER_OPTIONS.map((h) => (
                <option key={h.value} value={h.value}>{h.label}</option>
              ))}
            </select>
          </div>

          <div className="ap-control">
            <label htmlFor="ap-tag">tag</label>
            <select id="ap-tag" value={tag} onChange={(e) => setTag(e.target.value)}>
              {TAG_OPTIONS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="ap-control">
            <label htmlFor="ap-class">className</label>
            <input
              id="ap-class"
              type="text"
              className="ap-text-input"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              placeholder="ease-card"
            />
          </div>

          <section className="ap-presets">
            <h3 className="ap-group-title">Presets</h3>
            <div className="ap-preset-list">
              {PRESETS.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  className="ap-preset"
                  onClick={() => applyPreset(p)}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </section>

          <button type="button" className="ap-btn-replay" onClick={replay}>
            ↺ Replay animation
          </button>
        </aside>

        {/* ── Preview + output ─────────────────────────── */}
        <section className="ap-preview-area">
          <article className="ap-preview-card-wrap">
            <h2 className="ap-section-title">Live preview</h2>
            <div className="ap-stage">
              <Animate
                key={previewKey}
                type={type}
                duration={resolvedDuration}
                delay={delay}
                hover={hover || undefined}
                tag={tag}
                className={className}
              >
                {tag === 'button' ? 'Get Started →' : 'Animate me'}
              </Animate>
            </div>
          </article>

          <article className="ap-jsx-output">
            <div className="ap-jsx-header">
              <h2 className="ap-section-title">Generated JSX</h2>
              <button type="button" className="ease-btn ease-btn-primary ease-btn-sm" onClick={copyJsx}>
                Copy JSX
              </button>
            </div>
            <pre className="ap-pre"><code>{jsxOutput}</code></pre>
            <p className="ap-status" role="status" aria-live="polite">{copyStatus}</p>
          </article>

          <article className="ap-props-table-wrap">
            <h2 className="ap-section-title">Props reference</h2>
            <div className="ap-table-scroll">
              <table className="ap-table">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {PROPS_REFERENCE.map((row) => (
                    <tr key={row.prop}>
                      <td><code>{row.prop}</code></td>
                      <td><code>{row.type}</code></td>
                      <td><code>{row.def}</code></td>
                      <td>{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
