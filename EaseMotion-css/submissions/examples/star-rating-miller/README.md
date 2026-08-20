# Star Rating

1. **What does this do?**
   A pure CSS interactive star rating component. No JavaScript at all. Uses `flex-direction: row-reverse` and the CSS sibling selector (`~`) to highlight stars on hover and selection.

2. **How is it used?**
   ```html
   <div class="ease-rating">
     <input type="radio" name="stars" id="s5" value="5"><label for="s5"></label>
     <input type="radio" name="stars" id="s4" value="4"><label for="s4"></label>
     <input type="radio" name="stars" id="s3" value="3"><label for="s3"></label>
     <input type="radio" name="stars" id="s2" value="2"><label for="s2"></label>
     <input type="radio" name="stars" id="s1" value="1"><label for="s1"></label>
   </div>
   ```

3. **Variants**
   - Sizes: `ease-rating-sm`, `ease-rating-lg`
   - Colors: `ease-rating-pink`, `ease-rating-violet`
   - Glow: `ease-rating-glow`
   - Read-only: `ease-rating-display`

4. **Why is it useful?**
   The CSS sibling selector trick is clever, animation-first, and zero JavaScript. Fully accessible via keyboard (radio inputs). Composable size and color variants follow EaseMotion CSS's human-readable philosophy.
