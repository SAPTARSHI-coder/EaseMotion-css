# Blur Breadcrumb

A responsive **glassmorphism breadcrumb** component inspired by modern **Analytics Dashboard** interfaces. This example demonstrates how to combine EaseMotion CSS animation utilities with a clean, accessible breadcrumb navigation.

# Features

-  Glassmorphism blur effect
-  Built with EaseMotion CSS animation utilities
-  Fully responsive layout
-  Accessible navigation with `aria-label` and `aria-current`
-  Smooth hover interactions
-  Pure HTML and CSS (no JavaScript required)

# Preview

The component displays a modern breadcrumb navigation with a frosted glass effect and subtle animations, suitable for dashboards, admin panels, and web applications.

# Folder Structure

blur-breadcrumb-ka/
├── demo.html
├── style.css
└── README.md

## Usage

Include the EaseMotion CSS library:


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css"
/>


Create the breadcrumb:


<nav class="breadcrumb ease-slide-up ease-delay-200" aria-label="Breadcrumb">

  <a href="#" class="crumb ease-hover-grow">Home</a>

  <span class="separator">›</span>

  <a href="#" class="crumb ease-hover-grow">Dashboard</a>

  <span class="separator">›</span>

  <a href="#" class="crumb ease-hover-grow">Analytics</a>

  <span class="separator">›</span>

  <span class="current" aria-current="page">Reports</span>

</nav>


# EaseMotion CSS Integration

This component makes use of EaseMotion CSS animation utilities, including:

- `ease-fade-in`
- `ease-slide-up`
- `ease-delay-100`
- `ease-delay-200`
- `ease-hover-grow`

# Accessibility

- Semantic `<nav>` element
- `aria-label="Breadcrumb"` for screen readers
- `aria-current="page"` for the active page
- Keyboard-accessible links with visible focus styles
- Responsive layout that wraps gracefully on smaller screens


# Why it fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by:

- Using human-readable HTML structure
- Applying EaseMotion animation utilities (`ease-*` classes)
- Remaining lightweight and dependency-free
- Providing a responsive and accessible user experience
- Demonstrating a reusable UI pattern for dashboard applications
