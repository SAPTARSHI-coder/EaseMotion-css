# 🌳 Root Network

An animated underground root-network visualization where organic branches grow from a central tree and reveal hidden connections.

## ✨ Features

* 🌳 Central tree visualization
* 🌱 Progressive root growth
* 🔀 Branching paths
* 🟢 Animated connection nodes
* ✨ Node glow effects
* 📊 Growth progress
* 🔄 Reset functionality
* ⌨️ Keyboard shortcuts
* 📱 Responsive layout
* 🚫 No external dependencies

## 🌱 How It Works

The component uses SVG paths to represent the underground root system.

Each root is represented by a path:

```javascript
"M450 390 Q360 410 250 450"
```

When the root becomes active, its stroke is animated using:

```css
stroke-dasharray
stroke-dashoffset
```

This creates the appearance of the root physically growing across the soil.

## 🚀 Usage

Include:

```html
<link rel="stylesheet" href="style.css">
```

Create the SVG:

```html
<svg viewBox="0 0 900 500">
  <g id="rootPaths"></g>
  <g id="nodes"></g>
</svg>
```

Trigger growth:

```javascript
growRoots();
```

Reset:

```javascript
reset();
```

## ⌨️ Controls

| Input | Action     |
| ----- | ---------- |
| Click | Grow Roots |
| Space | Grow Roots |
| R     | Reset      |

## 🎨 Customization

Roots can be changed by modifying the `roots` array.

New paths can be added without changing the animation engine.

Root thickness:

```css
.root {
  stroke-width: 4px;
}
```

Growth duration:

```css
animation: grow 1.2s ease forwards;
```

## 🧠 Design Philosophy

The component intentionally combines two visual ideas:

1. Organic biological growth
2. Structured network visualization

This makes the component suitable for interfaces representing:

* Relationships
* Knowledge
* Ecosystems
* Dependencies
* Data networks
* Connected systems

## 📦 Dependencies

None.

## 🌐 Browser Support

* Chrome
* Firefox
* Edge
* Safari

## 📝 License

MIT License.
