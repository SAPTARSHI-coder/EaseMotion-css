# CSS Accordion Reveal

A smooth, CSS-only accordion interaction that demonstrates expandable
content with animated reveal effects and a rotating indicator.

## ✨ Features

- Pure HTML and CSS
- No JavaScript required
- Semantic `<details>` and `<summary>` elements
- Smooth content reveal animation
- Animated `+` indicator
- Hover interaction
- Focus-visible state
- Glassmorphism-inspired design
- Responsive layout
- Standalone demo

## 📁 Folder Structure

```text
css-accordion-reveal/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

Open `demo.html` directly in a modern web browser.

The stylesheet is loaded from the same directory:

```html
<link rel="stylesheet" href="style.css">
```

Then create an accordion using `<details>` and `<summary>`:

```html
<details class="accordion-item">
    <summary>
        <span>What is EaseMotion CSS?</span>
        <span class="accordion-icon">+</span>
    </summary>

    <div class="accordion-content">
        <div class="content-inner">
            <p>
                Your expandable content goes here.
            </p>
        </div>
    </div>
</details>
```

## 🎨 How It Works

The component uses the native HTML `<details>` element to control
the open and closed states.

CSS detects the open state using:

```css
.accordion-item[open]
```

The content reveal is created using a transition between:

```css
grid-template-rows: 0fr;
```

and:

```css
grid-template-rows: 1fr;
```

The `+` indicator rotates when the accordion is opened:

```css
.accordion-item[open] .accordion-icon {
    transform: rotate(45deg);
}
```

## 💡 Use Cases

This pattern can be adapted for:

- FAQ sections
- Documentation
- Settings panels
- Feature descriptions
- Help sections
- Product information
- Expandable navigation content

## 🛠 Technologies

- HTML5
- CSS3
- CSS Grid
- CSS Transitions
- CSS Animations
- `<details>` / `<summary>`

## 📌 EaseMotion CSS

This example demonstrates an animation-first approach using
human-readable and composable CSS without requiring JavaScript
or external dependencies.

## 📄 License

This example is submitted as part of the EaseMotion CSS examples collection.