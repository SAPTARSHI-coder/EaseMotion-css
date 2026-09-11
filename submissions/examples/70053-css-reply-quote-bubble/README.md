# CSS Reply Quote Bubble Component (`css-reply-quote-bubble`)

A pure HTML + Vanilla CSS chat message bubble component featuring quoted reply excerpts (`<blockquote class="reply-quote-block">`), left accent border indicators, sender metadata, incoming & outgoing message variations, pure CSS message thread filtering, and full accessibility support.

## Features

- **Pure HTML + CSS**: 100% interactive messaging quote & reply bubble component without JavaScript, external fonts, image assets, or build scripts. Works offline.
- **Quoted Reply Excerpt Architecture**: Includes a distinct quoted block (`.reply-quote-block`) with left accent border (`border-left: 3px solid var(--quote-accent)`), sender label (`.quote-sender`), and clamped quote preview (`-webkit-line-clamp: 2`).
- **Incoming & Outgoing Bubble Variants**: Distinct alignment (`align-self: flex-start` vs `align-self: flex-end`) and color themes (`.bubble-incoming` vs `.bubble-outgoing`).
- **GPU-Accelerated Tactile Hover Elevation**: Operates strictly on `transform: translateY(-2px)` and `opacity` for smooth 60fps feedback.
- **Pure CSS Thread Filter Engine**: Radio controls (`<input type="radio" name="chat-filter">`) allow users to filter All Messages, Incoming Only, or Outgoing Only.
- **100% Accessible**: Built using semantic `<article>`, `<blockquote class="reply-quote-block">`, `<p>`, `<time>`, and screen reader context (`<span class="sr-only">Replying to...</span>`). Keyboard navigation supported (`Tab`, Arrow Keys, `Space`, `Enter`) with distinct `:focus-visible` indicators.
- **Responsive & Mobile Ready**: Bubbles wrap text cleanly (`word-break: break-word; overflow-wrap: anywhere;`) down to 320px mobile viewports without horizontal scrollbars.
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<article class="reply-bubble bubble-incoming">
  <blockquote class="reply-quote-block">
    <span class="sr-only">Replying to Alex:</span>
    <span class="quote-sender">Alex Kumar</span>
    <p class="quote-text">Original quoted message content...</p>
  </blockquote>
  <div class="message-body">
    <p class="message-text">Current reply response text...</p>
  </div>
  <footer class="message-meta">
    <time datetime="10:42">10:42 AM</time>
  </footer>
</article>
```

### Customization Variables

```css
:root {
  --reply-bg: #f8fafc;
  --incoming-bg: #f1f5f9;
  --outgoing-bg: #0284c7;
  --quote-incoming-accent: #0284c7;
  --quote-outgoing-accent: #38bdf8;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/70053-css-reply-quote-bubble/demo.html) directly in any modern web browser to interact with the reply quote bubble component offline.
