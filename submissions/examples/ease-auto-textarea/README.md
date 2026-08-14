# ease-auto-textarea

A zero-JavaScript auto-resizing `<textarea>` component utilizing the native CSS `field-sizing: content` property for chat interfaces and text fields.

---

### 1. What does this do?
`ease-auto-textarea` leverages the modern CSS `field-sizing: content` property to make the `<textarea>` automatically expand vertically to fit its contents as the user types multi-line input. It grows smoothly from a base `min-height` up to a specified `max-height` (250px), at which point vertical scrolling (`overflow-y: auto`) takes over cleanly.

---

### 2. How is it used?
Apply the `.ease-auto-textarea` class to any `<textarea>` element along with a container layout like `.ease-chat-wrapper`.

```css
.ease-auto-textarea {
  /* Automatically scales input size based on text content */
  field-sizing: content;

  /* Constrain vertical sizing boundaries */
  min-height: 3rem;
  max-height: 250px;
  resize: none;
  overflow-y: auto;

  /* Typography & styling */
  flex-grow: 1;
  background: transparent;
  color: #f8fafc;
  border: none;
  padding: 0.5rem;
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;
}
```

```html
<div class="ease-chat-wrapper">
  <textarea class="ease-auto-textarea" placeholder="Message EaseMotion..."></textarea>
  <button class="ease-send-btn">↑</button>
</div>
```

---

### 3. Why is it useful?
`field-sizing: content` permanently eliminates the legacy JavaScript `scrollHeight` recalculation hacks (such as dynamic `input` event listeners resetting `element.style.height = 'auto'` and `element.style.height = element.scrollHeight + 'px'`) that were required in almost every modern chat UI built prior to 2024. By pushing layout sizing back to the CSS rendering engine, it achieves zero main-thread JS execution overhead, zero reflow lag, and instant responsiveness.
