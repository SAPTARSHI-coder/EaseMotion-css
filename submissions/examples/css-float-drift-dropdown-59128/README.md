# Float-Drift Dropdown

A sleek, pure CSS dropdown menu featuring a fluid "float-drift" animation designed specifically for Gaming Hub layouts and dark-themed interfaces. Built for the EaseMotion CSS library.

## 🎯 Features

- **Pure CSS**: No JavaScript required for hover interactions or animations.
- **Float-Drift Animation**: Combines a snappy entry transition (using a spring-like `cubic-bezier`) with a continuous gentle floating keyframe animation.
- **Modern Aesthetics**: Utilizes backdrop blur (glassmorphism), subtle borders, and smooth hover state transitions.
- **Responsive**: Adapts gracefully to mobile layouts.
- **Accessible**: Full support for `prefers-reduced-motion` media query to disable animations for users with motion sensitivity.

## 📂 File Structure

- `demo.html` - The showcase layout representing a gaming hub header.
- `style.css` - The core CSS variables, layout, and dropdown animation logic.

## 💻 Usage

To implement the float-drift dropdown in your project, use the following HTML structure:

```html
<li class="menu-item">
  <a href="#" class="menu-link">Menu <span class="arrow">▼</span></a>
  <div class="dropdown float-drift">
    <ul class="dropdown-list">
      <li><a href="#">Option 1</a></li>
      <li><a href="#">Option 2</a></li>
    </ul>
  </div>
</li>
```

Ensure the parent element (`.menu-item`) has `position: relative` or `perspective: 1000px` for the 3D transforms to work correctly.

## 🎨 Custom Properties

The dropdown relies on several custom CSS variables defined in `:root` for easy theming:

- `--hub-bg`: Main background color
- `--hub-text`: Primary text color
- `--hub-accent`: Accent color for hovers and highlights
- `--dropdown-bg`: Background color for the dropdown menu (supports `rgba` for glassmorphism)
- `--dropdown-border`: Border color for the dropdown list
- `--dropdown-shadow`: Box shadow for depth
- `--transition-speed`: Global speed for the dropdown entry/exit transitions

## ♿ Accessibility

This component includes a `prefers-reduced-motion: reduce` media query that automatically disables the floating keyframes, complex transform transitions, and padding shifts for users who prefer less motion, defaulting to a simple opacity fade.
