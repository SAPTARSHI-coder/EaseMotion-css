# Debounced Client-Side Search Input

## What does this do?

This feature adds input debouncing (with a 250ms delay) to the client-side search inputs on the documentation pages.

## How is it used?

When typing in the search input on the Cheatsheet, Animation Preview, or Animation Combination Builder pages, the search query execution is delayed by 250ms after the user pauses typing to prevent layout thrashing and jitter.

## Why is it useful?

Filtering large lists or DOM grids in vanilla JavaScript on every keystroke can cause layout thrashing and stutter, especially on slower devices or when typing rapidly. Debouncing ensures that UI updates only trigger when necessary, providing a smooth and premium user experience.

## Tech Stack

- HTML
- JavaScript (Vanilla debouncing logic)
- CSS (EaseMotion CSS variables)

## Modified Files

- `docs/cheatsheet.html`
- `docs/animations-preview.html`
- `docs/animation-combo.html`
