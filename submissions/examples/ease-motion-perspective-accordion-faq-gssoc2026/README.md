# Perspective Tilt Accordion FAQ - EaseMotion CSS

A 3D perspective depth accordion list component leveraging semantic HTML `<details>` and custom spring transform curves.

## 1. What does this do?
This component provides expandable FAQ accordion panels with dynamic 3D tilt interaction states on hover and toggle.

## 2. How is it used?
Link `style.css` and wrap questions in HTML `<details>` elements:

```html
<link rel="stylesheet" href="style.css">

<details class="accordion-item">
  <summary class="accordion-header">Question?</summary>
  <div class="accordion-content"><p>Answer...</p></div>
</details>
```

## 3. Why is it useful?
- **Native Semantic HTML:** Eliminates JS click listener dependencies by building on native `<details>` element state.
- **3D Transform Polish:** Adds subtle perspective tilt feedback on interaction.
- **Accessible:** Native keyboard focus and screen reader compatibility.
