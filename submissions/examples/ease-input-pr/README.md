# ease-input-pr

Styled form input with focus glow animation and floating label support.

## Features

- Clean bordered input with smooth focus transition
- Blue glow ring on focus using `box-shadow`
- Floating label that animates up on focus or when value exists
- Error state with red border and message
- Disabled state with muted styling

## Files

- `style.css` — the input styles
- `demo.html` — working demo showing all states
- `README.md` — usage documentation

## Usage

```html
&lt;!-- Default input --&gt;
&lt;input type="email" class="input-pr" placeholder="you@example.com"&gt;

&lt;!-- Floating label input --&gt;
&lt;label class="input-pr-wrapper has-label"&gt;
  &lt;input type="text" class="input-pr" placeholder=" "&gt;
  &lt;span class="input-pr-label"&gt;Full Name&lt;/span&gt;
&lt;/label&gt;

&lt;!-- Error state --&gt;
&lt;input type="password" class="input-pr input-pr-error"&gt;
&lt;span class="input-pr-error-message"&gt;Error message here&lt;/span&gt;