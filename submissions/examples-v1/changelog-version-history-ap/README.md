# Changelog & Version History Guide

Welcome to the **Changelog & Version History Guide**! This comprehensive document details how to maintain project release notes following Keep a Changelog standards and automate version updates using GitHub Actions.

---

## 📋 Table of Contents

1. [Keep a Changelog Standards](#1-keep-a-changelog-standards)
2. [Automating Updates via GitHub Actions](#2-automating-updates-via-github-actions)
3. [Rendered Changelog Webpage](#3-rendered-changelog-webpage)

---

## 1. Keep a Changelog Standards

A well-maintained changelog makes it easy for developers to see what changes were made in each version.

### Core Guidelines

- **Readability**: Write changelogs for humans, not machine logs. Avoid dump commits.
- **Grouping**: Group updates under dedicated categories:
  - `### Added` — For new features additions.
  - `### Changed` — For changes in existing functionality.
  - `### Fixed` — For bug fixes and patches.
  - `### Security` — In case of vulnerabilities fixes.

---

## 2. Automating Updates via GitHub Actions

To ensure the changelog remains up to date, you can use a GitHub Action that automatically compiles release notes from pull requests and commits when a new tag is pushed.

### Workflow Configuration (`.github/workflows/changelog.yml`)

```yaml
name: Auto Changelog Generator

on:
  release:
    types: [published]

jobs:
  update-changelog:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository files
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Build and Update Changelog File
        uses: github-actions/auto-changelog-builder@v1
        with:
          output: "CHANGELOG.md"
          template: "keep-a-changelog"

      - name: Commit and push changes
        run: |
          git config --global user.name "github-actions[bot]"
          git config --global user.email "github-actions[bot]@users.noreply.github.com"
          git add CHANGELOG.md
          git commit -m "docs: auto update changelog for ${{ github.ref_name }}"
          git push
```

---

## 3. Rendered Changelog Webpage

The companion page (`demo.html`) acts as a client-facing rendering node that parses and displays project updates:

- **Category Filters**: Allows filtering updates by categories (`Added`, `Fixed`, `Changed`).
- **Release CLI Simulator**: Demonstrates the step-by-step GitHub Action pipeline.
