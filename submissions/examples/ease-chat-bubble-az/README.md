# Chat Bubble Component

### What does this do?
Adds `ease-chat-bubble-az` — a chat message component with sent/received alignment, avatars, sender names, timestamps, read status indicators, intelligent grouping, and date dividers.

### How is it used?
The maintainer should copy `style.css` into `components/chat-bubble.css` and import it.

```html
<div class="ease-chat-feed-az">
  <div class="ease-chat-divider-az">Today</div>

  <div class="ease-chat-row-az">
    <div class="ease-chat-avatar-az">A</div>
    <div class="ease-chat-bubble-az">
      <div class="ease-chat-bubble-meta-az">
        <span class="ease-chat-bubble-sender-az">Alice</span>
        <span class="ease-chat-bubble-time-az">2:14 PM</span>
      </div>
      <div class="ease-chat-bubble-text-az">Message here</div>
    </div>
  </div>

  <div class="ease-chat-row-az sent">
    <div class="ease-chat-avatar-az">Y</div>
    <div class="ease-chat-bubble-az">
      <div class="ease-chat-bubble-text-az">Reply message</div>
      <div class="ease-chat-bubble-meta-az">
        <span class="ease-chat-bubble-time-az">2:16 PM</span>
        <svg class="ease-chat-bubble-status-az read"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
    </div>
  </div>
</div>
```

### Why is it useful?
1. **Sent/received alignment** — `.sent` class right-aligns the bubble with primary color fill
2. **Smart grouping** — consecutive messages from the same sender collapse avatar and meta, adjust the bubble tail radius
3. **Read status** — inline checkmark icon with `.read` class for blue double-check
4. **Date dividers** — horizontal rule with centered date text to separate conversations by day
