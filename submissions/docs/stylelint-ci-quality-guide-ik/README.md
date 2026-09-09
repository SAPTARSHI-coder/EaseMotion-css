# EaseMotion CSS — Stylelint & CI Quality Guide (`stylelint-ci-quality-guide-ik`)

A comprehensive contributor guide and showcase documenting EaseMotion CSS continuous integration validation pipelines, Stylelint formatting rules, and strict `submissions/` directory scoping guidelines.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

This documentation showcase provides contributors with clear steps to pass all automated CI checks (`npm run release:check`), auto-fix Stylelint formatting errors (`npm run lint:fix`), and comply with repository bot guard requirements.

---

## 2. How is it used?

Before submitting any Pull Request to EaseMotion CSS, run the following verification steps:

```bash
# 1. Automatically fix Stylelint CSS formatting rules
npm run lint:fix

# 2. Run full release validation suite (bundle, lint, duplicates, and Vitest unit tests)
npm run release:check
```

### Directory Placement Requirement

Ensure your Pull Request strictly adds files inside one of the four approved `submissions/` subdirectories:

```text
submissions/docs/stylelint-ci-quality-guide-ik/
├── demo.html
├── style.css
└── README.md
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS uses automated GitHub Action workflows (`PR Submission Validator` and `EaseMotion CSS Guard`) to enforce code formatting, minified bundle integrity, and directory scoping. This showcase helps maintainers and contributors prevent bot-triggered closures and ensure zero-breakage releases across the library ecosystem.
