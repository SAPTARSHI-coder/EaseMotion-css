# PasswordMeter — strength meter with actionable feedback

> Issue: [#63815](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63815)

A password strength meter that says what is missing, not just how bad it is.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | `''` | The password. |
| `minLength` | `number` | `12` | Length requirement. |
| `showChecklist` | `boolean` | `true` | Render the per-criterion checklist. |
| `onEvaluate` | `(result) => void` | — | Receives `{ score, checks, unmet, common }`. |
| `className` | `string` | `''` | Merged onto the root. |

## Usage

```jsx
import PasswordMeter from './PasswordMeter';
import './style.css';

<input type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
<PasswordMeter value={pw} minLength={12} onEvaluate={(r) => setValid(r.score >= 3)} />
```

## Why it fits EaseMotion

**A bar and the word "Weak" tells the user they have a problem and nothing about how to fix it** — so they add an exclamation mark and try again. Listing the specific unmet criteria is the difference between a meter that helps and one that just judges.

**Announcement is threshold-based.** A meter wired to a live region that updates on every character makes the field unusable with a screen reader — the user cannot hear their own typing. Announcements fire only when the score band changes, and they carry the unmet criteria so the announcement is as actionable as the visual.

**Length dominates the score, deliberately.** Character-class rules are weak predictors of real strength — they push people toward `P@ssw0rd!`, which satisfies every class check and is trivially guessable. Length is the single strongest factor, and NIST 800-63B makes the same recommendation. The class checks are kept because most registration forms still require them, but they are weighted below length.

That is also why a recognised common pattern **caps the score at zero** regardless of composition. Without that, `Password123!` scores full marks.

Two presentation details: the track is **segmented rather than continuous**, because a smooth fill implies a precision the scoring does not have and invites the user to chase the last few percent of what is really five buckets. And each checklist item carries a glyph (`✓` / `○`) as well as a colour, so met and unmet states survive without colour vision.
