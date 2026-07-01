# ease-card-pr

A profile card component with avatar placeholder, name, title, and social links.

## Features

- Circular avatar with initials placeholder
- Name and title text
- Social link icons with hover effect
- Subtle lift and shadow increase on hover

## Files

- `style.css` — the profile card styles
- `demo.html` — working demo with two profile cards in a row
- `README.md` — usage documentation

## Usage

```html
&lt;!-- After integration, it will become: --&gt;
&lt;div class="ease-card ease-card-pr"&gt;
  &lt;div class="ease-card-pr-avatar"&gt;JD&lt;/div&gt;
  &lt;div class="ease-card-pr-name"&gt;John Doe&lt;/div&gt;
  &lt;div class="ease-card-pr-title"&gt;Frontend Developer&lt;/div&gt;
  &lt;div class="ease-card-pr-social"&gt;
    &lt;a href="#" aria-label="Twitter"&gt;𝕏&lt;/a&gt;
    &lt;a href="#" aria-label="GitHub"&gt;Ⓖ&lt;/a&gt;
    &lt;a href="#" aria-label="LinkedIn"&gt;Ⓛ&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;