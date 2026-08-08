# Animated Chat Message Bubbles

### What does this do?

It shows a chat thread of sent and received message bubbles with rounded tails, where each bubble fades and slides in with a staggered delay.

### How is it used?

```html
<div class="chat">
  <div class="bubble received">Hey, are we still on for today?</div>
  <div class="bubble sent">Yes, see you at 3.</div>
  <div class="bubble received">Perfect.</div>
</div>
```

Use `received` for incoming messages, which align left with a neutral color, and `sent` for outgoing ones, which align right with the accent color. A cut corner on each bubble suggests a tail.

### Why is it useful?

Message bubbles are the core of chat and support interfaces. This reveals the conversation with a staggered fade and slide, and distinguishes sides with alignment and color, using only CSS with no JavaScript. Motion is disabled under `prefers-reduced-motion: reduce`.
