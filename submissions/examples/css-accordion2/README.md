# CSS-Only Accordion

An accordion component using the checkbox/radio hack to expand/collapse content panels with smooth height animation. No JavaScript needed.

## Demo

Open `demo.html` in your browser to see:
- Single-open accordion (radio buttons — only one panel open at a time)
- Multiple-open accordion (checkboxes — multiple panels can be open)
- Smooth height transition animation

## Usage

### Single Open (Radio Buttons)

```html
&lt;div class="accordion"&gt;
  &lt;div class="accordion-item"&gt;
    &lt;input type="radio" name="accordion" id="acc1" checked&gt;
    &lt;label class="accordion-header" for="acc1"&gt;
      &lt;span&gt;Question 1&lt;/span&gt;
      &lt;span class="accordion-icon"&gt;▼&lt;/span&gt;
    &lt;/label&gt;
    &lt;div class="accordion-content"&gt;
      &lt;p&gt;Answer 1...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="accordion-item"&gt;
    &lt;input type="radio" name="accordion" id="acc2"&gt;
    &lt;label class="accordion-header" for="acc2"&gt;
      &lt;span&gt;Question 2&lt;/span&gt;
      &lt;span class="accordion-icon"&gt;▼&lt;/span&gt;
    &lt;/label&gt;
    &lt;div class="accordion-content"&gt;
      &lt;p&gt;Answer 2...&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;