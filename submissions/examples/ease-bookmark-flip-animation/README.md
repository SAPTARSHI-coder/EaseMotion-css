# Animated Bookmark Save Flip (`ease-bookmark-flip-animation`)

A clean, satisfying micro-interaction that tilts and scales a bookmark icon to simulate the physical action of "saving" or "marking" content.

## 🚀 Features

- **Subtle & Premium**: Uses a custom `cubic-bezier` timing function to give the flip a slight bounce, making it feel physical and satisfying.
- **Top-Anchored Transform**: Sets `transform-origin: top center` so the bookmark swings naturally from its top edge like a real tag.
- **Accessible Trigger**: The animation triggers on both `:hover` and `:focus-visible` to ensure keyboard users experience the interaction.
- **Motion Safe**: Gracefully disables the rotating keyframes for users who prefer reduced motion.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. 

Apply the classes to your button and icon elements:

```html
<button class="ease-bookmark-btn">
  <svg class="ease-bookmark-icon" xmlns="...">...</svg>
  <span>Save Article</span>
</button>
