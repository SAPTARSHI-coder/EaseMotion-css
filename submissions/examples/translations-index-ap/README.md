# Multi-Language Translations Index Guide

Welcome to the **Multi-Language Translations Index Guide**! This comprehensive document details how to access, configure, and contribute localized README translations to the EaseMotion CSS open-source repository.

---

## 📋 Table of Contents
1. [Active Translations Directory](#1-active-translations-directory)
2. [Contribution Steps for Localization](#2-contribution-steps-for-localization)
3. [Pull Request Markdown Template](#3-pull-request-markdown-template)

---

## 1. Active Translations Directory

EaseMotion prioritizes translations for its global developer base. The following table tracks the localization status of our core guides:

| Language Name | Locale Code | Priority Level | Translation Status | Linked File Directory |
| :--- | :---: | :---: | :---: | :--- |
| **Hindi (हिन्दी)** | `hi` | P1 (High) | 🟡 In Progress | [Hindi README](../../README.hi.md) |
| **Portuguese (Português)** | `pt` | P1 (High) | 🟡 In Progress | [Portuguese README](../../README.pt.md) |
| **Spanish (Español)** | `es` | P2 (Medium) | 🟡 In Progress | [Spanish README](../../README.es.md) |
| **Chinese (中文)** | `zh` | P2 (Medium) | 🟡 In Progress | [Chinese README](../../README.zh.md) |
| **Bengali (বাংলা)** | `bn` | P3 (Normal) | 🟢 Completed | [Bengali README](../../README.bn.md) |

---

## 2. Contribution Steps for Localization

Translating technical documentation requires maintaining code structures:

1. **Setup Folder**: Create a new folder at `/locales/<language-code>/` using ISO 639-1 language codes.
2. **Copy the Source**: Copy the root English `README.md` into the new folder.
3. **Verify Translation Rules**:
   * **Translate**: Introductions, headings, and descriptions.
   * **Do NOT Translate**: CSS class names, HTML element tags, variables, or folder paths. Keep code snippets exactly in English to ensure compatibility.

---

## 3. Pull Request Markdown Template

When opening a pull request to submit a translation, copy and paste this markdown template:

```markdown
### PR Category: Translation / Localization

**Language**: [Language Name] ([language-code])
**Contributor**: @[YourUsername]
**Branch**: translation-[language-code]

### Description
This pull request adds the localized translations index guide for [Language Name] under the path `/locales/[language-code]/README.md` to expand the GSSoC multi-language indexing core.

### Checklist
- [ ] Created target directory `/locales/[language-code]/`
- [ ] Copied and fully translated headings, specifications, lists, and setups
- [ ] Code snippets verified and kept in English
- [ ] Linked the translation path inside TRANSLATIONS.md index hub
```
