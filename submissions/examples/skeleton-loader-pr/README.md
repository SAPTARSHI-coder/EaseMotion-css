# skeleton-loader-pr

A **CSS-only shimmer skeleton loader** for cards, text lines, images, avatars, and buttons.

## Preview

Open `demo.html` in your browser. No build step required.

## Effect Behavior

| Variant | Class | Size | Use Case |
|---------|-------|------|----------|
| Text | `.skeleton-text-pr` | Full width, 1rem height | Body paragraphs |
| Short text | `.skeleton-text-short-pr` | 60% width, 1rem height | Last line of paragraph |
| Title | `.skeleton-title-pr` | 80% width, 1.5rem height | Headings |
| Image | `.skeleton-image-pr` | 10rem height, full width | Card images |
| Avatar | `.skeleton-avatar-pr` | 3rem × 3rem, circle | User avatars |
| Button | `.skeleton-button-pr` | 8rem width, 2.5rem height | CTA buttons |

## Usage

```html
&lt;!-- Basic card skeleton --&gt;
&lt;div class="skeleton-card-pr"&gt;
  &lt;div class="skeleton-loader-pr skeleton-image-pr"&gt;&lt;/div&gt;
  &lt;div class="skeleton-loader-pr skeleton-title-pr"&gt;&lt;/div&gt;
  &lt;div class="skeleton-loader-pr skeleton-text-pr"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Inside existing EaseMotion card --&gt;
&lt;div class="ease-card"&gt;
  &lt;div class="skeleton-loader-pr skeleton-image-pr"&gt;&lt;/div&gt;
  &lt;div class="ease-card-body"&gt;
    &lt;div class="skeleton-loader-pr skeleton-title-pr"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;