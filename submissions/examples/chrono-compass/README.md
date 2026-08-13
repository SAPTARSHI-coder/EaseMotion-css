# 🧭 Chrono Compass

Chrono Compass is an experimental time-navigation component that transforms a 24-hour timeline into a compass-like interactive interface.

Instead of pointing toward geographic directions, the compass needle points toward a selected moment in the day.

## ✨ Features

* 🧭 Animated compass needle
* ⏳ 24-hour circular timeline
* 🕐 Time markers
* 🔄 Smooth needle rotation
* 🌀 Rotating dial
* ✨ Glow effects
* 📊 Day progress indicator
* 🎚️ Interactive time slider
* ⌨️ Arrow-key navigation
* 🔄 Reset functionality
* 📱 Responsive layout
* 🚫 No external dependencies

## ⏰ Time Model

The entire day is represented by:

```text
0 → 1440 minutes
```

where:

```text
0     = 00:00
360   = 06:00
720   = 12:00
1080  = 18:00
1440  = 24:00
```

The needle angle is calculated from the selected minute:

```javascript
const angle = (minutes / 1440) * 360;
```

This creates a continuous temporal position around the compass.

## 🚀 Usage

Include:

```html
<link rel="stylesheet" href="style.css">
```

Create the compass structure:

```html
<div class="compass">
  <div class="dial"></div>
  <div class="needle"></div>
  <div class="center"></div>
</div>
```

Update the selected time:

```javascript
updateTime();
```

## ⌨️ Controls

| Input  | Action                   |
| ------ | ------------------------ |
| Slider | Select time              |
| →      | Move forward 15 minutes  |
| ←      | Move backward 15 minutes |
| R      | Reset to noon            |
| Reset  | Return to 12:00          |

## 🎨 Customization

The default selected time is:

```javascript
720
```

which represents noon.

The timeline can be changed from a 24-hour system to another scale by modifying the maximum slider value and angle calculation.

## 🧠 Design Philosophy

Chrono Compass combines two familiar interaction models:

* A compass
* A timeline

The result is an interface where time becomes spatial.

The animation provides immediate feedback whenever the selected moment changes, making temporal navigation feel tangible rather than purely numerical.

## 📦 Dependencies

None.

## 🌐 Browser Support

* Chrome
* Firefox
* Edge
* Safari

## 📝 License

MIT License.
