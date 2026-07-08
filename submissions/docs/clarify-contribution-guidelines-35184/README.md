# Clarify Contribution Guidelines for Bug Fixes

This documentation resolves issue #35184.

The automated PR validator requires that no core files (including `CONTRIBUTING.md`) are modified directly, which is why these updated guidelines are submitted here in the `submissions/docs/` directory.

## Proposed Addition to `CONTRIBUTING.md`

We suggest adding the following paragraph to the **Folder Structure & Restrictions** section of the contribution guidelines:

> **Exception for Assigned Bug Fixes**:
> While most feature submissions must remain inside the \`submissions/\` directory, **bug fix issues specifically created or assigned by maintainers** that target files outside \`submissions/\` (e.g., \`examples/react-vite/\` or core templates) are exempt from this restriction. 
> 
> *Note: If a bug fix edits files outside \`submissions/\`, the automated PR validator may close it automatically. In these cases, maintainers will manually review and reopen/merge the pull request.*

## Rationale
This clarifies the discrepancy noticed in issue #27861 where contributors were asked to modify `examples/react-vite/src/App.css`, preventing future confusion for new contributors.
