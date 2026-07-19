# ease-btn-hover vs ease-hover-grow Naming Confusion Lab

A self-contained interactive documentation lab comparing **`ease-btn-hover`** and **`ease-hover-grow`**, showing visual behavior, resolving collision conflicts, and offering a decision table.

---

## 1. What does this do?
This showcase places identical components (buttons, cards, badges, and avatars) side-by-side to visually compare the translational lift + shadow of `ease-btn-hover` against the generic scale transition of `ease-hover-grow`, clarifying API boundaries.

---

## 2. How is it used?
Open `demo.html` directly in any web browser and interact with the sandbox, quiz, and stacking collision checkboxes.

Apply the respective classes to your markup as follows:

```html
<!-- For Action Button Lift (translates -3px and adds deep shadow) -->
<button class="ease-btn ease-btn-primary ease-btn-hover">
  Button Lift &rarr;
</button>

<!-- For Generic Element Scale (scales to 1.06 of size) -->
<div class="ease-card ease-hover-grow">
  Scale Element
</div>
```

---

## 3. Why is it useful?
It addresses developer confusion regarding visually-similar naming schemes, demonstrates browser transform shorthand collisions when both utilities are stacked, and promotes API literacy inside the EaseMotion CSS framework without adding codebase bloat.

---

## Technical Details & Specifics

- **Folder Path:** `submissions/examples/ease-hover-class-confusion-pp/`
- **Contributor Suffix:** `pp` (Pratyush Panda)
- **Resolved Ticket:** [Issue #46181](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46181)

### Features Included:
1. **Multi-Component Sandbox:** Real A/B comparison for buttons, cards, badges, and avatars.
2. **Stacking Collision Zone:** VISUALLY demonstrates why stacking `ease-btn-hover` and `ease-hover-grow` breaks one transition, explaining browser specification details.
3. **Interactive Mini-Quiz:** A built-in JavaScript quiz to test developers' API knowledge directly on the page.
4. **Dark/Light Mode:** Full styling support with a floating toggle.
