# Command Palette (Ctrl+K Menu)

This is a self-contained example demonstrating how to create a modern, keyboard-navigable command palette (similar to Linear, Vercel, GitHub) using pure CSS and minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- ⌨️ **Keyboard Navigation:** Full arrow key navigation (↑↓) and Enter to execute.
- 🔍 **Live Search:** Real-time fuzzy filtering as you type.
- 📂 **Categorized Commands:** Organized into Recent, Actions, and Navigation sections.
- 🎯 **Visual Selection:** Highlighted selected item with smooth transitions.
- ⚡ **Keyboard Shortcuts:** Display shortcut hints for each command.
- 🎨 **Smooth Animations:** Scale and fade transitions for open/close.
- ♿ **Fully Accessible:** Proper ARIA labels, keyboard navigation, and reduced motion support.
- 📱 **Responsive Design:** Adapts to mobile screens.
- 🚫 **Minimal JavaScript:** Only for state management and filtering.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the palette HTML structure.
4. Include the JavaScript class at the bottom of your page.
5. Initialize: `const palette = new CommandPalette();`
6. Press `Ctrl+K` (or `Cmd+K` on Mac) to open.

## HTML Structure
```html
<!-- Trigger Button -->
<button class="trigger-btn" id="openPalette">
  <svg><!-- Search icon --></svg>
  <span>Search or type a command...</span>
  <div class="shortcut-hint">
    <kbd>Ctrl</kbd>
    <kbd>K</kbd>
  </div>
</button>

<!-- Palette Modal -->
<div class="palette-overlay" id="paletteOverlay">
  <div class="palette" id="palette">
    <!-- Search Input -->
    <div class="palette__search">
      <input type="text" class="palette__input" placeholder="Type a command..." />
    </div>
    
    <!-- Results -->
    <div class="palette__results">
      <div class="palette__section">
        <div class="palette__section-header">
          <span class="palette__section-title">Section Name</span>
        </div>
        <ul class="palette__list">
          <li class="palette__item" data-command="command-id">
            <div class="palette__item-icon"><!-- Icon --></div>
            <div class="palette__item-content">
              <span class="palette__item-title">Command Title</span>
              <span class="palette__item-description">Description</span>
            </div>
            <div class="palette__item-shortcut">
              <kbd>Ctrl</kbd>
              <kbd>N</kbd>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Footer -->
    <div class="palette__footer">
      <div class="palette__footer-hint">
        <kbd>↑</kbd>
        <kbd>↓</kbd>
        <span>to navigate</span>
      </div>
    </div>
  </div>
</div>