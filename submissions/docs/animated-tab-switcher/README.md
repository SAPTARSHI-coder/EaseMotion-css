# Animated Tab Switcher

A responsive **CSS-only tab switcher** built with HTML radio buttons and pure CSS.
It includes a sliding underline indicator, smooth content transitions, and support for multiple independent tab groups without using JavaScript.

## Description

This component is designed for modern user interfaces such as dashboards, documentation pages, account settings, and pricing sections.

It demonstrates how far CSS-only interactions can go while keeping the code lightweight, reusable, and easy to integrate.

## Features

* Pure HTML + CSS
* No JavaScript required
* Sliding underline animation
* Smooth tab content transitions
* Responsive layout
* Multiple tab sections on the same page
* Easy to customize and reuse

## Folder Structure

```text
submissions/animated-tab-switcher/
├── demo.html
├── style.css
└── README.md
```

## How It Works

The tab switcher uses:

* **radio inputs** to store the active tab state
* **labels** as clickable tab buttons
* **CSS sibling selectors** to display the selected content
* **CSS transitions and transforms** to animate the indicator and content

Each tab group works independently by using a unique `name` attribute for its radio inputs.

## Usage

1. Open `demo.html` in your browser.
2. Click any tab label.
3. The underline moves smoothly and the content fades/slides into view.

## Customization

You can easily customize:

* tab titles
* number of tabs
* colors
* spacing
* border radius
* animation speed
* content layout

To create another independent tab group:

* duplicate the tab structure
* give the new radio inputs a different `name`
* keep each input `id` matched with its label `for` attribute

## Example

```html
<input type="radio" name="tabs1" id="tabs1-overview" checked>
<label for="tabs1-overview">Overview</label>
```

## Browser Support

This component works well in modern browsers such as:

* Chrome
* Firefox
* Edge
* Safari

## Checklist

* [x] This feature does not duplicate an existing EaseMotion CSS class
* [x] Naming will be standardized by the maintainer
* [x] Code is submitted only inside `submissions/`
* [x] No changes are made to `core/` or `components/`

## Notes

This submission is intended for the EaseMotion CSS project and follows the required submission format.

## License

Use this component within the EaseMotion CSS project guidelines.
