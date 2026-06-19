# Fix: Tabs 7 and 8 Content Panel Display

## Problem
In the CSS-only tabs component, content panel toggling is handled via `:nth-of-type` selectors. In current implementations, these selectors only exist for tabs 1-6. When a user selects tab 7 or 8, the corresponding content panel remains hidden (`display: none`) because no rule exists to switch it to `display: block`.

## Solution
This submission adds the missing `:nth-of-type(7)` and `:nth-of-type(8)` selectors to ensure that content panels for tabs 7 and 8 are correctly displayed when selected.

## Files Included
- `demo.html`: An interactive demonstration showing 8 tabs, verifying that tabs 7 and 8 now work correctly.
- `style.css`: The CSS fix extending the selector list for content panel toggling.
- `README.md`: This documentation.

## Related Issue
Fixes #11639

## How to verify
1. Open `demo.html` in any modern browser.
2. Click on "Tab 7" and "Tab 8".
3. Verify that the content for each tab is visible and displays a success message.
