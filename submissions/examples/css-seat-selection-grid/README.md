# CSS Seat Selection Grid

A responsive, accessible CSS-only seat selection grid designed for cinema, airplane, theatre, and event-booking interfaces.

## Features

* Pure HTML and CSS
* No JavaScript required
* Available, selected, and taken seat states
* Keyboard-accessible seat selection
* Responsive grid layout
* Cinema-style screen indicator
* Visual seat-status legend
* Hover and focus interactions
* Reduced-motion support
* Easy to customize

## Files

```text
css-seat-selection-grid/
├── demo.html
├── style.css
└── README.md
```

## How It Works

Each seat is represented by a native checkbox and an associated label.

The checkbox provides built-in keyboard interaction and selection behavior, while CSS controls the visual appearance of available and selected seats.

The `:checked` selector is used to display the selected state without requiring JavaScript.

Taken seats use disabled form controls so they cannot be selected.

## Usage

Open `demo.html` in a modern web browser.

No build process, JavaScript, external libraries, or dependencies are required.

## Seat States

### Available

Available seats can be selected by clicking them or focusing the associated control and pressing the keyboard activation key.

### Selected

Selected seats use a highlighted appearance and can be deselected by activating them again.

### Taken

Taken seats are disabled and cannot be selected.

## Accessibility

The component includes:

* Native checkbox controls
* Associated `<label>` elements
* Keyboard navigation
* Visible keyboard focus indicators
* Accessible seat labels
* Disabled controls for unavailable seats
* Semantic status legend
* Reduced-motion support

## Responsive Design

The grid adapts to smaller screens using CSS media queries. Seat sizes, spacing, and typography are reduced on narrow viewports while maintaining the two-by-two seating arrangement around the aisle.

## Customization

You can customize the component through CSS variables:

```css
:root {
    --selected: #6366f1;
    --selected-dark: #4f46e5;
    --taken: #cbd5e1;
}
```

You can also change:

* Number of rows
* Number of seats
* Seat dimensions
* Aisle width
* Border radius
* Hover effects
* Selected-state styling
* Screen styling

## Technologies

* HTML5
* CSS3

## Browser Support

Designed for modern browsers supporting CSS Grid, CSS transitions, pseudo-classes, and media queries.

## License

This example follows the EaseMotion CSS repository's contribution and licensing guidelines.
