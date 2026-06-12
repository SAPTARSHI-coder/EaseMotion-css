# Review Card Component

### What does this do?

Adds `ease-review-card-az` — a review/testimonial card with avatar (image or initials fallback), name, date, star rating (with half-star support), review text with optional 3-line clamp truncation, and helpful/footer actions.

### How is it used?

The maintainer should copy `style.css` into `components/review-card.css` and import it.

```html
<div class="ease-review-card-az">
  <div class="ease-review-header-az">
    <img class="ease-review-avatar-az" src="avatar.jpg" alt="" />
    <div class="ease-review-info-az">
      <p class="ease-review-name-az">Reviewer Name</p>
      <span class="ease-review-date-az"
        >Verified buyer &middot; 2 days ago</span
      >
    </div>
    <div class="ease-review-stars-az">
      <span class="ease-review-star-az filled">&#9733;</span>
      <span class="ease-review-star-az">&#9733;</span>
    </div>
  </div>
  <p class="ease-review-text-az">Review text here.</p>
  <div class="ease-review-footer-az">
    <span>Reviewed on Product Page</span>
    <div class="ease-review-helpful-az">
      <button>&#9650; 12</button>
    </div>
  </div>
</div>
```

Star classes: `.filled` (full gold star), `.half` (half-filled using CSS clip). Use `.--clamp` on `.ease-review-text-az` to limit to 3 lines. Use `.ease-review-avatar-fallback-az` with initials when no image is available.

### Why is it useful?

1. **Customer reviews** — common on e-commerce, app stores, and testimonial sections
2. **Half-star support** — precise ratings via CSS-only half-star technique
3. **Text clamping** — `.--clamp` class truncates long reviews to 3 lines
4. **Avatar fallback** — initials-based circle when no image is available
5. **Helpful actions** — upvote/downvote buttons for community feedback

Submitted by: @zen-ash-dev

Date: 2026-06-08

Status: **Pending review**
