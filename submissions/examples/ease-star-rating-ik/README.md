# EaseMotion CSS — Interactive Star Rating Component (`ease-star-rating-ik`)

A pure CSS 5-star rating component (`ease-star-rating`) featuring pop-scale hover transitions, reverse sibling fill effects, and radio input accessibility with zero JavaScript.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a 5-star rating component (`ease-star-rating`) that uses CSS sibling combinators (`~`) and radio inputs to highlight stars on hover or selection with pop-scaling micro-interactions.

---

## 2. How is it used?

Include the radio input and label structure inside your form:

```html
<div class="ease-star-rating">
  <input type="radio" id="star5" name="rating" value="5">
  <label for="star5">&starf;</label>

  <input type="radio" id="star4" name="rating" value="4">
  <label for="star4">&starf;</label>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS emphasizes zero-JS form controls. This star rating component delivers smooth 60fps spring scaling (`cubic-bezier(0.34, 1.56, 0.64, 1)`) while preserving semantic HTML form accessibility.
