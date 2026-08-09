/**
 * EaseMotion CSS — InlineEdit
 * ============================================================
 * Click-to-edit text.
 *
 * The correctness problem is cancellation. A naive implementation binds
 * the input straight to the committed value, so pressing Escape has
 * nothing to revert to — the original is already gone. This keeps a
 * separate draft and only writes back on an explicit commit.
 *
 * The focus problem is subtler. Escape unmounts the input, so focus falls
 * back to <body> and the keyboard user is dumped at the top of the page.
 * Focus is returned to the trigger explicitly, after the swap.
 *
 * Blur-to-commit and Escape-to-cancel also conflict: Escape blurs the
 * input, which would fire the blur handler and commit the very edit the
 * user just cancelled. A cancelling ref suppresses that.
 * ============================================================
 */

import { useCallback, useEffect, useId, useRef, useState } from 'react';

/**
 * @param {object} props
 * @param {string}   props.value              Committed value.
 * @param {(next: string) => void} props.onCommit
 * @param {string}   [props.placeholder='Empty']
 * @param {string}   [props.label='Edit value']  Accessible name.
 * @param {boolean}  [props.multiline=false]
 * @param {number}   [props.maxLength]
 * @param {boolean}  [props.required=false]   Reject an empty commit.
 * @param {boolean}  [props.disabled=false]
 * @param {string}   [props.className]
 */
export default function InlineEdit({
  value = '',
  onCommit,
  placeholder = 'Empty',
  label = 'Edit value',
  multiline = false,
  maxLength,
  required = false,
  disabled = false,
  className = '',
  ...rest
}) {
  const fieldId = useId();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  const inputRef = useRef(null);
  const triggerRef = useRef(null);
  // Set while Escape is being handled, so the resulting blur does not
  // commit the edit the user just abandoned.
  const cancellingRef = useRef(false);

  // Keep the draft aligned when the committed value changes from outside
  // — but never while editing, or a background refresh would overwrite
  // what the user is typing.
  useEffect(() => {
    if (!editing) setDraft(value);
  }, [value, editing]);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select?.();
    }
  }, [editing]);

  const commit = useCallback(() => {
    const next = draft.trim();

    if (required && next === '') {
      // Nothing to commit — revert rather than storing an empty value.
      setDraft(value);
      setEditing(false);
      triggerRef.current?.focus();
      return;
    }

    if (next !== value) onCommit?.(next);

    setEditing(false);
    triggerRef.current?.focus();
  }, [draft, value, required, onCommit]);

  const cancel = useCallback(() => {
    cancellingRef.current = true;
    setDraft(value);
    setEditing(false);
    triggerRef.current?.focus();
  }, [value]);

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        cancel();
        return;
      }

      // In multiline, plain Enter inserts a newline; only Cmd/Ctrl+Enter
      // commits, matching what people expect from a textarea.
      if (event.key === 'Enter') {
        if (!multiline || event.metaKey || event.ctrlKey) {
          event.preventDefault();
          commit();
        }
      }
    },
    [cancel, commit, multiline],
  );

  const onBlur = useCallback(() => {
    if (cancellingRef.current) {
      cancellingRef.current = false;
      return;
    }
    commit();
  }, [commit]);

  const classes = [
    'ease-inline-ad',
    editing ? 'ease-inline-ad--editing' : '',
    disabled ? 'ease-inline-ad--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (editing) {
    const Field = multiline ? 'textarea' : 'input';

    return (
      <span className={classes} {...rest}>
        <Field
          className="ease-inline-ad__field"
          ref={inputRef}
          id={fieldId}
          aria-label={label}
          value={draft}
          maxLength={maxLength}
          rows={multiline ? 3 : undefined}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
      </span>
    );
  }

  return (
    <span className={classes} {...rest}>
      <button
        className="ease-inline-ad__trigger"
        ref={triggerRef}
        type="button"
        disabled={disabled}
        aria-label={`${label}. Current value: ${value || placeholder}`}
        onClick={() => setEditing(true)}
      >
        <span
          className={
            value
              ? 'ease-inline-ad__value'
              : 'ease-inline-ad__value ease-inline-ad__value--empty'
          }
        >
          {value || placeholder}
        </span>
        <span className="ease-inline-ad__pencil" aria-hidden="true">
          ✎
        </span>
      </button>
    </span>
  );
}
