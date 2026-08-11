# Caret Color Utilities Demo

Utilities for controlling the color of the text insertion cursor (caret) in form fields.

## Files

```text
demo.html
style.css
README.md
```

## Available Utilities

### Standard Utilities

| Class | CSS |
|---------|---------|
| `.caret-auto` | `caret-color: auto;` |
| `.caret-transparent` | `caret-color: transparent;` |
| `.caret-current` | `caret-color: currentColor;` |

### Color Utilities

| Class | CSS |
|---------|---------|
| `.caret-blue` | `caret-color: #3b82f6;` |
| `.caret-red` | `caret-color: #ef4444;` |
| `.caret-green` | `caret-color: #22c55e;` |
| `.caret-purple` | `caret-color: #a855f7;` |
| `.caret-orange` | `caret-color: #f97316;` |
| `.caret-yellow` | `caret-color: #eab308;` |
| `.caret-pink` | `caret-color: #ec4899;` |

## Usage

### Basic

```html
<input class="caret-blue">
```

### Current Text Color

```html
<input class="caret-current">
```

### Hide Caret

```html
<input class="caret-transparent">
```

## Example

```html
<input
    type="text"
    class="input caret-purple"
    placeholder="Type here">
```

## Browser Support

Modern versions of:

- Chrome
- Firefox
- Safari
- Edge

## Run

Open:

```text
demo.html
```

Then click inside each input field to see the caret color utility in action.