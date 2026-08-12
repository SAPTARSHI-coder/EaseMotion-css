# Usage Examples Showcase

1. **What does this do?**
   A single-page showcase of four common usage patterns from the framework's HTML snippet — an entrance animation, a hover effect, a continuous loop, and combined effects with a delay — shown side by side with the class names that produce each one, plus a small reference table mapping this demo's class names to their `ease-*` equivalents.

2. **How is it used?**
   Each example pairs an `examples-*` animation class with `examples-duration-*` / `examples-delay-*` / `examples-infinite` modifier classes:

   ```html
   <div class="examples-fade examples-duration-300">Welcome</div>
   <button class="examples-pulse-hover examples-duration-500">Hover Me</button>
   <div class="examples-bounce examples-duration-1000 examples-infinite">Bouncing Box</div>
   <div class="examples-slide-left examples-duration-400 examples-delay-200">Delayed Slide</div>
   ```

3. **Why is this useful?**
   New users adopting an animation library often learn fastest from side-by-side runnable examples rather than a flat class list — seeing entrance, hover, loop, and delay patterns together (with their class names visible) makes the "compose small classes together" philosophy of EaseMotion CSS concrete rather than abstract.

### Important scope note for the maintainer
The original issue requested a full **"Comprehensive Documentation and Usage Examples Hub"** — including a complete utility class reference, a CDN integration guide, and a CodePen collection. That's genuinely **not buildable as a `submissions/examples/` folder**, for two reasons:
- A real documentation hub has to live in `docs/`, which contributors are explicitly blocked from editing under the current contribution rules.
- It needs to reference the actual `ease-*` classes that exist in `core/`, which this demo can't see or guarantee accuracy against.

This submission is a deliberately scoped-down slice of that request: a single self-contained example page demonstrating the four patterns from the issue's own HTML snippet, runnable standalone. It does **not** include the CDN setup guide, the full utility class table, or CodePen embeds — those would need to be built directly by the maintainer (or in a real `docs/` PR) rather than as a contributor submission. Happy to expand this into more side-by-side examples if that's useful, but the "hub" itself is out of scope for this folder.

- Tested in Chrome, Firefox, and Edge.