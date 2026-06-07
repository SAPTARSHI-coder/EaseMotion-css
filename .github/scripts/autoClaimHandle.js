// will handle /claim
async function findExistingAssignments(github, owner, repo, username, currentIssueNumber) {
  const { data: issues } = await github.rest.issues.listForRepo({
    owner, repo, assignee: username, state: 'open', per_page: 100,
  });
  return issues.filter((issue) => !issue.pull_request && issue.number !== currentIssueNumber);
}

// change to increase/decrease the cap
const MAX_ASSIGNED_ISSUES = 1;

async function handleClaim({ github, context }) {
  const { owner, repo } = context.repo;
  const issueNumber = context.payload.issue.number;
  const issueState = context.payload.issue.state;
  const commenter = context.payload.comment.user.login;

  if (issueState === 'closed') {
    await github.rest.issues.createComment({
      owner, repo, issue_number: issueNumber,
      body: `🔒 **Oops!** This issue is closed. Commands can only be used on open issues.`,
    });
    return;
  }


  const currentAssignees = context.payload.issue.assignees.map((a) => a.login.toLowerCase());
  const issueLabels = context.payload.issue.labels.map((l) => l.name.toLowerCase());
  const issueTitle = (context.payload.issue.title || '').toLowerCase();
  const issueBody = (context.payload.issue.body || '').toLowerCase();

  const isSubmissionIssue = issueLabels.some(label => 
    label.includes('submission') || 
    label.includes('gssoc')
  ) || issueTitle.includes('submission') || issueBody.includes('submission');

  if (currentAssignees.includes(commenter.toLowerCase())) {
    await github.rest.issues.createComment({
      owner, repo, issue_number: issueNumber,
      body: `✅ **You're all set!** You are already assigned to this issue, @${commenter}.`,
    });
    return;
  }

  if (currentAssignees.length > 0 && !isSubmissionIssue) {
    const assigneeList = currentAssignees.map((a) => `@${a}`).join(', ');
    await github.rest.issues.createComment({
      owner, repo, issue_number: issueNumber,
      body: `🤝 **Already taken!** This issue is currently assigned to ${assigneeList}. Please look for another open issue to contribute to! 🔍`,
    });
    return;
  }

  const existingIssues = await findExistingAssignments(github, owner, repo, commenter, issueNumber);
  if (existingIssues.length >= MAX_ASSIGNED_ISSUES) {
    const issueList = existingIssues.map((i) => `> 📋 [#${i.number} — ${i.title}](${i.html_url})`).join('\n');
    await github.rest.issues.createComment({
      owner, repo, issue_number: issueNumber,
      body: `⚠️ **Limit reached, @${commenter}!** You already have **${existingIssues.length}/${MAX_ASSIGNED_ISSUES}** active assigned issues.\n\nPlease complete or \`/unclaim\` your current issue before claiming a new one:\n\n${issueList}`,
    });
    return;
  }

  await github.rest.issues.addAssignees({
    owner, repo, issue_number: issueNumber, assignees: [commenter],
  });

// comment message
  const contributingUrl =`https://github.com/${owner}/${repo}/blob/main/CONTRIBUTING.md`;
  await github.rest.issues.createComment({
    owner, repo, issue_number: issueNumber,
    body: `🎉 **Assigned!** Welcome aboard, @${commenter}! 🌟\n\n⏳ **Timeframe:** You have **5 days** to submit a Pull Request before it becomes open for others to claim.\n\n> 💡 **Tip:** Be sure to check out our [CONTRIBUTING.md](${contributingUrl}) to get off to a great start.\n\nHappy coding! 🚀✨`,
  });
}

module.exports = { handleClaim };