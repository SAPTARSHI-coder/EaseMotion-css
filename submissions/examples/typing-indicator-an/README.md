# Typing Indicator

**What does this do?**
A lightweight "user is typing..." indicator with three bouncing (or pulsing) dots, for chat/messaging UIs.

**How is it used?**
```html
<div class="typing-indicator">
  <span class="typing-indicator__dot"></span>
  <span class="typing-indicator__dot"></span>
  <span class="typing-indicator__dot"></span>
</div>
```
Add `typing-indicator--pulse` alongside `typing-indicator` for the pulse variant instead of bounce.

Customize via CSS variables:
```css
--typing-dot-size: 8px;
--typing-dot-color: #6b7280;
--typing-dot-gap: 5px;
--typing-speed: 1.2s;
```

**Why is it useful?**
Chat/typing feedback is a common UI need. This is dependency-free, responsive, and configurable through CSS variables — matches EaseMotion's goal of small, composable, easily themeable animation utilities.
