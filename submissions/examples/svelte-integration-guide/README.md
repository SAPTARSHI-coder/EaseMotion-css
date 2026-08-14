# Svelte Integration Guide

This guide explains how to use EaseMotion CSS in Svelte and SvelteKit projects.

## Installation

```bash
npm install easemotion-css
```

## Importing EaseMotion

In `src/app.css`:

```css
@import "easemotion-css";
```

Or in `+layout.svelte`:

```svelte
<script>
    import "../app.css";
</script>
```

## Conditional Animations with class:

```svelte
<script>
    let visible = true;
</script>

<div class:ease-fade-in={visible}>
    Animated Content
</div>
```

## Svelte Transition vs EaseMotion

Svelte:

```svelte
<div transition:fade>
    Content
</div>
```

EaseMotion:

```html
<div class="ease-fade-in">
    Content
</div>
```

EaseMotion provides reusable animation utilities while Svelte transitions are component-specific.
