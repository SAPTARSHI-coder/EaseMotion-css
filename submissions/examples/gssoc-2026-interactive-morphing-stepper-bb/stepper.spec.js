// Unit specification test for Interactive Morphing Stepper
describe('Interactive Morphing Stepper Component', () => {
  it('should render 3 step nodes', () => {
    const steps = document.querySelectorAll('.step-node');
    expect(steps.length).toBe(3);
  });

  it('should transition to step 2 when next button is clicked', () => {
    const nextBtn1 = document.getElementById('nextBtn1');
    const panel2 = document.getElementById('panel2');
    nextBtn1.click();
    expect(panel2.classList.contains('active')).toBe(true);
  });
});
