# Bouncing Chat Typing Indicator

## What does this do?
The classic iMessage/Messenger typing indicator (three bouncing dots), recreated perfectly in CSS. It uses `animation-delay` offsets on three separate nested divs to create a wave-like bouncing motion inside a chat bubble container.

## How is it used?
```html
<div class="ease-typing-indicator">
    <div class="ease-typing-dot"></div>
    <div class="ease-typing-dot"></div>
    <div class="ease-typing-dot"></div>
</div>
```

## Why does it fit EaseMotion CSS?
It provides a completely pure-CSS implementation of one of the most recognizable UI components in modern software. By utilizing negative `animation-delay` values, the dots immediately begin bouncing in a smooth wave without any initial awkward pauses or JavaScript coordination.

## Tech Stack
- HTML
- CSS (No JavaScript)
