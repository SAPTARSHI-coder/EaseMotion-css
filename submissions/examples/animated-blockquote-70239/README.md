# CSS Animated Blockquote

## Description
An elegantly animated blockquote component that features a smooth vertical border reveal, flying quotation mark pseudo-elements, and fading text entrance. Created for Issue #70239.

## Features
- **Pure CSS:** No JavaScript required.
- **Accessible:** Includes semantic HTML `<blockquote>` and `<figcaption>` tags.
- **Smooth Animation:** CSS keyframes handle the entrance reveal.
- **Reduced Motion Support:** Respects `prefers-reduced-motion` to immediately display the blockquote in its final static state.

## Usage
Wrap your quotation in the `.ease-animated-blockquote-wrapper`.

```html
<figure class="ease-animated-blockquote-wrapper">
    <blockquote class="ease-animated-blockquote">
        <p>Your quote here.</p>
    </blockquote>
    <figcaption class="ease-blockquote-attribution">
        &mdash; Author Name
    </figcaption>
</figure>
```
