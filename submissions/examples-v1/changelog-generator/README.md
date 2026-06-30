# CHANGELOG.md Generator

## Overview

This example demonstrates an automated **CHANGELOG.md Generator** that creates release notes from merged Pull Request titles and labels. The workflow groups merged PRs into categories such as **Animation**, **Components**, **Bug Fixes**, and **Documentation**, producing a changelog in the **Keep a Changelog** format before every release.

The page serves as a responsive documentation example for the EaseMotion CSS project.

---

## Features

- Automatic CHANGELOG generation
- Reads merged Pull Requests
- Groups entries by labels
- Keep a Changelog formatting
- Release-ready documentation
- GitHub Actions workflow example
- Responsive documentation page
- Pure HTML and CSS implementation

---

## Folder Structure

```text
submissions/
└── examples/
    └── changelog-generator/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## How to Use

1. Open `demo.html` in any modern web browser.
2. Review the automated changelog generation workflow.
3. Explore the sample GitHub Actions configuration.
4. View the generated CHANGELOG preview.
5. Customize the example for your own repositories.

No installation or build tools are required.

---

## Workflow

The demonstrated workflow performs the following steps:

- Collects merged Pull Requests.
- Reads Pull Request labels.
- Groups entries by category.
- Formats the output using the Keep a Changelog specification.
- Produces a release-ready `CHANGELOG.md`.

---

## Technologies Used

- HTML5
- CSS3
- Responsive Design
- GitHub Actions (demonstration)
- Markdown

---

## Categories Demonstrated

- Animation
- Components
- Bug Fixes
- Documentation
- Enhancements

---

## Why it fits EaseMotion CSS

This example follows the EaseMotion CSS philosophy by providing a lightweight, responsive, and reusable documentation page that demonstrates a practical DevOps workflow. It is easy to understand, customize, and adapt for automated release management.

---

## Browser Compatibility

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari (expected)

---

## Notes

This project is intended as a demonstration of automated changelog generation. It showcases how GitHub Actions can simplify release preparation by organizing merged Pull Requests into a clean, structured, and maintainable `CHANGELOG.md`.
