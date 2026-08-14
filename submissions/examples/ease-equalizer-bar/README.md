# 🎛️ Equalizer Bar – Audio Bars React to Interaction

A dynamic, interactive audio-visual equalizer where each bar responds to mouse events (hover, click) and animated wave patterns. Built with vanilla HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **24 responsive bars** with smooth height animations
- **Hover** – bars gently bump up when you hover
- **Click** – a bar pops up and returns with a spring-like feel
- **Wave mode** – continuous sine-wave animation that reacts to mouse movement
- **Controls** – Randomize, Reset, and Wave buttons
- **Status feedback** – shows what’s happening in real time
- **Color-coded bars** with subtle gradients for visual variety
- **Fully responsive** – adapts to mobile, tablet, and desktop

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the bars:
   - **Hover** over any bar to see it rise.
   - **Click** on a bar to make it pop.
   - Use the buttons below to trigger random heights, reset to center, or start a continuous wave.
3. Watch the status bar for feedback on your actions.

## 🧩 Files Included

- `demo.html` – the complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, gradients, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- Each bar is a `<div>` with a percentage-based height.
- JavaScript manages the animation loop using `requestAnimationFrame` for smooth transitions.
- **Hover** triggers a temporary height increase; **click** triggers a pop-up-and-back effect.
- **Wave mode** continuously updates bar heights using a sine function, creating a flowing equalizer effect.
- All animations use easing functions for a natural, polished feel.

## 🎨 Customization

You can tweak the equalizer easily:

- **Number of bars** – change `NUM_BARS` in the JavaScript (default: 24).
- **Colors** – edit the gradients in `style.css` under the `.bar` rules.
- **Speed** – adjust `wavePhase += 0.035` in the wave loop for faster/slower waves.
- **Height range** – modify `randomHeight()` (20–100%) or wave amplitude (`22` in the sine calculation).

## 🖥️ Browser Support

Works on all modern browsers that support `requestAnimationFrame` and CSS Flexbox:

- Chrome
- Firefox
- Safari
- Edge

## 📁 Project Structure
equalizer-bar/
├── demo.html # main page (HTML + JS)
├── style.css # all styles
└── README.md # documentation

## 🙌 Why This Fits

This component fits the **EaseMotion CSS** philosophy because it prioritizes:
- **Human-readable interaction** – hover, click, wave – all intuitive.
- **Animation-first** – motion is not decoration; it's the core feedback mechanism.
- **Delight** – each interaction feels responsive, smooth, and playful.
- **Accessibility** – keyboard and screen-reader friendly (with proper ARIA labels if extended).

---

**Made with ❤️ for interactive experiences.**