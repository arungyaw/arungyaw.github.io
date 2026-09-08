const links = [...document.querySelectorAll('a')];
const score = document.querySelector('#score');
let points = 450;

document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    points = Math.min(points + 10, 999999);
    score.textContent = String(points).padStart(6, '0');
  }, { once: true });
});

document.addEventListener('keydown', (event) => {
  if (!['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) return;
  const activeIndex = links.indexOf(document.activeElement);
  if (event.key === 'Enter' && activeIndex >= 0) return;
  event.preventDefault();
  const direction = event.key === 'ArrowUp' ? -1 : 1;
  const nextIndex = activeIndex < 0 ? 0 : (activeIndex + direction + links.length) % links.length;
  links[nextIndex].focus();
});
