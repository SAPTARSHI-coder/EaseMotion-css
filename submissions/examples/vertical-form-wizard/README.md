# Sandbox Component Showcase: Pure-CSS Vertical Form Accordion Progress Wizard

## Overview
A zero-dependency, pure-CSS vertical multi-step form wizard and accordion progress tracker component isolated within an examples subdirectory. It manages panel expansions and accordion collapse motions natively via input selection switches, running height transitions fluidly without script intervention.

## 📁 Sandbox Configuration Files
* `demo.html` — Interactive user cockpit hosting accordion rows and text containers to evaluate vertical fluid expansion metrics.
* `style.css` — Scoped layout sheet establishing isolated fractional row allocations linked back to global tokens.

## 🚀 Key Layout Mechanics
1. **Modern Grid Row Disclosure:** Solves legacy height truncation problems (derived from animating loose physical `max-height` constraints which cause laggy or unsynchronized jumps) by mutating a container row track natively from `grid-template-rows: 0fr;` to `1fr;`.
2. **Hidden Form State Machinery:** Links semantic interactive `<label>` header handles with standard hidden input radio controls. Toggling items updates downstream variable tracking parameters instantly over clean sibling selector lookups.
3. **Sandbox Compliance Safeguard:** Fully satisfies repository security policies by placing every asset line strictly inside `submissions/examples/vertical-form-wizard/`.
