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
    .catch(err => console.error(err))