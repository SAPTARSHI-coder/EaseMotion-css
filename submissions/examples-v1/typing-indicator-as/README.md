# Chat Typing Indicator

### What does this do?

It shows a chat typing indicator, a small bubble with three dots that bounce in sequence to signal that someone is composing a message.

### How is it used?

```html
<div class="typing" role="status" aria-label="Typing">
  <span></span><span></span><span></span>
</div>
```

Drop the `.typing` bubble into a chat thread where you would show that the other person is writing. The three dots animate with staggered delays.

### Why is it useful?

A typing indicator is a familiar cue in chat and support widgets. This builds the looping bounce with staggered delays inside a message bubble, so it needs no JavaScript. The bubble has a `status` role with a label for assistive tech, and the animation slows under `prefers-reduced-motion: reduce`.
