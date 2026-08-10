# CSS Scale-Hover Tabs for Creative Portfolio Layouts

A pure CSS animated Tabs component utilizing scale-hover label interactions and sliding active highlights, styled to complement creative design portfolios.

---

## 1. What does this do?
This showcase presents a pure CSS sliding active highlight navigation tabs layout, featuring vertical slide-fade animations on grid contents and custom parameters sliders.

---

## 2. How is it used?
Configure standard `<input type="radio">` hooks and declare matching label indicators inside your layout wrappers:

```html
<!-- Main tabs container wrapper -->
<div class="ease-portfolio-container">
  <input type="radio" id="tab-1" name="my-tabs" class="ease-tab-radio" checked />
  <!-- Navigation labels trigger -->
  <div class="ease-tabs-nav">
    <label for="tab-1" class="ease-tab-label" tabindex="0">Portfolio Item</label>
    <!-- Sliding highlight bubble backer -->
    <div class="ease-tab-bubble"></div>
  </div>
</div>
```

---

## 3. Why is it useful?
It demonstrates how to configure complex interactive components with zero JavaScript runtime overhead, guarantees screen reader accessibility through standard focus states, and enables theme adjustments via CSS variables.

---

## Technical Specifications & Suffix

- **Folder Path:** `submissions/examples/ease-tabs-portfolio-pp/`
- **Contributor Suffix:** `pp` (Pratyush Panda)
- **Resolved Ticket:** [Issue #50093](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50093)

### Included Layout Features:
1. **Interactive Tabs Playground Board:** Showcase grid containing beautiful creative agency cards (photography, design, motion).
2. **Parameters Customizer:** Sliders to adjust scale factors, transition speed rates, easing presets, and active bubble colors.
3. **Accessibility Integration:** Tab-index support and Enter key trigger behaviors.
4. **Interactive Quiz:** In-app quiz on CSS selectors and accessibility rules.
