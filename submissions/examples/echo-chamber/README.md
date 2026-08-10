# 🔊 Echo Chamber

Echo Chamber is an interactive visual sound experiment where every click creates an expanding ripple that represents an echo.

No audio is required.

The component translates the concept of sound propagation into animated visual motion.

## ✨ Features

* 🔊 Click-generated echoes
* 🌀 Expanding rings
* ✨ Glow effects
* 🌊 Smooth scale animation
* 🎚️ Echo strength control
* 📊 Echo counter
* 🧹 Clear functionality
* ⌨️ Space shortcut
* 📱 Responsive design
* 🚫 No dependencies

## 🎬 Echo Lifecycle

Each echo follows:

```text
Interaction
    ↓
Spawn
    ↓
Expansion
    ↓
Glow
    ↓
Fade
    ↓
Removal
```

The animation is implemented using CSS transforms and opacity.

## 🚀 Usage

Add:

```html
<link rel="stylesheet" href="style.css">
```

Create the chamber:

```html
<div class="chamber" id="chamber">
  <div id="echoes"></div>
</div>
```

Create an echo:

```javascript
createEcho(x, y);
```

## ⌨️ Controls

| Input           | Action             |
| --------------- | ------------------ |
| Click           | Create echo        |
| Space           | Create center echo |
| Clear button    | Remove echoes      |
| Strength slider | Change echo size   |

## 🎨 Customization

The echo size is determined by:

```javascript
const size = 50 + Number(strength.value) * 2.2;
```

The animation duration can be changed through:

```css
animation: echo 2.2s ease-out forwards;
```

## 🧠 Design Philosophy

Echo Chamber uses animation to communicate an abstract concept.

Instead of playing an actual sound, the component allows users to visually perceive:

* Propagation
* Distance
* Energy
* Decay
* Interaction

This makes it useful as both a visual effect and an educational animation.

## 📦 Dependencies

None.

## 🌐 Browser Support

* Chrome
* Firefox
* Edge
* Safari

## 📝 License

MIT License.
