# Staggered Reveal

**What does this do?**
Applies increasing animation delays to repeated child elements so they fade or slide into view one after another.

**How is it used?**

```html
<ul class="stagger-list slide-up" style="--ease-stagger-step: 90ms;">
  <li>Review contribution guide</li>
  <li>Build the raw demo</li>
  <li>Submit for review</li>
</ul>
```

**Why is it useful?**
Staggered entrances make dense lists and card grids easier to scan without requiring JavaScript or per-item inline delays. The pattern fits EaseMotion CSS because the maintainer can pair the parent delay utility with existing entrance classes while preserving a small CSS API.
