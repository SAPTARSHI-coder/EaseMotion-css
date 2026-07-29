# Elastic Input Field

### 1. What does this do?
This is a pure CSS input field that utilizes inset shadows to create a Neumorphic (indented) aesthetic, featuring an elastic shrink-and-bounce transition when focused.

### 2. How is it used?
Apply the wrapper and input classes to your HTML structure:

​```html
<div class="elastic-input-wrapper">
  <label for="name">Your name</label>
  <input 
    type="text" 
    id="name" 
    class="elastic-input" 
    placeholder="Type here..." 
    aria-label="Your name" 
  />
</div>
​```

### 3. Features
- Pure CSS — no JavaScript required
- Neumorphic inset shadow for a "carved-in" look
- Elastic bounce transition on focus, using EaseMotion's `--ease-ease-bounce` and `--ease-speed-medium` tokens (with safe fallbacks if the full library isn't loaded)
- Soft glowing focus ring instead of a hard border, for a smoother visual feel
- Respects `prefers-reduced-motion` — the transition is disabled for users who've requested reduced motion
- Fully keyboard-accessible with a properly associated `<label>`

### 4. Notes
- Colors are currently hardcoded to a light neumorphic palette (`#e0e5ec` background); can be themed further using EaseMotion's color tokens like `--ease-color-primary`