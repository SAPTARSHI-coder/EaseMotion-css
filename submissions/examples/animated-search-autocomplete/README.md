# Animated Search with Autocomplete

A clean, modern, and fully responsive **Search Bar with Autocomplete Dropdown**. This example demonstrates how to combine **EaseMotion CSS** for staggered list item entrances and smooth transitions with pure CSS for the expand/collapse behavior, creating a polished search experience without JavaScript.

## 🚀 Features

- **Smooth Dropdown Entrance**: Uses `ease-fade-in-down` to elegantly introduce the autocomplete suggestions.
- **Staggered List Items**: Each suggestion fades in sequentially using `ease-fade-in-up` and `ease-delay-*` for a premium, cascading effect.
- **Interactive Hover States**: Uses `ease-hover-grow` on suggestion items and tags for satisfying tactile feedback.
- **Focus State Enhancement**: The search box expands its shadow and changes border color when focused using `:focus-within`.
- **Clear Button**: Automatically appears when the input has content and can be clicked to clear the field.
- **Keyboard Shortcut Indicators**: Visual hints for keyboard navigation (Enter to search, Esc to close).
- **Recent Searches Tags**: Clickable tags with hover effects for quick access to previous searches.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted footer layout.

## 📂 File Structure

```text
submissions/examples/animated-search-autocomplete/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, dropdown, and responsive behavior
└── README.md    # Documentation