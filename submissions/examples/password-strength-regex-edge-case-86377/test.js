// @vitest-environment jsdom
import { describe, it, expect } from "vitest";

export function calculatePasswordStrength(password) {
  if (typeof password !== "string" || !password.length) {
    return {
      score: 0,
      tier: "Very Weak",
      percentage: 0,
      rules: {
        length: false,
        lowercase: false,
        uppercase: false,
        number: false,
        special: false,
      },
    };
  }

  const rules = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^a-zA-Z0-9]/.test(password),
  };

  const passedRulesCount = Object.values(rules).filter(Boolean).length;
  let score = passedRulesCount;

  // Bonus for extra length (>= 14 chars)
  if (password.length >= 14 && score < 5) {
    score = Math.min(5, score + 1);
  }

  const tiers = [
    "Very Weak",
    "Weak",
    "Fair",
    "Medium",
    "Strong",
    "Very Strong",
  ];
  const tier = tiers[score] || "Very Weak";
  const percentage = (score / 5) * 100;

  return {
    score,
    tier,
    percentage,
    rules,
  };
}

describe("Password Strength Regex Score Calc Edge Case Assertions", () => {
  it('should score 0 and "Very Weak" for empty or null passwords', () => {
    expect(calculatePasswordStrength("")).toEqual({
      score: 0,
      tier: "Very Weak",
      percentage: 0,
      rules: {
        length: false,
        lowercase: false,
        uppercase: false,
        number: false,
        special: false,
      },
    });
    expect(calculatePasswordStrength(null).score).toBe(0);
    expect(calculatePasswordStrength(undefined).score).toBe(0);
  });

  it("should score 1 for password matching only lowercase characters below min length", () => {
    const res = calculatePasswordStrength("pass");
    expect(res.score).toBe(1);
    expect(res.rules.lowercase).toBe(true);
    expect(res.rules.length).toBe(false);
    expect(res.tier).toBe("Weak");
  });

  it('should score maximum 5 and "Very Strong" for complex passwords', () => {
    const res = calculatePasswordStrength("P@ssw0rd2026!");
    expect(res.score).toBe(5);
    expect(res.tier).toBe("Very Strong");
    expect(res.percentage).toBe(100);
    expect(res.rules).toEqual({
      length: true,
      lowercase: true,
      uppercase: true,
      number: true,
      special: true,
    });
  });

  it("should handle non-ASCII Unicode and Emoji characters as special characters", () => {
    const res = calculatePasswordStrength("Pass1234🚀");
    expect(res.rules.special).toBe(true);
    expect(res.rules.number).toBe(true);
    expect(res.rules.uppercase).toBe(true);
    expect(res.rules.lowercase).toBe(true);
  });

  it("should process long passwords (>100 chars) instantly without regex backtracking", () => {
    const longPass = "A".repeat(120) + "1!" + "a".repeat(50);
    const start = performance.now();
    const res = calculatePasswordStrength(longPass);
    const duration = performance.now() - start;

    expect(duration).toBeLessThan(50); // Under 50ms
    expect(res.rules.length).toBe(true);
    expect(res.rules.uppercase).toBe(true);
    expect(res.rules.number).toBe(true);
    expect(res.rules.special).toBe(true);
  });

  it("should classify whitespace-only password strings correctly", () => {
    const res = calculatePasswordStrength("   ");
    expect(res.rules.special).toBe(true);
    expect(res.rules.lowercase).toBe(false);
    expect(res.rules.uppercase).toBe(false);
    expect(res.rules.number).toBe(false);
  });
});
