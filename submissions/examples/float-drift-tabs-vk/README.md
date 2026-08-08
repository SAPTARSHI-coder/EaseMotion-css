# Float-Drift Tabs for Accessible Web Layouts

A responsive tab navigation component built with pure HTML and CSS featuring continuously drifting tab buttons, smooth content transitions, and a clean modern design. The component uses CSS animations to create a subtle floating effect while remaining lightweight, accessible, and easy to customize.

---

## Features

- Pure HTML and CSS
- Continuous float-drift animation for tab buttons
- Staggered floating motion for a natural appearance
- Hover lift interaction
- Smooth animated tab content transitions
- Responsive layout for desktop, tablet, and mobile
- CSS Custom Properties for easy customization
- Keyboard-accessible radio button navigation
- Supports `prefers-reduced-motion`
- No JavaScript required

---

## Folder Structure

```
float-drift-tabs-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Include the stylesheet.

```html
<link rel="stylesheet" href="style.css">
```

Use the following structure.

```html
<div class="tabs">

    <input type="radio" id="overview" name="tabs" checked>
    <input type="radio" id="analytics" name="tabs">
    <input type="radio" id="settings" name="tabs">

    <div class="tab-buttons">
        <label for="overview">Overview</label>
        <label for="analytics">Analytics</label>
        <label for="settings">Settings</label>
    </div>

    <div class="tab-content">

        <div class="content overview">
            <h2>Overview</h2>
            <p>Your content goes here.</p>
        </div>

        <div class="content analytics">
            <h2>Analytics</h2>
            <p>Your content goes here.</p>
        </div>

        <div class="content settings">
            <h2>Settings</h2>
            <p>Your content goes here.</p>
        </div>

    </div>

</div>
```

---

## CSS Custom Properties

```css
:root {
    --primary: #6366f1;
    --background: #f5f7fb;
    --card: #ffffff;
    --text: #1f2937;
    --muted: #6b7280;
    --shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    --radius: 18px;
}
```

---

## Accessibility

- Semantic HTML5 structure
- Keyboard-accessible navigation using radio buttons
- Responsive across desktop, tablet, and mobile devices
- Supports `prefers-reduced-motion`
- No JavaScript dependencies

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.