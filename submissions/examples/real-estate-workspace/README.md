# Real Estate & Workspace Showcase

A ready-to-copy, responsive co-working and business services landing page showcasing the EaseMotion CSS framework. This page uses a dark/light responsive layout with modern space/community branding, smooth micro-animations, and full keyboard accessibility.

## EaseMotion CSS Classes Showcased

This project relies purely on EaseMotion CSS classes without any external utility libraries. Key elements demonstrated:

### 1. Variables & Base Layer (`core/variables.css`, `core/base.css`)
- **Theme Variables**: Utilizes `--ease-color-primary`, `--ease-color-surface`, `--ease-space-*` scale, and responsive shadow scales.
- **Color schemes**: Automatic dark/light mode adapts based on standard CSS variable fallback patterns.

### 2. Animations & Entrance Effects (`core/animations.css`)
- **Entrance Effects**: `.ease-fade-in` and `.ease-slide-up` are used to animate the hero text, grids, and call-to-action blocks.
- **Continuous Animations**: `.ease-float` is applied to decorative celestial images in the Hero section to simulate zero-gravity workspace branding.
- **Counting Animations**: `.ease-count-up` with CSS custom properties `--ease-count-target` are utilized in the stat boards to animate numerical telemetry.

### 3. Hover & Micro-interactions (`core/animations.css`)
- **Card Lifting**: `.ease-hover-lift-shadow` is applied to pricing tiers, community events, and amenities grid items to lift them smoothly and expand their shadows on hover.
- **Button Pulsing**: `.ease-btn-hover` integrates bounce and glow overlays (`--ease-btn-glow`) automatically.

### 4. Layout & Spacing Utilities (`core/utilities.css`)
- **Flex & Grid**: Uses `.ease-flex`, `.ease-flex-col`, `.ease-grid`, `.ease-grid-auto`, and responsive column spans.
- **Alignment**: `.ease-items-center`, `.ease-justify-between`, `.ease-gap-6`, `.ease-center`.
- **Spacing**: `.ease-px-4`, `.ease-py-8`, `.ease-mx-auto`, `.ease-my-8`.

### 5. Components (`components/*`)
- **Glass Navbar**: `.ease-navbar-glass` with blur layers and dark mode support.
- **Cards**: `.ease-card`, `.ease-card-glow`, `.ease-card-glass`, and `.ease-card-image`.
- **Buttons**: `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`, `.ease-btn-lg`, and `.ease-btn-pill`.
- **Forms**: `.ease-field`, `.ease-field-label`, `.ease-input`, `.ease-select`, `.ease-textarea` for a premium tour booking interaction.
- **Badges**: `.ease-badge`, `.ease-badge-pulse` for live event tags and membership highlights.

---
Created as a contribution to EaseMotion CSS. Open `demo.html` in any browser to view the interactive prototype!
