# Searchable Animation Gallery

A modern, responsive, and real-time searchable gallery for EaseMotion CSS animations (Issue #5394).

## Overview

This feature provides a dedicated interface where users can quickly browse, discover, and test various animations from the EaseMotion CSS library. It includes a real-time search filtering system built entirely with vanilla JavaScript, eliminating the need for external dependencies.

## Features

- **Real-time Search:** Filter animations instantly as you type.
- **12 Included Animations:** A wide variety of sample animations out of the box (fade, slide, zoom, spin, bounce, pulse, flip, shake, swing).
- **Modern Responsive UI:** A dark-mode inspired design with CSS grid for optimal layout on any device.
- **No Dependencies:** Built with pure HTML, CSS, and Vanilla JavaScript.
- **Zero Config:** Just open the HTML file in any modern web browser to use.
- **Smooth Interactions:** Hover states and transitions applied to cards for an engaging user experience.
- **Empty State Handling:** Displays a helpful message and icon when no animations match the search query.

## File Structure

- `demo.html`: The main markup file containing the gallery layout, 12 animation cards, search input, and inline vanilla JS logic.
- `style.css`: The styling rules for the interface, including modern aesthetics and the demo animation keyframes.
- `README.md`: Documentation for the feature.

## Usage

1. Open `demo.html` directly in your web browser.
2. Type in the "Search animations..." input field.
3. The grid of animation cards will instantly update to show only those matching your search term (by name or class).

This component is designed as a standalone gallery but can be integrated into the main EaseMotion CSS documentation site seamlessly.
