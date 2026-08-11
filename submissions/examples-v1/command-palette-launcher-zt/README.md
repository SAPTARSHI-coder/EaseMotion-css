# Command Palette Launcher Component

## 🎯 Overview

A modern CSS-only command palette interface inspired by VS Code, Linear, Raycast, and Notion. Perfect for productivity applications, IDEs, and SaaS tools that need an elegant way to expose commands and actions to users.

**Key Features:**
- ✨ Pure CSS animations (no JavaScript required)
- 🔍 Search bar with keyboard shortcut hints
- 📋 Command groups with category labels
- ⌨️ Keyboard shortcut badge styling
- 🎯 Active command highlighting with glow
- 📝 Rich descriptions for each command
- 🎨 Modern SaaS aesthetic with glassmorphism
- 📱 Fully responsive layout
- ♿ Accessible with WCAG compliance
- 🌓 Light/Dark mode support
- 🚀 Smooth entrance and hover animations

---

## 📋 Component Structure

### Files Included
- **demo.html** — Two complete examples (full palette + empty state)
- **style.css** — All styling and animations (~500 lines)
- **README.md** — Documentation (this file)

### HTML Markup

```html
<div class="cpl-palette">
  <!-- Search Bar -->
  <div class="cpl-search-container">
    <svg class="cpl-search-icon"><!-- search icon --></svg>
    <input 
      type="text" 
      class="cpl-search-input" 
      placeholder="Search commands..."
    >
    <span class="cpl-search-hint">⌘K</span>
  </div>

  <!-- Results -->
  <div class="cpl-results">
    <div class="cpl-group">
      <div class="cpl-group-label">Create</div>
      
      <div class="cpl-item cpl-item-active">
        <div class="cpl-item-content">
          <div class="cpl-item-title">Create New Project</div>
          <div class="cpl-item-description">Start a new project</div>
        </div>
        <div class="cpl-shortcuts">
          <span class="cpl-shortcut">Ctrl</span>
          <span class="cpl-shortcut">Shift</span>
          <span class="cpl-shortcut">P</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="cpl-footer">
    <span class="cpl-result-count">3 commands found</span>
    <span class="cpl-hint">↑↓ Navigate • Enter Select • Esc Close</span>
  </div>
</div>
```

---

## 🎬 Animation Features

### 1. **Smooth Panel Entrance**
```css
@keyframes cpl-entrance {
  0% {
    opacity: 0;
    transform: scale(0.95) translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
```
- 300ms entrance animation
- Combines scale (0.95 → 1.0) and vertical translation
- Cubic-bezier easing for natural motion
- Applies to entire palette container

### 2. **Hover Highlight Effect**
```css
.cpl-item:hover {
  background: rgba(96, 165, 250, 0.1);
  transform: translateX(4px);
}
```
- Subtle background color change on hover
- Small rightward translation for lift
- 200ms smooth transition
- Indicates interactive element

### 3. **Active Row Glow Animation**
```css
.cpl-item-active {
  background: rgba(96, 165, 250, 0.15);
  border: 1px solid rgba(96, 165, 250, 0.3);
}

.cpl-item-active::before {
  animation: cpl-active-glow 2s ease-in-out infinite;
}

@keyframes cpl-active-glow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}
```
- Active row has blue background + border
- Pseudo-element creates radial glow effect
- 2s continuous pulse animation
- Opacity breathing: 0.4 → 0.8 → 0.4

### 4. **Keyboard Badge Hover Effect**
```css
.cpl-shortcut {
  transition: all 0.2s ease;
}

.cpl-item:hover .cpl-shortcut {
  background: rgba(96, 165, 250, 0.15);
  border-color: rgba(96, 165, 250, 0.3);
  color: #60a5fa;
  transform: scale(1.05);
}

.cpl-item-active:hover .cpl-shortcut {
  transform: scale(1.08);
  box-shadow: 0 0 8px rgba(96, 165, 250, 0.2);
}
```
- Scale 1.05 on item hover
- Scale 1.08 + glow on active item hover
- Color change to blue on hover
- Added box-shadow for emphasis on active

### 5. **Search Bar Focus Animation**
```css
.cpl-search-input:focus {
  color: #60a5fa;
}

.cpl-search-input:focus ~ .cpl-search-icon {
  color: #60a5fa;
}

.cpl-search-input:focus ~ .cpl-search-hint {
  background: rgba(96, 165, 250, 0.15);
  border-color: rgba(96, 165, 250, 0.3);
  color: #60a5fa;
}
```
- Icon and hint change to blue on focus
- Subtle background color enhancement
- Provides visual feedback for active search

---

## 🎨 Component Elements

### Search Bar (`.cpl-search-container`)
- Icon (magnifying glass)
- Input field (main search input)
- Shortcut hint (⌘K or keyboard shortcut)
- Sticky to top of palette

### Command Groups (`.cpl-group`)
- Category label (e.g., "Create", "Navigation")
- List of commands within category
- Visual separation between groups

### Command Items (`.cpl-item`)
**Three states:**
1. **Default** — Gray text, subtle background
2. **Hover** — Blue background, slightly elevated
3. **Active** (`.cpl-item-active`) — Blue background + glow animation

**Content structure:**
- `cpl-item-title` — Bold command name (0.875rem)
- `cpl-item-description` — Gray description text (0.75rem)
- `cpl-shortcuts` — Keyboard badge container
  - Multiple `cpl-shortcut` badges for key combinations

### Footer (`.cpl-footer`)
- Result count: Shows "X commands found"
- Navigation hints: "↑↓ Navigate • Enter Select • Esc Close"

### Empty State (`.cpl-results.cpl-empty`)
- Large emoji icon (🔍)
- Title: "No commands found"
- Description: Helpful suggestion
- Centered layout with spacing

---

## 📐 Responsive Behavior

### Desktop (> 768px)
- Max width fits nicely on screen
- Full-size shortcuts (0.625rem)
- Hover effects fully enabled
- 4px hover translation
- Smooth scrollbar visible

### Tablet (768px - 481px)
- Reduced padding (0.875rem → 0.625rem)
- Slightly smaller text sizes
- 2px hover translation
- Optimized for touch
- Scrollbar still visible

### Mobile (< 480px)
- Compact layout (0.5rem padding)
- Smaller text (0.75rem → 0.6875rem for titles)
- Stacked footer (flex-direction: column)
- No hover translation
- Single-tap friendly
- Max height: 80vh for viewport space

### Scrollbar Styling
Custom scrollbar for smooth appearance:
```css
.cpl-results::-webkit-scrollbar {
  width: 6px;
}

.cpl-results::-webkit-scrollbar-thumb {
  background: rgba(96, 165, 250, 0.2);
  border-radius: 3px;
}

.cpl-results::-webkit-scrollbar-thumb:hover {
  background: rgba(96, 165, 250, 0.3);
}
```

---

## ♿ Accessibility Features

### 1. **Semantic HTML**
- Proper input elements for search
- Logical heading hierarchy
- Descriptive text for commands
- Meaningful class names

### 2. **WCAG Color Contrast**
- All text meets AA or AAA standards
- Blue (#60a5fa) on dark background: AAA
- Gray descriptions: AA
- Light mode colors automatically adjusted

### 3. **Keyboard Navigation**
```css
.cpl-item:focus-visible {
  outline: 2px solid #60a5fa;
  outline-offset: -2px;
}
```
- Items are focusable with Tab key
- Clear focus indicators
- Focus outline only shows on keyboard nav

### 4. **Reduced Motion Support**
```css
@media (prefers-reduced-motion: reduce) {
  .cpl-palette,
  .cpl-item,
  .cpl-shortcut {
    animation: none !important;
    transition: none !important;
  }
}
```
Users with motion sensitivity see no animations.

### 5. **Dark Mode Support**
Automatically adapts to system preference:
```css
@media (prefers-color-scheme: light) {
  .cpl-palette { /* Light colors */ }
  .cpl-item-title { color: #1e293b; }
  .cpl-item-active { /* Light blue */ }
}
```

### 6. **Touch-Friendly Design**
- 44px+ minimum touch targets
- Adequate spacing (0.75rem minimum)
- No hover-only interactions
- Clear visual feedback on tap

---

## 🚀 Use Cases

### 1. **IDE/Code Editor**
VS Code-style command palette for development tools
```
Edit → Find and Replace, Format Document
File → Create File, Open Folder
View → Toggle Sidebar, Change Theme
```

### 2. **Project Management Tool**
Linear or Jira-style command launcher
```
Create → New Issue, New Project
Navigate → Go to Board, Go to Settings
Workflow → Change Status, Assign to Me
```

### 3. **Document Editor**
Notion or Google Docs command palette
```
Insert → Image, Table, Embed
Format → Bold, Italic, Heading
Share → Invite User, Copy Link
```

### 4. **Productivity App**
Task management or note-taking app
```
Create → New Task, New Note, New List
Navigation → Today, Upcoming, Archive
Tools → Export, Settings, Help
```

### 5. **Design Tool**
Figma or Sketch-style command palette
```
Create → Rectangle, Circle, Text, Component
Edit → Rename, Duplicate, Delete
View → Zoom In, Fit All, Fullscreen
```

### 6. **Admin Dashboard**
Backend management interface
```
User Management → Add User, Edit Permissions
System → Backup, Settings, Logs
Reports → Generate Report, Export Data
```

### 7. **Customer Support**
Help desk or ticketing system
```
Tickets → Create Ticket, Assign, Resolve
Navigation → Open Tickets, Closed Tickets
Templates → Quick Response, Canned Reply
```

### 8. **Browser Extension**
Quick action launcher for extensions
```
Navigation → Options, About
Tools → Clear Cache, Reset Settings
Help → Documentation, Report Issue
```

---

## 💻 CSS Classes Reference

| Class | Purpose |
|-------|---------|
| `.cpl-palette` | Main container with animations |
| `.cpl-search-container` | Search bar wrapper |
| `.cpl-search-icon` | Magnifying glass SVG |
| `.cpl-search-input` | Text input field |
| `.cpl-search-hint` | Keyboard shortcut badge |
| `.cpl-results` | Results container (scrollable) |
| `.cpl-results.cpl-empty` | Empty state styling |
| `.cpl-empty-icon` | Large emoji icon |
| `.cpl-empty-title` | "No results" title |
| `.cpl-empty-description` | Helpful description |
| `.cpl-group` | Command group wrapper |
| `.cpl-group-label` | "Create", "Navigation" etc |
| `.cpl-item` | Individual command item |
| `.cpl-item-active` | Highlighted/selected state |
| `.cpl-item-content` | Title + description wrapper |
| `.cpl-item-title` | Bold command name |
| `.cpl-item-description` | Gray description text |
| `.cpl-shortcuts` | Keyboard badges wrapper |
| `.cpl-shortcut` | Individual key badge |
| `.cpl-footer` | Bottom info bar |
| `.cpl-result-count` | "X commands found" |
| `.cpl-hint` | Navigation hints |

---

## 🔧 Customization Examples

### Change Accent Color
Replace all `#60a5fa` with your brand color:
```css
.cpl-item:hover {
  background: rgba(YOUR_COLOR, 0.1);
}

.cpl-item-active {
  border: 1px solid rgba(YOUR_COLOR, 0.3);
}

.cpl-shortcut {
  /* Update hover colors */
}
```

### Modify Animation Speed
```css
@keyframes cpl-entrance {
  /* Change 0.3s to desired duration */
  animation: cpl-entrance 0.5s cubic-bezier(...);
}

.cpl-item-active::before {
  animation: cpl-active-glow 3s ease-in-out infinite; /* Slower pulse */
}
```

### Adjust Palette Height
```css
.cpl-palette {
  max-height: 800px; /* Was 600px */
}

@media (max-width: 768px) {
  .cpl-palette {
    max-height: 90vh; /* Was 70vh */
  }
}
```

### Disable Animations
```css
.cpl-palette {
  animation: none;
}

.cpl-item {
  transition: none;
}

.cpl-item:hover {
  transform: none;
}
```

### Custom Scrollbar Width
```css
.cpl-results::-webkit-scrollbar {
  width: 8px; /* Was 6px */
}
```

---

## 🧪 Browser Support

- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+
- ✅ Mobile browsers (iOS Safari 14+, Chrome Mobile)

**CSS Features Used:**
- Flexbox
- CSS Animations
- CSS Gradients
- `backdrop-filter`
- `box-shadow`
- CSS Custom Properties
- Media queries
- Pseudo-elements (`::before`)

---

## 📝 Example Variations

### Compact Command Palette
```html
<div class="cpl-palette" style="max-width: 500px; max-height: 400px;">
  <!-- Smaller palette for sidebar integration -->
</div>
```

### Dark Mode Forced
```html
<div class="cpl-palette" style="--cpl-bg-primary: #0f172a;">
  <!-- Always dark regardless of system preference -->
</div>
```

### Custom Group
```html
<div class="cpl-group">
  <div class="cpl-group-label">⚡ Frequently Used</div>
  <div class="cpl-item cpl-item-active">
    <!-- Pre-selected frequent command -->
  </div>
</div>
```

### Multiple Shortcuts
```html
<div class="cpl-shortcuts">
  <span class="cpl-shortcut">Cmd</span>
  <span class="cpl-shortcut">Option</span>
  <span class="cpl-shortcut">P</span>
</div>
```

---

## 🎯 Why It Fits EaseMotion CSS

This component embodies EaseMotion CSS principles:

1. **Pure CSS Animations** — Zero JavaScript, 100% CSS-driven
2. **Smooth Easing** — Uses `cubic-bezier(0.34, 1.56, 0.64, 1)` for natural motion
3. **Accessibility-First** — Respects `prefers-reduced-motion` and contrast standards
4. **Responsive Design** — Mobile-first with thoughtful breakpoints
5. **Performance** — Hardware acceleration via `transform` and `will-change`
6. **Semantic HTML** — Proper structure with meaningful elements
7. **Visual Feedback** — Clear hover and active states
8. **Reusable Component** — Self-contained and modular
9. **Modern CSS** — Flexbox, gradients, custom properties
10. **Delightful UX** — Entrance animations, glow effects, smooth interactions

---

## 🏆 Original Submission

**Author:** ZT (command-palette-launcher-zt)  
**Type:** CSS-Only Component  
**Category:** UI Pattern / Command Interface  
**Last Updated:** 2026-06-14

---

## 📖 Notes

- Component is **production-ready** and fully functional
- No external dependencies required
- All styles scoped with `.cpl-` prefix
- Compatible with all modern browsers
- Perfect for productivity and developer tools
- Easily customizable color scheme and sizing

---

Build powerful command interfaces with beautiful animations! 🚀✨
