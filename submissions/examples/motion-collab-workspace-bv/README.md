# Realtime Motion Collaboration Workspace

A collaborative vector editor board showcase built using **EaseMotion CSS** layout elements, cards, buttons, and transition keyframes.

## What is this Showcase?

This project models a collaborative design workspace (similar to Figma or Miro) that showcases how to build interactive design dashboards, cursor tracking maps, comment pins, and version logs.

The collaboration workspace includes:

1. **Collaboration Canvas**: A design board containing multiple elements (Hero Banner, CTA Card, Avatar Stack).
2. **Simulated Cursors**: Visual cursor markers tracking other mock users (Alex, Sarah, David) editing elements in real-time.
3. **Interactive Comments Pinning**: Drop comment pins anywhere on the board coordinate system, persist comments in `localStorage`, and read from the sidebar list.
4. **Version History**: Interactive revision logs mapping project versions. Clicking a version reverts board component presets.
5. **Asset Presets**: Quick injection triggers allowing the user to select elements and immediately apply EaseMotion animation classes.
6. **Project Review Status**: A check dashboard tracking peer approvals.

---

## EaseMotion CSS Utilities Used

- **Layout Utilities**:
  - `.ease-grid`: Displays panels in standard layouts.
  - `.ease-grid-cols-2`: Dual column preset.
  - `.ease-gap-6`, `.ease-gap-4`: Consistent spacing grid gaps.
  - `.ease-flex`, `.ease-justify-between`, `.ease-items-center`: Component layout control.

- **Components**:
  - `.ease-card`: Standard card structure.
  - `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`: Highly readable flat buttons.

- **Entrance Animations**:
  - `.ease-fade-in`: Animates workspace layout on load.
  - `.ease-slide-up`: Entrance effect for panels.
  - `.ease-delay-100`, `.ease-delay-200`, `.ease-delay-300`: Sequential delays creating card stagger entrance flows.

- **Interaction Effects**:
  - `.ease-hover-grow`: Gentle scaling on buttons and quick presets.
  - `.ease-hover-lift`: Lifts preset cards on hover.
  - `.ease-hover-glow`: Cyan and red neon glows highlighting active components on cursor hover.

---

## How to Run the Demo

To run this collaboration board locally:

1. Clone the repository.
2. Open [demo.html](demo.html) directly in any modern browser.

---

## Responsive Behavior & Layout Design

The dashboard uses a grid structure (`collab-grid`) designed with CSS Flexbox and Grid:

- **Desktop (> 1024px)**: 3-column layout mapping version logs (left), collaborative canvas (center), and review metrics & comments (right).
- **Tablets & Mobile (< 1024px)**: Columns stack vertically into a single-column layout, maintaining proportion and readability.

---

## Animation Showcase & Simulator Logic

1. **Simulated Cursors**: Cursors move to random coordinates every 3.5 seconds to simulate active editors.
2. **Comment drop animation**: Placing comment bubbles uses `.ease-bounce` keyframe transitions.
3. **Reversion logs**: Reverting versions resets element styles and prompts alerts.

---

## Screenshots

_(Screenshots will be included here upon integration into the main framework documentation)_
