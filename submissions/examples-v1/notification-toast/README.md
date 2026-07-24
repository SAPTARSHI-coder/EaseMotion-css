# Notification Toast Component

## What does this do?
A toast notification system with slide-in/out animations supporting success, error, warning, and info variants using pure CSS `:target`.

## How is it used?
Link to a toast ID to trigger:

    <a href="#toast-success" class="btn">Show Success</a>

Define the toast:

    <div id="toast-success" class="toast-overlay">
      <div class="toast toast--success" role="alert">...</div>
    </div>

Variants: `toast--success`, `toast--error`, `toast--warning`, `toast--info`.

## Why is it useful?
Provides user feedback notifications without JavaScript — ideal for form submissions, status updates, and transient messages.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
