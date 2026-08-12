# EaseMotion Live-Editor Playground

A sandboxed, self-contained environment designed for testing and demonstrating EaseMotion UI components—specifically the hardware-accelerated sticky header—within a live documentation editor. 

This implementation ensures that live previews do not break the core documentation layout or cause automated merge conflicts.

## 🌟 Features

* **Total Isolation:** Wraps the preview in an `alm-playground-wrapper` with `overflow-y: auto`, ensuring `position: sticky` elements stay confined to the preview window and don't hijack the main page scroll.
* **Merge-Safe:** Uses exact CSS variables and structural classes without modifying core layout files. Fallback values ensure components render perfectly even if core variables fail to load in the editor.
* **Performance Optimized:** Demonstrates best practices for glassmorphism and sticky elements, including GPU layer promotion (`translateZ(0)`) and WebKit backface-visibility fixes to prevent scroll jitter.

## 🚀 Usage

To use the playground in your live documentation editor, utilize the provided HTML and CSS structures.

### 1. The HTML Wrapper
Always wrap your documentation examples inside the playground wrapper. This establishes the necessary scroll boundaries.

```html
<div class="alm-playground-wrapper" style="height: 400px; overflow-y: auto; background-color: #0f172a; position: relative; border-radius: 8px;">
  <header class="alm-sticky-header">...</header>
  <main class="alm-scroll-canvas">...</main>
</div>
