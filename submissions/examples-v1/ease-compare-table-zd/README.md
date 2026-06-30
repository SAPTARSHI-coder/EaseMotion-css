# Ease Compare Table Zd

## What does this do?

An animated feature comparison table component for SaaS pricing pages, built with pure HTML and CSS — featuring staggered row entrance animations, animated SVG checkmark/cross icons, a highlighted "Popular" column with badge pop-in, hover highlight effects on rows, and responsive horizontal scroll.

## How is it used?

```html
<!-- Full comparison table wrapper -->
<div class="cmp-wrapper">
  <table class="cmp-table">
    <thead>
      <tr>
        <th class="cmp-feature-col"></th>
        <th class="cmp-plan-col">
          <span class="cmp-plan-name">Free</span>
          <span class="cmp-plan-price"><span class="currency">$</span>0</span>
        </th>
        <th class="cmp-plan-col cmp-highlight">
          <span class="cmp-popular-badge">Popular</span>
          <span class="cmp-plan-name">Pro</span>
          <span class="cmp-plan-price"><span class="currency">$</span>29</span>
        </th>
        <th class="cmp-plan-col">
          <span class="cmp-plan-name">Enterprise</span>
          <span class="cmp-plan-price"><span class="currency">$</span>99</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- Category row -->
      <tr class="cmp-category">
        <td colspan="4">Core Features</td>
      </tr>
      <!-- Feature rows with staggered animation -->
      <tr class="cmp-row">
        <td>Projects</td>
        <td>
          <span class="cmp-icon cmp-icon-check"
            ><svg viewBox="0 0 20 20"><path d="M4 10 L8 14 L16 6" /></svg
          ></span>
        </td>
        <td class="cmp-highlight">
          <span class="cmp-icon cmp-icon-check"
            ><svg viewBox="0 0 20 20"><path d="M4 10 L8 14 L16 6" /></svg
          ></span>
        </td>
        <td>
          <span class="cmp-icon cmp-icon-check"
            ><svg viewBox="0 0 20 20"><path d="M4 10 L8 14 L16 6" /></svg
          ></span>
        </td>
      </tr>
      <tr class="cmp-row">
        <td>API Access</td>
        <td>
          <span class="cmp-icon cmp-icon-cross"
            ><svg viewBox="0 0 20 20"><path d="M5 5 L15 15 M15 5 L5 15" /></svg
          ></span>
        </td>
        <td class="cmp-highlight">
          <span class="cmp-icon cmp-icon-check"
            ><svg viewBox="0 0 20 20"><path d="M4 10 L8 14 L16 6" /></svg
          ></span>
        </td>
        <td>
          <span class="cmp-icon cmp-icon-check"
            ><svg viewBox="0 0 20 20"><path d="M4 10 L8 14 L16 6" /></svg
          ></span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## Why is it useful?

Feature comparison tables are essential for SaaS pricing pages, product landing pages, and software documentation — helping users quickly compare plans and make purchasing decisions. This component provides a polished, ready-to-use comparison table with smooth staggered entrance animations, animated SVG checkmark/cross icons, a prominent "Popular" badge, hover row highlighting, and full `prefers-reduced-motion` support — all in pure CSS with zero JavaScript dependencies.
