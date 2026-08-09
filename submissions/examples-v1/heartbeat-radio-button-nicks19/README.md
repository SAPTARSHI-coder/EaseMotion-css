# Heartbeat Radio Button

A minimalist, pure CSS radio button component that replaces the standard browser radio inputs with a sleek "heartbeat" pulsing animation when selected.

## Features

- **Pure CSS**: Zero JavaScript required. Utilizes the "Checkbox/Radio Hack" (`:checked`) to manage state entirely via CSS.
- **Heartbeat Animation**: When a radio is selected, an outer ring pulses outwards infinitely, creating an engaging, organic feeling.
- **Spring Physics**: The inner dot scales up using the signature EaseMotion `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve for a snappy, playful feel.
- **Accessible & Responsive**: Relies on standard `<label>` and `<input type="radio">` markup. Clicking the text selects the radio.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Copy the HTML structure from `demo.html` to implement the radio buttons.

## Usage

Wrap a hidden native radio input and the custom styling divs inside a label:

```html
<label class="ease-heartbeat-radio">
    <input type="radio" name="example" value="1">
    <div class="ease-radio-outer">
        <div class="ease-radio-inner"></div>
    </div>
    <span>Option 1</span>
</label>
```

## Why it fits EaseMotion CSS

- **Motion-First Design**: Enhances a boring default UI element with an engaging heartbeat pulse and pop-in scale physics.
- **Zero Dependencies**: Relies solely on CSS `:checked` states and `@keyframes`.
