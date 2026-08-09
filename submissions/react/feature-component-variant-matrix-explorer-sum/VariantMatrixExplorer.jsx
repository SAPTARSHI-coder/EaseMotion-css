import React, { useCallback, useMemo, useState } from 'react';
import './style.css';

const SIZES = [
  { id: 'sm', label: 'Small', localClass: 'btn-sm', easeClass: 'ease-btn-sm' },
  { id: 'md', label: 'Medium', localClass: 'btn-md', easeClass: 'ease-btn-md' },
  { id: 'lg', label: 'Large', localClass: 'btn-lg', easeClass: 'ease-btn-lg' },
];

const VARIANTS = [
  { id: 'primary', label: 'Primary', localClass: 'btn-primary', easeClass: 'ease-btn-primary' },
  { id: 'secondary', label: 'Secondary', localClass: 'btn-secondary', easeClass: 'ease-btn-secondary' },
  { id: 'ghost', label: 'Ghost', localClass: 'btn-ghost', easeClass: 'ease-btn-ghost' },
];

const HOVER_OPTIONS = [
  { id: 'none', label: 'Default', easeClass: '' },
  { id: 'lift', label: 'Lift', easeClass: 'ease-hover-lift' },
  { id: 'glow', label: 'Glow', easeClass: 'ease-hover-glow' },
];

function buildLocalClassName(size, variant) {
  return ['btn', size.localClass, variant.localClass].join(' ');
}

function buildEaseClassName(size, variant, hover) {
  return ['ease-btn', size.easeClass, variant.easeClass, hover.easeClass]
    .filter(Boolean)
    .join(' ');
}

function buildJsxSnippet(size, variant, hover) {
  const easeClasses = buildEaseClassName(size, variant, hover);
  return `<button type="button" className="${easeClasses}">\n  ${variant.label} ${size.label}\n</button>`;
}

/**
 * VariantMatrixExplorer — explore Button × Size × Variant × Hover combinations.
 */
export default function VariantMatrixExplorer() {
  const [selectedSizeId, setSelectedSizeId] = useState('md');
  const [selectedVariantId, setSelectedVariantId] = useState('primary');
  const [selectedHoverId, setSelectedHoverId] = useState('lift');
  const [hoverPreview, setHoverPreview] = useState(true);
  const [copyStatus, setCopyStatus] = useState('');

  const selectedSize = SIZES.find((s) => s.id === selectedSizeId) ?? SIZES[1];
  const selectedVariant = VARIANTS.find((v) => v.id === selectedVariantId) ?? VARIANTS[0];
  const selectedHover = HOVER_OPTIONS.find((h) => h.id === selectedHoverId) ?? HOVER_OPTIONS[1];

  const jsxSnippet = useMemo(
    () => buildJsxSnippet(selectedSize, selectedVariant, selectedHover),
    [selectedSize, selectedVariant, selectedHover]
  );

  const handleCellSelect = useCallback((sizeId, variantId) => {
    setSelectedSizeId(sizeId);
    setSelectedVariantId(variantId);
    setCopyStatus('');
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(jsxSnippet);
      setCopyStatus('Copied to clipboard.');
    } catch {
      setCopyStatus('Copy failed — select the snippet manually.');
    }
  }, [jsxSnippet]);

  return (
    <div className="matrix-explorer">
      <header className="matrix-explorer__header">
        <h1>Variant Matrix Explorer</h1>
        <p>
          Click a cell to preview a button combination and copy the matching EaseMotion JSX class
          string.
        </p>
      </header>

      <div className="matrix-controls">
        <fieldset>
          <legend>Matrix size filter</legend>
          {SIZES.map((size) => (
            <label key={size.id}>
              <input
                type="radio"
                name="matrix-size"
                value={size.id}
                checked={selectedSizeId === size.id}
                onChange={() => setSelectedSizeId(size.id)}
              />
              {size.label}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Hover motion</legend>
          {HOVER_OPTIONS.map((hover) => (
            <label key={hover.id}>
              <input
                type="radio"
                name="matrix-hover"
                value={hover.id}
                checked={selectedHoverId === hover.id}
                onChange={() => setSelectedHoverId(hover.id)}
              />
              {hover.label}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Preview</legend>
          <label>
            <input
              type="checkbox"
              checked={hoverPreview}
              onChange={(e) => setHoverPreview(e.target.checked)}
            />
            Show hover state in matrix
          </label>
        </fieldset>
      </div>

      <div className="matrix-grid-wrap">
        <table className="matrix-grid">
          <thead>
            <tr>
              <th scope="col">Size ↓ / Variant →</th>
              {VARIANTS.map((variant) => (
                <th key={variant.id} scope="col">
                  {variant.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SIZES.map((size) => (
              <tr key={size.id}>
                <th scope="row">{size.label}</th>
                {VARIANTS.map((variant) => {
                  const isSelected =
                    size.id === selectedSizeId && variant.id === selectedVariantId;
                  const cellClass = [
                    'matrix-cell',
                    isSelected ? 'is-selected' : '',
                    hoverPreview && selectedHoverId !== 'none' ? 'is-hover-preview' : '',
                  ]
                    .filter(Boolean)
                    .join(' ');

                  return (
                    <td key={variant.id}>
                      <button
                        type="button"
                        className={cellClass}
                        aria-label={`${variant.label} ${size.label} button`}
                        aria-pressed={isSelected}
                        onClick={() => handleCellSelect(size.id, variant.id)}
                      >
                        <span className={buildLocalClassName(size, variant)}>
                          {variant.label}
                        </span>
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="preview-panel">
        <section className="preview-isolated" aria-labelledby="isolated-heading">
          <h2 id="isolated-heading">Isolated preview</h2>
          <div className="preview-stage">
            <button type="button" className={buildLocalClassName(selectedSize, selectedVariant)}>
              {selectedVariant.label} {selectedSize.label}
            </button>
          </div>
        </section>

        <section className="snippet-panel" aria-labelledby="snippet-heading">
          <h2 id="snippet-heading">Copyable JSX (EaseMotion classes)</h2>
          <pre className="snippet-code">{jsxSnippet}</pre>
          <button type="button" className="copy-btn" onClick={handleCopy}>
            Copy JSX
          </button>
          <span className="copy-status" aria-live="polite">
            {copyStatus}
          </span>
        </section>
      </div>
    </div>
  );
}
