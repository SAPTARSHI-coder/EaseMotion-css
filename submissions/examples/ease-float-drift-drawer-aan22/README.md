# Float-Drift Drawer (Fintech Dashboard)

**What does this do?**
A slide-in filter drawer for dashboard layouts that eases in with a soft "drift" — a combined horizontal slide and slight vertical settle using a custom cubic-bezier — instead of snapping in flat, giving a calmer feel suited to fintech UIs.

**How is it used?**
Pure CSS + HTML, no JS required (checkbox-driven toggle):

    <label for="drift-toggle" class="drift-trigger">Filters</label>

    <input type="checkbox" id="drift-toggle" class="drift-checkbox">
    <label for="drift-toggle" class="drift-backdrop"></label>

    <aside class="drift-drawer">
      <!-- drawer content -->
    </aside>

Toggling the checkbox (via the trigger or backdrop/close labels) slides the `.drift-drawer` in from the right and fades in the `.drift-backdrop`.

**Why is it useful?**
Dashboard layouts (fintech especially) often need a filter/detail panel that doesn't interrupt the main view. The drift-in motion — translateX plus a small translateY settle — reads as more deliberate and less mechanical than a flat slide, fitting EaseMotion's animation-first, human-readable philosophy. Built with:
- Pure CSS/HTML, no external JS frameworks
- Smooth CSS transitions (no keyframes needed for this interaction)
- Fully responsive (full-width drawer under 640px)
- `prefers-reduced-motion` support (transitions disabled entirely)
