# 🪐 Orbital Command Center

An interactive orbital command center where satellites continuously orbit a central planet with dynamic scenes, adjustable orbital speed, energy pulses, satellite activation, and ambient space effects.

## 📖 Description

The Orbital Command Center creates a futuristic space-control experience using vanilla HTML, CSS, and JavaScript. It features 3 visual scenes (Nebula, Deep Space, Solar), 6 orbiting satellites, 3 orbital rings, adjustable orbital speed from 0–100%, satellite activation controls, energy pulse effects, 24 animated background stars, a real-time active satellite counter, pause/resume control, keyboard shortcuts, responsive behavior, and reduced-motion support.

## 🎯 Core Features

* Orbital system – 6 satellites continuously rotate around a central planet
* 3 orbital rings – independent orbital paths with different speeds and directions
* 3 scenes – Nebula, Deep Space, and Solar with unique backgrounds and accent colors
* Speed control – adjustable orbital speed from 0–100%
* Satellite controls – click individual satellites to activate or deactivate them
* Energy pulse – expanding pulse travels outward from the central planet
* Planet animation – central planet uses floating, glow, and ring animations
* Star field – 24 dynamically generated background stars with independent twinkle delays
* Satellite counter – tracks currently active satellites in real-time
* Pause system – freezes the complete animation state
* Keyboard controls – Space for pulse, P for pause, 1/2/3 for scenes
* Hover feedback – satellites and controls provide interactive visual feedback
* Responsive design – orbital dimensions and controls adapt to smaller screens
* Reduced motion – respects `prefers-reduced-motion` for accessibility
* Self-contained – no external libraries, frameworks, or assets required

## 🌌 Scenes

| Scene      | Icon | Background  | Accent | Description                    |
| ---------- | ---- | ----------- | ------ | ------------------------------ |
| Nebula     | ✦    | Dark violet | Purple | Atmospheric nebula environment |
| Deep Space | ◉    | Deep blue   | Cyan   | Minimal deep-space environment |
| Solar      | ☀    | Warm brown  | Orange | Solar-inspired environment     |

## ⌨️ Interaction Options

| Method          | Action                          |
| --------------- | ------------------------------- |
| Click satellite | Toggle satellite online/offline |
| Slider          | Change orbital speed            |
| Scene buttons   | Change visual environment       |
| Energy Pulse    | Trigger orbital energy wave     |
| Pause           | Freeze/resume animations        |
| Space           | Trigger energy pulse            |
| P               | Pause/resume system             |
| 1               | Activate Nebula scene           |
| 2               | Activate Deep Space scene       |
| 3               | Activate Solar scene            |

## ✨ Orbital Experience

When interacting with the component:

* Satellites orbit the central planet using independent CSS animations
* Orbital rings rotate at different durations and directions
* The central planet continuously floats and emits a soft glow
* Satellite hover states increase scale and brightness
* Clicking a satellite changes its active/inactive state
* The active satellite counter updates immediately
* Energy Pulse creates a radial expanding wave from the planet
* Scene changes update the complete color environment
* Background stars continuously twinkle with randomized delays
* Pause freezes all active animations
* Keyboard shortcuts provide alternative interaction methods

## 💡 Why Use This Component?

This component is useful for:

* Space-themed interfaces
* Developer portfolio landing pages
* Technology dashboards
* AI and futuristic product interfaces
* Game interfaces
* Science and education websites
* Interactive hero sections
* Experimental UI showcases

The component demonstrates how multiple lightweight CSS animation systems can work together to create a cohesive interactive experience without requiring an animation library.

## 🛠️ Technologies Used

### HTML5

Semantic structure, interactive controls, data attributes, and accessible form elements.

### CSS3

CSS custom properties, gradients, transforms, keyframes, responsive media queries, hover states, animation timing, `prefers-reduced-motion`, and dynamic scene variables.

### JavaScript ES6

DOM event handling, dynamic star generation, keyboard interaction, state management, satellite counting, scene switching, and animation controls.

## 🎨 Design Philosophy

This component follows EaseMotion CSS's animation-first philosophy through:

* Orbital motion – satellites use independent circular animation paths
* Layered motion – orbital rings, satellites, planet, stars, and glow use separate animation systems
* Interactive feedback – hover, click, scene, speed, and pause states provide immediate visual responses
* Energy animation – a radial pulse provides a clear visual response to user actions
* Ambient motion – background stars and planet glow continuously animate without distracting from the interface
* Motion control – users can adjust orbital speed and completely pause the animation
* Visual states – active and inactive satellites are clearly differentiated
* Accessibility – reduced-motion users receive a static presentation
* Responsive motion – orbital dimensions adapt to different viewport sizes

## 🔧 Customization Options

| Property         | Location                 | Default  |
| ---------------- | ------------------------ | -------- |
| Orbital speed    | `--orbit-duration`       | 15.5s    |
| Speed range      | `speed` input            | 0–100%   |
| Satellite count  | HTML satellite elements  | 6        |
| Orbital rings    | `.orbit` elements        | 3        |
| Background stars | `generate` loop          | 24       |
| Scene system     | `data-scene`             | 3 scenes |
| Planet size      | `.planet`                | 105px    |
| Pulse duration   | `.pulse-active`          | 0.9s     |
| Star animation   | `twinkle`                | 3s       |
| Reduced motion   | `prefers-reduced-motion` | Enabled  |

## 📸 Preview States

| State             | Visual                                                                   |
| ----------------- | ------------------------------------------------------------------------ |
| System Online     | Six active satellites orbiting the planet                                |
| Satellite Offline | Selected satellite becomes dimmed                                        |
| Energy Pulse      | Expanding luminous wave travels from the planet                          |
| Scene Change      | Background and accent colors transition to a different space environment |
| Paused            | All orbital and ambient animations freeze                                |
| Speed 0%          | Orbital motion becomes extremely slow                                    |
| Speed 100%        | Satellites orbit at maximum configured speed                             |

## 📁 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then place the component structure inside the page:

```html
<main class="orbital-app" data-scene="nebula">
  <section class="orbital-display">
    <div class="orbit orbit-one"></div>
    <div class="orbit orbit-two"></div>
    <div class="orbit orbit-three"></div>

    <div class="planet">
      <div class="planet-core"></div>
      <div class="planet-glow"></div>
    </div>

    <div class="satellite satellite-1">
      <span></span>
    </div>
  </section>
</main>
```

The included JavaScript handles satellite interaction, scene selection, orbital speed, energy pulses, keyboard controls, pause/resume behavior, and active satellite counting.

## 🧪 Browser Testing

Tested with:

* Chrome
* Firefox
* Edge
* Safari-compatible CSS features used where possible

## ♿ Accessibility

The component includes:

* Keyboard interaction for major actions
* Native range input for speed control
* Visible active/inactive states
* Reduced-motion support using `prefers-reduced-motion`
* Responsive layout for smaller screens

## 📝 License

MIT License – free to use, modify, and distribute.

## ✨ Credits

Created as a lightweight interactive UI component for futuristic interfaces, space-themed experiences, technology dashboards, and animation-focused web design.
