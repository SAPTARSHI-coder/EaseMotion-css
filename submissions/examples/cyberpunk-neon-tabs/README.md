# CSS Fade-In Tabs: Cyberpunk Neon Layout

A pure CSS, JavaScript-free tabbed interface designed for futuristic, cyberpunk, and dark-mode themes. Created for **EaseMotion CSS**.

## 🚀 Features

- **Zero JavaScript:** Utilizes the HTML5 `<input type="radio">` hack for state management.
- **EaseMotion Animations:** Features a smooth `fade-in-up` animation with slight scaling and blur resolution.
- **Cyberpunk Aesthetics:** Deep contrast backgrounds, glowing text-shadows, and neon border highlights (Cyan, Magenta, Yellow).
- **Fully Responsive:** Tab labels flex horizontally on desktop and stack vertically on mobile screens.
- **Accessible & Safe:** Hidden inputs remain keyboard focusable via `focus-visible`. Respects `prefers-reduced-motion` to disable animations for users requiring it.

## 🛠️ Usage

### 1. HTML Structure
The core structure relies on grouping hidden radio inputs, followed by the tab labels, followed by the content panels. 

```html
<div class="em-cyber-tabs">
    <!-- 1. State Managers (Hidden) -->
    <input type="radio" name="my-tabs" id="tab-1" class="em-tab-input" checked>
    <input type="radio" name="my-tabs" id="tab-2" class="em-tab-input">

    <!-- 2. Nav Labels -->
    <div class="em-tab-labels">
        <label for="tab-1" class="em-tab-label">Tab One</label>
        <label for="tab-2" class="em-tab-label">Tab Two</label>
    </div>

    <!-- 3. Content Panels -->
    <div class="em-tab-panels">
        <div class="em-panel" id="panel-1">Content 1</div>
        <div class="em-panel" id="panel-2">Content 2</div>
    </div>
</div>