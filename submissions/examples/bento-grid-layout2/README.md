# Bento Grid Layout 2 — Creative Studio

A warm, glassmorphic bento grid layout with a completely different aesthetic from the previous version. Featuring a **cream & sunset color palette**, **frosted glass cards**, **animated background blobs**, and **unique micro-interactions** — all built with pure CSS.

## ✨ What's New (vs. Version 1)

| Feature | Version 1 | Version 2 (This) |
|---------|-----------|------------------|
| Theme | Dark mode | Warm cream/glassmorphism |
| Colors | Cool (blue/purple) | Warm (coral/sun/rose) |
| Background | Grid pattern | Animated floating blobs |
| Card Style | Solid dark | Frosted glass (backdrop-filter) |
| Grid | 4 columns | 3 columns |
| Content | Stats, charts, avatars | Tools, projects, testimonials, activity feed |
| Animations | Glow slide, bar grow | Mesh shift, blob float, circle draw, heartbeat |
| Typography | Inter | Space Grotesk + DM Sans |

## 🎨 Design Philosophy

This version embraces **warmth and playfulness**:
- **Cream base** with sunset-colored blobs drifting in the background
- **Frosted glass cards** that let the colorful background shine through
- **Organic shapes** and **soft shadows** for a friendly feel
- **Italic serif accents** in headings for editorial elegance

## 📂 File Structure
bento-grid-layout-2/
├── demo.html # Creative Studio layout with 7 unique cards
├── style.css # Glassmorphism, blobs, and warm palette
└── README.md # Documentation

## 🧩 Card Breakdown

### 1. **Hero Card** (2×2)
- Animated gradient mesh background
- Pulsing logo dot
- Gradient italic text accent
- Primary CTA button with arrow animation

### 2. **Tools Grid** (1×1)
- 2×2 grid of tool icons
- Each icon has its own color theme
- Rotate + scale on hover

### 3. **Projects** (1×1)
- List of active projects with progress bars
- Animated fill on load
- Color-coded by project

### 4. **Circular Stats** (1×1)
- SVG circular progress indicator
- Animated stroke drawing
- Mini stats below

### 5. **Testimonial** (1×1)
- Large gradient quote mark
- Star rating
- Author with gradient avatar

### 6. **Activity Feed** (2×1)
- Live pulse indicator
- Sliding activity items on hover
- Color-coded icons

### 7. **CTA Card** (1×1)
- Solid coral-to-rose gradient
- Floating white shapes
- Heartbeat animation in footer

## 🎨 Customization

### Changing the Color Palette

All warm colors are in `:root`:

```css
:root {
  --bg-base: #fef7ed;      /* Cream background */
  --coral: #ff6b6b;        /* Primary warm color */
  --sun: #feca57;          /* Yellow accent */
  --peach: #ff9a76;        /* Orange accent */
  --rose: #f368e0;         /* Pink accent */
  --sky: #48dbfb;          /* Cool accent */
  --lavender: #a29bfe;     /* Purple accent */
}