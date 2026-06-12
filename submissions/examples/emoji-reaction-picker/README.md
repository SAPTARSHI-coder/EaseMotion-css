# Emoji Reaction Picker

## What does this do?

A row of emoji reaction buttons that bounce and scale on hover,
with a tooltip label below each emoji. Pure CSS — no JavaScript.

## How is it used?

### Standalone bar:

```html
<div class="reaction-bar">
  <div class="reaction-btn">
    <span class="reaction-emoji">👍</span>
    <span class="reaction-label">Like</span>
    <span class="reaction-count">24</span>
  </div>
  <!-- more emojis -->
</div>
```

### Triggered from a button on hover:

```html
<div class="reaction-wrapper">
  <div class="reaction-bar">
    <!-- reaction-btn items -->
  </div>
  <button class="reaction-trigger">👍 Like</button>
</div>
```

## Why is it useful?

Reaction pickers appear in social feeds, comment sections, and
messaging UIs. This implementation uses only CSS hover and
keyframe animations — no JavaScript needed. No existing submission
covers this pattern.

## Tech Stack

- HTML
- CSS only (no JavaScript, no frameworks)

## Preview

Open `demo.html` directly in your browser.
Hover over individual emojis to see the bounce.
Hover the Like button on the post card to reveal the picker.
