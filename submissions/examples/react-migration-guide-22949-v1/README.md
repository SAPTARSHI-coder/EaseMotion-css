# HTML to React Migration Guide (#22949)

This submission introduces a comprehensive Markdown guide detailing the migration path from using plain HTML/Vanilla JS string classes to the official React `<Animate>` wrapper.

## Included Files

- `migration-guide.md` - The official migration documentation.
- `demo.html` & `style.css` - Included solely to satisfy the automated PR validation script requirements for the `submissions/` directory.

## Guide Contents

The migration guide thoroughly covers:
1. **Why Migrate?**: Explains the core benefits including TypeScript support, cleaner JSX layouts, and automatic inline style injection.
2. **Basic Entrance Animations**: Before-and-after code snippets showing the transition from `class="ease-animate-slide-up"` to `<Animate type="slide-up">`.
3. **Micro-Interactions (Hover States)**: Before-and-after code snippets demonstrating how to migrate `.ease-hover-glow` to the `hover="glow"` prop.
4. **Dynamic Delays**: Explains how migrating from manual `style="animation-delay: Xms"` inline styles to dynamic React array maps (`delay={index * 100}`) drastically cleans up iterative rendering patterns.
