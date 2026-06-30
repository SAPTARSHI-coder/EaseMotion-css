# Bounce on Click

## What it does

Adds a satisfying bounce animation when clicking on buttons, cards, or any interactive element.

## How to use it

<button class="ease-bounce-click">Click Me</button>

Add JavaScript to trigger:

element.classList.add('ease-bounce-active');
setTimeout(() => element.classList.remove('ease-bounce-active'), 500);

## Variants

- ease-bounce-fast - 0.2s animation
- ease-bounce-slow - 0.6s animation
- ease-bounce-rotate - Bounce with slight rotation
- ease-bounce-shake - Bounce with side shake

## Why it fits EaseMotion CSS

- Pure CSS animation
- Multiple bounce styles
- JavaScript only for trigger management
- Satisfying tactile feedback
