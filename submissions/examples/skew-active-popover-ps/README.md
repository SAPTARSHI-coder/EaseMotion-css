# Accessible Skew-Active Popover (#46461)

An interactive, accessibility-focused modal popover component featuring a kinetic skew-active entry velocity that straightens cleanly upon resting focus.

### How to use
Incorporate the semantic layout pattern into your accessible templates:

```html
<div id="accessible-popover" class="popover-backdrop" role="dialog" aria-modal="true">
    <a href="#" class="popover-escape-zone"></a>
    <article class="skew-card">
        <!-- Content and focus elements -->
    </article>
</div>