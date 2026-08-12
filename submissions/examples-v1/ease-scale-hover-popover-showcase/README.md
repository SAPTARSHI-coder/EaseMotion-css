# Scale-Hover Showcase Popover

### 1. What does this do?
A pure CSS popover revealed on hovering or focusing a customer logo, with a smooth scale-up transition, styled for SaaS "trusted by" / testimonial showcase sections. Hovering a logo reveals a short customer quote without navigating away.

### 2. How is it used?
\`\`\`html
<div class="showcase-logo-wrap">
  <div class="showcase-logo" tabindex="0">Northwind</div>
  <div class="showcasepop">
    <p class="showcasepop-quote">"Customer quote goes here."</p>
    <p class="showcasepop-author">— Name, Title, Company</p>
  </div>
</div>
\`\`\`
- Wrap a `.showcase-logo` (with `tabindex="0"` for keyboard access) and a sibling `.showcasepop` in a `.showcase-logo-wrap`. The popover reveals on logo hover or focus.
- Customize the motion with CSS custom properties on `.showcasepop`:
  - `--showcasepop-timing` — transition duration (default `0.3s`)
  - `--showcasepop-easing` — transition easing function (default a slight overshoot cubic-bezier)
  - `--showcasepop-scale` — final scale factor on reveal (default `1`)

### 3. Why is it useful?
SaaS marketing pages commonly show a row of customer logos as social proof; surfacing a quote on hover adds credibility without cluttering the layout. The scale-up transition gives that reveal a tactile, purposeful feel rather than a flat fade, matching EaseMotion's animation-first philosophy — fully CSS-driven, keyboard accessible via `:focus-visible`, and zero JS.
