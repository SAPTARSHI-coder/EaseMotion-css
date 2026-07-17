# Footer Contact Link — Issue #47849

## What does this do?

Adds a "Have a question?" contact section to the website footer, providing users with a prominent button that redirects to a Google Form for submitting queries, feedback, or suggestions.

## How is it used?

Add the following HTML block inside the existing `<footer>` element in `docs/index.html`:

```html
<div class="footer-contact">
  <h3>Have a question?</h3>
  <p>We'd love to hear from you. Submit your query, feedback, or suggestion and we'll get back to you.</p>
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfEXAMPLE/viewform"
     target="_blank"
     rel="noopener noreferrer"
     class="contact-btn">
    Submit Your Query
    <span class="arrow">&#8594;</span>
  </a>
</div>
```

Replace the `href` value with the actual Google Form URL once created.

## Why is it useful?

- Gives users a clear, structured way to reach out with questions or feedback.
- Centralizes submissions in a Google Form, making them easy to triage.
- Improves communication between users and maintainers.
- Follows the existing footer layout and dark-theme design tokens.
