import { skills } from '../data';

export async function initPreloader(): Promise<void> {
  const textEl     = document.getElementById('preloader-text');
  const preloader  = document.getElementById('preloader');
  const textToType = 'NASHI USO';
  let i            = 0;

  const typePromise = new Promise<void>((resolve) => {
    function type() {
      if (textEl && i < textToType.length) {
        textEl.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(type, 80);
      } else {
        resolve();
      }
    }
    type();
  });

  const imagePromises = skills.map(
    (skill) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = `https://skillicons.dev/icons?i=${skill.id}&theme=dark`;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      }),
  );

  const startTime = Date.now();
  await Promise.all([typePromise, document.fonts.ready, ...imagePromises]);

  const elapsedTime = Date.now() - startTime;
  const minTime     = 800;
  if (elapsedTime < minTime) {
    await new Promise((res) => setTimeout(res, minTime - elapsedTime));
  }

  preloader?.classList.add('hidden');
  console.info('[+] resources loaded successfully.');
}
