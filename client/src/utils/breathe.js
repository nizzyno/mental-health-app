export function breathe() {
  const breatheContainer = document.querySelector('.breathe-container');
  const text = document.querySelector('#text');

  const totalTime = 7500;
  const breatheTime = (totalTime / 5) * 2;
  const holdTime = totalTime / 5;

  text.innerHTML = 'Breathe In';
  breatheContainer.className = 'container grow';

  setTimeout(() => {
    text.innerHTML = 'Hold';

    setTimeout(() => {
      text.innerHTML = 'Breathe Out';
      breatheContainer.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}
