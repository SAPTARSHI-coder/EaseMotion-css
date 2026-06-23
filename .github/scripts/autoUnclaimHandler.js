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
      body: 🔒 **Oops!** This issue is closed. Commands can only be used on open issues.,
    });
    return;
  }

  const currentAssignees = issue.assignees.map((a) => a.login.toLowerCase());

  if (!currentAssignees.includes(commenter.toLowerCase())) {
    await github.rest.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: 🤔 **Wait a second!** @, you aren't currently assigned to this issue, so there is nothing to unclaim! 🤷‍♂️,
    });
    return;
  }

  try {
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
      body: ✅ **Unclaimed!** You have successfully been unassigned from this issue, @. Thanks for freeing it up! 🙌\n\n> 🔓 **Status:** This issue is now open and available for others to claim. 🚀,
    });
  } catch (err) {
    await github.rest.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: ❌ **Error:** Failed to unassign @. Please try again or contact a maintainer. Error: ,
    });
    console.error('Unclaim error:', err.message);
  }
}

module.exports = { handleUnclaim };
