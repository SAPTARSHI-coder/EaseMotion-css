## Star Rating Display

**1. What does this do?**
A pure CSS interactive star rating component. Hover to preview a rating,
click to select it. No JavaScript required.

**2. How is it used?**
<div class="star-rating">
  <input type="radio" name="rating" id="s5" value="5">
  <label for="s5">★</label>
  <input type="radio" name="rating" id="s1" value="1">
  <label for="s1">★</label>
</div>

**3. Why is it useful?**
EaseMotion has form inputs but no rating component. This fills that gap
using only CSS sibling selectors and transitions — animation-first,
zero dependencies, accessible via native radio inputs.