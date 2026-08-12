# 🔮 Rune Activation – Glowing Runes Activate

> An interactive rune activation component where 9 elder runes glow and activate with magical effects, sparkles, and ancient power.

---

## 📖 Description

The **Rune Activation** component creates a mystical experience where 9 elder runes (Fehu, Uruz, Thurisaz, Ansuz, Raido, Kenaz, Gebo, Wunjo, Hagalaz) activate with glowing effects, sparkle bursts, and ancient magic. Built with vanilla HTML, CSS, and JavaScript, it features individual rune toggling, activation indicators, and celebration effects.

### 🎯 Core Features

- **9 elder runes** – authentic Norse runes with names and symbols
- **Glowing activation** – runes glow with golden light when activated
- **Sparkle effects** – particle bursts on rune activation
- **Activation indicator** – progress bar showing activation count
- **Multiple interactions** – click runes, buttons, keyboard shortcuts
- **Celebration effect** – full rune set triggers sparkle celebration
- **Keyboard shortcuts** – number keys 1-9 for quick activation
- **Responsive design** – adapts to different screen sizes

### 🔮 Rune List

| # | Rune | Symbol | Name | Meaning |
|---|------|--------|------|---------|
| 1 | ᚠ | Fehu | Wealth, prosperity |
| 2 | ᚢ | Uruz | Strength, vitality |
| 3 | ᚦ | Thurisaz | Protection, conflict |
| 4 | ᚨ | Ansuz | Communication, wisdom |
| 5 | ᚱ | Raido | Journey, movement |
| 6 | ᚲ | Kenaz | Knowledge, creativity |
| 7 | ᚷ | Gebo | Gift, partnership |
| 8 | ᚹ | Wunjo | Joy, harmony |
| 9 | ᚺ | Hagalaz | Disruption, change |

### ⌨️ Interaction Options

| Method | Action |
|--------|--------|
| **Click** | Click individual rune to toggle activation |
| **Buttons** | Activate All, Random Rune, Reset |
| **Keyboard** | `A` – All · `R` – Random · `X` – Reset · `1-9` – Toggle rune |

### ✨ Activation Experience

When activating:
1. **Rune glows** – golden glow and border appear
2. **Sparkle burst** – 12 particles burst from rune
3. **Progress updates** – indicator fills and status updates
4. **Name highlights** – rune name changes color
5. **Celebration** – all 9 runes trigger 50-sparkle celebration
6. **Status changes** – "Fehu activated! (1/9)" → "All runes activated!"

### 💡 Why Use This Component?

- Perfect for mystical interfaces, fantasy themes, or gamified experiences
- Engaging rune activation with satisfying feedback
- Self-contained – no external dependencies or frameworks
- Easy to customize (rune symbols, names, colors, effects)
- Accessible with keyboard controls for power users
- Authentic elder runes add mystical atmosphere

### 🛠️ Technologies Used

- **HTML5** – semantic structure with rune grid
- **CSS3** – animations, gradients, transforms, glow effects
- **JavaScript (ES6)** – DOM manipulation, particle system, state management

### 🎨 Design Philosophy

This component embodies **EaseMotion CSS's animation-first philosophy** through:

- **Glow animations** – `@keyframes glow-pulse` for magical pulsing effect
- **Particle systems** – sparkles with randomized trajectories on activation
- **Interactive feedback** – glow effects, status updates, progress indicator
- **Progressive disclosure** – runes activate one by one with feedback
- **Celebration effects** – full activation triggers sparkle celebration
- **Human-readable classes** – `.rune`, `.rune-symbol`, `.rune-glow`, `.btn-activate`

### 🔧 Customization Options

| Property | Location | Default |
|----------|----------|---------|
| Rune count | HTML `.rune` elements | 9 |
| Rune symbols | `.rune-symbol` content | Elder runes |
| Rune names | `.rune-name` content | Norse names |
| Sparkle count | `createRuneSparkles()` | 12 |
| Celebration sparkles | `createCelebration()` | 50 |
| Glow color | CSS | #fbbf24 (gold) |

### 📸 Preview

| State | Visual |
|-------|--------|
| **Inactive** | Dim rune with subtle border |
| **Hover** | Slight scale and border highlight |
| **Active** | Golden glow, sparkle burst, name highlight |
| **All Active** | All runes glowing, celebration sparkles |

### 📝 License

MIT License – free to use, modify, and distribute.

### ✨ Credits

Created as a lightweight UI component for mystical interfaces, fantasy themes, and interactive experiences.