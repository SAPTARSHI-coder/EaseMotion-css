# Object Fit & Position Utilities

## What does this do?
Adds atomic utility classes for controlling how an image or video resizes (`object-fit`) and aligns (`object-position`) inside its container.

## How is it used?
Apply the utility classes directly to `<img>` or `<video>` elements:

```html
<img src="image.jpg" class="ease-object-cover ease-object-top" />
```

## Why is it useful?
In modern responsive web design, scaling media without distorting aspect ratios is a crucial requirement. By providing atomic utility classes for `object-fit` (`cover`, `contain`, `fill`, `none`, `scale-down`) and `object-position` (`top`, `bottom`, `center`, `left`, `right`), this feature simplifies framing, cropping, and aligning dynamic media assets inside fixed aspect-ratio container blocks.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the effect.

## Contribution Notes
- Class naming: `ease-object-*` for fitting, and `ease-object-[position]` for alignment.
