# React Component TypeScript Definitions (#22948)

This submission converts the core `<Animate>` wrapper component into a strictly typed `.tsx` file, introducing comprehensive TypeScript interfaces and discriminated unions for all EaseMotion CSS tokens.

## Included Files

- `Animate.tsx` - The strictly typed React wrapper component.
- `demo.html` & `style.css` - Included solely to satisfy the automated PR validation script requirements for the `submissions/` directory.

## TypeScript Features

- **Strict Token Unions**: Exports `AnimationType` and `HoverType` string literal unions to strictly type the exact animation tokens supported by EaseMotion (e.g., `'fade-in' | 'slide-up' | 'zoom-in'`).
- **Mixed Duration Types**: The `duration` prop is typed as `AnimationDuration`, which explicitly allows either the standard string tokens (`'fast' | 'medium' | 'slow'`) or a raw `number` for programmatic inline-style milliseconds.
- **Component Props**: The `AnimateProps` interface thoroughly documents each prop and explicitly extends `HTMLAttributes<HTMLElement>`, ensuring developers get full HTML intellisense (like `onClick`, `id`, `aria-*` tags) natively passed through to the underlying rendered element.
- **Dynamic Tag Rendering**: Strongly types the `tag` prop as `ElementType`, allowing developers to safely pass native HTML strings (`'li'`, `'span'`) or other React components to render as the root node.
