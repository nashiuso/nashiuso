/**
 * Nashiuso Terminal Portfolio
 * Author: Nashiuso
 * GitHub: https://github.com/nashiuso
 * License: MIT
 */

import './styles/main.scss';
import { initClock, initNetworkSim } from './ui/clock';
import { initPreloader } from './ui/preloader';
import { renderTemplate } from './ui/template';
import { initTheme } from './ui/themes';

document.addEventListener('DOMContentLoaded', async () => {
  await initPreloader();
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) {
    console.error('[x] failed to find #app element');
    return;
  }
  renderTemplate(app);
  initNetworkSim();
  initClock();
  initTheme();
});
