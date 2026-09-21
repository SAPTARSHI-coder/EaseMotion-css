# Custom Search Bar Input

A minimalist responsive search bar built with pure HTML and CSS, featuring smooth focus, hover, and interaction states.

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then use the search component:

```html
<form class="search-bar" role="search">
  <label class="search-label" for="search-input">Search</label>

  <div class="search-wrapper">
    <input
      id="search-input"
      class="search-input"
      type="search"
      placeholder="Search anything..."
    >

    <button class="search-button" type="submit">
      Search
    </button>
  </div>
</form>
```

## Features

- Pure HTML and CSS
- No JavaScript dependencies
- Minimalist visual design
- Smooth focus and hover transitions
- Keyboard-accessible focus states
- Responsive layout
- `prefers-reduced-motion` support
- Works directly in the browser without a server

## Why It Fits EaseMotion

The component follows a CSS-first approach with subtle motion and clear interaction feedback. Its transitions enhance usability without distracting from the simple search experience, while reduced-motion preferences are respected for accessibility.

The component uses readable class names that can be standardized to the project's `ease-*` naming convention during maintainer integration.