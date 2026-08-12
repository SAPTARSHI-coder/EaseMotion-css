# OtpInput — one-time-code input

> Issue: [#63569](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63569)

A segmented one-time-code input that handles paste, backspace traversal, and the SMS autofill affordance.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `length` | `number` | `6` | Number of digits. Clamped to at least 1. |
| `value` | `string` | — | Controlled value. Omit for uncontrolled. |
| `onChange` | `(code: string) => void` | — | Fires on every change with the digits so far. |
| `onComplete` | `(code: string) => void` | — | Fires **once** when all boxes are filled. |
| `disabled` | `boolean` | `false` | Disable all boxes. |
| `invalid` | `boolean` | `false` | Error state; announces politely. |
| `label` | `string` | `'One-time code'` | Accessible group name. |
| `className` | `string` | `''` | Merged onto the root. |

## Keyboard

| Key | Action |
|---|---|
| digit | Fill and advance |
| <kbd>Backspace</kbd> | Clear box, or step back and clear if already empty |
| <kbd>←</kbd> / <kbd>→</kbd> | Move between boxes |
| <kbd>Cmd/Ctrl</kbd>+<kbd>V</kbd> | Distribute the whole code |

## Usage

```jsx
import OtpInput from './OtpInput';
import './style.css';

<OtpInput length={6} onComplete={(code) => verify(code)} invalid={failed} />
```

## Why it fits EaseMotion

Segmented OTP inputs are notorious for being hostile to exactly the flow they exist to serve. Four specific failures, all handled:

**Paste only fills the first box.** The user copies a 6-digit code from an SMS and gets "4" in box one. Paste is intercepted and distributed across every box, then focus lands on the first empty one.

**Backspace on an empty box does nothing**, so correcting a typo means clicking backwards. Here it steps back *and* clears the previous value in one press.

**`autocomplete="one-time-code"` is missing**, so iOS never offers the SMS code above the keyboard. It is set on the **first** box only, because that is the only place iOS honours it — setting it on all six does nothing useful.

**`type="number"` is used**, which brings spinner buttons, accepts `e` and `-`, and silently ignores `maxLength`. `type="text"` with `inputMode="numeric"` gives the numeric keypad without any of that.

`onComplete` fires once per fill rather than on every keystroke while full — a completion handler that submits a form would otherwise fire repeatedly. A ref tracks the completed state and resets when the code is no longer full.
