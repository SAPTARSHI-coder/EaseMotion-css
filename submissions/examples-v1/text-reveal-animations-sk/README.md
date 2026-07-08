# Text Reveal Animations

## What does this do?
This example showcases advanced text reveal animations commonly used in hero sections, landing pages, and marketing websites, including word-by-word, line-by-line, blur-to-sharp, and clip-path effects.

## How is it used?
1. **Word-by-word Reveal**: Wrap each word in a `<span>` with the `reveal-word` class.
2. **Line-by-line Reveal**: Wrap lines in elements with the `reveal-line` class.
3. **Blur-to-Sharp**: Apply the `reveal-blur` class to your text.
4. **Clip-Path Reveal**: Apply the `reveal-clip` class to your text.

Integration with existing `ease-delay-*` utilities is supported for controlling the sequence of animations.

## Why is it useful?
Standard entrance animations like `ease-fade-in` animate the entire block at once. These text-specific patterns allow for more dynamic and polished storytelling on landing pages by animating individual words or lines, creating a premium feel.

## Tech Stack
- HTML
- CSS (Native CSS Animations, no JS required)
- EaseMotion CSS (Core Variables & Utilities)

## Preview
Open `demo.html` directly in your browser to see the animations in action.

## Contribution Notes
- Includes `prefers-reduced-motion` support.
- Leverages existing EaseMotion design tokens for consistency.
- Standardized to integrate with `ease-delay-*` utilities.
