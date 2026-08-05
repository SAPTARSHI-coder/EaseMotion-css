# Code Editor UI (VS Code Style)

This is a self-contained example demonstrating how to create a modern, VS Code-inspired code editor interface with file explorer, multiple tabs, syntax highlighting, terminal panel, minimap, and status bar using pure CSS and minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 🎨 **VS Code Dark Theme:** Authentic dark color scheme matching VS Code.
- 📁 **File Explorer:** Sidebar with folder/file tree structure.
- 📑 **Multiple Tabs:** Tabbed interface for multiple open files.
- 🎯 **Syntax Highlighting:** CSS-only syntax highlighting for HTML.
- 🔢 **Line Numbers:** Gutter with line numbers.
- 🗺️ **Minimap:** Code overview minimap on the right.
- 📍 **Breadcrumbs:** File path navigation.
- 💻 **Terminal Panel:** Integrated terminal with command history.
- 📊 **Status Bar:** Bottom status bar with git branch, errors, cursor position.
- 🎛️ **Activity Bar:** Left sidebar with icons for different views.
- 🍎 **Title Bar:** macOS-style window controls.
- ✨ **Smooth Animations:** Hover effects and transitions throughout.
- ♿ **Fully Accessible:** Proper ARIA labels and reduced motion support.
- 📱 **Responsive Design:** Adapts to mobile screens.
- 🚫 **Minimal JavaScript:** Only for tab/activity switching.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the editor HTML structure.
4. Customize file names, code content, and terminal output.
5. Include the JavaScript for tab switching (optional).

## HTML Structure

### Main Layout
```html
<div class="editor-container">
  <!-- Title Bar -->
  <div class="title-bar">
    <!-- Window controls and title -->
  </div>
  
  <!-- Editor Layout -->
  <div class="editor-layout">
    <!-- Activity Bar -->
    <div class="activity-bar">
      <!-- Activity icons -->
    </div>
    
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- File tree -->
    </div>
    
    <!-- Editor Area -->
    <div class="editor-area">
      <!-- Tabs -->
      <div class="editor-tabs">
        <!-- File tabs -->
      </div>
      
      <!-- Breadcrumbs -->
      <div class="breadcrumbs">
        <!-- File path -->
      </div>
      
      <!-- Code Editor -->
      <div class="code-editor">
        <!-- Gutter with line numbers -->
        <!-- Code content with syntax highlighting -->
        <!-- Minimap -->
      </div>
    </div>
  </div>
  
  <!-- Terminal Panel -->
  <div class="terminal-panel">
    <!-- Terminal tabs and content -->
  </div>
  
  <!-- Status Bar -->
  <div class="status-bar">
    <!-- Status items -->
  </div>
</div>