# Typewriter Delete-Write Loop

## What does this do?

It creates a typewriter animation that types out text, pauses, deletes it character by character, and repeats the loop indefinitely using pure CSS.

## How is it used?

Apply the `typewriter-loop-delete-uj` class to a span containing the text, and set the `--chars` CSS custom property to match the length of the string:

```html
<span class="typewriter-loop-delete-uj" style="--chars: 10;">
  Modern UI.
</span>
```

For optimal presentation, use a monospaced font so that the step-based caret align precisely with each character.

## Why is this useful?

This utility extends standard typewriter animations by introducing a looping delete phase. It runs entirely on CSS transitions without JavaScript, uses step-based character counting for precise alignments, and disables animations when `prefers-reduced-motion` is requested.
