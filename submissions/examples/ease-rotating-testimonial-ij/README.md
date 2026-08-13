# Rotating Testimonial

An auto-rotating testimonial carousel where the active quote slides in while the inactive ones slide out, with elastic-style dots.

## How is it used?

Stack `.quote` figures absolutely inside `.rotator` and toggle `.active`:

```html
<figure class="quote active">…</figure>
<figure class="quote">…</figure>
```

`.quote` uses `opacity` + `translateX` transitions, so toggling `.active` animates the swap in both directions. The `.dot` buttons animate their width into a pill when active.

## Why is it useful?

Testimonials are a trust signal on almost every landing page. This component keeps the rotation lightweight — no library, a single interval, and CSS transitions for the cross-slide — while the bobbing avatar and expanding dots add the polish EaseMotion examples are meant to demonstrate.
