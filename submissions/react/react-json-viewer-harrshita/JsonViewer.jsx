import React, { useState } from 'react';

/**
 * EaseMotion JsonViewer Component
 * A collapsible JSON tree with ARIA treeview pattern,
 * type-distinct rendering, and lazy expansion.
 * Supports prefers-reduced-motion.
 */
const typeColor = {
  string: '#98c379',
  number: '#d19a66',
  boolean: '#56b6c2',
  null: '#abb2bf',
  undefined: '#abb2bf',
  object: '#e06c75',
};

function JsonNode({ data, depth = 0 }) {
  const [isOpen, setIsOpen] = useState(depth < 2);
  const indent = depth * 16;
  const type = data === null ? 'null' : typeof data;
  const isObject = type === 'object' && data !== null;
  const isArray = Array.isArray(data);

  if (!isObject) {
    const display = type === 'string' ? `"${data}"` : String(data);
    return (
      <span style={{ color: typeColor[type] }}>
        {display}
        <span style={{ color: '#abb2bf', fontSize: '0.7em', marginLeft: 4 }}>
          {type}
        </span>
      </span>
    );
  }

  const entries = Object.entries(data);
  const bracket = isArray ? ['[', ']'] : ['{', '}'];

  return (
    <span className="ease-json-node">
      <button
        className="ease-json-toggle"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(o => !o)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#61afef', padding: '0 2px', fontFamily: 'monospace' }}
      >
        {isOpen ? '▾' : '▸'}
      </button>
      <span style={{ color: '#abb2bf' }}>{bracket[0]}</span>
      {isOpen ? (
        <ul role="group" style={{ paddingLeft: indent + 16, margin: 0, listStyle: 'none' }}>
          {entries.map(([key, val]) => (
            <li key={key} role="treeitem" style={{ margin: '2px 0', fontFamily: 'monospace', fontSize: '0.9rem' }}>
              <span style={{ color: '#e06c75' }}>
                {isArray ? key : `"${key}"`}
              </span>
              <span style={{ color: '#abb2bf' }}>: </span>
              <JsonNode data={val} depth={depth + 1} />
            </li>
          ))}
        </ul>
      ) : (
        <span style={{ color: '#5c6370' }}> {entries.length} {isArray ? 'items' : 'keys'} </span>
      )}
      <span style={{ color: '#abb2bf' }}>{bracket[1]}</span>
    </span>
  );
}

export const JsonViewer = ({ data, title = 'JSON Viewer' }) => (
  <div
    className="ease-json-viewer"
    role="tree"
    aria-label={title}
    style={{
      background: '#282c34',
      borderRadius: 8,
      padding: '1rem',
      overflowX: 'auto',
      fontFamily: 'monospace',
      fontSize: '0.9rem',
    }}
  >
    <h2 style={{ color: '#abb2bf', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: 1 }}>
      {title}
    </h2>
    <JsonNode data={data} depth={0} />
  </div>
);

export default JsonViewer;
