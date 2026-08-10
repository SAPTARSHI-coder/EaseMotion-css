# Float Drift Drawer

A lightweight off-canvas navigation drawer featuring a subtle floating drift animation, built with pure HTML and CSS.

## Features

- Pure HTML & CSS
- Off-canvas drawer
- Float drift animation
- Responsive design
- Accessible with `prefers-reduced-motion`
- No JavaScript required

## Folder Structure

```
float-drift-drawer/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet.

```html
<link rel="stylesheet" href="style.css">
```

Use the checkbox-controlled drawer.

```html
<input type="checkbox" id="drawer-toggle">

<label for="drawer-toggle" class="menu-btn">
Menu
</label>

<nav class="drawer">
    ...
</nav>
```

## Customization

You can modify:

- Drawer width
- Colors
- Animation duration
- Floating distance
- Typography

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## License

MIT