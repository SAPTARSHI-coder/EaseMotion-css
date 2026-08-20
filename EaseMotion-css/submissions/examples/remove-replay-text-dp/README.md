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

## Why is it useful?

It removes unnecessary visual clutter and noise from the UI, creating a cleaner, more minimalist, and premium design that leverages standard interactive patterns (clicking the card to preview).

## Tech Stack

- HTML
- CSS
- JavaScript (for click-to-replay handler)

## Preview

Open demo.html directly in your browser to see the clean preview card interaction.
