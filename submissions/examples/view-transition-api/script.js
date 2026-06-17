const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const btn = document.getElementById('swapBtn');

btn.addEventListener('click', async () => {
  const swap = document.startViewTransition(() => {
    const parent = box1.parentNode;
    const next1 = box2.nextSibling;
    parent.insertBefore(box2, box1);
    parent.insertBefore(box1, next1);
  });
  await swap.finished;
});
