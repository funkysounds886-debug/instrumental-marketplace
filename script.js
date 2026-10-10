document.addEventListener('DOMContentLoaded', () => {
  const chips = document.querySelectorAll('.chip');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((item) => item.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  const playButton = document.querySelector('.mini-play');
  if (playButton) {
    playButton.addEventListener('click', () => {
      playButton.textContent = playButton.textContent === '▶' ? '❚❚' : '▶';
    });
  }
});
