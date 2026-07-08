# 💅 SCSS Submissions

This directory is for **SCSS mixin, partial, and token** contributions to EaseMotion CSS.

## How to Submit

1. **Claim an issue** tagged `scss` + `GSSoC-26` on [GitHub Issues](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues?q=is:open+label:scss)
2. **Fork** the repository and create a new branch
3. **Create a folder** here: `submissions/scss/your-mixin-name/`
4. **Add your files** (see required structure below)
5. **Open a PR** — the SCSS validator bot will check your submission automatically

## Required File Structure

```
submissions/scss/your-mixin-name/
├── _your-mixin.scss    ← Your SCSS partial, mixin, or variable file (required)
└── README.md           ← Description, parameters, @include usage example (required)
```

## Rules

| Rule | Details |
|------|---------|
| ✅ Only add new files | No editing or deleting existing files |
| ✅ SCSS files only | Must be `.scss` format |
| ✅ Reference EaseMotion | Must use/extend EaseMotion CSS keyframes or variables |
| ✅ Original work | No copy-pasted boilerplate |
| ✅ One mixin/partial per PR | Keep PRs focused |
| ❌ No plain CSS | Wrong track — use `submissions/examples/` instead |
| ❌ No compiled output | Only source `.scss` files |

## Questions?

- 📖 [CONTRIBUTING.md](../../CONTRIBUTING.md)
- 💬 [Discord](https://discord.gg/hWSdGrccBU)
