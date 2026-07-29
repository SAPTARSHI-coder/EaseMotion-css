# CDN Semver Version Picker & Pinning Guide

Resolves #43649.

### What does this do?
Provides a drop-down interactive widget that dynamically generates a `<link>` tag pointing to a specific semantic version of EaseMotion CSS hosted on jsDelivr.

### How is it used?
Users select a version from the dropdown, and the tool outputs the exact HTML snippet needed for their `<head>`. A one-click copy button handles copying the code to their clipboard.

### Why is it useful?
Using `@latest` in production is a bad practice because a major version update could break a site's design. This guide encourages best practices by making it incredibly easy for users to "pin" their CDN URL to a specific, immutable version.
