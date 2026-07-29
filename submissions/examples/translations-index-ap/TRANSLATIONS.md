# EaseMotion CSS Translations Hub

Welcome to the **Translations Hub**! Since EaseMotion CSS is used by global developers and open-source contributors, providing multilingual documentation increases accessibility.

This hub index tracks official community-contributed README translations.

---

## 📋 Active Translations Directory

| Language Name | Locale Code | Priority Level | Translation Status | Linked File Directory |
| :--- | :---: | :---: | :---: | :--- |
| **Hindi (हिन्दी)** | `hi` | P1 (High) | 🟡 In Progress | [Hindi README](../../README.hi.md) |
| **Portuguese (Português)** | `pt` | P1 (High) | 🟡 In Progress | [Portuguese README](../../README.pt.md) |
| **Spanish (Español)** | `es` | P2 (Medium) | 🟡 In Progress | [Spanish README](../../README.es.md) |
| **Chinese (中文)** | `zh` | P2 (Medium) | 🟡 In Progress | [Chinese README](../../README.zh.md) |
| **Bengali (বাংলা)** | `bn` | P3 (Normal) | 🟢 Completed | [Bengali README](../../README.bn.md) |

---

## 🛠️ Contribution Steps for New Languages

We welcome new translations! Follow these steps to submit a translation:

1. **Create the Locale Folder**: Create a new folder at `/locales/<language-code>/` (using lowercase ISO 639-1 codes).
2. **Copy the Source**: Copy the root English `README.md` into your new folder.
3. **Translate Content**:
   * **Translate**: Descriptions, headings, and guide instructions.
   * **Do NOT Translate**: CSS class names, HTML elements, code snippets, variables, or folder paths. These must remain in English to function correctly.
4. **Submit PR**: Open a pull request using the translation PR template below.

---

## 📄 Pull Request Markdown Template

Use this template when opening a translation PR:

```markdown
### PR Category: Translation / Localization

**Language**: [Language Name] ([language-code])
**Contributor**: @[YourUsername]
**Branch**: translation-[language-code]

### Description
This pull request adds the localized translations index guide for [Language Name] under the path `/locales/[language-code]/README.md` to expand the multi-language indexing core.

### Checklist
- [ ] Created target directory `/locales/[language-code]/`
- [ ] Copied and fully translated headings, specifications, lists, and setups
- [ ] Code snippets verified and kept in English
- [ ] Linked the translation path inside TRANSLATIONS.md index hub
```
