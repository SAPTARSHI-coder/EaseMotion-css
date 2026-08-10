/**
 * EaseMotion CSS — OtpInput
 * ============================================================
 * Segmented one-time-code input.
 *
 * Segmented OTP inputs are notorious for being hostile to exactly the
 * flow they exist to serve. The specific failures:
 *
 *  - Paste only fills the first box. The user copies a 6-digit code from
 *    an SMS and gets "4" in box one. Paste is intercepted here and
 *    distributed across every box.
 *
 *  - Backspace on an empty box does nothing, so correcting a typo means
 *    clicking backwards. Backspace on an empty box moves focus back and
 *    clears the previous value.
 *
 *  - `autocomplete="one-time-code"` is missing, so iOS never offers the
 *    SMS code above the keyboard. It only works on the FIRST input, so
 *    it is set there specifically rather than on all of them.
 *
 *  - `type="number"` is used, which brings spinners, allows `e` and `-`,
 *    and breaks `maxLength`. `inputMode="numeric"` with a text type gives
 *    the numeric keypad without any of that.
 * ============================================================
 */

import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';

/**
 * @param {object} props
 * @param {number}   [props.length=6]
 * @param {string}   [props.value]        Controlled value.
 * @param {(code: string) => void} [props.onChange]
 * @param {(code: string) => void} [props.onComplete]  Fires when full.
 * @param {boolean}  [props.disabled=false]
 * @param {boolean}  [props.invalid=false]
 * @param {string}   [props.label='One-time code']
 * @param {string}   [props.className]
 */
export default function OtpInput({
  length = 6,
  value,
  onChange,
  onComplete,
  disabled = false,
  invalid = false,
  label = 'One-time code',
  className = '',
  ...rest
}) {
  const groupId = useId();
  const refs = useRef([]);
  const completedRef = useRef(false);

  const safeLength = Number.isFinite(length) && length > 0 ? Math.floor(length) : 6;

  const [internal, setInternal] = useState('');
  const controlled = typeof value === 'string';
  const code = controlled ? value : internal;

  const digits = useMemo(() => {
    const chars = code.replace(/\D/g, '').slice(0, safeLength).split('');
    return Array.from({ length: safeLength }, (_, i) => chars[i] ?? '');
  }, [code, safeLength]);

  const setCode = useCallback(
    (next) => {
      const clean = next.replace(/\D/g, '').slice(0, safeLength);
      if (!controlled) setInternal(clean);
      onChange?.(clean);
      return clean;
    },
    [controlled, onChange, safeLength],
  );

  // Fire onComplete once per fill, not on every keystroke while full.
  useEffect(() => {
    const filled = code.replace(/\D/g, '').length === safeLength;

    if (filled && !completedRef.current) {
      completedRef.current = true;
      onComplete?.(code.replace(/\D/g, ''));
    } else if (!filled) {
      completedRef.current = false;
    }
  }, [code, safeLength, onComplete]);

  const focusBox = useCallback((index) => {
    const target = refs.current[index];
    if (target) {
      target.focus();
      target.select?.();
    }
  }, []);

  const handleChange = useCallback(
    (index, raw) => {
      const digit = raw.replace(/\D/g, '');
      if (digit === '') return;

      const chars = digits.slice();
      // Take only the last character typed, so overwriting a filled box
      // replaces rather than appending.
      chars[index] = digit[digit.length - 1];

      setCode(chars.join(''));

      if (index < safeLength - 1) focusBox(index + 1);
    },
    [digits, setCode, safeLength, focusBox],
  );

  const handleKeyDown = useCallback(
    (index, event) => {
      if (event.key === 'Backspace') {
        event.preventDefault();
        const chars = digits.slice();

        if (chars[index]) {
          chars[index] = '';
          setCode(chars.join(''));
        } else if (index > 0) {
          // Empty box: step back and clear the previous one.
          chars[index - 1] = '';
          setCode(chars.join(''));
          focusBox(index - 1);
        }
        return;
      }

      if (event.key === 'ArrowLeft' && index > 0) {
        event.preventDefault();
        focusBox(index - 1);
      } else if (event.key === 'ArrowRight' && index < safeLength - 1) {
        event.preventDefault();
        focusBox(index + 1);
      }
    },
    [digits, setCode, focusBox, safeLength],
  );

  const handlePaste = useCallback(
    (event) => {
      event.preventDefault();
      const pasted = (event.clipboardData?.getData('text') ?? '').replace(/\D/g, '');
      if (!pasted) return;

      const clean = setCode(pasted.slice(0, safeLength));
      // Land on the first empty box, or the last if the code filled it.
      focusBox(Math.min(clean.length, safeLength - 1));
    },
    [setCode, focusBox, safeLength],
  );

  const classes = [
    'ease-otp-ad',
    invalid ? 'ease-otp-ad--invalid' : '',
    disabled ? 'ease-otp-ad--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      role="group"
      aria-label={label}
      aria-describedby={`${groupId}-status`}
      {...rest}
    >
      {digits.map((digit, index) => (
        <input
          className="ease-otp-ad__box"
          key={index}
          ref={(node) => {
            refs.current[index] = node;
          }}
          // text + inputMode gives the numeric keypad without number-type
          // spinners, `e`/`-` acceptance, or broken maxLength.
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          // Only the first box carries this; iOS ignores it elsewhere.
          autoComplete={index === 0 ? 'one-time-code' : 'off'}
          aria-label={`Digit ${index + 1} of ${safeLength}`}
          value={digit}
          disabled={disabled}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          onFocus={(event) => event.target.select()}
        />
      ))}

      <span className="ease-otp-ad__sr" id={`${groupId}-status`} role="status" aria-live="polite">
        {invalid ? 'The code entered is incorrect.' : ''}
      </span>
    </div>
  );
}
