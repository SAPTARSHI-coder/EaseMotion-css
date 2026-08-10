# CSS Post Reaction Picker

This provides a pure CSS Facebook-style reaction emoji picker that pops up on hover or focus of the like button.

## Usage

```html
<div class="reaction-wrapper">
    <button class="like-button" aria-label="Like Post">👍 Like</button>
    <div class="reaction-picker" role="toolbar" aria-label="Reaction picker">
        <button class="reaction-btn" aria-label="Like">👍</button>
        <button class="reaction-btn" aria-label="Love">❤️</button>
        <!-- Add more emojis here -->
    </div>
</div>
```

## Why is it useful?

It provides an interactive, smooth, and accessible micro-interaction for social media posts without requiring any JavaScript, perfectly aligning with EaseMotion CSS's goal of performant, pure CSS animations.
