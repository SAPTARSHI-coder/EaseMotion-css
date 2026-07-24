# Accessible CSS Tada-Click Tabs (#50210)

A highly tactile and accessible pure-CSS tab switcher layout that features an playful, attention-grabbing `tada` entrance acceleration wiggle whenever a new panel becomes active.

### How to use
Organize the hidden layout checkboxes matching label items paired with targeted content blocks inside the global viewport layout structure:

```html
<input type="radio" id="tab-1" name="tabs" class="tab-state-input" checked>
<div class="tabs-nav-bar" role="tablist">
    <label for="tab-1" role="tab">Tab One</label>
</div>
<div class="tabs-content-viewport">
    <article id="panel-1" role="tabpanel">...</article>
</div>