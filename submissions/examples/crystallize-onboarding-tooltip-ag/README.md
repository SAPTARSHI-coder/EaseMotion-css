# Crystallize Onboarding Tooltip

A glassmorphic, faceted onboarding tooltip with pure CSS multi-step tour mechanics, inspired by Blog design patterns.

## 1. What does this do?

This component provides a glassmorphic onboarding tooltip that pops into focus from a blurred state (crystallization reveal) with an elastic spring overshoot and one-shot shimmer sheen, triggered by a pure CSS multi-step radio button walkthrough.

## 2. How is it used?

Link to both `easemotion.css` and `style.css`, then construct the HTML with the following pattern inside a `<form>` to enable zero-JS resets:

```html
<form action="javascript:void(0);">
  <!-- Radio State Buttons -->
  <input
    type="radio"
    name="onboarding-step"
    id="step-1"
    checked
    style="display: none;"
  />
  <input
    type="radio"
    name="onboarding-step"
    id="step-2"
    style="display: none;"
  />
  <input
    type="radio"
    name="onboarding-step"
    id="step-skip"
    style="display: none;"
  />

  <!-- Viewport Wrapper -->
  <div class="blog-viewport-ag">
    <!-- Target hotspot trigger -->
    <div class="hotspot-wrapper-ag">
      <label
        for="step-1"
        class="beacon-pulse-ag beacon-step-1"
        tabindex="0"
        role="button"
      ></label>
    </div>

    <!-- Crystallize Onboarding Tooltip -->
    <div class="crystallize-tooltip-wrapper-ag tooltip-step-1">
      <div class="crystallize-tooltip-ag">
        <span class="tooltip-step-header-ag">Step 1 of 2</span>
        <h2 class="tooltip-title-ag">Tooltip Title</h2>
        <p class="tooltip-desc-ag">Description content goes here...</p>
        <div class="tooltip-footer-ag">
          <label for="step-skip" class="btn-skip-ag" tabindex="0" role="button"
            >Skip</label
          >
          <label for="step-2" class="btn-next-ag" tabindex="0" role="button"
            >Next &rarr;</label
          >
        </div>
      </div>
    </div>
  </div>
</form>
```

---

## 3. Why is it useful?

Interactive user guides and onboarding tours are standard across modern web blogs, magazines, and content-rich platforms. By implementing the step-by-step navigation logic using radio inputs and labels, this onboarding system operates entirely in pure CSS (no Javascript required), maintaining a lightweight footprint, high page responsiveness, and alignment with EaseMotion's composable, zero-dependency engineering standards.
