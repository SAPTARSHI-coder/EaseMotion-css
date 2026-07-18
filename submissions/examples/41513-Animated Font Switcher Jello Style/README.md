# Animated Font Switcher Jello Style

A pure CSS font switcher component with a fun "jello" interactive animation, inspired by Space design patterns. Created for the EaseMotion CSS Library.

## Features
- **Pure CSS**: No JavaScript required for the font switching logic! Utilizes the hidden radio button `:checked` state trick.
- **Jello Animation**: Uses EaseMotion-inspired keyframes to create a satisfying wobble (jello) effect on hover and selection.
- **Space Theme**: Cosmic colors, deep starry background, and neon glows for a futuristic aesthetic.
- **EaseMotion Variables**: Built to integrate seamlessly with standard EaseMotion CSS timing and easing variables.

## Structure

- `demo.html`: Live interactive demonstration of the font switcher.
- `style.css`: The styling rules containing the Space Theme design and the Jello animation keyframes.

## Usage

Include the component HTML structure with hidden radio inputs, labels, and the target preview box as siblings within a parent container:

```html
<div class="jello-font-switcher-container">
    <!-- 1. Hidden inputs -->
    <input type="radio" name="font" id="font1" class="ease-jello-radio" checked>
    <input type="radio" name="font" id="font2" class="ease-jello-radio">
    
    <!-- 2. Controls mapped to inputs via "for" -->
    <div class="jello-font-switcher-controls">
        <label for="font1" class="ease-jello-label">Font 1</label>
        <label for="font2" class="ease-jello-label">Font 2</label>
    </div>
    
    <!-- 3. Target to apply styles to -->
    <div class="preview-box">
        <p class="preview-text">Preview Text</p>
    </div>
</div>
```

## Customization

You can easily customize the space theme colors by overriding the CSS variables located in the `:root` pseudo-class:

- `--space-dark`: Main background color
- `--space-purple`: Gradient accent color
- `--neon-blue`: Primary glowing accent
- `--neon-pink`: Secondary highlight color
