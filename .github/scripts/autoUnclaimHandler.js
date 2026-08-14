// will handle /unclaim
async function handleUnclaim({ github, context }) {
  const { owner, repo } = context.repo;
  const issueNumber = context.payload.issue.number;
  const commenter = context.payload.comment.user.login;
  // Fetch the latest issue state to prevent race conditions
  const { data: issue } = await github.rest.issues.get({
    owner,
    repo,
    issue_number: issueNumber,
  });

  if (issue.state === 'closed') {
    await github.rest.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: `🔒 **Oops!** This issue is closed. Commands can only be used on open issues.`,
    });
    return;
  }

  const currentAssignees = issue.assignees.map((a) => a.login.toLowerCase());

  if (!currentAssignees.includes(commenter.toLowerCase())) {
    await github.rest.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: `🤔 **Wait a second!** @${commenter}, you aren't currently assigned to this issue, so there is nothing to unclaim! 🤷‍♂️`,
    });
    return;
  }

  await github.rest.issues.removeAssignees({
    owner,
    repo,
    issue_number: issueNumber,
    assignees: [commenter],
  });

  await github.rest.issues.createComment({
    owner,
    repo,
    issue_number: issueNumber,
    body: `✅ **Unclaimed!** You have successfully been unassigned from this issue, @${commenter}. Thanks for freeing it up! 🙌\n\n> 🔓 **Status:** This issue is now open and available for others to claim. 🚀`,
  });
}

module.exports = { handleUnclaim };