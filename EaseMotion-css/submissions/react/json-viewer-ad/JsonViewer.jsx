/**
 * EaseMotion CSS — JsonViewer
 * ============================================================
 * Collapsible JSON tree.
 *
 * Three things that matter for a viewer meant to handle real payloads:
 *
 *  1. Cycle safety. `JSON.stringify` throws on circular references, and
 *     a naive recursive renderer infinite-loops instead. A WeakSet of
 *     ancestors detects the cycle and renders a marker, so pasting a
 *     live object graph does not hang the tab.
 *
 *  2. Lazy expansion. Children are only rendered once a node is open, so
 *     a 10k-node payload costs one root render rather than ten thousand.
 *     Rendering everything and hiding it with CSS is the usual shortcut
 *     and it is why these viewers lock up on large inputs.
 *
 *  3. Type shown, not just colour. `"42"` and `42` are different values
 *     and look identical in a colour-only viewer to anyone who cannot
 *     distinguish the hues — strings are quoted, and each leaf carries
 *     its type in the accessible name.
 * ============================================================
 */

import { useCallback, useMemo, useState } from 'react';

/** Classify a value for rendering. */
function typeOf(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

function isBranch(value) {
  const t = typeOf(value);
  return t === 'object' || t === 'array';
}

function previewOf(value) {
  const t = typeOf(value);

  if (t === 'array') return `Array(${value.length})`;
  if (t === 'object') return `{${Object.keys(value).length}}`;
  return '';
}

function Node({ label, value, depth, path, defaultOpen, ancestors }) {
  const branch = isBranch(value);

  // Cycle detection: a value already on the path to the root would
  // otherwise recurse forever.
  const cyclic = branch && ancestors.has(value);

  const [open, setOpen] = useState(depth < defaultOpen);

  const entries = useMemo(() => {
    if (!branch || cyclic) return [];

    return typeOf(value) === 'array'
      ? value.map((item, index) => [String(index), item])
      : Object.entries(value);
  }, [branch, cyclic, value]);

  const type = typeOf(value);

  if (cyclic) {
    return (
      <li className="ease-json-ad__row">
        <span className="ease-json-ad__key">{label}:</span>
        <span className="ease-json-ad__cycle">[circular reference]</span>
      </li>
    );
  }

  if (!branch) {
    // Strings are quoted so "42" is never mistaken for 42 — the type is
    // also in the accessible name rather than implied by colour alone.
    const rendered = type === 'string' ? `"${value}"` : String(value);

    return (
      <li className="ease-json-ad__row">
        <span className="ease-json-ad__key">{label}:</span>
        <span
          className={`ease-json-ad__value ease-json-ad__value--${type}`}
          aria-label={`${label}, ${type}, ${rendered}`}
        >
          {rendered}
        </span>
      </li>
    );
  }

  return (
    <li className="ease-json-ad__row ease-json-ad__row--branch">
      <button
        className="ease-json-ad__toggle"
        type="button"
        aria-expanded={open}
        aria-label={`${label}, ${type} with ${entries.length} ${
          entries.length === 1 ? 'entry' : 'entries'
        }, ${open ? 'expanded' : 'collapsed'}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`ease-json-ad__caret${open ? ' ease-json-ad__caret--open' : ''}`} aria-hidden="true" />
        <span className="ease-json-ad__key">{label}:</span>
        <span className="ease-json-ad__preview">{previewOf(value)}</span>
      </button>

      {/* Children render only when open — hiding them with CSS instead is
          what makes these viewers lock up on large payloads. */}
      {open && entries.length > 0 && (
        <ul className="ease-json-ad__children" role="group">
          {entries.map(([key, child]) => (
            <Node
              key={`${path}.${key}`}
              label={key}
              value={child}
              depth={depth + 1}
              path={`${path}.${key}`}
              defaultOpen={defaultOpen}
              ancestors={new Set([...ancestors, value])}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

/**
 * @param {object} props
 * @param {*}       props.data
 * @param {string}  [props.rootLabel='root']
 * @param {number}  [props.defaultOpen=1]  Depth auto-expanded.
 * @param {string}  [props.label='JSON data']
 * @param {string}  [props.className]
 */
export default function JsonViewer({
  data,
  rootLabel = 'root',
  defaultOpen = 1,
  label = 'JSON data',
  className = '',
  ...rest
}) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      // A circular structure would throw here too, so the failure is
      // surfaced rather than leaving the button silently inert.
      await navigator.clipboard?.writeText(JSON.stringify(data, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }, [data]);

  if (data === undefined) return null;

  const classes = ['ease-json-ad', className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      <div className="ease-json-ad__bar">
        <span className="ease-json-ad__title">{label}</span>
        <button className="ease-json-ad__copy" type="button" onClick={copy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <ul className="ease-json-ad__tree" role="tree" aria-label={label}>
        <Node
          label={rootLabel}
          value={data}
          depth={0}
          path="$"
          defaultOpen={defaultOpen}
          ancestors={new Set()}
        />
      </ul>
    </div>
  );
}
