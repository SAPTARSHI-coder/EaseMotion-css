# Fix: Repository Manifest Validation Failure Due to Case-Sensitivity

## Description

Fixes the repository manifest validation failure caused by strict case-sensitivity string checks. GitHub repository URLs are case-insensitive, but `validate-package.mjs` expected `SAPTARSHI-coder/EaseMotion-css` while `package.json` used lowercase characters.

## Problem

GitHub treats repository URLs as case-insensitive, meaning `SAPTARSHI-coder/EaseMotion-css` and `saptarshi-coder/easemotion-css` point to the same repository. However, `validate-package.mjs` performed a strict, case-sensitive string comparison, causing valid manifests with differently-cased URLs to fail validation.

## Changes Made

- Added `.toLowerCase()` conversion to `manifest.repository.url` before evaluating `.includes()`.
- Updated the target string check to lowercase: `"saptarshi-coder/easemotion-css"`.

## Why This Works

By normalizing both the manifest URL and the expected target string to lowercase before comparison, the validation now correctly recognizes matching repository URLs regardless of casing differences — aligning the check with GitHub's own case-insensitive URL handling.

## Related Issue

Closes #40285