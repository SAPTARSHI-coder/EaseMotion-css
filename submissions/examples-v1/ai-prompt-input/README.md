# Futuristic AI Prompt Input

A sleek, premium, and glassmorphic AI prompt input component featuring an animated shimmering border, glowing focus states, and pulsating icons. Designed perfectly for modern AI chat interfaces like ChatGPT or Claude.

## Features

- **Glassmorphic Container**: Uses `backdrop-filter` for a frosted glass look.
- **Animated Shimmer Border**: An infinitely moving gradient border effect.
- **Dynamic Focus States**: Expands slightly and glows brightly when focused.
- **EaseMotion Integration**: Leverages utility classes like `ease-fade-in`, `ease-pulse`, and `ease-hover-grow` to bring the component to life.

## Usage

Include the CSS from `style.css` in your project and copy the HTML structure below. Make sure you have the EaseMotion core CSS included to utilize the `ease-` animation utilities.

```html
<div class="ai-prompt-container ease-fade-in ease-slide-up">
  <div class="ai-prompt-shimmer"></div>

  <svg
    class="ai-prompt-icon ease-pulse"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" x2="12" y1="19" y2="22" />
  </svg>

  <input type="text" class="ai-prompt-input" placeholder="Ask anything..." />

  <button class="ai-prompt-btn ease-hover-grow">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="22" x2="11" y1="2" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  </button>
</div>
```

## Why it fits EaseMotion CSS

This component perfectly aligns with the futuristic and animation-first philosophy of EaseMotion CSS by integrating subtle continuous animations (pulse, shimmer) with responsive interactions (hover, focus) using a composition of utility classes.
