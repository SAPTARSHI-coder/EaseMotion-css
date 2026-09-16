# Animated Input Field

A standalone HTML/CSS example demonstrating modern animated input fields with floating labels and focus effects.

## Features

- Floating labels using CSS
- Uses `:placeholder-shown`
- Uses `:focus`
- Border animation with `@keyframes`
- Responsive card layout
- Multiple input examples:
  - Name
  - Email
  - Password
  - Search
- No JavaScript required
- Standalone HTML/CSS component

## Files

```
animated-input-bb/
├── demo.html
├── style.css
└── README.md
```

## How to Run

### Option 1: Using http-server (Recommended)

Start a local server from the project root:

```bash
npx http-server . -p 8080
```

Then open your browser and visit:

```
http://localhost:8080/submissions/examples/animated-input-bb/demo.html
```

### Option 2: Open Directly

You can also open `demo.html` directly in your browser.

## Questions

### 1. What did you build?

I created a standalone animated input field component featuring floating labels, smooth focus transitions, and animated borders using only HTML and CSS.

### 2. Which CSS concepts did you use?

- CSS `:focus`
- CSS `:placeholder-shown`
- CSS transitions
- CSS `@keyframes`
- CSS transforms
- Flexbox
- Responsive layout

### 3. Any challenges?

The main challenge was creating smooth floating label animations while keeping the component simple, responsive, and entirely CSS-based without using JavaScript.

## Browser Support

Works in all modern browsers that support:

- CSS `:placeholder-shown`
- CSS animations
- CSS transitions
- CSS transforms

## Author

Bhavesh Borse