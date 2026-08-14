# CSS FAQ Section Component

## What does this do?
A complete FAQ section with category filters, search bar, grouped accordion questions with expandable answers organized by topic categories, and a contact support call-to-action.

## How is it used?
```html
<div class="fq-item">
  <details>
    <summary class="fq-question">
      <span class="fq-q-icon">Q</span>
      <span>Question text?</span>
      <span class="fq-toggle">+</span>
    </summary>
    <div class="fq-answer">
      <p>Answer text goes here.</p>
    </div>
  </details>
</div>
```

## Why is it useful?
Creates a professional FAQ section for documentation and support pages. Features category-based question grouping with filters, real-time search bar, expandable accordion with custom marker styling using details/summary elements, and a conversion-focused support CTA. Fully responsive with smooth open/close animations and CSS custom property theming. Each question includes a numbered icon toggle indicator that rotates on expand. The component includes six category filters general setup usage pricing and support with grouped questions under each category heading. The search bar filters questions in real time. The CTA section at the bottom encourages users to contact support or view documentation.
