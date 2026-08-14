# 3D Footer with Minimalist Styling

A clean, modern minimalist footer that utilizes CSS `position: sticky` and z-indexing to create a beautiful "uncover" or "reveal" 3D depth effect as the user reaches the bottom of the page.

## Features
- Minimalist, high-contrast aesthetic inspired by Apple-style design
- "Reveal" 3D scrolling effect where the footer remains fixed at the bottom while the main page content slides up to uncover it
- Soft shadows and rounded corners on the page content to enhance the 3D layered depth
- Fully responsive layout utilizing CSS Flexbox
- Clean typography utilizing the `Inter` font family

## Usage
Include `demo.html` and `style.css` in your project. 
To achieve the 3D reveal effect, ensure your main page content (`.page-content`) has a higher `z-index` and a solid background color. The `.footer-wrapper` should be placed at the very end of your DOM, configured with `position: sticky; bottom: 0;` and a lower `z-index` so that the main content slides over it.
