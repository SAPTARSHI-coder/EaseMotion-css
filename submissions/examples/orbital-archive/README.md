# 🛰️ Orbital Archive

Orbital Archive turns stored information into a miniature animated planetary system.

A central archive core represents the storage system while individual memories orbit around it at different distances and speeds.

## ✨ Features

* 🛰️ Multiple orbital layers
* 🌐 Central archive core
* 📦 Dynamic archive items
* 🔄 Continuous orbital animation
* ✨ Glowing satellites
* 🖱️ Hover labels
* ➕ Dynamic item creation
* 🎚️ Orbit speed control
* 📊 Memory counter
* 🔄 Reset functionality
* 📱 Responsive design
* 🚫 No dependencies

## 🪐 Orbital Model

Each archive item is assigned:

```text
Orbit
Duration
Delay
Label
```

The orbit index determines the distance from the center.

The animation itself is implemented using CSS transforms:

```css
transform:
  rotate(...)
  translateX(...);
```

## 🚀 Usage

Include:

```html
<link rel="stylesheet" href="style.css">
```

Create the archive:

```html
<div class="space">
  <div class="core">ARCHIVE</div>
  <div id="satellites"></div>
</div>
```

Add a memory:

```javascript
addMemory();
```

Reset:

```javascript
reset();
```

## 🎚️ Speed Control

The component exposes an orbit-speed custom property:

```css
--orbit-speed
```

Increasing the value causes the orbiting objects to move faster.

## 🎨 Customization

Memory names are stored in:

```javascript
const memories = [
  "First Idea",
  "Prototype",
  "Discovery"
];
```

Additional orbital layers can be created by adding new `.orbit` elements.

## 🧠 Design Philosophy

The component uses orbital motion as a metaphor for stored information.

The center represents permanence while orbiting objects represent memories that remain connected to the archive but continue moving independently.

## 📦 Dependencies

None.

## 🌐 Browser Support

* Chrome
* Firefox
* Edge
* Safari

## 📝 License

MIT License.
