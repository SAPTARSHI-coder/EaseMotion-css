# Action Concurrency Group Guidelines

This guide details workflow config guidelines to manage matrix scheduling issues in GitHub Actions, preventing accidental run cancellations.

---

## Technical Overview: Concurrency Groups in Matrix Runs

Configuring concurrency limits prevents simultaneous deployment runs from colliding. However, naively setting static group tags on workflow schedules triggers cancellation conflicts on matrix jobs:

```yaml
# BUG: Static key cancels all sibling matrix threads (e.g. Node 18 cancels Node 16)
concurrency:
  group: auto-merge-run
  cancel-in-progress: true
```

### The Remediation

To prevent matrix threads from cancelling one another, scope the concurrency keys dynamically utilizing the matrix parameter inputs:

```yaml
# SECURE: Uniquely scopes groups per matrix run thread, allowing parallel execution
concurrency:
  group: auto-merge-run-${{ github.run_id }}-${{ matrix.version }}
  cancel-in-progress: true
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click **Trigger Static Matrix Run** — observe how subsequent jobs cancel previous running runs, leaving only Node 20 as completed.
3. Click **Trigger Dynamic Matrix Run** — verify that all three matrix jobs run concurrently and complete successfully.
