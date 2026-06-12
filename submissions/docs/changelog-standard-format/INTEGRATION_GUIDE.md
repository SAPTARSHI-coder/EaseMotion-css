# Integration Guide: Adding Changelog Standard to CONTRIBUTING.md

This file shows exactly what should be added to the main `CONTRIBUTING.md` file to enforce the changelog standard for all contributors.

---

## Text to Add to CONTRIBUTING.md

Add this section after the submission checklist section:

```markdown
---

## Changelog Entries

Every PR that adds features, changes functionality, or fixes bugs must include a proposed changelog entry.

### Format

Use this template in your PR description:

\`\`\`markdown
## Changelog Entry

### Type
Choose one: ✨ Added | 🔄 Changed | 🐛 Fixed | ⚠️ Deprecated

### Proposed Entry
- Brief description of what changed
- Include class names, file paths, or values if relevant
- Keep to one line per change
\`\`\`

### Examples

**New Utility:**
```markdown
## Changelog Entry

### Type: ✨ Added

### Proposed Entry
- `.ease-tracking-tight` — Condensed letter spacing (-0.025em) for modern headlines
```

**Bug Fix:**
```markdown
## Changelog Entry

### Type: 🐛 Fixed

### Proposed Entry
- Fixed `.ease-hover-lift` shadow clipping on iOS Safari 14+
```

**Breaking Change:**
```markdown
## Changelog Entry

### Type: 🔄 Changed

### Proposed Entry
- **BREAKING:** Renamed `--ease-old-color` to `--ease-color-primary`
  - Migrate all CSS variable references in your stylesheets
  - See migration guide: docs/v2-upgrade.md
```

### Guidelines

- ✅ One change per bullet point
- ✅ Include technical details (class names, values, files)
- ✅ Be concise but descriptive
- ✅ For breaking changes, include migration path
- ✅ For deprecations, mention removal timeline (e.g., "removal: v2.0.0")
- ✅ Link related issue/PR if helpful

### Non-Changelog PRs

Not all PRs need changelog entries. Skip if:
- Internal refactoring (no user-facing change)
- Documentation-only updates (see separate process below)
- Dependency updates
- CI/CD or tooling changes

**When in doubt, include it.** Maintainers will adjust during review.

### Documentation Updates

For documentation-only PRs (no code changes), add instead:

```markdown
## Documentation Update

**Type:** Docs  
**Files:** docs/new-guide.md, docs/index.html  
**Scope:** Explains how to use [feature name]  
**Status:** Ready for review
```

### Changelog Entry Review

Before merging:
- Maintainer will finalize changelog entry
- Will be added to `CHANGELOG.md` with version and date
- Released in the next project version

See [submissions/changelog-standard-format/](../submissions/changelog-standard-format/) for complete format specification and templates.

---
```

---

## Text to Add to PR Template

Update `.github/PULL_REQUEST_TEMPLATE.md` with:

```markdown
---

## Changelog Entry

> All PRs that add features, fix bugs, or change functionality should include a changelog entry.  
> See [CONTRIBUTING.md](../CONTRIBUTING.md#changelog-entries) for format and examples.

### Type
- [ ] ✨ Added (new feature/utility/component)
- [ ] 🔄 Changed (modified existing functionality)
- [ ] 🐛 Fixed (bug fix)
- [ ] ⚠️ Deprecated (feature being phased out)
- [ ] 📝 Documentation only (no changelog entry needed)

### Proposed Changelog Entry

\`\`\`markdown
- [Your changelog entry here — one line, include class name/file if applicable]
- [Additional items if multiple changes]
\`\`\`

---
```

---

## Implementation Steps

### For Project Maintainer

1. **Update CONTRIBUTING.md**
   - Add "Changelog Entries" section (see text above)
   - Add link to `submissions/changelog-standard-format/README.md`

2. **Update PR Template**
   - Add "Changelog Entry" section to `.github/PULL_REQUEST_TEMPLATE.md`
   - Include type checkboxes and template

3. **Reformat Main Changelog**
   - Use `CHANGELOG_REFORMATTED_EXAMPLE.md` as reference
   - Apply standard format to existing v1.0.0 entry
   - Merge via separate PR (easier to review)

4. **Communicate Standard**
   - Announce in project README
   - Add note to first page of docs
   - Link from VISION.md or roadmap

5. **Enforce on Reviews**
   - Request changelog entries in PR reviews
   - Use this as a checklist item before merge approval

### For Contributors

1. **Understand the format**
   - Read [CHANGELOG_STANDARD.md](./CHANGELOG_STANDARD.md)
   - Review [CHANGELOG_TEMPLATE.md](./CHANGELOG_TEMPLATE.md) examples

2. **Add to every PR**
   - Include changelog proposal in PR description
   - Use the template provided in CONTRIBUTING.md
   - Keep it concise (one line per change)

3. **Be specific**
   - Include class names: `.ease-btn-primary`
   - Include file paths: `components/buttons.css`
   - Include values where relevant: `letter-spacing: -0.025em`

---

## Example PRs After Integration

### Good PR Description

```markdown
## Description
Added letter-spacing utilities to control text tracking for typography-driven designs.

## Changes
- Created 4 new utility classes for tracking control
- Added demo and documentation
- No changes to core files

---

## Changelog Entry

### Type: ✨ Added

### Proposed Entry
- `.ease-tracking-tight`, `.ease-tracking-normal`, `.ease-tracking-wide`, `.ease-tracking-widest` — Letter-spacing utilities for condensed to dramatic text spacing
- `docs/typography-guide.md` — Typography best practices guide
```

### Good Changelog Entry Review Comment

```markdown
✅ Changelog entry looks good! Minor suggestion:

\`\`\`markdown
- .ease-tracking-tight — Condensed letter spacing (-0.025em) for bold headlines
- .ease-tracking-normal — Default letter spacing (0em)
- .ease-tracking-wide — Wide letter spacing (0.05em) for subtle emphasis
- .ease-tracking-widest — Extra wide letter spacing (0.1em) for dramatic display text
- docs/typography-guide.md — Typography best practices and tracking recommendations
\`\`\`

I separated tracking values by class for better clarity. Feel free to adjust!
```

---

## File Locations

| File | Location | Purpose |
|------|----------|---------|
| Format Spec | `submissions/changelog-standard-format/CHANGELOG_STANDARD.md` | Full specification |
| Templates | `submissions/changelog-standard-format/CHANGELOG_TEMPLATE.md` | Copy-paste examples |
| Reference | `submissions/changelog-standard-format/CHANGELOG_REFORMATTED_EXAMPLE.md` | How v1.0.0 reformatted |
| Guide | `submissions/changelog-standard-format/README.md` | Implementation overview |
| Main Log | `CHANGELOG.md` (root) | Actual project changelog |

---

## Quick Checklist for Integration

```
Integration Steps:

□ This PR approved and merged
□ Update CONTRIBUTING.md with "Changelog Entries" section
□ Update .github/PULL_REQUEST_TEMPLATE.md with changelog section
□ Create new PR: Reformat CHANGELOG.md using reformatted example
□ Add link to standard in project README
□ Communicate standard to active contributors
□ Start enforcing on new PRs (request changelog entries)
□ Monitor first few PRs to ensure understanding
```

---

## Support Materials for Contributors

Create a quick reference card or checklist:

```markdown
# Changelog Quick Reference

## Format
✨ Added | 🔄 Changed | 🐛 Fixed | ⚠️ Deprecated

## Template
\`\`\`
- [Class/Feature name] — [Description with value if relevant]
\`\`\`

## Examples
- ✨ `.ease-tracking-tight` — Condensed letter spacing (-0.025em)
- 🐛 Fixed `.ease-hover-lift` shadow on Safari
- 🔄 Updated `--ease-color-primary` from #6c63ff to #7c3aed
- ⚠️ `.ease-old-class` — Use `.ease-new-class` instead (removal: v2.0.0)

## Do's ✅
- Include class/file names
- Be specific
- One line per change
- Link PRs if complex

## Don'ts ❌
- Vague descriptions
- Paragraph format
- Multiple unrelated changes per line
- Forget the context
```

---

## Measuring Success

After integration, track:

| Metric | Goal | How |
|--------|------|-----|
| % PRs with changelog entry | 100% | Check PR descriptions |
| Entry quality score | 90%+ | Review clarity and specificity |
| Integration time | < 10 min/PR | Time from PR to merged |
| Contributor confusion | 0 issues | Monitor GitHub discussions |

---

## FAQ for Contributors

**Q: Do I need a changelog entry for every PR?**  
A: Only if it's user-facing (new feature, bug fix, change). Skip for refactoring, docs, CI/CD.

**Q: What if I forget?**  
A: Maintainer will request it in review. Add and update the PR — no problem!

**Q: Can I write multiple lines?**  
A: Yes! One bullet point per change. Keep each concise.

**Q: How long should my entry be?**  
A: One line is ideal. Two lines max if details needed.

**Q: What about technical details?**  
A: Include them! `.ease-class` (name), `0.5em` (value), `components/file.css` (location).

---

## Example Announcement

Post to community channels:

```
📋 **Changelog Standard Announcement**

Starting [DATE], all PRs must include a changelog entry!

📖 This helps users and maintainers track what changed.

**What to do:**
1. Read: CONTRIBUTING.md → "Changelog Entries" section
2. Review: submissions/changelog-standard-format/CHANGELOG_TEMPLATE.md
3. Add: Changelog entry to your PR description (provided template)

**Format:** Simple! One line per change, include class names and values.

**Example:**
```
## Changelog Entry

### Type: ✨ Added

### Proposed Entry
- `.ease-new-class` — Brief description of what it does (value: 0.5em)
```

Questions? Ask in #general or check the docs!
```

---

**Status:** ✅ Ready for implementation  
**Date:** 2026-06-02  
**Next Step:** Create separate PR to apply these changes to CONTRIBUTING.md and PR template
