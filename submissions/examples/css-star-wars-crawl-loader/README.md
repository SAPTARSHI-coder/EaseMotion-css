# CSS Star Wars Crawl Loader

A pure CSS cinematic loading animation where text continuously crawls
away from the viewer in perspective.

## Features

- Pure HTML and CSS
- No JavaScript
- No external dependencies
- Perspective text crawl
- Continuous loading animation
- Responsive layout
- Accessible loading status
- Keyboard-friendly document structure
- `prefers-reduced-motion` support

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
<main class="crawl-loader" aria-label="Loading content">
  <section class="crawl-scene">
    <div class="crawl-content">
      <p class="crawl-label">EASEMOTION CSS</p>

      <h1>Loading Content</h1>

      <p>
        The interface is preparing your experience.
        Please wait while the content travels into view.
      </p>
    </div>
  </section>
</main>