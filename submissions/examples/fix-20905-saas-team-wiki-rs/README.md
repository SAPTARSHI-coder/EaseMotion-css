# SaaS Team Wiki / Knowledge Base

## Issue
**Issue #20905**: Advanced: SaaS Landing — Team Wiki / Knowledge Base

## Description
This submission provides a sleek layout for a Team Wiki or Knowledge Base SaaS application. It features a modern two-column layout with a sidebar and a main document area. The highlight is the interactive CSS-only search bar in the header that smoothly expands on focus using a `cubic-bezier` transition.

## Implementation Details
- **HTML (`demo.html`)**: Semantic layout using `<aside>`, `<main>`, `<header>`, and `<article>`.
- **CSS (`style.css`)**: 
  - **Expanding Search**: Uses `transition: all 0.4s cubic-bezier(...)` combined with the `:focus` pseudo-class to create a bouncy expansion effect for the search input.
  - **Document Animations**: Employs staggered entrance animations (`slide-in`, `fade-in`, `fade-in-up`) for the document title, metadata, and content body, resulting in a polished page-load experience.
  - Modern typography and subtle background coloring emulate a premium reading experience.

## Verification
Open `demo.html` in your browser. Upon load, notice the document content animating smoothly onto the screen. Click inside the "Search the knowledge base..." input field at the top to watch it fluidly expand.
