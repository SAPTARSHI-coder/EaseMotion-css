// Unit specification test for Fluid Audio Equalizer
describe('Fluid Audio Equalizer Component', () => {
  it('should render frequency bars', () => {
    const bars = document.querySelectorAll('.bar');
    expect(bars.length).toBe(8);
  });

  it('should pause animation when play button is clicked', () => {
    const playBtn = document.getElementById('playBtn');
    const eqSpectrum = document.getElementById('eqSpectrum');
    playBtn.click();
    expect(eqSpectrum.classList.contains('paused')).toBe(true);
  });
});
