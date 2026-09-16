# CSS Radial Progress Indicator

A set of multiple concentric radial rings showing different metrics using pure CSS and no external libraries.

## Usage

```html
<div class="radial-progress-group" role="group" aria-label="Performance Metrics">
    <div class="radial-ring ring-outer" style="--progress: 85; --color: #00ff88;" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" aria-label="System Health"></div>
    <div class="radial-ring ring-middle" style="--progress: 62; --color: #00e5ff;" role="progressbar" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100" aria-label="Network Load"></div>
    <div class="radial-ring ring-inner" style="--progress: 43; --color: #b700ff;" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" aria-label="Storage Usage"></div>
    
    <div class="radial-progress-center">
        <span class="radial-progress-label">Active</span>
    </div>
</div>
```

## Why is this useful for EaseMotion CSS

This component expands the library's collection of ready-to-use CSS animations and UI components, helping front-end developers implement this pattern without relying on JavaScript libraries. It leverages custom CSS properties for easy configuration and includes proper accessibility attributes.
