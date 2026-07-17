# Webhook Payload Stale State Guidelines

This guide details code integrity guidelines for managing webhook race conditions, demonstrating how to prevent stale state validations.

---

## Technical Overview: The Stale Context Bug

Webhook event triggers (like GitHub Action triggers) supply a snapshot JSON payload detailing state configurations at the moment of trigger firing:
```javascript
// BUG: Uses payload parameters snapshot which might be stale by execution time
const assignees = context.payload.issue.assignees;
```

If another workflow or admin updates assignment parameters in the seconds between the webhook firing and the script executing, the payload snapshot becomes stale, creating race conditions.

---

## Best Practices for Webhook Query Checks

1. **Explicit API Refetches**:
   Instead of checking payload snapshots directly, query the database or REST API to fetch the most recent status:
   ```javascript
   const freshIssue = await octokit.rest.issues.get({
     owner: context.repo.owner,
     repo: context.repo.repo,
     issue_number: context.issue.number
   });
   const assignees = freshIssue.data.assignees;
   ```
2. **Conditional Assertions**:
   Include state validation gates prior to writing modifications to the database.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click **Check Stale Webhook Payload** — observe the warning indicating stale assignments checks occurred.
3. Click **Query Fresh API Status** — verify the simulator fetches the latest database status, showing that the unassignment was captured correctly.
