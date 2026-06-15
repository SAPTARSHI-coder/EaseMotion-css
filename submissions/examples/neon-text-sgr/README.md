# Neon Text Glow Animation

### 1. What does this do?
This component creates a pulsing and flickering retro neon light text glow effect using multi-layered CSS `text-shadow` configurations.

### 2. How is it used?
Apply the `.neon-text` class to any heading or text element:

```html
<h1 class="neon-text">Cyber Bar</h1>
```

**Variants:**
- **Themes**:
  - `.neon-pink`: Hot pink glow.
  - `.neon-green`: Matrix green glow.
  - `.neon-yellow`: Golden yellow glow.
- **Animations**:
  - `.neon-flicker`: Rapid sign flicker effect (default has a steady slow pulse).
  - `.neon-steady`: Steady pulse glow without gas flicker.

**Example Heading Combination:**
```html
<h1 class="neon-text neon-pink neon-flicker">Retro</h1>
```

### 3. Why is it useful?
It provides a visually striking typography effect built entirely without heavy assets or SVG text paths. It uses CSS variables for themeability, allows stacking speed/flicker modifiers, and gracefully degrades to static lighting for users with reduced motion settings.
