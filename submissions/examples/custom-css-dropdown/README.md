# Custom Animated CSS-Only Dropdown

A beautifully animated dropdown menu component managed entirely through CSS state selectors (`:focus-within` and hidden radio inputs), replacing native `<select>` dropdowns for a premium UI experience.

## Usage

Include the `style.css` in your project and structure your HTML as follows:

```html
<div class="ease-dropdown-container" tabindex="0">
  <div class="ease-dropdown-button">
    <span class="ease-dropdown-title">Select an option</span>
    <svg class="chevron" viewBox="0 0 24 24" width="20" height="20">
      <path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  
  <ul class="ease-dropdown-list">
    <li class="ease-dropdown-option">
      <input type="radio" id="opt1" name="dropdown-group" class="ease-radio-input" />
      <label for="opt1" class="ease-radio-label">
        <span class="icon">✨</span> Option 1
      </label>
    </li>
  </ul>
</div>
```

## Features

- **No JavaScript**: Fully powered by CSS `:focus-within` and radio inputs.
- **Animated**: Smooth dropdown reveal via opacity and transform, alongside a rotating chevron icon.
- **Accessible & Interactive**: Captures focus states accurately and retains the active state visually for the selected option.
- **Premium Styling**: Uses modern dark theme aesthetics, custom transition curves, and layered box-shadows.

## Why it fits EaseMotion CSS

This component seamlessly aligns with the animation-first philosophy by demonstrating how complex, interactive animations can be achieved natively without relying on JavaScript. It maintains high performance while providing developers with clean, declarative, and heavily customizable UI elements.
