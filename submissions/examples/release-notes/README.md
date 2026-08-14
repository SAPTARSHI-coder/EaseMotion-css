````markdown
# CSS Release Notes Card

A minimalist **Release Notes / Changelog Card** built entirely with HTML and CSS.

This component is suitable for SaaS applications, developer tools, dashboards, product websites, open-source projects, and software changelog pages.

## Features

- Pure HTML and CSS
- No JavaScript
- No external libraries
- Version information
- Release date
- Release summary
- Feature updates
- Improvement updates
- Bug fixes
- Security updates
- Category tags
- Contributor avatars
- Changelog CTA
- Hover interactions
- Responsive design
- Reduced-motion support

## File Structure

```text
css-release-notes-card/
│
├── demo.html
├── style.css
└── README.md
````

## How to Run

1. Create a folder named:

```text
css-release-notes-card
```

2. Create the following files:

```text
demo.html
style.css
README.md
```

3. Add the corresponding code to each file.

4. Open `demo.html` in your browser.

No installation or dependencies are required.

## Component Structure

The release card contains:

```text
Release Notes Card
│
├── Release Header
│   ├── Version
│   └── Release Date
│
├── Release Summary
│   ├── Icon
│   ├── Title
│   └── Description
│
├── Changelog
│   ├── New Feature
│   ├── Improvement
│   ├── Bug Fix
│   └── Security Update
│
└── Footer
    ├── Contributors
    └── Full Changelog Link
```

## Release Version

Change the version inside `demo.html`:

```html
<div class="version">
    v2.8.0
</div>
```

For example:

```html
<div class="version">
    v3.0.0
</div>
```

## Release Date

Update:

```html
<div class="release-date">
    <span>RELEASED</span>
    <strong>11 AUG 2026</strong>
</div>
```

Replace the date with the actual release date.

## Adding a New Change

Duplicate a `.change-item`:

```html
<article class="change-item">

    <div class="change-marker feature">
        +
    </div>

    <div class="change-content">

        <div class="change-heading">

            <h3>
                New Feature
            </h3>

            <span class="tag new">
                NEW
            </span>

        </div>

        <p>
            Description of the new feature goes here.
        </p>

    </div>

</article>
```

## Available Change Types

### New Feature

```html
<div class="change-marker feature">
    +
</div>

<span class="tag new">
    NEW
</span>
```

### Improvement

```html
<div class="change-marker improvement">
    ↑
</div>

<span class="tag improved">
    IMPROVED
</span>
```

### Bug Fix

```html
<div class="change-marker fix">
    ✓
</div>

<span class="tag fixed">
    FIXED
</span>
```

### Security

```html
<div class="change-marker security">
    !
</div>

<span class="tag security-tag">
    SECURITY
</span>
```

## Changing the Main Heading

Modify:

```html
<h2>
    A faster, smarter
    experience.
</h2>
```

For example:

```html
<h2>
    Better tools.
    Better workflow.
</h2>
```

## Changing Contributors

The demo contains three contributor initials:

```html
<div class="avatars">

    <span>AM</span>
    <span>RK</span>
    <span>JS</span>

</div>
```

Replace these with the initials of your actual contributors.

## Customization

### Background

Change:

```css
:root {
    --background: #08090b;
}
```

### Card Surface

Change:

```css
:root {
    --surface: #111318;
}
```

### Border

Change:

```css
:root {
    --border: #292d34;
}
```

### Text

Change:

```css
:root {
    --text: #f2f3f5;
}
```

## Responsive Design

The card adapts to smaller screens.

### Desktop

The header, changelog items, and footer use the full horizontal layout.

### Tablet

Spacing and summary layout are reduced.

### Mobile

The component:

* Stacks the release summary
* Reduces typography
* Adjusts changelog spacing
* Stacks footer content
* Maintains readable change descriptions

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* CSS Flexbox
* CSS Gradients
* CSS Transitions
* CSS Pseudo-elements
* CSS Media Queries

## Accessibility

The component respects the user's reduced-motion preference:

```css
@media (prefers-reduced-motion: reduce) {
    .change-item,
    .changelog-link,
    .changelog-link span {
        transition: none;
    }
}
```

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
