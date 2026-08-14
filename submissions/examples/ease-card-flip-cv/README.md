# 3D Card Flip (cv variant)

## What does this do?
A collection of interactive 3D flip cards with 3 flip directions (Horizontal, Vertical, Diagonal) and 3 color themes. On hover, cards flip in 3D space to reveal back-side content — perfect for portfolios, feature cards, and interactive showcases.

## How is it used?

### Basic Usage:

```html
<div class="ease-card-flip-cv ease-card-flip-cv-horizontal">
    <div class="ease-card-flip-cv-inner">
        <div class="ease-card-flip-cv-front">
            <div class="ease-card-flip-cv-icon">🚀</div>
            <h3>Front Title</h3>
            <p>Short description</p>
        </div>
        <div class="ease-card-flip-cv-back">
            <h3>Back Title</h3>
            <p>Detailed information shown when card flips.</p>
        </div>
    </div>
</div>

<!-- Horizontal flip (left-right rotation) -->
<div class="ease-card-flip-cv ease-card-flip-cv-horizontal">...</div>

<!-- Vertical flip (top-bottom rotation) -->
<div class="ease-card-flip-cv ease-card-flip-cv-vertical">...</div>

<!-- Diagonal flip (corner rotation) -->
<div class="ease-card-flip-cv ease-card-flip-cv-diagonal">...</div>

<!-- Primary (Purple - default) -->
<div class="ease-card-flip-cv ease-card-flip-cv-horizontal">...</div>

<!-- Info (Blue) -->
<div class="ease-card-flip-cv ease-card-flip-cv-horizontal ease-card-flip-cv-info">...</div>

<!-- Success (Green) -->
<div class="ease-card-flip-cv ease-card-flip-cv-horizontal ease-card-flip-cv-success">...</div>