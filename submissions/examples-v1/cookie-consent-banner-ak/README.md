## What does this do?

This component renders a cookie consent banner that slides up from the bottom of the page with Accept and Reject buttons. Once dismissed, the banner remembers the user's choice for the current session using sessionStorage.

## How is it used?

Include the `style.css` and the HTML banner structure. The JavaScript checks `sessionStorage` on page load and hides the banner if a choice was previously made. A reset button is provided for demonstration purposes.

## Why is this useful?

Cookie consent banners are a legal requirement for many websites. This pre-built component provides a smooth, accessible, and session-persistent consent flow out of the box.

## Tech Stack

- HTML
- CSS
- JavaScript (vanilla)

## Preview

![Preview](preview.png)

## Contribution Notes

Class naming has been handled by the contributor. Maintainers may rename classes as part of the review process to align with project conventions.
