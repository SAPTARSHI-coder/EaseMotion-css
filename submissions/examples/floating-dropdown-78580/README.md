# Floating Dropdown

Documentation showcase for EaseMotion CSS issue #78580. The example demonstrates a native select control presented as a floating, layered interface element.

## Files

- `demo.html` — complete semantic dropdown example.
- `style.css` — panel layout, floating surface, focus styling, responsive spacing, and motion preferences.

## Design

The component treats the dropdown as a form control rather than replacing the browser's select behavior with custom JavaScript. This preserves keyboard navigation, mobile picker behavior, and built-in form semantics.

The surrounding panel provides the floating visual treatment. The control receives a clear focus state and maintains sufficient spacing for comfortable interaction.

## Usage

Replace the sample options with the categories or destinations required by the application. Keep the native `<label>` and `<select>` relationship intact. The same pattern can be used for filters, settings, onboarding choices, or navigation preferences.

## Accessibility

- Uses a native `<select>` element.
- Uses an explicitly associated `<label>`.
- Keeps browser keyboard and assistive technology behavior.
- Provides a visible focus state.
- Does not require JavaScript.
- Supports reduced-motion preferences.

## Responsive Behavior

The panel uses a fluid width and readable maximum width. At smaller viewports, padding and typography are reduced while the control remains full-width and touch-friendly.

## Customization

Change the surface radius, shadow, border, typography, and accent values in `style.css`. The visual layer can be adapted without changing the HTML behavior.

## Preview

Open `demo.html`, focus the Category field, and use the native dropdown to select an option. The component remains functional even if visual enhancements are unavailable.
