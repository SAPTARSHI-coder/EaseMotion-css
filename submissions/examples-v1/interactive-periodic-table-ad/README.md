# Interactive 3D Periodic Table of Elements

## 1. What does this do?
This submission displays a clean, glassmorphic Periodic Table of Elements (covering Periods 1-4) where element cards rotate in 3D perspective to reveal core atomic configurations on hover or focus, accompanied by dynamic category highlighting controls.

## 2. How is it used?
Developers can use this modular component by organizing their cards within an 18-column CSS Grid layout using `data-category` and grid coordinate placement modifiers, then applying the `.periodic-card` 3D animation structure.

```html
<section class="periodic-table-grid">
  <div class="periodic-card" data-category="transition" data-row="4" data-col="4" tabindex="0">
    <div class="periodic-card-inner">
      <div class="card-front">
        <span class="number">22</span>
        <span class="symbol">Ti</span>
        <span class="name">Titanium</span>
      </div>
      <div class="card-back">
        <span class="weight">47.867</span>
        <span class="category-label">Transition</span>
        <span class="config">[Ar] 3d² 4s²</span>
      </div>
    </div>
  </div>
</section>
```

## 3. Why is this useful?
It demonstrates advanced modern CSS layout and animation practices:
- **3D Transitions & Hardware Acceleration:** Demonstrates `perspective`, `transform-style: preserve-3d`, and `backface-visibility` without performance impact.
- **Accessible Interactions:** Employs `tabindex` and `:focus-within` to enable keyboard accessibility for 3D state transforms.
- **Unified Color Systems:** Leverages semantic HSL design tokens for layout categorization, encouraging highly maintainable custom property architectures.
