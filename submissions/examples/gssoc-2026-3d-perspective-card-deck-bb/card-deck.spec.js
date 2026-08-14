// Unit specification test for 3D Perspective Card Deck
describe('3D Perspective Card Deck Component', () => {
  it('should render 3 deck cards in stack', () => {
    const cards = document.querySelectorAll('.deck-card');
    expect(cards.length).toBe(3);
  });

  it('should cycle top card on button click', () => {
    const cycleBtn = document.getElementById('cycleBtn');
    const cards = document.querySelectorAll('.deck-card');
    cycleBtn.click();
    expect(cards[0].classList.contains('card-bot')).toBe(true);
  });
});
