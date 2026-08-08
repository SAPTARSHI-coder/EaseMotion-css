 
# Accordion Component (CSS-only)

CSS-only accordion/FAQ component using details/summary elements with smooth open/close animations.

## Files

- demo.html - Interactive demo
- style.css - Accordion styles
- README.md - Documentation

## Classes

- ease-accordion - Base accordion
- ease-accordion-faq - FAQ style accordion
- ease-accordion-primary/success/warning/info - Color variants
- ease-accordion-rounded - Rounded corners
- ease-accordion-shadow - Shadow elevation

## Usage

```html
<details class="ease-accordion">
    <summary class="ease-accordion-summary">
        Question Title
        <span class="accordion-icon">▼</span>
    </summary>
    <div class="ease-accordion-content">
        <p>Answer content here</p>
    </div>
</details>