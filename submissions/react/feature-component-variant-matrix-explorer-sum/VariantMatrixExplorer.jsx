import React, { useMemo, useState } from 'react';
import './style.css';

const SIZES = ['sm', 'md', 'lg'];
const VARIANTS = ['solid', 'outline', 'ghost'];
const HOVER_MODES = ['lift', 'glow', 'none'];

const SIZE_LABELS = { sm: 'Small', md: 'Medium', lg: 'Large' };
const VARIANT_LABELS = { solid: 'Solid', outline: 'Outline', ghost: 'Ghost' };
const HOVER_LABELS = { lift: 'Lift', glow: 'Glow', none: 'None' };

function buildSnippet(size, variant, hover) {
  const classes = [
    'vmx-btn-sum',
    `vmx-btn-sum--${size}`,
    `vmx-btn-sum--${variant}`,
    hover !== 'none' ? `vmx-btn-sum--hover-${hover}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return `<button type="button" className="${classes}">\n  Explore motion\n</button>`;
}

/**
 * VariantMatrixExplorer — interactive Button × Size × Variant × Hover matrix.
 */
const VariantMatrixExplorer = () => {
  const [size, setSize] = useState('md');
  const [variant, setVariant] = useState('solid');
  const [hover, setHover] = useState('lift');
  const [copied, setCopied] = useState(false);

  const previewClass = useMemo(
    () =>
      [
        'vmx-btn-sum',
        `vmx-btn-sum--${size}`,
        `vmx-btn-sum--${variant}`,
        hover !== 'none' ? `vmx-btn-sum--hover-${hover}` : '',
      ]
        .filter(Boolean)
        .join(' '),
    [size, variant, hover]
  );

  const snippet = useMemo(() => buildSnippet(size, variant, hover), [size, variant, hover]);

  const copySnippet = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="vmx-page-sum">
      <header className="vmx-header-sum">
        <h1>Component Variant Matrix</h1>
        <p>Click a matrix cell to preview Button × Size × Variant × Hover in isolation.</p>
      </header>

      <div className="vmx-layout-sum">
        <section className="vmx-matrix-panel-sum" aria-label="Variant matrix">
          <h2>Size × Variant</h2>
          <div className="vmx-matrix-sum" role="grid" aria-label="Size and variant combinations">
            <div className="vmx-matrix-sum__corner" role="presentation" />
            {VARIANTS.map((v) => (
              <div key={v} className="vmx-matrix-sum__col-head" role="columnheader">
                {VARIANT_LABELS[v]}
              </div>
            ))}
            {SIZES.map((s) => (
              <React.Fragment key={s}>
                <div className="vmx-matrix-sum__row-head" role="rowheader">
                  {SIZE_LABELS[s]}
                </div>
                {VARIANTS.map((v) => {
                  const active = size === s && variant === v;
                  return (
                    <button
                      key={`${s}-${v}`}
                      type="button"
                      role="gridcell"
                      className={`vmx-matrix-sum__cell${active ? ' vmx-matrix-sum__cell--active' : ''}`}
                      aria-pressed={active}
                      onClick={() => {
                        setSize(s);
                        setVariant(v);
                      }}
                    >
                      {SIZE_LABELS[s]} / {VARIANT_LABELS[v]}
                    </button>
                  );
                })}
              </React.Fragment>
            ))}
          </div>

          <fieldset className="vmx-hover-sum">
            <legend>Hover motion</legend>
            <div className="vmx-hover-sum__row">
              {HOVER_MODES.map((mode) => (
                <label key={mode} className="vmx-hover-sum__label">
                  <input
                    type="radio"
                    name="vmx-hover-sum"
                    value={mode}
                    checked={hover === mode}
                    onChange={() => setHover(mode)}
                  />
                  {HOVER_LABELS[mode]}
                </label>
              ))}
            </div>
          </fieldset>
        </section>

        <section className="vmx-preview-panel-sum" aria-label="Isolated preview">
          <h2>Preview</h2>
          <div className="vmx-preview-stage-sum">
            <button type="button" className={previewClass}>
              Explore motion
            </button>
          </div>
          <p className="vmx-meta-sum">
            <code>{previewClass}</code>
          </p>

          <div className="vmx-snippet-sum">
            <div className="vmx-snippet-sum__head">
              <span>Copyable JSX</span>
              <button type="button" onClick={copySnippet}>
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="vmx-snippet-sum__code">
              <code>{snippet}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VariantMatrixExplorer;
