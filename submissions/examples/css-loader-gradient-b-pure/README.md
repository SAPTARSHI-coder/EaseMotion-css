# Responsive Gradient Loader (Variant B)

A sleek, pure CSS loading indicator featuring a continuous conic gradient track with a hollow center.

## Features
- **Conic Gradient Rotation**: Utilizes `conic-gradient()` seamlessly wrapped around a circle to create a smooth, multi-color loading track (Blue -> Indigo -> Fuchsia).
- **CSS Masking**: Employs CSS `mask` and `-webkit-mask` with a `radial-gradient` to perfectly hollow out the center of the gradient circle without needing a solid background-color overlay hack. This allows the loader to be placed on top of *any* background.
- **Dynamic Physics**: Uses a highly customized `cubic-bezier` timing function on the rotation animation to give the spinner a natural, "whipping" physical feel.
- **Inner Depth Element**: An inner pulsing dot adds a secondary layer of motion.
- **Animated Text**: Includes loading text with cascading, animated ellipsis dots (`...`).

## Usage
Include `demo.html` and `style.css` in your project. You can easily adjust the size of the loader and the thickness of the gradient track by modifying the `--loader-size` and `--track-width` CSS variables in the `:root`.
