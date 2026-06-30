# CSS Chat Bubble

## What does this do?

CSS chat/messaging UI with sent and received message bubbles, avatars, timestamps, reactions, read indicators, and input bar.

## How is it used?

```html
<div class="cb-chat">
  <div class="cb-msg cb-sent">
    <div class="cb-bubble">
      <p>Message text</p>
      <span class="cb-time">10:00 AM</span>
    </div>
  </div>
  <div class="cb-msg cb-received">
    <div class="cb-avatar">A</div>
    <div class="cb-bubble"><p>Reply text</p></div>
  </div>
</div>
```

## Why is it useful?

Provides a complete messaging UI pattern without JavaScript. Sent/received bubble styling with distinct colors. Avatars with initials. Timestamps on messages. Emoji reactions bar. Read receipts (double check). Chat input bar with send button. Ideal for help desks, social apps, and customer support widgets.
