# Glass Card Dark Mode Fix

## Problem
In Dark Mode, the `.ease-card-glass` component maintained a dark text color against a dark-tinted background, making the content invisible and violating WCAG contrast accessibility guidelines.

## Solution
Updated the `prefers-color-scheme: dark` media query for `.ease-card-glass` to explicitly include a high-contrast light text color (`#f8fafc`).

## Usage
Add the following classes to your HTML:
```html
<div class="ease-card ease-card-glass">
    </div>