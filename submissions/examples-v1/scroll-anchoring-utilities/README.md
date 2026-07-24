# CSS Scroll Anchoring Utilities

Relates to feature request **#41317**.

## 1. What does this do?

Provides helper utilities for controlling CSS Scroll Anchoring behavior using the `overflow-anchor` property. Allows developers to selectively enable or disable scroll anchoring in dynamic layouts, chat interfaces, infinite scrolling lists, and content that updates asynchronously.

## 2. Why is this useful for EaseMotion CSS?

Unexpected scroll jumps can negatively affect user experience when content changes dynamically. Utilities around `overflow-anchor` give developers fine-grained control over browser scroll behavior without relying on JavaScript.

## 3. Utilities Provided

| Class | Property | Use Case |
|---|---|---|
| `.ease-chat-window` | `overflow-anchor: auto` | Chat interface — scroll stays stable when messages arrive |
| `.ease-chat-window .message:last-child` | `overflow-anchor: none` | Excludes last message from being the anchor node |
| `.ease-anchor-none` | `overflow-anchor: none` | Fully disables anchoring on a container |
| `.ease-infinite-scroll` | `overflow-anchor: auto` | Infinite scroll container |
| `.ease-anchor-sentinel` | `overflow-anchor: none` | Sentinel/loader element excluded from anchoring |

## 4. How is it used?

**HTML** (matching the issue's snippet exactly)
```html
<div class="ease-chat-window">
  <div class="message">Hello</div>
  <div class="message">New Message</div>
</div>
```

**CSS** (matching the issue's snippet exactly)
```css
.ease-chat-window {
  height: 400px;
  overflow-y: auto;
  overflow-anchor: auto;
}

.ease-chat-window .message:last-child {
  overflow-anchor: none;
}
```

## 5. How `overflow-anchor` works

| Value | Behaviour |
|---|---|
| `auto` | Browser **may** choose this element as a scroll anchor. When content is inserted above the anchor, scroll adjusts to keep the anchor visible. |
| `none` | This element is **excluded** from being chosen as an anchor. Apply to sentinels, loaders, and the last message in a chat. |

## 6. Browser Support

| Browser | Support |
|---|---|
| Chrome | 56+ ✅ |
| Firefox | 66+ ✅ |
| Edge | 79+ ✅ |
| Safari | ❌ (no-op — safe to use, just not active) |

> **Tip**: `overflow-anchor: none` on the *last child* of a chat window is the key pattern. It prevents the browser from anchoring to the newest message, which would cause a jump when an even newer one appears at the bottom.
