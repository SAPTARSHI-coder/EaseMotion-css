// will handle /claim
async function findExistingAssignments(
  github,
  owner,
  repo,
  username,
  currentIssueNumber
) {
  const { data: issues } = await github.rest.issues.listForRepo({
    owner,
    repo,
    assignee: username,
    state: "open",
    per_page: 100,
  });
  return issues.filter(
    (issue) => !issue.pull_request && issue.number !== currentIssueNumber
  );
}

// change to increase/decrease the cap
const MAX_ASSIGNED_ISSUES = 25;

async function handleClaim({ github, context }) {
  const { owner, repo } = context.repo;
  const issueNumber = context.payload.issue.number;
  const commenter = context.payload.comment.user.login;
  const bodyText = context.payload.comment.body.trim();
  const isAssign = bodyText.startsWith('/assign');
  const programName = isAssign ? 'ECSoC26' : 'GSSoC-26';

  // Fetch the latest issue state to prevent race conditions on closed issues
  const { data: issue } = await github.rest.issues.get({
    owner,
    repo,
    issue_number: issueNumber,
  });

  if (issue.state === "closed") {
    await github.rest.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: `🔒 **Oops!** This issue is closed. Commands can only be used on open issues.`,
    });
    return;
  }

  // Check if a Pull Request for this issue has already been merged
  try {
    const searchMergedPRs = await github.rest.search.issuesAndPullRequests({
      q: `repo:${owner}/${repo} type:pr is:merged "${issueNumber}"`,
    });
    if (searchMergedPRs.data.total_count > 0) {
      await github.rest.issues.createComment({
        owner,
        repo,
        issue_number: issueNumber,
        body: `🔒 **Claim Blocked!** A Pull Request resolving this issue has already been merged, so this issue is now locked for new claims. Only existing assignees can complete their active work. Please search for other open issues! 🔍`,
      });
      return;
    }
  } catch (err) {
    console.log(`Failed to check merged PRs: ${err.message}`);
  }

  const currentAssignees = issue.assignees.map((a) =>
    a.login.toLowerCase()
  );

  if (currentAssignees.includes(commenter.toLowerCase())) {
    await github.rest.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: `✅ **You're all set!** You are already assigned to this issue, @${commenter}.`,
    });
    return;
  }

  // ── 1-hour cooldown: protects the issue opener's exclusive right for the first hour ──
  const issueCreatedAt = new Date(issue.created_at);
  const elapsedMs = Date.now() - issueCreatedAt.getTime();
  const elapsedMinutes = elapsedMs / (1000 * 60);

  if (elapsedMinutes < 60 && commenter.toLowerCase() !== issue.user.login.toLowerCase()) {
    const minutesLeft = Math.ceil(60 - elapsedMinutes);
    await github.rest.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: `⏳ **Cooldown Active!** This issue was created less than 1 hour ago (${Math.floor(elapsedMinutes)} minutes ago).\n\nTo give the issue opener (@${issue.user.login}) a fair chance to make progress, there is a **1-hour cooldown** before anyone else can claim this issue. Please try again in **${minutesLeft} minute(s)** or look for other open issues! 🔍`,
    });
    return;
  }

  const existingIssues = await findExistingAssignments(
    github,
    owner,
    repo,
    commenter,
    issueNumber
  );
  if (existingIssues.length >= MAX_ASSIGNED_ISSUES) {
    const issueList = existingIssues
      .map((i) => `> 📋 [#${i.number} — ${i.title}](${i.html_url})`)
      .join("\n");
    await github.rest.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body: `⚠️ **Limit reached, @${commenter}!** You already have **${existingIssues.length}/${MAX_ASSIGNED_ISSUES}** active assigned issues.\n\nPlease complete or \`/unclaim\` your current issue before claiming a new one:\n\n${issueList}`,
    });
    return;
  }

  await github.rest.issues.addAssignees({
    owner,
    repo,
    issue_number: issueNumber,
    assignees: [commenter],
  });

  // Label the issue with the correct program label if it is missing
  if (isAssign) {
    if (!issue.labels.some((l) => l.name === 'ECSoC26')) {
      await github.rest.issues.addLabels({
        owner,
        repo,
        issue_number: issueNumber,
        labels: ['ECSoC26'],
      }).catch(() => {});
    }
  } else {
    if (!issue.labels.some((l) => l.name === 'GSSoC-26')) {
      await github.rest.issues.addLabels({
        owner,
        repo,
        issue_number: issueNumber,
        labels: ['GSSoC-26', 'gssoc:approved'],
      }).catch(() => {});
    }
  }

  // comment message
  const contributingUrl = `https://github.com/${owner}/${repo}/blob/main/CONTRIBUTING.md`;
  await github.rest.issues.createComment({
    owner,
    repo,
    issue_number: issueNumber,
    body: `🎉 **Assigned!** Welcome aboard, @${commenter} (${programName})! 🌟\n\n⏳ **Timeframe:** You have **24 hours** of exclusive time to complete the issue and make a Pull Request. Please submit a PR before claiming any other issue.\n\n> 💡 **Tip:** Be sure to check out our [CONTRIBUTING.md](${contributingUrl}) to get off to a great start.\n\nHappy coding! 🚀✨`,
  });
}

module.exports = { handleClaim };
