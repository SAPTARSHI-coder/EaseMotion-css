# ⌘ Animated Command Palette Component

A modern, fast, and accessible command palette component built with pure HTML and CSS for the EaseMotion CSS library. Perfect for applications that need a powerful search and command execution interface.

## 📋 Features

- ✅ **Smooth Entrance Animation** - Fade and scale animation when palette opens
- ✅ **Interactive Command Items** - Hover and active state animations
- ✅ **Keyboard Shortcut Badges** - Styled keyboard shortcut display
- ✅ **Grouped Commands** - Organize commands into logical groups
- ✅ **Search Integration** - Ready-to-use search input with styling
- ✅ **Accessible** - ARIA labels, semantic HTML, keyboard navigation support
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Pure CSS & HTML** - Zero JavaScript required for styling
- ✅ **Customizable** - Easy color and animation customization via CSS variables
- ✅ **No Dependencies** - Works standalone without external libraries
- ✅ **Dark Mode Support** - Automatic dark mode color scheme
- ✅ **Motion Preferences** - Respects `prefers-reduced-motion` media query

## 🎯 Why Command Palettes?

Command palettes have become the go-to interface pattern in modern applications because they:

- **Increase Productivity** - Users can quickly access features without navigating menus
- **Reduce Cognitive Load** - All commands are searchable and discoverable in one place
- **Improve Accessibility** - Keyboard-driven interface accessible to all users
- **Enhance User Experience** - Familiar pattern from VSCode, Figma, Linear, and other leading products
- **Scale with Features** - Works great whether you have 10 commands or 1000

## 🚀 Quick Start

### Basic HTML Structure

```html
<div class="ease-command-palette" role="dialog">
  <!-- Search Input -->
  <div class="ease-command-search" role="search">
    <span class="search-icon">🔍</span>
    <input type="text" placeholder="Type a command...">
  </div>

  <!-- Command List -->
  <div class="ease-command-list" role="listbox">
    <!-- Command Group -->
    <div class="command-group">
      <div class="group-label">Files</div>
      
      <!-- Command Item -->
      <div class="ease-command-item ease-command-active" role="option">
        <div class="command-icon">📄</div>
        <div class="command-content">
          <div class="command-title">New File</div>
          <div class="command-description">Create a new file</div>
        </div>
        <div class="ease-command-shortcut">Ctrl+N</div>
      </div>
      
      <div class="ease-command-item" role="option">
        <div class="command-icon">📁</div>
        <div class="command-content">
          <div class="command-title">Open File</div>
          <div class="command-description">Open an existing file</div>
        </div>
        <div class="ease-command-shortcut">Ctrl+O</div>
      </div>
    </div>
  </div>

  <!-- Footer Info -->
  <div class="command-footer">
    <span class="footer-text">↑↓ Navigate</span>
    <span class="footer-text">⏎ Execute</span>
    <span class="footer-text">ESC Close</span>
  </div>
</div>
```

### Link the Stylesheet

```html
<link rel="stylesheet" href="style.css">
```

## 📚 CSS Classes Reference

### Main Container

| Class | Purpose |
|-------|---------|
| `.ease-command-palette` | Main command palette container with animations |
| `.ease-command-search` | Search input section with icon and hint |
| `.ease-command-list` | Scrollable container for command items |

### Command Items

| Class | Purpose |
|-------|---------|
| `.ease-command-item` | Individual command item element |
| `.ease-command-active` | Marks the currently selected/active command |
| `.command-group` | Container for grouped commands |
| `.group-label` | Label for command groups |

### Sub-elements

| Class | Purpose |
|-------|---------|
| `.command-icon` | Icon container (emoji or SVG) |
| `.command-content` | Title and description wrapper |
| `.command-title` | Main text of the command |
| `.command-description` | Secondary description text |
| `.ease-command-shortcut` | Keyboard shortcut badge |
| `.command-footer` | Footer section with navigation hints |

## 🎨 Customization with CSS Variables

Customize the command palette appearance by overriding CSS variables:

```css
:root {
  /* Primary color for active states and icons */
  --palette-primary-color: #667eea;
  
  /* Background color for the palette */
  --palette-bg-color: #ffffff;
  
  /* Text color for titles and labels */
  --palette-text-color: #333333;
  
  /* Secondary text color */
  --palette-secondary-text: #666666;
  
  /* Border color for dividers */
  --palette-border-color: #e0e0e0;
  
  /* Hover background color */
  --palette-hover-bg: #f5f7ff;
  
  /* Active/selected background color */
  --palette-active-bg: #eef0ff;
  
  /* Animation speed */
  --palette-animation-speed: 0.3s;
  
  /* Border radius */
  --palette-border-radius: 8px;
  
  /* Box shadow */
  --palette-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}
```

### Example: Custom Color Theme

```css
:root {
  --palette-primary-color: #ff6b6b;
  --palette-hover-bg: #ffe0e0;
  --palette-active-bg: #ffcccc;
  --palette-animation-speed: 0.4s;
}
```

## 🎬 Animation Details

### Entrance Animation
The palette animates in with a smooth fade and scale effect when opened.

### Item Hover Animation
Command items slide in and change background color when hovered, with icons scaling up.

### Active State Animation
The currently selected item has a highlighted background with an active icon state.

### Smooth Transitions
All state changes include smooth transitions for a polished feel.

## 📱 Responsive Behavior

The component automatically adapts to different screen sizes:

- **Desktop (>768px)**: Full-size palette with descriptions visible
- **Tablet (481px - 768px)**: Medium-sized palette with adjusted spacing
- **Mobile (<480px)**: Mobile-optimized palette with full viewport height

## ♿ Accessibility Features

- **ARIA Labels**: Proper `aria-label`, `role`, and `aria-selected` attributes
- **Semantic HTML**: Uses semantic structure for screen readers
- **Keyboard Navigation**: Fully keyboard accessible with focus management
- **Reduced Motion Support**: Respects `prefers-reduced-motion` media query
- **High Contrast Mode**: Automatically adjusts colors for better visibility
- **Focus Indicators**: Clear visual indicators for keyboard users
- **Dark Mode**: Automatic dark mode color scheme support

### Accessible Markup Example

```html
<div class="ease-command-palette" role="dialog" aria-label="Command Palette">
  <div class="ease-command-search" role="search">
    <input 
      type="text" 
      placeholder="Type a command..." 
      aria-label="Search commands"
    >
  </div>
  
  <div class="ease-command-list" role="listbox">
    <div class="ease-command-item ease-command-active" role="option" aria-selected="true">
      <!-- Command content -->
    </div>
    <div class="ease-command-item" role="option">
      <!-- Command content -->
    </div>
  </div>
</div>
```

## 🔧 Implementation Patterns

### Basic Command Palette

```html
<div class="ease-command-palette">
  <div class="ease-command-search">
    <span class="search-icon">🔍</span>
    <input type="text" placeholder="Search...">
    <span class="search-hint">ESC</span>
  </div>
  <div class="ease-command-list">
    <!-- Commands here -->
  </div>
</div>
```

### Command with Icon and Shortcut

```html
<div class="ease-command-item">
  <div class="command-icon">⚙️</div>
  <div class="command-content">
    <div class="command-title">Settings</div>
    <div class="command-description">Open settings</div>
  </div>
  <div class="ease-command-shortcut">Ctrl+,</div>
</div>
```

### Grouped Commands

```html
<div class="command-group">
  <div class="group-label">Files</div>
  <div class="ease-command-item">
    <!-- Item 1 -->
  </div>
  <div class="ease-command-item">
    <!-- Item 2 -->
  </div>
</div>

<div class="command-group">
  <div class="group-label">Edit</div>
  <div class="ease-command-item">
    <!-- Item 3 -->
  </div>
</div>
```

## 📊 Use Cases

### Development Tools
- IDE command palettes (VSCode, Sublime, JetBrains)
- GitHub/GitLab command search
- Build tool command runners

### Productivity Apps
- Note-taking apps (Notion, OneNote)
- Task managers (Linear, Jira)
- Markdown editors

### Design Tools
- Figma-style design platforms
- UI component libraries
- Asset management systems

### Mobile Applications
- In-app search functionality
- Quick action menus
- Feature discovery

### Web Applications
- Admin dashboards
- CMS applications
- SaaS platforms

## 🎯 Best Practices

1. **Organize with Groups**: Use command groups to organize related commands
2. **Clear Descriptions**: Add brief descriptions to help users understand each command
3. **Keyboard Shortcuts**: Display keyboard shortcuts prominently
4. **Search Filtering**: Implement search filtering for large command sets
5. **Icons/Emojis**: Use consistent icons for visual recognition
6. **Keyboard Navigation**: Support arrow keys and Enter for navigation
7. **Escape to Close**: Always allow Escape key to close the palette
8. **Recent Commands**: Consider showing frequently used commands first
9. **Help Text**: Display help text in the footer for guidance
10. **Performance**: Virtualize long command lists for better performance

## 💾 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌙 Dark Mode

The component automatically adapts to dark mode using the `prefers-color-scheme` media query:

```css
@media (prefers-color-scheme: dark) {
  /* Dark mode colors automatically applied */
}
```

## 🎮 Enhanced Features (Optional JavaScript)

While the CSS handles all animations and styling, you can add these features with JavaScript:

- Command execution on Enter
- Arrow key navigation between items
- Search filtering
- Recently used commands
- Command history
- Custom keyboard shortcuts
- Command preview
- Fuzzy search matching

## 📄 License

This component is part of the EaseMotion CSS library and follows the same license.

## 🤝 Contributing

Contributions are welcome! Please follow the EaseMotion contribution guidelines.

## 📞 Support

For issues, feature requests, or questions, please refer to the main EaseMotion repository.

---

**Built with ❤️ for the EaseMotion CSS Community**

Perfect for building fast, accessible, and beautiful command palettes in your applications!
