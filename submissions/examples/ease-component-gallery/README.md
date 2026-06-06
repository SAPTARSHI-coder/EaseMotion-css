# EaseMotion CSS — Component Gallery

An interactive gallery to browse, search, filter, preview, and copy EaseMotion CSS components — all from a single interface.

## Features

- **Live Previews** — Components render in real time using EaseMotion CSS from CDN
- **Search** — Filter by component name, description, or category
- **Category Tabs** — Browse by Buttons, Cards, Animations, Hover Effects, Utilities, Navbar
- **Copy HTML** — Copy the exact HTML snippet for any component
- **Copy CSS Class** — Copy the CSS class name string
- **Responsive Grid** — Adapts to any screen size
- **Dark / Light Mode** — Persists preference via localStorage
- **Zero Build Step** — Works directly in the browser

## Usage

1. Open `demo.html` in a browser.
2. Browse the component cards.
3. Use the search bar or category tabs to find components.
4. Click **Copy HTML** or **Copy CSS** to grab the snippet.

## Components Covered

| Category    | Count | Examples                                      |
|-------------|-------|-----------------------------------------------|
| Buttons     | 8     | primary, success, danger, outline, ghost, pill, sm, lg |
| Cards       | 6     | basic, shadow, hover, glass, neumorphic, accent        |
| Animations  | 8     | fade-in, slide-up, slide-left, zoom-in, bounce, pulse  |
| Hover       | 5     | grow, glow, lift, shimmer, underline                   |
| Utilities   | 5     | flex center, flex between, grid auto, gap, text center |
| Navbar      | 3     | glass, sticky glass, blur glass                        |

## File Structure

```
ease-component-gallery/
├── demo.html       — Main gallery page
├── style.css       — Gallery styling (variables, grid, cards)
├── script.js       — Component data, filter, search, copy logic
└── README.md       — This file
```

## Dependencies

- EaseMotion CSS (loaded from CDN via `easemotion.min.css`)
- Google Fonts (Inter)
