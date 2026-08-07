# Release Workflow

This workflow automatically publishes the EaseMotion CSS package to npm whenever a version tag is pushed.

## Required Repository Secret

Before using this workflow, configure the following GitHub Actions secret.

### NODE_AUTH_TOKEN

A valid npm access token with publish permission.

### Add the Secret

1. Open your GitHub repository.
2. Go to **Settings**.
3. Open **Secrets and variables → Actions**.
4. Click **New repository secret**.
5. Create:

Name:

```
NODE_AUTH_TOKEN
```

Value:

```
Your npm access token
```

The workflow uses this secret during:

```yaml
env:
  NODE_AUTH_TOKEN: ${{ secrets.NODE_AUTH_TOKEN }}
```