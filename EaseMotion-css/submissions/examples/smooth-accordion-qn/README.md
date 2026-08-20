# Smooth CSS-Only Accordion

## Description
A modern, fully interactive FAQ/Accordion component built entirely with pure CSS. It features a smooth height expansion animation using a clever CSS Grid trick (`grid-template-rows`), an animated plus-to-minus icon, and subtle hover/active shadows. It uses the "checkbox hack" for state management, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the semantic HTML structure using hidden checkboxes, labels, and grid wrappers.
- `style.css`: Contains the layout, the `grid-template-rows` height animation trick, and the icon morphing transitions.

## How to use
1. Open `demo.html` in your browser and click the headers to see the smooth expand/collapse effect.
2. Copy the HTML and CSS into your project.
3. For each accordion item, ensure the `id` of the `<input>` matches the `for` attribute of the `<label>`.
4. **Customization:**
   - **Colors:** Change the header text color in `.accordion-header-qn` and the icon color in `.accordion-icon-qn::before/::after`.
   - **Animation Speed:** Adjust the `0.4s` transition duration in `.accordion-content-wrapper-qn` and `.accordion-icon-qn::before/::after`.
   - **Spacing:** Modify the `padding` in `.accordion-header-qn` and `.accordion-content-qn p` to make the items taller or shorter.