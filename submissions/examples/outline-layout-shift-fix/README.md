# Outline Layout Shift Fix

A fundamental CSS architectural pattern demonstrating how to apply interactive hover rings without unintentionally triggering layout recalulations and sibling shifting.

## Features
- **The Bug Context**: It is incredibly common for developers to highlight an active or hovered card by adding a border (e.g., `.card:hover { border: 4px solid blue }`). However, standard CSS borders physically alter the box model dimensions of the element. Adding a 4px border suddenly increases the element's width and height by 8px total. The browser must instantly recalculate the entire page layout to accommodate this new size, shoving all sibling elements out of the way. This causes a frustrating, jittery UI experience.
- **The Core Solution**: 
  - Use `outline` instead of `border`. The `outline` property draws a visual boundary line around the element but *does not consume any space* in the CSS Box Model. Because the element's mathematical dimensions remain perfectly identical, no siblings are shifted, and the layout remains rock solid.
  - By using `outline-offset: -4px`, we can mimic an inset border perfectly.

## Usage
Open `demo.html` in your browser. 
- Look at the **Buggy Demo**. Hover rapidly across the three cards. Notice how applying the border violently forces the other cards to jump left and right to make room for the new border pixels.
- Look at the **Fixed Demo**. Hover rapidly across these three cards. The highlight is identical, but because it utilizes `outline`, the cards remain perfectly stationary, creating a professional, stable interaction.

## Files
- `demo.html`: The HTML structure demonstrating the side-by-side jitter comparison.
- `style.css`: The styling engine contrasting `border` with `outline` and showcasing `outline-offset`.
