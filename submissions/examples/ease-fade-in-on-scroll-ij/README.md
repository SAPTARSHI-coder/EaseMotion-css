# Fade In on Scroll

Cards and sections that fade in with a smooth translateY motion as the user scrolls, powered by the IntersectionObserver API.

## Features

- Fade + translateY entrance triggered when elements enter the viewport
- Staggered reveals via `--fade-stagger` custom property
- Class-based `.visible` toggling — easy to integrate with any framework
- Fully accessible and responsive

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--fade-duration` | `0.7s` | Fade transition duration |
| `--fade-stagger` | `0.15s` | Delay between each card |
| `--fade-translate-y` | `40px` | Initial vertical offset |
| `--fade-bg` | `#ffffff` | Card background |
| `--fade-text-color` | `#1e293b` | Text color |
| `--fade-radius` | `16px` | Card border-radius |

## Usage

Add the `.fade-in` class to any element you want to reveal on scroll. The script watches for `.fade-in` elements and adds `.visible` when they enter the viewport. Works with any number of elements.
