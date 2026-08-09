# Flip Word Counter (Pure CSS)

A pure CSS animated "Flip Word" typography component, heavily inspired by modern SaaS landing page hero sections. It cycles smoothly through an array of words to create dynamic, engaging headlines without requiring any JavaScript.

## Features
- 🔄 **Seamless Looping**: Uses a duplication trick in the HTML track to create an infinite, glitch-free loop.
- 📐 **3D Perspective Flip**: Applies a subtle `rotateX()` during the slide transition to emulate a physical flip-clock mechanism.
- ♿ **Accessibility First**: Hides the complex animated text track from screen readers using `aria-hidden="true"`, allowing developers to provide a clean `.sr-only` fallback sentence. 
- ⏸️ **Reduced Motion Support**: Automatically disables the animation and locks to the first word for users with vestibular sensitivities.
- ⚡ **Zero JavaScript**: Runs entirely on the GPU via CSS `@keyframes` and `transform`.

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--flip-duration` | `6s` | The total time to complete one full cycle of all words. |
| `--flip-easing` | `cubic-bezier(...)` | Snappy easing curve to ensure the words pause long enough to be read. |
| `--flip-height` | `1.2em` | Matches the `line-height` to ensure the track masks the words perfectly. |

## Usage
Wrap your dynamic words inside `.ease-flip-container` > `.ease-flip-track`. 
**Important Requirement:** To make the loop seamless, the very last `.ease-flip-item` in your HTML must be an exact duplicate of the first item!