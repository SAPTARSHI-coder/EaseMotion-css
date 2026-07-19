# Cookie Preferences

### What does this do?

It shows a cookie preferences panel with a row for each cookie category, each with a title, a description, and a toggle switch. The necessary category is on and locked, and accept all and save actions sit at the bottom. It works with no JavaScript.

### How is it used?

```html
<div class="cprefs" role="dialog" aria-label="Cookie preferences">
  <div class="cp-row">
    <div class="cp-text"><strong>Necessary</strong><small>Always on.</small></div>
    <label class="cp-switch"><input type="checkbox" checked disabled /><span></span></label>
  </div>
  <div class="cp-actions"><a class="cp-save" href="#">Save choices</a><a class="cp-accept" href="#">Accept all</a></div>
</div>
```

Each category is a real checkbox styled as a switch. Mark the necessary row `disabled` so it stays on and dims. The two actions let a user save their choices or accept everything.

### Why is it useful?

Privacy laws require a preferences panel to manage cookie categories, not just a banner. This builds a cookie preferences panel with per category toggles, a locked necessary row, and actions, using only checkboxes and CSS. The switch transition is removed under reduced motion.
