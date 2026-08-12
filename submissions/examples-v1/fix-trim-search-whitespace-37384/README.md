# Fix Search Whitespace Trim

This submission provides a fix for issue #37384.

## The Bug
In the documentation playground, the animation search input does not ignore leading or trailing whitespace. Searching for ` fadeIn` or `fadeIn ` fails to match existing animations because the spaces are treated as literal parts of the query string.

## The Fix
This submission demonstrates the correct implementation of the search filter. By applying `.trim()` to the input value before it is processed by `.includes()`, we ensure that accidental spaces do not break the search functionality.

## File Structure
- `demo.html`: Contains a functional animation search interface demonstrating the fixed logic where leading/trailing spaces are safely ignored.
- `style.css`: Basic styling for the search interface and animation cards.
