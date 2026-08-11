# Accordion Active Indicator

A CSS-animated accordion component with an active indicator bar that slides in and crossfades when a panel is opened.

## Overview

The active indicator is a thin vertical bar rendered on the left side of each accordion header. When an item is active, its indicator transitions from invisible to fully opaque, providing a clear visual cue for the currently open panel. Content panels use `max-height` transitions for smooth open/close animations.

## Features

| Feature | Description |
|---|---|
| Active indicator | Left-aligned vertical bar fades in on the active item |
| Single open | Only one accordion item expanded at a time |
| Smooth transitions | CSS transition on indicator opacity and content max-height |
| Accessible | ARIA attributes and keyboard support |
| Custom properties | Fully customizable via CSS custom properties |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--acc-ai-duration` | `0.3s` | Transition duration for all animations |
| `--acc-ai-indicator-color` | `#6366f1` | Color of the active indicator bar |
| `--acc-ai-header-bg` | `#ffffff` | Background color of accordion headers |
| `--acc-ai-content-bg` | `#f8fafc` | Background color of content panels |
| `--acc-ai-border-color` | `#e2e8f0` | Border color between items |

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="accordion">
  <div class="accordion-item active">
    <button class="accordion-header">
      <span class="accordion-indicator"></span>
      <span class="accordion-header-text">Title</span>
    </button>
    <div class="accordion-content">
      <div class="accordion-content-inner">Content here</div>
    </div>
  </div>
</div>
```

Include the provided JavaScript to toggle the `active` class and manage `max-height`. Alternatively, use your own script — just toggle the `active` class on `.accordion-item` and set `.accordion-content` max-height to the inner content height.
