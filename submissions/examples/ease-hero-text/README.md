# Ease Hero Text

A pure CSS solution utilizing modern `text-wrap: balance` and `text-wrap: pretty` properties for native, algorithmic text wrapping.

## 1. What does this do?

- **`text-wrap: balance`**: Equalizes line lengths across multi-line headings so that every line has a uniform length, eliminating awkward line breaks and visual imbalance.
- **`text-wrap: pretty`**: Evaluates paragraph line breaks to prevent typographic orphans (a single trailing word on the final line of a paragraph), ensuring cleaner body text layout.

## 2. How is it used?

Apply `text-wrap: balance` to hero headings and `text-wrap: pretty` to body text or article paragraphs:

```css
/* Hero Headings */
.ease-hero-heading {
  text-wrap: balance;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  max-inline-size: 35ch;
}

/* Article / Body Paragraphs */
.ease-article-paragraph {
  text-wrap: pretty;
  font-size: 1.25rem;
  line-height: 1.7;
  max-inline-size: 55ch;
}
```

## 3. Why is it useful?

- **Eliminates Manual `<br>` Tags:** Avoids hardcoding manual line breaks `<br>` which break layout responsiveness on mobile devices or different screen resolutions.
- **Replaces JavaScript Dependencies:** Completely eliminates the need for heavy JS libraries (such as `react-wrap-balancer`) or client-side DOM calculation scripts, reducing bundle size and improving runtime performance.
- **Native Browser Engine Speed:** Line balancing and orphan prevention are executed directly in the browser's layout engine with zero runtime performance cost.
