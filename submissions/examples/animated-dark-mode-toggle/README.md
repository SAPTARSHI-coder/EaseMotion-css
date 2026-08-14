# ease-theme-toggle

A pure-CSS sun-to-moon icon morph toggle for **EaseMotion CSS** dark mode switches.

## Usage

```html
<label class="theme-toggle">
  <input type="checkbox" onchange="document.documentElement.classList.toggle('dark', this.checked)">
  <span class="theme-toggle-icon"></span>
</label>