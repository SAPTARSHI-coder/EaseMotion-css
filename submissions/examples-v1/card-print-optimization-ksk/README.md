# Card Component Print Optimization (`card-print-optimization-ksk`)

1. What does this do?  
An eco-friendly, ink-saving print optimization module for EaseMotion CSS card components. While cards present rich dark mode colors, neon badges, and heavy drop shadows on screen, triggering a print command (`@media print`) automatically strips ink-heavy background fills, removes box-shadows, forces crisp high-contrast black text on pure white paper, and appends printable URLs to links.

2. How is it used?  
Include the `@media print` query in your component CSS or import `style.css`. It automatically targets `.ease-card` and `.card` classes during printing:

```css
@media print {
  body {
    background: #ffffff !important;
    color: #000000 !important;
  }
  .ease-card {
    background: #ffffff !important;
    color: #000000 !important;
    box-shadow: none !important;
    border: 1px solid #000000 !important;
    page-break-inside: avoid;
  }
  .no-print {
    display: none !important;
  }
}
```

3. Why is it useful?  
Printing dark-themed cards with heavy box-shadows wastes large amounts of printer ink and results in blurry, illegible documents. This enhancement ensures professional, high-contrast, eco-friendly physical printouts and PDF exports with zero manual configuration.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #51908.*
