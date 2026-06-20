# Mobile Safe Area Bottom Action Bar

Issue: #ISSUE_NUMBER

Built for EaseMotion CSS.

## Overview

A mobile-first bottom action bar that respects device safe areas using CSS environment variables.

## Features

- Safe area support
- Fixed bottom action bar
- Mobile-first layout
- Checkout CTA example
- Glassmorphism styling
- Responsive design
- Uses `env(safe-area-inset-bottom)`
- Pure HTML and CSS
- No JavaScript required

## Usage

```css
.bottom-action-bar{

    padding-bottom:
    calc(
        1rem +
        env(safe-area-inset-bottom)
    );
}
```

## Main Classes

```css
.bottom-action-bar
.price-section
.action-btn
.summary-item
.content-card
```

## Files

- demo.html
- style.css
- README.md