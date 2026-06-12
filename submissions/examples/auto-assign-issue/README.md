# Auto Assign Issue Workflow

A GitHub Actions workflow that automatically assigns an issue to a contributor when they comment `assign me`.

## Features

- Runs on `issue_comment`
- Checks assignment keyword
- Assigns the commenter
- Posts confirmation comment
- No external server required

## Usage

Copy `.github/workflows/auto-assign.yml` into your repository.
