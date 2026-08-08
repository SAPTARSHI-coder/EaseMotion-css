# Notification Stack

## Overview

A modern dashboard-friendly notification stack with layered cards that separate smoothly on hover. The component is built using only HTML and CSS and includes success, warning, error, and info variants.

## Features

- Overlapping vertical notification stack
- Smooth hover expansion animation
- Four status variants with colored indicators
- Responsive, self-contained demo layout
- Pure HTML + CSS, no JavaScript

## HTML Usage

```html
<link rel="stylesheet" href="style.css">
<section class="stack-shell">
  <div class="stack-frame">
    <article class="stack-card card-success">
      <span class="status-dot"></span>
      <div class="card-copy">
        <h2>Success</h2>
        <p>Deployment completed successfully.</p>
      </div>
    </article>
    <!-- Add warning, error, info cards here -->
  </div>
</section>
```

## CSS Customization

- Update the root color variables (`--success`, `--warning`, `--error`, `--info`) to match your brand palette.
- Tweak `border-radius`, `box-shadow`, and `background` values for stronger or softer visuals.
- Adjust the `transform: translateY(...)` values to change the overlap spacing and hover spread.
- Change text styling in `.card-copy h2` and `.card-copy p` for typography preferences.

## Why it fits EaseMotion CSS

This component delivers a polished interface with motion-inspired hover states while staying fully self-contained. The design uses responsive CSS patterns, meaningful variant styling, and no external dependencies, making it a good fit for the EaseMotion CSS collection.
