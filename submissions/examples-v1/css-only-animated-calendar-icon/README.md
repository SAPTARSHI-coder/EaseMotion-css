# CSS-only Animated Calendar Icon

An interactive, 3D animated calendar icon component built entirely with CSS. No JavaScript required.

## Overview

This component simulates a daily tear-off or flip calendar. When hovered, the top date page flips down using a smooth 3D CSS transform (`rotateX(-180deg)`), revealing the next date underneath.

## Features

- ✨ 100% CSS-only (no JavaScript)
- 📅 3D flip animation using CSS perspective and transforms
- 🔗 Realistic 3D styled calendar rings
- 🎨 Clean, modern aesthetic with soft shadows
- 🖱️ Interactive hover state

## Files

- `demo.html`: The HTML structure containing the calendar, header, and pages.
- `style.css`: The CSS styling and 3D transformation logic.

## Usage

Simply copy the HTML structure and link the CSS file to use this component. The component uses the `Poppins` font from Google Fonts for a clean, friendly look.

## Customization

You can customize the calendar by changing the HTML text or modifying the CSS in `style.css`:

- Header color: Change `background-color: #ef4444;` in `.ease-calendar-header` (Red by default).
- Dates: Modify the numbers in the `.ease-cal-day` spans within the HTML.
- Flip speed: Adjust `transition: transform 0.8s` in `.ease-cal-page-top`.
