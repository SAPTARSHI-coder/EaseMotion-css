# CSS Classroom Seat Grid (#70948)

Pure CSS responsive classroom seating chart component displaying assigned student name labels, occupancy states, and interactive seat selection without JavaScript.

## Features
- **Responsive Grid System:** Adapts from 4-column classroom layout down to 2-column mobile structure dynamically.
- **Pure CSS State Selection:** Utilizes native hidden `<input type="checkbox">` elements to handle seat selection and highlight feedback without JavaScript.
- **Visual Classroom Context:** Integrated chalkboard front-of-class banner and seat code designations (A1, A2, B1...).
- **Accessible & Screen Reader Ready:** Full ARIA status labels on seat inputs, focus outline rings for keyboard navigation, and `prefers-reduced-motion` compliance.

## Structure
- `style.css` - Component variables, grid template styling, status attributes, selection states, and accessibility overrides.
- `demo.html` - Interactive demo featuring an 8-seat classroom arrangement with student names.
