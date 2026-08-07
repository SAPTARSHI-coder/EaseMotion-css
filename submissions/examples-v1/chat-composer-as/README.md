# Chat Composer Bar

### What does this do?

It shows a chat message composer with an attach button, a message field, an emoji button, and a round send button. The whole bar is a pill that lights up when the field is focused.

### How is it used?

```html
<form class="composer">
  <button class="composer-icon" type="button" aria-label="Attach file"><svg>...</svg></button>
  <input type="text" placeholder="Write a message" aria-label="Message" />
  <button class="composer-icon" type="button" aria-label="Add emoji"><svg>...</svg></button>
  <button class="composer-send" type="submit" aria-label="Send message"><svg>...</svg></button>
</form>
```

The field flexes to fill the space between the leading and trailing icon buttons. `:focus-within` lights up the whole pill.

### Why is it useful?

Messaging and support widgets need a polished input bar. This lays out a composer with leading and trailing icon buttons around a flexible field and a clear send action, using only CSS and inline SVG. Every button is labeled and shows a focus ring, and the send scale is removed under reduced motion.
