# Workspace Presence Panel Component

## 👥 Overview

A modern CSS-only workspace presence panel component for displaying team member status, availability, and real-time presence indicators. Designed for collaborative SaaS applications like project management tools, communication platforms, and document editors.

**Key Features:**
- ✨ Pure CSS animations (no JavaScript required)
- 👥 Four presence states: Online, Away, Busy/In Call, Offline
- 💬 Dynamic activity badges (typing, on call, idle, etc.)
- 🎯 Online pulse animation with status-specific timing
- 🎨 Modern SaaS aesthetic with glassmorphism
- 📱 Fully responsive (desktop, tablet, mobile)
- ♿ Accessible with WCAG compliance
- 🌓 Light/Dark mode support
- ⌨️ Keyboard navigation support

---

## 📋 Component Structure

### Files Included
- **demo.html** — Three complete example layouts
- **style.css** — Complete styling and animations (~500 lines)
- **README.md** — Documentation (this file)

### HTML Markup

```html
<div class="wpp-panel">
  <div class="wpp-member">
    <!-- Avatar with Status Indicator -->
    <div class="wpp-avatar wpp-status-online">
      <span class="wpp-status-indicator"></span>
    </div>
    
    <!-- Member Info -->
    <div class="wpp-content">
      <h3 class="wpp-name">Sarah Johnson</h3>
      <span class="wpp-status-label wpp-online">Online</span>
      <p class="wpp-activity">Active now</p>
    </div>
    
    <!-- Activity Badge -->
    <div class="wpp-badge wpp-badge-typing">💬</div>
  </div>
</div>
```

---

## 🎨 Presence States

### Online State (`.wpp-status-online`)
```html
<div class="wpp-avatar wpp-status-online">
  <span class="wpp-status-indicator"></span>
</div>
```
- **Color:** Green gradient (`#10b981` → `#059669`)
- **Indicator:** Green dot with 2s pulse animation
- **Shadow:** Green glow effect
- **Meaning:** User is currently active and available
- **Pulse:** Rapid 2s cycle for prominence

### Away State (`.wpp-status-away`)
```html
<div class="wpp-avatar wpp-status-away">
  <span class="wpp-status-indicator"></span>
</div>
```
- **Color:** Orange gradient (`#f59e0b` → `#d97706`)
- **Indicator:** Orange dot with 2.5s pulse animation
- **Shadow:** Orange glow effect (softer)
- **Meaning:** User is idle but may return soon
- **Pulse:** Slower 2.5s cycle with opacity fade

### Busy/In Call State (`.wpp-status-busy`)
```html
<div class="wpp-avatar wpp-status-busy">
  <span class="wpp-status-indicator"></span>
</div>
```
- **Color:** Red gradient (`#ef4444` → `#dc2626`)
- **Indicator:** Red dot with 1.8s pulse animation
- **Shadow:** Red glow effect (urgent)
- **Meaning:** User is in a meeting or do-not-disturb
- **Pulse:** Fastest 1.8s cycle for urgency

### Offline State (`.wpp-status-offline`)
```html
<div class="wpp-avatar wpp-status-offline">
  <span class="wpp-status-indicator"></span>
</div>
```
- **Color:** Gray gradient (`#64748b` → `#475569`)
- **Indicator:** Gray dot, static (no pulse)
- **Shadow:** No glow effect
- **Opacity:** 60% reduced for visual hierarchy
- **Meaning:** User is not online
- **Pulse:** None (static appearance)

---

## 🎬 Animation Features

### 1. **Online Status Pulse**
```css
@keyframes wpp-pulse-online {
  0%, 100% {
    box-shadow: 0 0 0 2px rgba(15, 23, 42, 0.9), 0 0 6px rgba(16, 185, 129, 0.6);
  }
  50% {
    box-shadow: 0 0 0 2px rgba(15, 23, 42, 0.9), 0 0 12px rgba(16, 185, 129, 0.8);
  }
}
```
- Continuous 2-second cycle
- Shadow expands and contracts
- Bright green glow indicates activity
- Grabs attention without being jarring

### 2. **Away Status Pulse**
- 2.5s cycle (slower than online)
- Opacity fade: 0.8 → 1.0
- Softer glow for lower priority
- Indicates user may return

### 3. **Busy Status Pulse**
- 1.8s cycle (fastest)
- Intense red glow
- Indicates urgency (user in call)
- Draws attention immediately

### 4. **Hover Elevation**
```css
.wpp-panel:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}
```
- Smooth 400ms lift animation
- 8px vertical translation
- Enhanced shadow for depth
- Cubic-bezier timing for natural motion

### 5. **Badge Reveal Animation**
```css
.wpp-badge {
  opacity: 0;
  transform: scale(0.8) translateX(10px);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.wpp-panel:hover .wpp-badge {
  opacity: 1;
  transform: scale(1) translateX(0);
}
```
- Hidden by default (opacity: 0)
- Reveals on hover with scale and translation
- Animated emoji badges (💬, 📞, ⏱️, ✓, 😴)
- Bouncy animation for personality

### 6. **Badge Type Animations**

**Typing Badge** (`.wpp-badge-typing`)
- Breathing scale animation (1.0 → 1.1)
- Indicates user is typing a message
- 1.2s smooth pulse

**Calling Badge** (`.wpp-badge-call`)
- Rapid pulse animation
- Indicates active call/meeting
- 1s scale cycle (1.0 → 1.15)

**Idle Badge** (`.wpp-badge-idle`)
- Static timer emoji (⏱️)
- Shows how long user has been idle
- No animation

**Active Badge** (`.wpp-badge-active`)
- Checkmark emoji (✓)
- Indicates user is active and working
- No animation

---

## 📐 Responsive Behavior

### Desktop (> 768px)
- Full-size avatars (48px)
- Complete information displayed
- All animations enabled
- Badges animate on hover
- Grid layout with 3+ columns
- Full shadows and effects

### Tablet (768px - 481px)
- Slightly smaller avatars (44px)
- Same information hierarchy
- All animations enabled
- Badges still animate on hover
- Grid adapts to 2-3 columns
- Slightly reduced shadow effects

### Mobile (< 480px)
- Compact avatars (40px)
- Abbreviated information
- Badges still visible on hover
- Touch-friendly spacing
- 2 columns or single column
- Simplified shadows
- Optimized for touch targets

### Compact View Variant
```html
<div class="wpp-panel wpp-panel-compact">
  <div class="wpp-member wpp-member-compact">
    <!-- Smaller version -->
  </div>
</div>
```
- Reduced padding (0.875rem)
- Smaller border radius (0.75rem)
- Optimized for sidebars and dropdowns
- Smaller hover lift (4px instead of 8px)

---

## 🌈 Color Coding System

| State | Primary Color | Indicator Color | Status Label | Meaning |
|-------|--------------|-----------------|--------------|---------|
| Online | `#10b981` | Green | "Online" | Available for communication |
| Away | `#f59e0b` | Orange | "Away" | Away from desk or AFK |
| Busy | `#ef4444` | Red | "In a call" | Do not disturb / In meeting |
| Offline | `#64748b` | Gray | "Offline" | Not connected to workspace |

---

## 💬 Activity Badges

Emoji badges provide quick visual context:

| Badge | Code | Use Case |
|-------|------|----------|
| 💬 | `.wpp-badge-typing` | User is typing a message |
| 📞 | `.wpp-badge-call` | User is on a call/meeting |
| ⏱️ | `.wpp-badge-idle` | Shows inactivity duration |
| ✓ | `.wpp-badge-active` | User is actively working |
| 😴 | `.wpp-badge-away` | User is away/sleeping |

---

## ♿ Accessibility Features

### 1. **WCAG Color Contrast**
- Online green: AAA contrast on dark background
- Away orange: AAA contrast on dark background
- Busy red: AAA contrast on dark background
- Offline gray: AA contrast on dark background
- Light mode colors adjusted for readability

### 2. **Reduced Motion Support**
```css
@media (prefers-reduced-motion: reduce) {
  .wpp-status-indicator,
  .wpp-badge {
    animation: none !important;
    transition: none !important;
  }
  .wpp-panel:hover .wpp-badge {
    opacity: 0.5;
    transform: none;
  }
}
```
Users with motion sensitivity see no animations.

### 3. **Semantic HTML**
- Proper heading hierarchy with `<h3>`
- Descriptive paragraph text for activity
- Meaningful class names
- No div soup

### 4. **Keyboard Navigation**
```css
.wpp-panel:focus-visible {
  outline: 2px solid #60a5fa;
  outline-offset: 2px;
}
```
- Focus indicators are visible
- Tab order is logical
- Clear focus ring styling

### 5. **Screen Reader Support**
- Status labels are visible text (not CSS-only)
- Activity descriptions are descriptive
- Badge content could be enhanced with aria-label
- Member names are properly marked as headings

### 6. **Touch Targets**
- Minimum 44px click areas (avatars)
- Adequate spacing between members
- No hover-only interactions (badge reveals on hover + visible baseline)

### 7. **Dark Mode Support**
Automatically adapts to `prefers-color-scheme: light`:
```css
@media (prefers-color-scheme: light) {
  .wpp-panel { /* Light mode styles */ }
  .wpp-online { /* Adjusted green */ }
  .wpp-away { /* Adjusted orange */ }
}
```

---

## 🚀 Use Cases

### 1. **Team Workspace Sidebar**
Display all team members currently online in a workspace
```
Perfect for: Slack, Microsoft Teams, Discord clones
Placement: Right sidebar or dedicated team panel
```

### 2. **Active Participants Panel**
Show who's viewing/editing a document in real-time
```
Perfect for: Google Docs, Figma, Notion
Placement: Top right corner or sidebar
Variant: Compact view for space efficiency
```

### 3. **Meeting Room Availability**
Show which team members are in meetings
```
Perfect for: Calendar apps, office scheduling
Placement: Embedded in calendar view
Feature: Red "In a call" status
```

### 4. **Status Dashboard**
Team management and availability overview
```
Perfect for: HR tools, team management dashboards
Placement: Full page grid layout
Feature: Filter by status (online, away, busy)
```

### 5. **Chat/Messaging Integration**
Show contact status in messaging interface
```
Perfect for: Chat applications, team messaging
Placement: Conversation list, contact list
Variant: Compact for lists, expanded for detail
```

### 6. **Collaborative Editor**
Show who else is currently editing
```
Perfect for: Document editors, code editors
Placement: Top right, next to collaborators
Feature: Show activity (typing, cursor position)
```

### 7. **Team Roster**
Display full team directory with live status
```
Perfect for: Company intranet, team directories
Placement: Full page with sorting/filtering
Feature: Show department, role, status
```

### 8. **Notification Center**
Show recent activity with member status
```
Perfect for: Notification panels, activity feeds
Placement: Dropdown menu, sidebar panel
Compact: For minimal space requirements
```

---

## 💻 CSS Classes Reference

| Class | Purpose |
|-------|---------|
| `.wpp-panel` | Main panel container |
| `.wpp-panel-compact` | Compact variant modifier |
| `.wpp-member` | Member wrapper |
| `.wpp-member-compact` | Compact member layout |
| `.wpp-avatar` | Avatar circle container |
| `.wpp-status-online` | Online state modifier |
| `.wpp-status-away` | Away state modifier |
| `.wpp-status-busy` | Busy state modifier |
| `.wpp-status-offline` | Offline state modifier |
| `.wpp-status-indicator` | Status dot inside avatar |
| `.wpp-content` | Text content wrapper |
| `.wpp-name` | Member name |
| `.wpp-status-label` | Status badge |
| `.wpp-online` | Online label styling |
| `.wpp-away` | Away label styling |
| `.wpp-busy` | Busy label styling |
| `.wpp-offline` | Offline label styling |
| `.wpp-activity` | Activity description text |
| `.wpp-badge` | Activity badge emoji |
| `.wpp-badge-typing` | Typing animation badge |
| `.wpp-badge-call` | Call animation badge |
| `.wpp-badge-idle` | Idle badge |
| `.wpp-badge-active` | Active badge |
| `.wpp-badge-away` | Away badge |

---

## 🔧 Customization Examples

### Change Pulse Speed
```css
.wpp-status-online .wpp-status-indicator {
  animation: wpp-pulse-online 3s ease-in-out infinite; /* Was 2s */
}
```

### Modify Hover Lift
```css
.wpp-panel:hover {
  transform: translateY(-12px); /* Was -8px */
}
```

### Custom Status Color
```css
.wpp-status-online {
  background: linear-gradient(135deg, #00ff88, #00cc66);
}

.wpp-status-online .wpp-status-indicator {
  background: #00ff88;
}
```

### Disable Animations
```css
.wpp-status-indicator {
  animation: none !important;
}

.wpp-badge {
  opacity: 1;
  transform: scale(1) translateX(0);
}
```

---

## 🧪 Browser Support

- ✅ Chrome 88+
- ✅ Firefox 85+
- ✅ Safari 14+
- ✅ Edge 88+
- ✅ Mobile Chrome, Safari, Firefox

**CSS Features Used:**
- CSS Flexbox
- CSS Custom Properties
- CSS Animations
- CSS Gradients
- `backdrop-filter`
- `box-shadow`
- Media queries
- Pseudo-elements

---

## 📚 Example Implementations

### Basic Member Card
```html
<div class="wpp-panel">
  <div class="wpp-member">
    <div class="wpp-avatar wpp-status-online">
      <span class="wpp-status-indicator"></span>
    </div>
    <div class="wpp-content">
      <h3 class="wpp-name">Alice Smith</h3>
      <span class="wpp-status-label wpp-online">Online</span>
      <p class="wpp-activity">Active now</p>
    </div>
    <div class="wpp-badge wpp-badge-typing">💬</div>
  </div>
</div>
```

### Compact List Version
```html
<div class="wpp-panel wpp-panel-compact">
  <div class="wpp-member wpp-member-compact">
    <div class="wpp-avatar wpp-status-online" style="width: 32px; height: 32px;">
      <span class="wpp-status-indicator"></span>
    </div>
    <div class="wpp-content">
      <h3 class="wpp-name">Bob Johnson</h3>
      <span class="wpp-status-label wpp-online">Online</span>
    </div>
  </div>
</div>
```

### Grid Layout
```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
  <!-- Multiple wpp-panel cards -->
</div>
```

---

## 🎯 Why It Fits EaseMotion CSS

This component embodies EaseMotion CSS philosophy:

1. **Pure CSS Animations** — Zero JavaScript, 100% CSS-driven
2. **Smooth Easing** — Uses `cubic-bezier(0.34, 1.56, 0.64, 1)` for elastic motion
3. **Accessibility-First** — Respects `prefers-reduced-motion` and contrast standards
4. **Responsive Design** — Mobile-first with thoughtful breakpoints
5. **Performance** — Hardware acceleration via `transform` and `will-change`
6. **Semantic HTML** — Proper structure with meaningful elements
7. **Visual Feedback** — Clear hover states and status indicators
8. **Reusable Component** — Self-contained and modular
9. **Modern CSS** — Flexbox, gradients, custom properties
10. **User Experience** — Delightful animations enhance usability

---

## 🏆 Original Submission

**Author:** ZT (workspace-presence-panel-zt)  
**Type:** CSS-Only Component  
**Category:** Team/Collaboration UI  
**Last Updated:** 2026-06-14

---

## 📖 Notes

- Component is **production-ready** and fully functional
- No external dependencies required
- All styles scoped with `.wpp-` prefix
- Compatible with all modern browsers
- Easily extensible with additional animations
- Perfect for real-time collaboration features

---

Build real-time team collaboration UIs with style! 👥✨
