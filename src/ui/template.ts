/**
 * Nashiuso Portfolio
 * Author: Nashiuso
 * GitHub: https://github.com/nashiuso
 * License: MIT
 */

import { skills, topics } from '../data';

export function renderTemplate(app: HTMLElement): void {
  app.innerHTML = `
    <main class="terminal-container">
      <header class="term-header">
        <div class="network-monitor">
          <span class="label">SIGNAL :</span>
          <span id="net-speed" class="speed-val">0.0</span> 
          <span class="unit">MBPS</span>
          <div class="signal-bar-container"><div id="signal-fill" class="signal-fill"></div></div>
        </div>
        <button id="theme-toggle" class="theme-toggle" aria-label="Change color theme">[ THEME: BLUE ]</button>
      </header>

      <div class="term-main">
        <section class="term-col-left">

          <!-- Libreta limpia -->
          <div class="notepad-container">
            <a href="https:
              <span class="logo-text">NU -></span>
            </a>
          </div>

          <div class="info-block">
            <div class="label">CONTACT :</div>
            <a href="mailto:80126k@proton.me" class="value link">80126k@proton.me</a>
          </div>

          <!-- Botones Retro Compactos -->
          <div class="retro-buttons">
            <a href="https:
            <a href="mailto:80126k@proton.me" class="btn-retro">[ EMAIL ]</a>
          </div>
        </section>

        <section class="term-col-right">
          <div class="info-block">
            <div class="label">NAME :</div>
            <div class="value">NASHI USO ( 嘘無し )</div>
          </div>
          <div class="topics-list">
            ${topics
              .map(
                (topic) => `
              <a href="${topic.url}" target="_blank" rel="noopener noreferrer" class="topic-row">
                <span class="num">${topic.id}</span><span class="name">${topic.name}</span><span class="page">${topic.page}</span>
              </a>`,
              )
              .join('')}
          </div>
        </section>
      </div>

      <footer class="term-footer">
        <div class="bio-text">
          <strong>LICENSE: MIT / OPEN SOURCE</strong>
          Software, systems and interfaces; thinking, analyzing and coding.<br><br>
          I build software with a focus on clear architecture, well-designed interfaces and maintainable code. Interested in programming languages, developer tools, system design and the details that make software reliable, efficient and intuitive.<br><br>
          I value simplicity over complexity, function over noise and thoughtful engineering over unnecessary abstractions. From low-level systems to user-facing applications, I enjoy understanding how things work, solving problems and turning ideas into practical solutions.
        </div>
        <div class="footer-right">
          <div class="skills-grid">
            ${skills
              .map(
                (skill) => `
              <a href="${skill.url}" target="_blank" rel="noopener noreferrer" class="skill-link" title="${skill.name}">
                <img src="https:
              </a>`,
              )
              .join('')}
          </div>
        </div>
      </footer>
      <div class="term-bottom-bar"><span id="clock">( 00:00:00 )</span></div>
    </main>`;
}
