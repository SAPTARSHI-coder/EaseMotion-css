# Skeleton Loading States

A pure CSS skeleton loader component that provides visually appealing placeholder states while content is loading. 

## Why it's useful

Skeleton loaders significantly improve the perceived load time of an application. Instead of displaying a blank screen or a generic spinner, skeleton loaders give users immediate feedback and a clear indication of the layout that is about to appear. This reduces user frustration and makes the application feel faster and more responsive.

## Usage

Simply add the `skeleton-loader` class to any HTML element you wish to use as a placeholder. It works well with empty `div`s styled to match the dimensions of your future content.

### HTML

```html
<!-- Avatar placeholder -->
<div class="avatar skeleton-loader"></div>

<!-- Text line placeholder -->
<div class="line skeleton-loader"></div>
```

### CSS Requirements

The animation relies on the `.skeleton-loader` class provided in `style.css`. It uses a shimmering linear gradient combined with a background position animation to create the loading effect.

It also includes built-in support for dark mode when placed inside an element with the `data-theme="dark"` attribute:

```html
<div data-theme="dark">
  <div class="skeleton-loader"></div>
</div>
```
