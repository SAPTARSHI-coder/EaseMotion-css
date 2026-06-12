# Enhanced Bug Report Issue Template

## What does this do?

Proposes an enhanced bug report issue template with improved structure, clearer prompts, and additional fields for better bug triage. Also includes a YAML-based issue form alternative for GitHub's newer form-based templates.

## Current State

The existing `.github/ISSUE_TEMPLATE/bug_report.md` already covers the basics:

- Steps to reproduce
- Expected vs actual behavior
- Browser + OS info

## Proposed Enhancements

1. **Severity field** — helps maintainer prioritize (cosmetic, functional, breaking)
2. **EaseMotion CSS version** — explicit version field for faster debugging
3. **Class names involved** — specific to this framework's debugging needs
4. **Reduced motion preference** — relevant for an animation framework
5. **CodePen/JSFiddle link** — encourages minimal reproductions

## How is it used?

Contributors open a new issue → select "Bug Report" → fill in the structured form with all relevant debugging information.

## Why is it useful?

- Standardized bug reports reduce back-and-forth between reporter and maintainer
- Animation-specific fields (reduced motion, class names) speed up debugging
- Severity classification helps prioritize the issue backlog
- Aligns with EaseMotion CSS's professional, curated approach
