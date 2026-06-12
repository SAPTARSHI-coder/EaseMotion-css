# Float Label Input

**What does this do?**
Creates an animated floating label for form inputs. The label initially appears inside the input field and smoothly moves above the field when the input gains focus or contains a value.

**How is it used?**

```html
<div class="float-field">
  <input type="text" id="name" placeholder=" " required />

  <label for="name"> Full Name </label>
</div>
```

**Why is it useful?**
Floating labels provide a clean and modern form experience by reducing visual clutter while keeping field labels visible after user input. This improves usability compared to placeholder-only forms because users can always identify what information a field contains.

The effect uses pure CSS with `:focus` and `:placeholder-shown`, requiring no JavaScript. It is lightweight, accessible, and reusable across login forms, registration forms, contact forms, dashboards, and application interfaces.

The utility aligns with EaseMotion CSS by providing a human-readable, animation-enhanced form pattern that developers can use with minimal setup.

---

Submitted by: @your-github-username

Date: 2026-06-03

Status: **Pending review**
