# Tooling: GitHub Discussions Setup Guide (`github-discussions-guide-20509`)

This directory contains the documentation and a stylized community landing page template for setting up GitHub Discussions in the EaseMotion repository.

Since GitHub Discussions are a repository-level administrative setting that must be enabled via the GitHub UI by a maintainer, this PR fulfills the issue requirements by providing:
1. The **Setup Guide** for the maintainer (below).
2. The **Pinned Welcome Post** template (below).
3. A **stylized HTML template (`demo.html`)** demonstrating what a community landing page or discussions feature guide could look like using standard EaseMotion classes.

---

## 🛠 Maintainer Setup Guide

To fully resolve Issue #20509, the repository owner/admin must perform the following steps in the GitHub UI:

### 1. Enable Discussions
1. Go to your repository's **Settings** tab.
2. Under the **General** section, scroll down to **Features**.
3. Check the box next to **Discussions** and click **Set up discussions**.

### 2. Configure Categories
By default, GitHub creates a few categories. Edit them via the `✎ Edit categories` button on the Discussions tab to match these exact requested categories:
* **Q&A** (Format: Question / Answer) - *For asking how to use classes or troubleshooting.*
* **Ideas** (Format: Open ended) - *For proposing new utility classes or features.*
* **Show & Tell** (Format: Open ended) - *For sharing projects built with EaseMotion.*
* **General** (Format: Open ended) - *For all other community chatter.*

### 3. Pin the Welcome Discussion
Create a new discussion in the **General** category, paste the Markdown provided below, post it, and then select **Pin discussion** from the right-hand sidebar.

---

## 📌 Welcome Post Markdown Template

Copy and paste the following markdown to create the pinned Welcome/Getting-Started discussion:

```markdown
# 👋 Welcome to the EaseMotion Community!

We are excited to launch GitHub Discussions for EaseMotion-css! As our framework grows, we want to ensure our **Issues tab** remains dedicated to concrete bug reports, feature requests, and code submissions.

**Discussions** is the new home for everything else.

### 🗺 Where should I post?

* ❓ **[Q&A](link-to-qa-category):** Ask questions about how to use specific `ease-*` classes, troubleshoot your HTML structure, or get help with overrides.
* 💡 **[Ideas](link-to-ideas-category):** Have an idea for a cool new animation or hover effect? Propose it here before opening a formal issue/PR.
* 🚀 **[Show & Tell](link-to-show-tell-category):** Built something awesome? Share your landing pages, components, and portfolios using EaseMotion here!
* 💬 **[General](link-to-general-category):** Anything else that doesn't fit above.

### 📜 Community Guidelines

1. **Search before asking:** Someone might have already solved your problem!
2. **Provide code:** If you are asking a question, please include a CodePen or minimal reproducible HTML/CSS snippet.
3. **Mark answers:** If your question gets solved in the Q&A category, mark the helpful reply as the "Answer" to help future visitors.
4. **Be kind:** We are an inclusive open-source community. Keep feedback constructive and welcoming.

We can't wait to see what you build!
```

---

## 🎨 About the Demo HTML

The included `demo.html` and `style.css` in this folder serve as an interactive, stylized visualization of the Community Guidelines. It utilizes EaseMotion classes to present the information cleanly:

* `.ease-slide-up-stagger` and `.ease-fade-in-up` for entry animations.
* `.ease-float` applied to mock discussion cards to give the hero section depth.
* `.ease-pulse` used on a simulated "Live" indicator.
* Native EaseMotion hover utilities utilized on category cards to trigger color transitions.

## 🔗 Related Issue
Closes Issue #20509
