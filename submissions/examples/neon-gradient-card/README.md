# Animated Neon Gradient Border Card

## Description
This submission resolves Issue #68959 by introducing a sleek Web3/Gamer style card with a continuously rotating, glowing neon gradient border.

## Features
- Pure CSS implementation, no JavaScript required.
- Utilizes `::before` pseudo-element with `conic-gradient` to create a multi-colored neon edge.
- Smooth `360deg` continuous rotation using CSS `@keyframes`.
- Inner `.ease-neon-content` div masks the center with a solid background, creating the illusion of a glowing animated border.
- Easily customizable variables for border width, radius, and colors.

## Usage
Wrap your card's content inside the `.ease-neon-content` div, and place that div directly inside the outer `.ease-neon-card` container. Customize the CSS variables like `--neon-border-width` on the card to change the border thickness. Ensure the outer card has relative positioning, hidden overflow, and padding that matches the border width for the inner content to sit perfectly inside the mask.
