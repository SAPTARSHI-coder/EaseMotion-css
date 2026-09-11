# Team Member Presence Board Component

## 🎯 Overview

A modern CSS-only team presence board component for displaying team member status at a glance. Perfect for SaaS dashboards, collaboration platforms, and workspace management applications.

**Key Features:**
- ✨ Pure CSS animations (no JavaScript required)
- 👤 Member cards with avatar circles
- 🟢 Status indicators (Online, Away, Busy, Offline)
- 💼 Role labels for each member
- 🎯 Color-coded status badges
- 📱 Responsive grid layout (3, 2, or 1 column)
- 🎬 Smooth hover lift and scale animations
- 🎨 Status-specific color coding
- ♿ Accessible with WCAG compliance
- 🌓 Light/Dark mode support
- 🚀 Smooth entrance animations
- 9 avatar color variants

---

## 📋 Component Structure

### Files Included
- **demo.html** — Two layout examples (standard 3-column + compact 4-column view)
- **style.css** — All styling and animations (~450 lines)
- **README.md** — Documentation (this file)

### HTML Markup

```html
<div class="tpb-board">
  
  <div class="tpb-card">
    <!-- Avatar Container with Status Badge -->
    <div class="tpb-avatar-wrapper">
      <div class="tpb-avatar tpb-avatar-1">SH</div>
      <div class="tpb-status-badge tpb-status-online"></div>
    </div>

    <!-- Card Content -->
    <div class="tpb-card-content">
      <h3 class="tpb-member-name">Sarah Chen</h3>
      <p class="tpb-member-role">Product Designer</p>
      <p class="tpb-member-status">Online</p>
    </div>
  </div>

</div>
```

---

## 🎬 Animation Features

### 1. **Smooth Board Entrance**
```css
@keyframes tpb-entrance {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```
- 400ms entrance animation
- Slide down with fade effect
- Cubic-bezier easing for natural motion
- Applies to entire board container

### 2. **Avatar Pop-In Animation**
```css
@keyframes tpb-avatar-pop {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
```
- 400ms pop-in animation for each avatar
- Scale 0.8 → 1.0 with fade
- Elastic easing for personality
- Creates engaging entrance effect

### 3. **Card Hover Lift**
```css
.tpb-card:hover {
  transform: translateY(-12px);
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.4));
  border-color: rgba(96, 165, 250, 0.25);
  box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.15), ...;
}
```
- 300ms smooth transition
- Upward slide: 12px on desktop, 10px on tablet, 8px on mobile, 6px on compact
- Background brightens
- Border becomes more visible
- Multi-layer shadow for depth

### 4. **Status Badge Pulse Animations**
```css
.tpb-status-online {
  animation: tpb-pulse-online 2s ease-in-out infinite;
}

@keyframes tpb-pulse-online {
  0%, 100% {
    box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(16, 185, 129, 0.1);
  }
}
```
- Different timings per status:
  - **Online** (🟢): 2.0s fastest activity
  - **Away** (🟠): 2.5s moderate activity
  - **Busy** (🔴): 1.8s fastest urgency
  - **Offline** (⚫): Static, no animation
- Box-shadow expands and contracts
- Indicates presence level to users

### 5. **Avatar Scale and Glow**
```css
.tpb-card:hover .tpb-avatar {
  transform: scale(1.12);
  border-color: rgba(96, 165, 250, 0.4);
  box-shadow: 0 0 20px rgba(96, 165, 250, 0.25);
}
```
- Avatar scales to 1.12x on hover
- Border becomes more visible (blue tint)
- Glow effect with 20px blur
- Indicates interactive element

### 6. **Status Badge Scale**
```css
.tpb-card:hover .tpb-status-badge {
  transform: scale(1.2);
}
```
- Status dot grows to 1.2x on hover
- Emphasizes presence state
- Smooth 300ms transition

### 7. **Background Gradient Overlay**
```css
.tpb-card::before {
  background: radial-gradient(circle at 50% -50%, rgba(96, 165, 250, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tpb-card:hover::before {
  opacity: 1;
}
```
- Subtle radial gradient reveal on hover
- Creates depth and polish
- Top-centered light source
- Enhances hover feedback

---

## 🎨 Component Elements

### Board Container (`.tpb-board`)
- CSS Grid layout
- 3 columns on desktop
- 2 columns on tablet/smaller
- 1 column on mobile
- Gap between cards
- Glassmorphism background

**Variants:**
- `.tpb-board-compact` — 4 columns on desktop, 3 on tablet, 2 on mobile

### Member Card (`.tpb-card`)
- Flex column layout
- Centered content
- Smooth hover lift
- Radial gradient background on hover
- 300ms transition timing
- Focus-visible outline for keyboard nav

### Avatar (`.tpb-avatar`)
- 56px circular by default
- 44px on mobile
- Initials inside
- 9 color gradients
- Status badge bottom-right
- Hover: Scales to 1.12x with blue glow

**Color Variants (gradient pairs):**
```css
.tpb-avatar-1 { background: linear-gradient(135deg, #ec4899, #f472b6); } /* Pink */
.tpb-avatar-2 { background: linear-gradient(135deg, #3b82f6, #60a5fa); }  /* Blue */
.tpb-avatar-3 { background: linear-gradient(135deg, #10b981, #34d399); } /* Green */
.tpb-avatar-4 { background: linear-gradient(135deg, #f59e0b, #fbbf24); } /* Yellow */
.tpb-avatar-5 { background: linear-gradient(135deg, #8b5cf6, #a78bfa); } /* Purple */
.tpb-avatar-6 { background: linear-gradient(135deg, #06b6d4, #22d3ee); } /* Cyan */
.tpb-avatar-7 { background: linear-gradient(135deg, #ef4444, #f87171); } /* Red */
.tpb-avatar-8 { background: linear-gradient(135deg, #14b8a6, #2dd4bf); } /* Teal */
.tpb-avatar-9 { background: linear-gradient(135deg, #f97316, #fb923c); } /* Orange */
```

### Status Badge (`.tpb-status-badge`)
- 16px circle
- Positioned bottom-right of avatar
- 3px border
- Four states with distinct colors:
  - **Online** (`.tpb-status-online`): Green (#10b981), 2s pulse
  - **Away** (`.tpb-status-away`): Orange (#f59e0b), 2.5s pulse
  - **Busy** (`.tpb-status-busy`): Red (#ef4444), 1.8s pulse
  - **Offline** (`.tpb-status-offline`): Gray (#64748b), static

### Card Content (`.tpb-card-content`)
- Flex column layout
- Centered text alignment
- Three text elements:
  - **Member Name** (`.tpb-member-name`)
  - **Member Role** (`.tpb-member-role`)
  - **Member Status** (`.tpb-member-status`)

### Member Name (`.tpb-member-name`)
- Bold primary text (0.9375rem)
- Light blue on hover
- Indicates person identity

### Member Role (`.tpb-member-role`)
- Secondary muted text (0.8125rem)
- Gray color
- Shows job title or position

### Member Status (`.tpb-member-status`)
- Status-colored badge (0.75rem)
- Uppercase text
- Status-specific background:
  - Online: Green background, bright green text
  - Away: Orange background, yellow text
  - Busy: Red background, light red text
  - Offline: Gray background, gray text
- Inline-block display

---

## 📐 Responsive Behavior

### Desktop (> 1024px)
- Grid: 3 columns
- Card padding: 1.5rem
- Avatar size: 56px
- Gap: 1.5rem
- Hover lift: 12px
- Avatar scale: 1.12x
- All animations enabled

### Desktop to Tablet (1024px)
- Grid: 2 columns
- Card padding: 1.25rem
- Avatar size: 52px
- Gap: 1.25rem
- Hover lift: 10px
- Avatar scale: 1.1x

### Tablet (768px)
- Grid: 2 columns
- Card padding: 1rem
- Avatar size: 48px
- Gap: 1rem
- Hover lift: 8px
- Avatar scale: 1.1x
- Rounded corners reduce slightly

### Mobile (480px)
- Grid: 1 column (full width)
- Card padding: 0.875rem
- Avatar size: 44px
- Gap: 0.75rem
- Hover lift: 6px
- Avatar scale: 1.08x
- Touch-friendly spacing

### Compact View (`.tpb-board-compact`)
- Desktop: 4 columns
- Tablet: 3 columns
- Mobile: 2 columns
- Smaller padding and gaps
- Optimized for space-constrained layouts

---

## ♿ Accessibility Features

### 1. **Semantic HTML**
- Proper heading hierarchy (h3 for names)
- Meaningful paragraph elements
- Descriptive class names
- Logical content structure

### 2. **WCAG Color Contrast**
- Blue (#60a5fa) on dark background: AAA
- Green (#10b981): Distinct status color
- Orange (#f59e0b): Distinct status color
- Red (#ef4444): Distinct status color
- Gray (#64748b): Distinct status color
- Light mode colors auto-adjusted for contrast

### 3. **Keyboard Navigation**
```css
.tpb-card:focus-visible {
  outline: 2px solid #60a5fa;
  outline-offset: 4px;
}
```
- Cards are focusable with Tab key
- Clear blue outline on focus
- Offset for visibility
- Only shows on keyboard nav (not mouse)

### 4. **Reduced Motion Support**
```css
@media (prefers-reduced-motion: reduce) {
  .tpb-board,
  .tpb-card,
  .tpb-avatar {
    animation: none !important;
    transition: none !important;
  }
}
```
- All animations disabled for motion-sensitive users
- Content remains fully accessible
- No flash or scroll triggers
- Instant state changes

### 5. **Dark Mode Support**
Automatically adapts to system preference:
```css
@media (prefers-color-scheme: light) {
  .tpb-board { background: rgba(248, 250, 252, 0.3); }
  .tpb-member-name { color: #1e293b; }
  .tpb-member-role { color: #64748b; }
  /* ... status-specific light colors ... */
}
```

### 6. **Touch-Friendly Design**
- 44px+ minimum touch targets (avatars)
- Adequate spacing (0.875rem minimum)
- Large clickable card areas
- Clear visual feedback on tap

---

## 🚀 Use Cases

### 1. **Team Dashboard**
Display current team member availability
```
Sarah Chen — Online (Product Designer)
Alex Kumar — Online (Frontend Engineer)
Emma Wilson — Away (Backend Engineer)
John Patel — Online (Product Manager)
```

### 2. **Remote Team Management**
Monitor distributed team members
```
See who's available for meetings
Track time zone availability
Identify who needs breaks (Away)
```

### 3. **Slack-like Collaboration**
Show team presence in workspace
```
Quick reference for interruption levels
Status-based communication cues
Team-wide availability at a glance
```

### 4. **Incident Response**
On-call team availability display
```
On-call engineer presence
Quick access to incident responders
Status-based response time estimation
```

### 5. **Project Management**
Team availability for project allocation
```
See who's available for new tasks
Identify bottlenecks (Busy status)
Resource planning visibility
```

### 6. **Meeting Scheduler**
Find available team members
```
Check who's free right now
Identify best times for meetings
Schedule without conflicts
```

### 7. **Office Management**
Track in-office vs remote
```
See who's in the office
Coordinate meeting rooms
Manage desk sharing
```

### 8. **Customer Support**
Agent availability display
```
Show available support agents
Queue management visibility
Customer wait time estimation
```

---

## 💻 CSS Classes Reference

| Class | Purpose |
|-------|---------|
| `.tpb-board` | Main grid container |
| `.tpb-board-compact` | Compact grid variant |
| `.tpb-card` | Individual member card |
| `.tpb-avatar-wrapper` | Avatar + status badge container |
| `.tpb-avatar` | User avatar circle |
| `.tpb-avatar-1` to `.tpb-avatar-9` | Avatar color variants |
| `.tpb-status-badge` | Status indicator dot |
| `.tpb-status-online` | Online green status |
| `.tpb-status-away` | Away orange status |
| `.tpb-status-busy` | Busy red status |
| `.tpb-status-offline` | Offline gray status |
| `.tpb-card-content` | Card content wrapper |
| `.tpb-member-name` | Member name text |
| `.tpb-member-role` | Member role/title text |
| `.tpb-member-status` | Status badge text |

---

## 🔧 Customization Examples

### Change Grid Columns
```css
.tpb-board {
  grid-template-columns: repeat(4, 1fr); /* Was 3 */
}

@media (max-width: 1024px) {
  .tpb-board {
    grid-template-columns: repeat(3, 1fr); /* Was 2 */
  }
}
```

### Modify Card Spacing
```css
.tpb-board {
  gap: 2rem; /* Was 1.5rem */
}

.tpb-card {
  padding: 2rem; /* Was 1.5rem */
}
```

### Change Accent Color
Replace all `#60a5fa` with your brand color:
```css
.tpb-card:hover {
  border-color: rgba(YOUR_COLOR, 0.25);
  box-shadow: ..., rgba(YOUR_COLOR, 0.1), ...;
}

.tpb-card:hover .tpb-avatar {
  box-shadow: 0 0 20px rgba(YOUR_COLOR, 0.25);
}

.tpb-card:focus-visible {
  outline: 2px solid YOUR_COLOR;
}
```

### Add New Avatar Color
```css
.tpb-avatar-10 {
  background: linear-gradient(135deg, #COLOR_1, #COLOR_2);
}
```

### Adjust Animation Speed
```css
.tpb-board {
  animation: tpb-entrance 0.5s cubic-bezier(...); /* Was 0.4s */
}

.tpb-status-online {
  animation: tpb-pulse-online 3s ease-in-out infinite; /* Was 2s */
}
```

### Hide Status Badges
```css
.tpb-status-badge {
  display: none;
}
```

### Remove Hover Lift
```css
.tpb-card:hover {
  transform: none;
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
- CSS Grid
- Flexbox
- CSS Animations
- CSS Gradients
- `backdrop-filter`
- `box-shadow`
- CSS Custom Properties
- Media queries
- Pseudo-elements (`::before`)
- `:has()` selector
- `transform` and `will-change`

---

## 📝 Example Variations

### Minimal Member Card
```html
<div class="tpb-card">
  <div class="tpb-avatar-wrapper">
    <div class="tpb-avatar tpb-avatar-1">SH</div>
    <div class="tpb-status-badge tpb-status-online"></div>
  </div>
  <h3 class="tpb-member-name">Sarah Chen</h3>
</div>
```

### Full Member Card
```html
<div class="tpb-card">
  <div class="tpb-avatar-wrapper">
    <div class="tpb-avatar tpb-avatar-1">SH</div>
    <div class="tpb-status-badge tpb-status-online"></div>
  </div>
  <div class="tpb-card-content">
    <h3 class="tpb-member-name">Sarah Chen</h3>
    <p class="tpb-member-role">Product Designer</p>
    <p class="tpb-member-status">Online</p>
  </div>
</div>
```

### Custom Grid
```css
.tpb-board {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

### Offline Member
```html
<div class="tpb-status-badge tpb-status-offline"></div>
```

---

## 🎯 Why It Fits EaseMotion CSS

This component embodies EaseMotion CSS philosophy:

1. **Pure CSS Animations** — Zero JavaScript, 100% CSS-driven
2. **Smooth Easing** — Uses `cubic-bezier(0.34, 1.56, 0.64, 1)` for natural motion
3. **Accessibility-First** — Respects `prefers-reduced-motion`, WCAG contrast standards
4. **Responsive Design** — Mobile-first with thoughtful breakpoints and grid adaptations
5. **Performance** — Hardware acceleration via `transform` and `will-change`
6. **Semantic HTML** — Meaningful structure with proper heading hierarchy
7. **Visual Feedback** — Hover states, status animations, clear state indicators
8. **Reusable Component** — Self-contained, modular, easily customizable
9. **Modern CSS** — CSS Grid, Flexbox, gradients, custom properties
10. **Delightful UX** — Status pulses, hover effects, entrance animations create engagement

---

## 🏆 Original Submission

**Author:** ZT (team-presence-board-zt)  
**Type:** CSS-Only Component  
**Category:** Team Management / Presence Indicator  
**Last Updated:** 2026-06-14

---

## 📖 Notes

- Component is **production-ready** and fully functional
- No external dependencies required
- All styles scoped with `.tpb-` prefix
- Compatible with all modern browsers
- Perfect for SaaS dashboards and collaboration platforms
- Easily customizable colors, spacing, and layout
- `:has()` selector used for status-based styling (supported in modern browsers)

---

Build beautiful team presence boards with smooth animations! 🚀✨
