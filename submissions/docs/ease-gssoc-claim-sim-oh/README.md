# Guide: GSSoC Issue Claim & Cooldown Simulator

This submission provides an interactive simulator for GSSoC issue **#44491**.

## Description

A documentation tool that simulates the GSSoC contribution workflow, helping contributors understand the rules before participating.

## GSSoC Contribution Rules

1. **Max 2 active issues** per contributor at a time
2. **24-hour cooldown** after unassign (inactivity)
3. **Required labels** must be selected for issue type
4. **Spam policy** - Complete checklist before opening PR

## What's Included

### Issue Claim Simulator
- Interactive claiming of up to 2 active issues
- Visual feedback when limit is reached
- Unassign functionality with cooldown trigger
- Active issues counter (X/2)

### Label Picker
- Valid label selection (documentation, component, animation, scss, react, enhancement)
- Dynamic feedback on label selection

### Pre-PR Checklist
- 6-item checklist before opening PR
- Progress indicator
- Ready-to-open PR notification when complete
- PR template generator

### Claim Comment Template
- Copy-ready issue claiming comment
- Includes checklist and label sections

### Common Mistakes
- 5 common mistakes to avoid
- Explanations for why each is problematic

## Workflow

```
Claim Issue → Work on Solution → Complete Checklist → Open PR
     ↓              ↓                   ↓
  (max 2)      (no inactivity)    (all items checked)
```

## Key Takeaways

| Rule | Penalty |
|------|---------|
| 3+ active issues | Claim rejected |
| Inactivity > 24h | Auto-unassign + cooldown |
| No labels | PR won't be accepted |
| Spam submissions | Banned from program |

## Acceptance Criteria

- ✅ Issue claim simulator with 2-active-limit
- ✅ 24-hour cooldown timer simulation
- ✅ Valid label picker
- ✅ Pre-PR spam-policy checklist
- ✅ Workflow walkthrough
- ✅ Common mistake warnings
- ✅ Copy-ready claim comment template
- ✅ Responsive and accessible design
