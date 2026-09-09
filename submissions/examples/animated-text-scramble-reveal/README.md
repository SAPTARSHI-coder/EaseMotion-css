# Animated Text Scramble Reveal

A lightweight text animation that temporarily scrambles characters before
progressively resolving into the original text.

## What does it do?

The effect replaces unrevealed characters with random characters and gradually
reveals the final text from left to right.

It can:

- Trigger when text enters the viewport.
- Reveal characters progressively.
- Preserve spaces in the original text.
- Be replayed through a button.
- Work with multiple independent text elements.
- Run without external libraries or assets.

## How do I use it?

Add the `text-scramble` class and provide the final text through
`data-text`:

```html
<h1
  class="text-scramble"
  data-text="Move with Ease"
  aria-label="Move with Ease"
>
  Move with Ease
</h1>
```
