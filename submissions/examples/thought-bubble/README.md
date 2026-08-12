# 💭 Thought Bubble

A playful animated thought-bubble experience where thoughts emerge, float, wobble, and gradually disappear into the atmosphere.

Built entirely with vanilla HTML, CSS, and JavaScript.

## ✨ Features

* 💭 Animated thought bubbles
* 🌱 Smooth bubble emergence
* 🫧 Organic floating movement
* 🌊 Horizontal wobble
* ✨ Soft bubble glow
* 🌫️ Fade-out lifecycle
* 📝 Random thought messages
* 📊 Live thought counter
* 🎚️ Intensity control
* 🧹 Clear functionality
* ⌨️ Keyboard shortcuts
* 📱 Responsive layout
* 🚫 No external dependencies

## 🎬 Animation Lifecycle

Every thought follows an animated lifecycle:

```text
Create
  ↓
Scale In
  ↓
Float
  ↓
Wobble
  ↓
Drift
  ↓
Fade
  ↓
Remove
```

This keeps the animation feeling organic instead of simply moving an element from one point to another.

## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Create the basic container:

```html
<div class="thought-stage" id="stage">
  <div class="bubble-cloud" id="bubbleCloud"></div>
</div>
```

Generate a thought:

```javascript
createThought();
```

Clear all active thoughts:

```javascript
cloud.innerHTML = "";
```

## ⌨️ Keyboard Controls

| Key   | Action           |
| ----- | ---------------- |
| Space | Generate thought |
| C     | Clear thoughts   |

## 🎨 Customization

Thought messages can be changed through the `thoughts` array:

```javascript
const thoughts = [
  "What if?",
  "Keep going.",
  "Let's try something new."
];
```

Animation duration can be modified through:

```javascript
--duration
```

Horizontal movement is controlled through:

```javascript
--drift
```

## 🧠 Design Philosophy

The component treats each thought as a temporary visual object.

Instead of instantly displaying text, every thought has:

* An origin
* A growth phase
* A movement phase
* A fading phase
* A removal phase

This creates a small animated narrative every time a thought appears.

## 🌐 Browser Support

Tested with modern:

* Chrome
* Firefox
* Edge
* Safari

## 📦 Dependencies

None.

The component uses only:

* HTML5
* CSS3
* JavaScript ES6

## 📝 License

MIT License.

Free to use, modify, and distribute.
