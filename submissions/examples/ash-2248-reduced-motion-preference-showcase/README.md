# Reduced Motion Preference Showcase

Issue: #ISSUE_NUMBER

Built for EaseMotion CSS.

## Overview

A showcase demonstrating how interfaces can respect user accessibility settings using the `prefers-reduced-motion` media query.

## Features

- Accessibility-first design
- prefers-reduced-motion support
- Animated vs reduced-motion examples
- Motion-safe interactions
- WCAG-friendly approach
- Responsive layout
- Pure HTML and CSS
- No JavaScript required

## Usage

```css
@media (prefers-reduced-motion: reduce) {

    * {

        animation: none;
        transition: none;
    }
}
```

## Main Classes

```css
.showcase
.card
.animated-loader
.animated-btn
.reduced-btn
.info-card
```

## Files

- demo.html
- style.css
- README.md