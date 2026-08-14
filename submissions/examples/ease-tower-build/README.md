# 🏗️ Tower Build – Builds Upward Like Tower Blocks

> An interactive tower building component that stacks blocks upward with smooth animations, 5 color styles, and real-time height tracking.

---

## 📖 Description

The **Tower Build** component creates an engaging tower stacking experience where blocks build upward one by one. Built with vanilla HTML, CSS, and JavaScript, it features 5 color styles, smooth build animations, real-time height tracking, and a demolish mechanic.

### 🎯 Core Features

- **Stackable blocks** – build upward block by block with smooth animations
- **5 color styles** – Neon, Sunset, Ocean, Forest, Fire with gradient colors
- **Smooth build animation** – blocks rise with elastic easing and scale effect
- **Real-time tracking** – level counter and height indicator
- **Demolish mechanic** – watch the tower fall block by block
- **Multiple interactions** – buttons, click on display, keyboard shortcuts
- **Organic variation** – random width and offset for natural look
- **Responsive design** – adapts to different screen sizes

### 🎨 Color Styles

| Style | Colors | Accent | Description |
|-------|--------|--------|-------------|
| **Neon** | Blue/Purple | #818cf8 | Cyberpunk neon look |
| **Sunset** | Pink/Gold | #f472b6 | Warm sunset vibes |
| **Ocean** | Blue/Cyan | #38bdf8 | Cool ocean tones |
| **Forest** | Green | #4ade80 | Natural forest feel |
| **Fire** | Red/Orange | #f97316 | Hot fire energy |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Click** | Click on display to build a block |
| **Buttons** | Build Block, Toggle Style, Demolish |
| **Keyboard** | `Space` – Build · `B` – Build 3 · `S` – Style · `R` – Demolish |

### ✨ Building Experience

When building:
1. **Block rises** – block appears with elastic easing and scale effect
2. **Color rotation** – colors cycle through the current style palette
3. **Level updates** – counter shows current block count
4. **Height tracking** – progress bar fills as tower grows
5. **Organic variation** – each block has slightly different width and offset
6. **Completion** – tower complete at 20 blocks with celebration

### 💡 Why Use This Component?

- Perfect for game interfaces, stacking mechanics, or progression systems
- Engaging building effect with satisfying animations
- Self-contained – no external dependencies or frameworks
- Easy to customize (max blocks, colors, speed, styles)
- Accessible with keyboard controls for power users
- Demolish mechanic adds satisfying feedback

### 🛠️ Technologies Used

- **HTML5** – semantic structure
- **CSS3** – transitions, gradients, flexbox, animations
- **JavaScript (ES6)** – DOM manipulation, requestAnimationFrame, event handling

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Smooth build animations** – blocks rise with `cubic-bezier(0.34, 1.56, 0.64, 1)` elastic easing
- **Organic variation** – random width and offset for natural, imperfect look
- **Interactive feedback** – status updates, level counter, height indicator
- **Style variety** – 5 distinct color palettes from one component
- **Demolish animation** – blocks fall in reverse with stagger timing
- **Visual tracking** – height bar and level counter in real-time
- **Human-readable classes** – `.tower-block`, `.tower-scene`, `.btn-build`, `.btn-mode`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Max blocks | `maxBlocks` variable | 20 |
| Block height | CSS `height` | 40px |
| Build speed | `setTimeout` delay | 300ms |
| Width variation | `widthVariation` | 0.85-1.15 |
| Color styles | `styles` object | 5 styles |
| Demolish speed | `setTimeout` delay | 80ms |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Empty** | Just the ground, "Level 0" |
| **Building** | Blocks stack upward with animations |
| **Complete** | Full tower at 20 blocks |
| **Demolishing** | Blocks fall in reverse order |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for stacking games, progression systems, and interactive experiences.