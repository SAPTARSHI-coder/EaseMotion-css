# Testimonial Wall Component

A visually engaging, masonry-style Testimonial Wall designed to highlight user reviews, feedback, and success stories entirely through HTML and CSS.

## Features

- **Pure HTML/CSS:** Uses CSS multi-column layout (`column-count`, `break-inside: avoid`) to achieve a seamless masonry grid without Javascript positioning algorithms.
- **Featured Testimonial:** Includes a highly distinct `.tw-featured` variation for your best reviews.
- **Avatar Placeholders:** Beautiful gradient placeholders for authors when images are missing.
- **Responsive:** Automatically scales from 3 columns down to 2 and 1 on smaller devices.
- **Light & Dark Mode:** Native `@media (prefers-color-scheme: dark)` styling for surrounding UI elements.

## Usage

Copy the HTML layout and include `style.css`. The parent container `.tw-masonry-wall` handles the multi-column distribution, so simply append as many `.tw-card` children as needed inside of it.

## File Structure

- `demo.html`: Contains example markup demonstrating standard and featured cards inside the masonry wrapper.
- `style.css`: The CSS rules for masonry columns, card aesthetics, and avatar gradients.
