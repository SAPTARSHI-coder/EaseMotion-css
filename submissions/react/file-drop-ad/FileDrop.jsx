/**
 * EaseMotion CSS — FileDrop
 * ============================================================
 * Drag-and-drop upload zone with validation.
 *
 * Three things hand-rolled drop zones almost always get wrong:
 *
 *  1. Silent rejection. An invalid file is dropped, nothing happens, and
 *     the user has no idea why. Rejections here are collected, rendered,
 *     and announced through a live region.
 *
 *  2. The dragleave flicker. `dragleave` fires every time the pointer
 *     crosses a CHILD element, so a naive implementation flashes the
 *     drag state on and off while moving over the zone's own contents.
 *     A depth counter fixes this — increment on enter, decrement on
 *     leave, and only clear at zero.
 *
 *  3. No keyboard path. A pointer-only drop zone is unusable without a
 *     mouse. The zone is a real <button> that opens the file picker.
 * ============================================================
 */

import { useCallback, useId, useRef, useState } from 'react';

/** Human-readable byte size. */
function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes < 0) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Match a file against an accept list.
 * Supports exact types (`image/png`) and wildcards (`image/*`).
 */
function matchesAccept(file, accept) {
  if (!accept || accept.length === 0) return true;

  return accept.some((pattern) => {
    if (pattern.endsWith('/*')) {
      return file.type.startsWith(pattern.slice(0, -1));
    }
    if (pattern.startsWith('.')) {
      return file.name.toLowerCase().endsWith(pattern.toLowerCase());
    }
    return file.type === pattern;
  });
}

/**
 * @param {object} props
 * @param {string[]} [props.accept=[]]  MIME types, wildcards or extensions.
 * @param {number}   [props.maxSize]    Max bytes per file.
 * @param {number}   [props.maxFiles]   Max file count.
 * @param {boolean}  [props.multiple=true]
 * @param {(files: File[]) => void} props.onFiles  Accepted files.
 * @param {(rejections: Array<{name: string, reason: string}>) => void} [props.onReject]
 * @param {string}   [props.label='Drop files here']
 * @param {string}   [props.hint]
 * @param {boolean}  [props.disabled=false]
 * @param {string}   [props.className]
 */
export default function FileDrop({
  accept = [],
  maxSize,
  maxFiles,
  multiple = true,
  onFiles,
  onReject,
  label = 'Drop files here',
  hint,
  disabled = false,
  className = '',
  ...rest
}) {
  const inputId = useId();
  const inputRef = useRef(null);
  // `dragleave` fires on every child boundary crossing, so a boolean would
  // flicker. Counting enters and leaves is the only reliable fix.
  const depthRef = useRef(0);

  const [dragging, setDragging] = useState(false);
  const [rejections, setRejections] = useState([]);

  const validate = useCallback(
    (fileList) => {
      const incoming = Array.from(fileList);
      const accepted = [];
      const rejected = [];

      incoming.forEach((file) => {
        if (!matchesAccept(file, accept)) {
          rejected.push({ name: file.name, reason: 'unsupported file type' });
          return;
        }
        if (Number.isFinite(maxSize) && file.size > maxSize) {
          rejected.push({
            name: file.name,
            reason: `larger than ${formatBytes(maxSize)}`,
          });
          return;
        }
        accepted.push(file);
      });

      // Count check runs after per-file checks, so the message reflects
      // files that actually qualified rather than everything dropped.
      let kept = accepted;

      if (Number.isFinite(maxFiles) && accepted.length > maxFiles) {
        kept = accepted.slice(0, maxFiles);
        accepted.slice(maxFiles).forEach((file) => {
          rejected.push({
            name: file.name,
            reason: `over the ${maxFiles} file limit`,
          });
        });
      }

      setRejections(rejected);

      if (rejected.length > 0) onReject?.(rejected);
      if (kept.length > 0) onFiles?.(kept);
    },
    [accept, maxSize, maxFiles, onFiles, onReject],
  );

  const onDragEnter = useCallback(
    (event) => {
      if (disabled) return;
      event.preventDefault();
      depthRef.current += 1;
      setDragging(true);
    },
    [disabled],
  );

  const onDragLeave = useCallback((event) => {
    event.preventDefault();
    depthRef.current -= 1;
    if (depthRef.current <= 0) {
      depthRef.current = 0;
      setDragging(false);
    }
  }, []);

  // Without preventDefault on dragover the browser navigates to the file,
  // discarding the page — the single most common drop-zone bug.
  const onDragOver = useCallback(
    (event) => {
      if (disabled) return;
      event.preventDefault();
    },
    [disabled],
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      depthRef.current = 0;
      setDragging(false);

      if (disabled) return;
      if (event.dataTransfer?.files?.length) {
        validate(event.dataTransfer.files);
      }
    },
    [disabled, validate],
  );

  const onChange = useCallback(
    (event) => {
      if (event.target.files?.length) {
        validate(event.target.files);
      }
      // Reset so selecting the same file twice still fires a change event.
      event.target.value = '';
    },
    [validate],
  );

  const classes = [
    'ease-drop-ad',
    dragging ? 'ease-drop-ad--dragging' : '',
    disabled ? 'ease-drop-ad--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      <input
        className="ease-drop-ad__input"
        ref={inputRef}
        id={inputId}
        type="file"
        accept={accept.join(',')}
        multiple={multiple}
        disabled={disabled}
        onChange={onChange}
        tabIndex={-1}
      />

      <button
        className="ease-drop-ad__zone"
        type="button"
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <span className="ease-drop-ad__icon" aria-hidden="true">
          ↥
        </span>
        <span className="ease-drop-ad__label">{label}</span>
        <span className="ease-drop-ad__hint">
          {hint ?? 'or click to browse'}
        </span>
      </button>

      {/* Announced politely so rejections are not silent to screen readers. */}
      <div className="ease-drop-ad__errors" role="status" aria-live="polite">
        {rejections.map((rejection, index) => (
          <p className="ease-drop-ad__error" key={`${rejection.name}-${index}`}>
            <strong>{rejection.name}</strong> — {rejection.reason}
          </p>
        ))}
      </div>
    </div>
  );
}
