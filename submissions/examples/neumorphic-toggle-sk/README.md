# Neumorphic Toggle Switch

A buttery-smooth toggle switch designed using the Neumorphism (Soft UI) aesthetic. 

## Files
- `demo.html`: The HTML structure utilizing a hidden native checkbox.
- `style.css`: The styling that creates the soft inset and outset shadows.
- `README.md`: This file.

## Features
- **Neumorphism Design:** Uses a specific background color and a combination of light and dark drop shadows to make the UI element appear seamlessly extruded from the background.
- **Pure CSS:** Relies on the `<input type="checkbox">` and the `:checked` pseudo-class to drive the switch animation entirely without JavaScript.
- **Soft Shadows:** The track uses an `inset` shadow to look indented, while the thumb uses an standard outset shadow to look raised.

## Usage
Wrap an `<input type="checkbox">` and a `<span class="slider">` inside the `.neumorphic-toggle` label.
