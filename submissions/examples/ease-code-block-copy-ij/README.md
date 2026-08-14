# ease-code-block-copy

> Issue #36558 — Code block with copy-to-clipboard feedback animation.

A styled code-block component that reveals a copy button on hover and animates a "Copied!" feedback badge when text is copied.

## CSS Custom Properties

| Property               | Default   | Description                            |
| ---------------------- | --------- | -------------------------------------- |
| `--code-bg`            | `#1e1e2e` | Background of the code block           |
| `--copy-btn-bg`        | `#313244` | Background of the copy button          |
| `--copy-feedback-color`| `#a6e3a1` | Background of the feedback popup       |
| `--feedback-duration`  | `1.5s`    | Duration of the copy feedback animation|

## Usage

```html
<link rel="stylesheet" href="https://unpkg.com/easemotion/css/code-block-copy.css" />

<div class="code-block-copy">
  <pre>const msg = "Hello!";</pre>
  <button class="copy-btn" aria-label="Copy code">…</button>
  <div class="copy-feedback">Copied</div>
</div>
```

Trigger the feedback by adding class `copied` to `.copy-feedback`:

```js
feedback.classList.add('copied');
```

## Animation

The feedback element scales in, holds visible for most of the animation, then fades and scales out using the `copyFeedbackPop` keyframes. Timing is controlled entirely by `--feedback-duration`.
