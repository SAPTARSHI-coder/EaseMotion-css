// Unit specification test for Cyberpunk Code Terminal
describe('Cyberpunk Code Terminal Component', () => {
  it('should render code window with syntax highlighting', () => {
    const codeBody = document.querySelector('.terminal-code-body');
    expect(codeBody).not.toBeNull();
    const keywords = document.querySelectorAll('.syn-keyword');
    expect(keywords.length).toBeGreaterThan(0);
  });

  it('should toggle copy button active state on click', () => {
    const copyBtn = document.getElementById('copyBtn');
    const copyText = document.getElementById('copyText');
    copyBtn.click();
    expect(copyText.textContent).toBe('Copied!');
    expect(copyBtn.classList.contains('copied')).toBe(true);
  });
});
