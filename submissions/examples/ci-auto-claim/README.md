# Auto Issue Claim/Unclaim System

## What does this do?

Allows contributors to claim and unclaim GitHub issues using simple slash commands while enforcing fair issue assignment rules.

## How is it used?

### Claim an issue

Comment on an open issue:

```text
/claim
```

### Unclaim an issue

If you no longer wish to work on an issue, comment:

```text
/unclaim
```

## Features

### Automatic Issue Assignment

Contributors can claim eligible issues without requiring manual intervention from maintainers.

### Assignment Limits

Prevents issue hoarding by limiting the number of active issues a contributor can have assigned at one time.

### Maintainer-Issue Protection

Only issues created by project maintainers are publicly claimable. For community-created issues, only the original author may claim the issue.

### Duplicate Assignment Prevention

Prevents multiple contributors from claiming the same issue simultaneously.

### Unclaim Support

Contributors can voluntarily release an issue, making it immediately available for others to work on.

### Closed Issue Protection

Commands are ignored on closed issues to avoid accidental assignments or unassignments.

### Contributor-Friendly Feedback

Provides clear status messages for successful claims, assignment limits, invalid commands, and unclaim actions.

### Auto-Unclaim Support

Supports automatic issue release after a configurable inactivity period, helping keep issues available to active contributors.

## Why is it useful?

Open-source projects often struggle with issue hoarding, manual assignment overhead, and unclear ownership of tasks. This system automates issue management, ensures fair distribution of work, and reduces the workload on maintainers while providing a smoother contributor experience.

It is especially useful for beginner-friendly repositories, hackathons, open-source programs, and community-driven projects where many contributors may want to work on the same issues.

## Tech Stack

* GitHub Actions
* JavaScript (Node.js)

## Supported Commands

| Command    | Description                                    |
| ---------- | ---------------------------------------------- |
| `/claim`   | Assigns an eligible issue to the commenter     |
| `/unclaim` | Removes the commenter from the issue assignees |

## Preview

1. Open an eligible GitHub issue.
2. Comment `/claim`.
3. The workflow validates the request and assigns the issue automatically.
4. If needed, comment `/unclaim` to release the issue.

## Contribution Notes

* Built using GitHub Actions and JavaScript.
* Designed to be easily extended with additional commands.
* Supports configurable assignment limits and maintainer-controlled issue claiming policies.
