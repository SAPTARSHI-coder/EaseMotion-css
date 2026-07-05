# Animated Border Draw & Glow Keyframe Mixins

A comprehensive collection of reusable SCSS mixins for creating animated border draw effects and glow keyframe animations to enhance the EaseMotion CSS design system.

## 📁 File Structure

```
scss-animated-border-draw-glow-keyframe-mixins/
├── _animated-border-draw-glow-keyframe-mixins.scss
└── README.md
```

## 🚀 Installation

1. Copy the `_animated-border-draw-glow-keyframe-mixins.scss` file to your SCSS project
2. Import it in your main SCSS file:

```scss
@import 'path/to/_animated-border-draw-glow-keyframe-mixins';
```

## 🎨 Available Mixins

### 1. `animated-border-draw`

Creates an animated border that draws around an element with a gradient effect.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$color` | Color | `#3b82f6` | The border color |
| `$width` | Length | `2px` | The border width |
| `$duration` | Time | `2s` | Animation duration |
| `$timing` | String | `ease-in-out` | Animation timing function |
| `$direction` | String | `normal` | Animation direction |

#### Usage

```scss
.my-element {
  @include animated-border-draw(#ff6b6b, 3px, 1.5s);
}
```

#### Compiled CSS Output

```css
.my-element {
  position: relative;
  overflow: hidden;
}

.my-element::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 3px solid transparent;
  border-radius: inherit;
  background: linear-gradient(90deg, transparent, transparent 50%, #ff6b6b 50%, #ff6b6b);
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: border-draw 1.5s ease-in-out infinite normal;
  pointer-events: none;
}

@keyframes border-draw {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
```

---

### 2. `animated-border-draw-four-sides`

Creates an animated border that draws around all four sides sequentially.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$color` | Color | `#10b981` | The border color |
| `$width` | Length | `2px` | The border width |
| `$duration` | Time | `3s` | Animation duration |
| `$timing` | String | `ease` | Animation timing function |

#### Usage

```scss
.my-element {
  @include animated-border-draw-four-sides(#8b5cf6, 3px, 2.5s);
}
```

#### Compiled CSS Output

```css
.my-element {
  position: relative;
  overflow: hidden;
}

.my-element::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-radius: inherit;
  background: linear-gradient(#8b5cf6, #8b5cf6) top, 
              linear-gradient(#8b5cf6, #8b5cf6) right, 
              linear-gradient(#8b5cf6, #8b5cf6) bottom, 
              linear-gradient(#8b5cf6, #8b5cf6) left;
  background-repeat: no-repeat;
  background-size: 0% 3px, 3px 0%, 0% 3px, 3px 0%;
  animation: border-draw-four 2.5s ease infinite;
  pointer-events: none;
}

@keyframes border-draw-four {
  0% {
    background-size: 0% 3px, 3px 0%, 0% 3px, 3px 0%;
    background-position: top left, top right, bottom right, bottom left;
  }
  25% {
    background-size: 100% 3px, 3px 0%, 0% 3px, 3px 0%;
    background-position: top left, top right, bottom right, bottom left;
  }
  50% {
    background-size: 100% 3px, 3px 100%, 0% 3px, 3px 0%;
    background-position: top left, top right, bottom right, bottom left;
  }
  75% {
    background-size: 100% 3px, 3px 100%, 100% 3px, 3px 0%;
    background-position: top left, top right, bottom right, bottom left;
  }
  100% {
    background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
    background-position: top left, top right, bottom right, bottom left;
  }
}
```

---

### 3. `glow-keyframe`

Creates a pulsing glow effect around an element.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$color` | Color | `#3b82f6` | The glow color |
| `$spread` | Length | `0px` | The glow spread radius |
| `$blur` | Length | `20px` | The glow blur radius |
| `$duration` | Time | `2s` | Animation duration |
| `$timing` | String | `ease-in-out` | Animation timing function |
| `$min-opacity` | Number | `0.3` | Minimum opacity |
| `$max-opacity` | Number | `1` | Maximum opacity |

#### Usage

```scss
.my-element {
  @include glow-keyframe(#f59e0b, 0px, 25px, 1.5s);
}
```

#### Compiled CSS Output

```css
.my-element {
  animation: glow-pulse 1.5s ease-in-out infinite;
  box-shadow: 0 0 25px 0px rgba(245, 158, 11, 0.3);
}

@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 25px 0px rgba(245, 158, 11, 0.3);
  }
  50% {
    box-shadow: 0 0 25px 0px rgba(245, 158, 11, 1);
  }
}
```

---

### 4. `glow-keyframe-multi-color`

Creates a multi-color pulsing glow effect that cycles through different colors.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$colors` | List | `(#3b82f6, #8b5cf6, #ec4899)` | List of glow colors |
| `$spread` | Length | `0px` | The glow spread radius |
| `$blur` | Length | `20px` | The glow blur radius |
| `$duration` | Time | `4s` | Animation duration |
| `$timing` | String | `ease-in-out` | Animation timing function |

#### Usage

```scss
.my-element {
  @include glow-keyframe-multi-color(#ff6b6b, #feca57, #48dbfb, 3s);
}
```

#### Compiled CSS Output

```css
.my-element {
  animation: glow-multi-color 3s ease-in-out infinite;
}

@keyframes glow-multi-color {
  0% {
    box-shadow: 0 0 20px 0px rgba(255, 107, 107, 0.8);
  }
  33.333% {
    box-shadow: 0 0 20px 0px rgba(254, 202, 87, 0.8);
  }
  66.666% {
    box-shadow: 0 0 20px 0px rgba(72, 219, 251, 0.8);
  }
}
```

---

### 5. `animated-border-with-glow`

Combines animated border draw with glow effect for a dramatic visual effect.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$border-color` | Color | `#3b82f6` | The border color |
| `$glow-color` | Color | `#3b82f6` | The glow color |
| `$border-width` | Length | `2px` | The border width |
| `$glow-blur` | Length | `15px` | The glow blur radius |
| `$border-duration` | Time | `2s` | Border animation duration |
| `$glow-duration` | Time | `2s` | Glow animation duration |

#### Usage

```scss
.my-element {
  @include animated-border-with-glow(#10b981, #059669, 3px, 20px, 2.5s);
}
```

#### Compiled CSS Output

```css
.my-element {
  position: relative;
  overflow: hidden;
  animation: glow-pulse 2s ease-in-out infinite;
  box-shadow: 0 0 20px 0px rgba(5, 150, 105, 0.3);
}

.my-element::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 3px solid transparent;
  border-radius: inherit;
  background: linear-gradient(90deg, transparent, transparent 50%, #10b981 50%, #10b981);
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: border-draw 2.5s ease-in-out infinite normal;
  pointer-events: none;
}

@keyframes border-draw {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 20px 0px rgba(5, 150, 105, 0.3);
  }
  50% {
    box-shadow: 0 0 20px 0px rgba(5, 150, 105, 1);
  }
}
```

---

### 6. `border-draw-corner`

Creates an animated border that draws from corners sequentially.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$color` | Color | `#f59e0b` | The border color |
| `$width` | Length | `2px` | The border width |
| `$duration` | Time | `2s` | Animation duration |
| `$corner-radius` | Number | `8px` | Border radius |

#### Usage

```scss
.my-element {
  @include border-draw-corner(#ef4444, 3px, 1.5s, 12px);
}
```

#### Compiled CSS Output

```css
.my-element {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.my-element::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  border: 3px solid transparent;
  border-radius: 12px;
  background: linear-gradient(#ef4444, #ef4444) 0 0, 
              linear-gradient(#ef4444, #ef4444) 0 0, 
              linear-gradient(#ef4444, #ef4444) 0 0, 
              linear-gradient(#ef4444, #ef4444) 0 0;
  background-repeat: no-repeat;
  background-size: 0 0;
  animation: border-corner-draw 1.5s ease-in-out infinite;
  pointer-events: none;
}

@keyframes border-corner-draw {
  0% {
    background-size: 0 0, 0 0, 0 0, 0 0;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
  25% {
    background-size: 100% 3px, 0 0, 0 0, 0 0;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
  50% {
    background-size: 100% 3px, 3px 100%, 0 0, 0 0;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
  75% {
    background-size: 100% 3px, 3px 100%, 100% 3px, 0 0;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
  100% {
    background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
```

---

### 7. `glow-breathing`

Creates a subtle breathing glow effect with layered shadows.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$color` | Color | `#8b5cf6` | The glow color |
| `$blur` | Length | `30px` | The glow blur radius |
| `$duration` | Time | `3s` | Animation duration |

#### Usage

```scss
.my-element {
  @include glow-breathing(#06b6d4, 25px, 2.5s);
}
```

#### Compiled CSS Output

```css
.my-element {
  animation: glow-breathe 2.5s ease-in-out infinite;
}

@keyframes glow-breathe {
  0%, 100% {
    box-shadow: 0 0 25px rgba(6, 182, 212, 0.1), 
                0 0 12.5px rgba(6, 182, 212, 0.2);
  }
  50% {
    box-shadow: 0 0 37.5px rgba(6, 182, 212, 0.4), 
                0 0 25px rgba(6, 182, 212, 0.6);
  }
}
```

---

### 8. `border-draw-dashed`

Creates an animated dashed border draw effect.

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `$color` | Color | `#ec4899` | The border color |
| `$width` | Length | `2px` | The border width |
| `$dash-size` | Length | `10px` | Dash size |
| `$gap-size` | Length | `5px` | Gap size |
| `$duration` | Time | `2s` | Animation duration |

#### Usage

```scss
.my-element {
  @include border-draw-dashed(#6366f1, 2px, 15px, 8px, 1.5s);
}
```

#### Compiled CSS Output

```css
.my-element {
  position: relative;
  overflow: hidden;
}

.my-element::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px dashed transparent;
  border-radius: inherit;
  background: linear-gradient(90deg, #6366f1 0%, #6366f1 15px, transparent 15px, transparent 23px);
  background-size: 23px 100%;
  animation: border-dashed-draw 1.5s linear infinite;
  pointer-events: none;
}

@keyframes border-dashed-draw {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 23px 0;
  }
}
```

## 🎯 Use Cases

- **Call-to-action buttons**: Draw attention with animated borders
- **Card highlights**: Emphasize important content with glow effects
- **Form inputs**: Visual feedback on focus states
- **Loading states**: Animated borders during content loading
- **Hover effects**: Interactive border animations
- **Status indicators**: Glow effects for notifications
- **Navigation items**: Animated borders for active states

## 🎨 Customization Tips

1. **Color Schemes**: Use your brand colors for consistent theming
2. **Timing**: Adjust duration based on the desired animation speed
3. **Performance**: Use `will-change` property for complex animations
4. **Accessibility**: Respect `prefers-reduced-motion` media query

```scss
@media (prefers-reduced-motion: reduce) {
  .my-element {
    animation: none !important;
  }
}
```

## 📝 Browser Support

- Modern browsers supporting CSS animations
- CSS Grid and Flexbox for positioning
- CSS custom properties (optional for dynamic values)

## 🔗 Integration with EaseMotion

These mixins are designed to complement the EaseMotion CSS framework:

```scss
@import 'easemotion';
@import '_animated-border-draw-glow-keyframe-mixins';

.my-component {
  @include em-flex-center;
  @include animated-border-draw($em-primary-color, 2px);
}
```

## 📄 License

This submission is part of the EaseMotion CSS project and follows the same license terms.
>>>>>>> 36b7e57d1 (Add SCSS animated border draw and glow keyframe mixins (#27776))
