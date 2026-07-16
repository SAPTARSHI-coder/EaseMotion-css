# Fix ease-flip White Gap Between Card Faces in Firefox

This example implements the fix for the ease-flip animation in Firefox (Issue #32475).

When the ease-flip card animation runs in Firefox, a white gap/flash appears between the front and back faces at the midpoint of the flip animation. This happens because Firefox handles backface-visibility differently. 

## Solution
We apply `-moz-backface-visibility: hidden;` and explicitly define a background color on both faces.

```css
.ease-flip-card-fixed__front,
.ease-flip-card-fixed__back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  background: #13131f;
}
```
