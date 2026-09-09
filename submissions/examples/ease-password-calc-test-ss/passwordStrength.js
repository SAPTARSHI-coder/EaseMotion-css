/**
 * Calculates the strength score of a given password based on Regex rules.
 * @param {string} password - The password string to evaluate.
 * @returns {number} Score from 0 to 5.
 */
export function calculatePasswordScore(password) {
  // Guard clause: enforce string type and prevent whitespace-only bypass
  if (typeof password !== 'string' || password.trim() === '') {
    return 0;
  }

  let score = 0;

  // 1. Length constraint (8+ characters)
  if (password.length >= 8) score += 1;
  
  // 2. Contains lowercase letter
  if (/[a-z]/.test(password)) score += 1;
  
  // 3. Contains uppercase letter
  if (/[A-Z]/.test(password)) score += 1;
  
  // 4. Contains numerical digit
  if (/\d/.test(password)) score += 1;
  
  // 5. Contains special character
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  return score;
}
