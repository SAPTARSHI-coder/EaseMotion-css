# Command Palette Submission

## 1. What does this do?
It provides a modern, keyboard-first command palette interface (like VS Code, Notion, Linear) with smooth animations, real-time search filtering, keyboard navigation, categorized commands, and recent items tracking.

## 2. How is it used?
Press `Ctrl+K` (or `Cmd+K` on Mac) or click the "Open Command Palette" button. Type to search commands, use arrow keys to navigate, and press Enter to execute. Commands are categorized (Actions, Navigation, Settings, View) and recent selections are saved to localStorage.

## 3. Why is it useful?
- Modern keyboard-first navigation pattern (VS Code, Notion, Linear style)
- Smooth modal animations with backdrop blur
- Real-time search filtering across commands
- Full keyboard navigation (↑↓ arrows, Enter, Escape)
- Categorized commands with icons and descriptions
- Keyboard shortcuts display for each command
- Recent items tracking with localStorage persistence
- Fully accessible with ARIA labels and keyboard support
- Includes `prefers-reduced-motion` support for accessibility
- Mobile-responsive design
- Easy to customize commands and categories
- Maintainer can easily standardize this as `.ease-palette-[YOUR_INITIALS]` in the core library.