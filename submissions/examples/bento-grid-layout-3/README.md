# Bento Grid Layout 3 — Neon Cyberpunk

A futuristic, cyberpunk-inspired bento grid layout with **neon glow effects**, **glitch animations**, **terminal aesthetics**, and **holographic elements**. Built for gaming, Web3, crypto, and futuristic SaaS interfaces.

## ✨ What's New (vs. Previous Versions)

| Feature | Version 1 | Version 2 | Version 3 (This) |
|---------|-----------|-----------|------------------|
| Theme | Dark corporate | Warm glassmorphism | **Neon cyberpunk** |
| Colors | Cool blue/purple | Warm coral/sun | **Electric cyan/magenta/lime** |
| Background | Grid pattern | Floating blobs | **Animated grid + scan line** |
| Grid | 4 columns | 3 columns | **5 columns** |
| Typography | Inter | Space Grotesk + DM Sans | **Orbitron + JetBrains Mono** |
| Effects | Glow slide | Backdrop blur | **Glitch, holographic, neon glow** |
| Content | Stats, charts | Tools, testimonials | **Terminal, network nodes, data stream** |
| Animations | Bar grow | Mesh shift | **Glitch, scan, node pulse, cursor blink** |

## 🎨 Design Philosophy

This version embraces **futuristic cyberpunk aesthetics**:
- **Deep black void** background with animated grid lines
- **Neon glow effects** on borders, text, and interactive elements
- **Terminal/code aesthetic** with monospace fonts and syntax highlighting
- **Glitch effects** for that digital distortion feel
- **Holographic gradients** that shift and shimmer

## 📂 File Structure
bento-grid-layout-3/
├── demo.html # Cyberpunk layout with 7 unique cards
├── style.css # Neon effects, glitch animations, terminal styling
└── README.md # Documentation
## 🧩 Card Breakdown

### 1. **Hero Card** (3×2)
- Holographic gradient background that shifts
- Glowing neon text with text-shadow
- Live status badge with blinking dot
- Stats section with neon numbers

### 2. **Terminal Card** (1×2)
- macOS-style terminal window with colored dots
- Syntax-highlighted code (keywords, variables, functions)
- Blinking cursor animation
- Monospace font throughout

### 3. **Network Nodes** (1×2)
- Animated node visualization with pulsing dots
- Center node (magenta) connected to 5 outer nodes (cyan)
- Connection lines with gradient fade
- Live stats at bottom

### 4. **Performance Metrics** (1×2)
- Three metric bars (CPU, Memory, Network)
- Each bar has different neon color (cyan, magenta, lime)
- Animated fill on load
- Glow effects on bars

### 5. **User Profile** (1×2)
- Rotating avatar ring with gradient avatar
- Profile stats (Nodes, Cycles, Rank)
- XP progress bar with gradient fill
- Cyberpunk role title

### 6. **System Alert** (1×1)
- Red neon theme for warnings
- Pulsing alert icon
- Two action buttons (Acknowledge/Ignore)
- Hover effects with glow

### 7. **Data Stream** (3×1)
- Live streaming indicator
- 5 data rows with timestamps
- Color-coded status badges (OK, LOAD, ACTIVE)
- Rows slide right on hover

## 🎨 Customization

### Changing Neon Colors

All neon colors are in `:root`:

```css
:root {
  --neon-cyan: #00f0ff;      /* Primary neon */
  --neon-magenta: #ff00ff;   /* Secondary neon */
  --neon-lime: #39ff14;      /* Accent neon */
  --neon-yellow: #ffff00;    /* Warning neon */
  --neon-red: #ff0033;       /* Alert neon */
}