# Message Reactions

### What does this do?

It shows a chat message bubble with a row of emoji reaction pills below it. Each pill shows an emoji and a count, the ones you reacted to are highlighted, and an add reaction button sits at the end.

### How is it used?

```html
<div class="msg">
  <p class="msg-text">Shipping today</p>
  <div class="reactions">
    <button class="reaction is-mine" aria-pressed="true">👍 <span>4</span></button>
    <button class="reaction" aria-pressed="false">🎉 <span>2</span></button>
    <button class="reaction-add" aria-label="Add reaction">+</button>
  </div>
</div>
```

Each reaction is a real button with `aria-pressed`. Add the `is-mine` class to the reactions the current user has made so they stand out.

### Why is it useful?

Chat and comment apps let people react with emoji. This lays out a message with reaction pills, a highlighted own reaction state, and an add button, using only CSS. Pills are keyboard operable with a focus ring and the hover lift is removed under reduced motion.
