# Remove Replay Text

## What does this do?

Removes the redundant and cluttering "Replay" text buttons from animation preview cards, relying entirely on the card's click-to-replay functionality.

## How is it used?

The preview cards are defined as clickable interactive containers that reset and replay their respective animations on click:

```html
<div class="preview-card" onclick="replayAnimation(this)">
  <div class="ease-fade-in">Preview Content</div>
</div>
```

