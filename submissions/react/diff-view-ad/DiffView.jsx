/**
 * EaseMotion CSS — DiffView
 * ============================================================
 * Read-only inline diff renderer.
 *
 * Diffs are the worst common offender for colour-only encoding: added
 * and removed lines are distinguished purely by a green or red tint, so
 * to a user with deuteranopia the two are the same pale grey band.
 *
 * Every line here carries a `+` / `-` / space prefix in the gutter, a
 * distinct border treatment, and a screen-reader word ("Added", "Removed")
 * — so the diff is readable in greyscale, in print, and aloud.
 *
 * Line numbers are rendered with CSS `content` from a data attribute
 * rather than as text nodes, so selecting and copying the diff yields
 * the code alone without line numbers pasted into it.
 * ============================================================
 */

import { useMemo } from 'react';

/** Gutter symbol and spoken word per line type. */
const TYPES = {
  add: { symbol: '+', word: 'Added' },
  remove: { symbol: '-', word: 'Removed' },
  context: { symbol: ' ', word: '' },
  meta: { symbol: '@', word: 'Section' },
};

/**
 * @param {object} props
 * @param {Array<{type: string, text: string, oldLine?: number, newLine?: number}>} props.lines
 * @param {string}  [props.filename]
 * @param {boolean} [props.showLineNumbers=true]
 * @param {boolean} [props.wrap=false]  Wrap long lines instead of scrolling.
 * @param {string}  [props.label='Diff']
 * @param {string}  [props.className]
 */
export default function DiffView({
  lines = [],
  filename,
  showLineNumbers = true,
  wrap = false,
  label = 'Diff',
  className = '',
  ...rest
}) {
  const rows = useMemo(
    () =>
      lines
        .filter((line) => line && typeof line === 'object')
        .map((line) => {
          const type = TYPES[line.type] ? line.type : 'context';
          return {
            type,
            symbol: TYPES[type].symbol,
            word: TYPES[type].word,
            text: typeof line.text === 'string' ? line.text : String(line.text ?? ''),
            oldLine: line.oldLine,
            newLine: line.newLine,
          };
        }),
    [lines],
  );

  const stats = useMemo(() => {
    let added = 0;
    let removed = 0;
    rows.forEach((row) => {
      if (row.type === 'add') added += 1;
      if (row.type === 'remove') removed += 1;
    });
    return { added, removed };
  }, [rows]);

  if (rows.length === 0) return null;

  const classes = [
    'ease-diff-ad',
    wrap ? 'ease-diff-ad--wrap' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure className={classes} aria-label={label} {...rest}>
      {(filename || rows.length > 0) && (
        <figcaption className="ease-diff-ad__head">
          {filename && <span className="ease-diff-ad__file">{filename}</span>}
          <span className="ease-diff-ad__stats">
            <span className="ease-diff-ad__stat ease-diff-ad__stat--add">
              +{stats.added}
            </span>
            <span className="ease-diff-ad__stat ease-diff-ad__stat--remove">
              −{stats.removed}
            </span>
          </span>
        </figcaption>
      )}

      <div className="ease-diff-ad__body">
        {rows.map((row, index) => (
          <div
            className={`ease-diff-ad__line ease-diff-ad__line--${row.type}`}
            key={index}
          >
            {showLineNumbers && (
              <>
                {/* Numbers live in data attributes and are drawn via CSS
                    content, so copying the diff does not capture them. */}
                <span
                  className="ease-diff-ad__num"
                  data-line={row.oldLine ?? ''}
                  aria-hidden="true"
                />
                <span
                  className="ease-diff-ad__num"
                  data-line={row.newLine ?? ''}
                  aria-hidden="true"
                />
              </>
            )}

            <span className="ease-diff-ad__gutter" aria-hidden="true">
              {row.symbol}
            </span>

            {row.word && <span className="ease-diff-ad__sr">{row.word}: </span>}

            <code className="ease-diff-ad__code">{row.text}</code>
          </div>
        ))}
      </div>
    </figure>
  );
}
