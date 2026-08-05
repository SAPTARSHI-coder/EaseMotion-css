# :is() vs :where() Specificity

## What does it do?
A pure-CSS demo showing the critical specificity difference between `:is()` and `:where()` pseudo-class functions — no JavaScript required.

## Features
- **:is() demo** — takes the highest specificity from its argument list
- **:where() demo** — specificity is always zero, regardless of arguments
- **Direct comparison** — side-by-side with the same selector patterns

## Key Difference
| Selector | Specificity | Behavior |
|----------|------------|----------|
| `:is(.special, p)` | 0,1,0 | Takes highest specificity of arguments |
| `:where(.special, p)` | 0,0,0 | Always zero specificity |

## Usage
```css
/* :is() — handy for grouping, but beware specificity escalation */
:is(h1, h2, h3) .title { color: red; }  /* specificity 0,0,2 */

/* :where() — safe to override because specificity is always 0 */
:where(h1, h2, h3) .title { color: blue; }  /* specificity 0,1,1 */
```

## Browser Support
- `:is()` — Chrome 88+, Firefox 78+, Safari 14+
- `:where()` — Chrome 88+, Firefox 78+, Safari 14+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
