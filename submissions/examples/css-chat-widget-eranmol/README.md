# CSS Chat Widget

A floating customer support chat widget with a smooth open/close animation, built entirely with pure CSS.

## What does this do?

It provides a reusable, accessible chat widget component that sits in the bottom-right corner of any page. Users can toggle it open and closed with a single click. The open/close state is driven entirely by a hidden checkbox and the CSS `:checked` selector, so no JavaScript is required.

## How is it used?

Drop `demo.html` and `style.css` into your project. The widget is a self-contained block you can paste into any page:

```html
<div class="chat-widget" role="complementary" aria-label="Customer support chat">
  <input type="checkbox" id="chat-toggle" class="chat-widget__toggle" aria-label="Open or close chat widget">
  <label for="chat-toggle" class="chat-widget__trigger" tabindex="0" role="button">
    <!-- chat and close SVG icons -->
  </label>
  <div class="chat-widget__panel" role="dialog" aria-label="Chat window">
    <!-- header, messages, input area -->
  </div>
</div>
```

Toggle the panel by clicking the trigger label — the hidden checkbox handles the rest.

## Why is it useful?

Chat widgets are one of the most common UI elements on modern websites. This implementation gives developers a ready-to-use, pure CSS alternative to JavaScript-based chat widgets. It uses the checkbox hack for state management, CSS custom properties for easy theming, smooth slide-up animations, responsive design for mobile, and built-in dark mode support, all without a single line of JavaScript.
