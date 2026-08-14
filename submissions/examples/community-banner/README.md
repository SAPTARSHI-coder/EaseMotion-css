````markdown
# CSS Community Banner

A futuristic and minimalist **Community Banner** built entirely with HTML and CSS.

The component is designed for developer communities, open-source projects, technology platforms, social platforms, and community landing pages.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- Responsive design
- Minimalist dark-tech aesthetic
- Animated community orbit
- Member nodes
- Community statistics
- Online status indicator
- Grid background
- Glowing visual effects
- CTA buttons
- Hover interactions
- Reduced-motion accessibility support

## File Structure

```text
css-community-banner/
│
├── demo.html
├── style.css
└── README.md
````

## How to Run

1. Create a folder named `css-community-banner`.
2. Create these files:

```text
demo.html
style.css
README.md
```

3. Add the corresponding code to each file.
4. Open `demo.html` in a modern web browser.

No installation or dependencies are required.

## Main Sections

The banner contains:

* Community status
* Main heading
* Description
* Call-to-action buttons
* Community visualization
* Member nodes
* Community statistics
* Active status

## Community Visualization

The right side of the banner contains a CSS-based visual consisting of:

* Three orbital rings
* Central community core
* Four member nodes
* Rotating orbit animations

No images or SVG files are required.

## Changing the Heading

Edit the heading inside `demo.html`:

```html
<h2>
    Join the
    <span>collective.</span>
</h2>
```

For example:

```html
<h2>
    Build the
    <span>future.</span>
</h2>
```

## Changing Statistics

The statistics can be modified directly:

```html
<div>
    <strong>12.8K</strong>
    <span>MEMBERS</span>
</div>

<div>
    <strong>420+</strong>
    <span>PROJECTS</span>
</div>

<div>
    <strong>38</strong>
    <span>COUNTRIES</span>
</div>
```

You can replace these values with your project's actual community statistics.

## Changing Button Text

The primary CTA is:

```html
<a href="#" class="primary-button">
    JOIN COMMUNITY
    <span>↗</span>
</a>
```

The secondary CTA is:

```html
<a href="#" class="secondary-button">
    EXPLORE
</a>
```

Replace `#` with the actual destination URL when integrating the component into a project.

## Customization

### Background

Modify:

```css
:root {
    --background: #070809;
}
```

### Card Surface

Modify:

```css
:root {
    --surface: #101216;
}
```

### Border

Modify:

```css
:root {
    --border: #292d33;
}
```

### Text

Modify:

```css
:root {
    --text: #f2f3f4;
}
```

## Animation

The orbit rings rotate using CSS animations:

```css
@keyframes rotate {
    from {
        transform:
            translate(-50%, -50%)
            rotate(0deg);
    }

    to {
        transform:
            translate(-50%, -50%)
            rotate(360deg);
    }
}
```

The second orbit rotates in the opposite direction to create a layered motion effect.

## Responsive Design

### Desktop

The content and community visualization appear side-by-side.

### Tablet

The visual becomes smaller and moves closer to the content.

### Mobile

The component switches to a vertical composition:

* Text appears first.
* Community visualization appears underneath.
* Statistics wrap into multiple rows.
* Buttons become full width.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* CSS Flexbox
* CSS Gradients
* CSS Animations
* CSS Transforms
* CSS Media Queries
* CSS Pseudo-elements

## Accessibility

The component supports users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
    .pulse,
    .orbit-two,
    .orbit-three {
        animation: none;
    }
}
```

This disables continuous animations while keeping the component fully usable.

## Browser Support

Works in modern versions of:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

## License

Free to use, modify, and integrate into personal, educational, and open-source projects.

```
```
