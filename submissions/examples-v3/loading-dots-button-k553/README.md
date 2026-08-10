# Loading Dots Button

**EaseMotion Submission** · Contributor: kavin553

---

## 1. What does this do?

Solves the button loading-state transition problem: when a button's label is replaced by a loading indicator, the button's width stays fixed instead of jumping/resizing, and the three dots animate in place using the exact bounce animation requested in issue #36188.

## 2. How is it used?

```html
<button class="loading-dots-btn" id="submitBtn">
  <span class="btn-label">Submit</span>
  <span class="btn-dots">
    <span></span><span></span><span></span>
  </span>
</button>

<script>
  // Toggle from your own app logic (e.g. on form submit / API call)
  submitBtn.classList.add('is-loading');
  submitBtn.disabled = true;
</script>