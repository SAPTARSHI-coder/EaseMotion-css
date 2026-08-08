# GitHub Pages Deployment Workflow

1. **What does this do?** Adds a GitHub Actions workflow that automatically deploys the `docs/` directory to GitHub Pages on every push to `main`, keeping the live demo in sync with the codebase.

2. **How is it used?** Place `deploy.yml` inside `.github/workflows/` in the repository. The maintainer must also enable GitHub Pages in repo settings with "GitHub Actions" as the source.

3. **Why is it useful?** Without this workflow, the live demo at `saptarshi-coder.github.io/EaseMotion-css/demo.html` stays stale after merges. Contributors and users cannot verify fixes on the demo. This workflow ensures every merge triggers a redeployment.

## Setup Requirements

After merging the workflow file, the maintainer must:

1. Go to **Settings > Pages** in the GitHub repo
2. Under **Build and deployment > Source**, select **GitHub Actions**
3. The next push to `main` will trigger the first deployment

## What the workflow does

- **Trigger**: Runs on every push to `main` and supports manual `workflow_dispatch`
- **Build job**: Checks out the repo, configures Pages, builds the Jekyll site from `docs/`, and uploads the artifact
- **Deploy job**: Deploys the built artifact to GitHub Pages
- **Concurrency**: Uses a concurrency group to prevent overlapping deployments

Fixes #22021
