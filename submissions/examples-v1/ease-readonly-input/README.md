# ease-readonly-input – Readonly Input Styling

A CSS snippet that gives [readonly] inputs a distinct, muted style – lighter than disabled, with cursor: text to indicate the field is still readable and selectable, just not editable.

## EaseMotion classes used
- **Layout:** ease-container, ease-flex, ease-items-center, ease-justify-center, ease-min-h-screen, ease-block, ease-mx-auto, ease-max-w-sm, ease-w-full
- **Background:** ease-bg-gray-50
- **Typography:** ease-text-3xl, ease-font-bold, ease-text-gray-500, ease-text-sm, ease-text-gray-400, ease-font-semibold
- **Spacing:** ease-mb-1, ease-mb-4, ease-mb-6, ease-mb-8, ease-mt-8
- **Components:** ease-input
- **Animation:** ease-fade-in, ease-delay-200, ease-delay-500

## How it works
- Apply the class ease-input--readonly to any <input readonly> element.
- Sets a very light background (#f9fafb) and normal text color, so the field looks active but not editable.
- Keeps cursor: text to distinguish from disabled fields (which use cursor: not-allowed).
- A subtle blue focus ring ensures accessibility.

## How to use
1. Add class="ease-input ease-input--readonly" to your readonly inputs.
2. Copy the CSS snippet into your project.
3. Ensure the path to easemotion.css is correct.
