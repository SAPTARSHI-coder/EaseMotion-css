# Progress Bar Component


---

## Overview

A versatile progress bar component with linear, circular, striped, stepped, multi-bar, and indeterminate variants. Pure CSS animations with smooth transitions.

## Classes

### Linear Progress
| Class | Description |
|-------|-------------|
| `.ease-progress` | Base progress container |
| `.ease-progress-bar` | Animated fill bar |
| `.ease-progress-sm` | Small height (0.375rem) |
| `.ease-progress-lg` | Large height (1.25rem) |
| `.ease-progress-xl` | Extra large (1.75rem) |

### Color Variants
| Class | Description |
|-------|-------------|
| `.ease-progress-success` | Green fill |
| `.ease-progress-danger` | Red fill |
| `.ease-progress-warning` | Amber fill |
| `.ease-progress-info` | Blue fill |
| `.ease-progress-dark` | Dark fill |

### Animation Variants
| Class | Description |
|-------|-------------|
| `.ease-progress-striped` | Diagonal stripe pattern |
| `.ease-progress-animated` | Animated moving stripes |
| `.ease-progress-indeterminate` | Unknown duration loading |

### Circular Progress
| Class | Description |
|-------|-------------|
| `.ease-progress-circle` | SVG circular container |
| `.ease-progress-circle-track` | Background circle |
| `.ease-progress-circle-fill` | Animated arc |
| `.ease-progress-circle-text` | Center percentage text |

### Stepped Progress
| Class | Description |
|-------|-------------|
| `.ease-progress-stepped` | Multi-step container |
| `.ease-progress-step` | Individual step block |
| `.ease-progress-step-active` | Filled/completed step |

### Layout
| Class | Description |
|-------|-------------|
| `.ease-progress-label` | Label + percentage row |
| `.ease-progress-multi` | Stacked multi-color bar |

## Usage

### Basic Linear
```html
&lt;div class="ease-progress"&gt;
  &lt;div class="ease-progress-bar" style="width: 65%;"&gt;&lt;/div&gt;
&lt;/div&gt;