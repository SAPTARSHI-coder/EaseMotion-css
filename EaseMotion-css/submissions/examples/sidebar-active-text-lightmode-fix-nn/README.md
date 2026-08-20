# Sidebar Active Text Light Mode Contrast Fix

## 1. What does this do?

This component demonstrates a accessibility contrast correction for documentation sidebars in light mode. It replicates a scenario where an active/selected sidebar link uses low-contrast white text on a light indigo background (contrast ratio `1.27:1`), and provides a fixed version that corrects the text color to a high-contrast dark indigo (contrast ratio `7.78:1`), passing WCAG AAA standards.

## 2. How is it used?

Apply the light-theme variables and contrast fixes in your CSS sidebar link states:

```css
/* Sidebar Link Base styles */
.sidebar-link-nn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: #475569;
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Light mode hover state */
.sidebar-link-nn:hover {
  background-color: #f1f5f9;
  color: #0f172a;
  padding-left: 1.25rem; /* Smooth slide highlight transition */
}

/* High contrast active state */
.sidebar-link-nn.active-fixed-nn {
  background-color: #e0e7ff; /* Light indigo background */
  color: #312e81 !important; /* Dark indigo high-contrast text color */
  font-weight: 600;
}
```

## 3. Why is it useful and how does it fit EaseMotion CSS philosophy?

Legibility and access are core parts of modern CSS architecture. This fix:

- **Ensures Inclusivity**: Meets WCAG AAA compliance standard (minimum 7:1 contrast ratio), making the documentation page accessible to all users.
- **Maintains Motion Aesthetics**: Keeps the layout clean and modern while preserving micro-interactive transitions (smooth indentation shifts on link hover states).
- **Lightweight Implementation**: Standardizes contrast fixes purely via semantic CSS variables without JavaScript.
