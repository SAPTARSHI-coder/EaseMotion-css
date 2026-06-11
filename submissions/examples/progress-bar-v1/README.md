# ease-progress

> Animated progress bar component for EaseMotion CSS

## What it does

A pure CSS progress bar driven by a single CSS custom property.
No JavaScript needed to set the value — just update --ease-progress-value inline.

## Usage

    <div class="ease-progress">
      <div class="ease-progress-fill" style="--ease-progress-value: 65%;"></div>
    </div>

## Class Reference

| Class | Description |
|---|---|
| ease-progress | Track container |
| ease-progress-fill | Animated fill bar |
| ease-progress-xs | 4px height |
| ease-progress-sm | 8px height |
| ease-progress-lg | 20px height |
| ease-progress-xl | 28px height |
| ease-progress-success | Green fill |
| ease-progress-warning | Amber fill |
| ease-progress-danger | Red fill |
| ease-progress-shimmer | Animated shimmer effect |
| ease-progress-striped | Moving stripe pattern |

## CSS Variables

| Token | Role |
|---|---|
| --ease-progress-value | Fill width, set per element (e.g. 75%) |
| --ease-color-primary | Default fill color |
| --ease-color-surface | Track background |
| --ease-speed-slow | Fill transition duration |
| --ease-ease-out | Fill transition easing |

## Browser support

| Feature | Chrome | Edge | Firefox | Safari |
|---|---|---|---|---|
| CSS custom properties | yes | yes | yes | yes |
| color-mix() | yes | yes | yes | yes |

Submitted under MIT License · EaseMotion CSS · 2026
