/**
 * Nashiuso Terminal Portfolio
 * Author: Nashiuso
 * GitHub: https://github.com/nashiuso
 * License: MIT
 */

export function initClock(): void {
  const clockEl = document.getElementById('clock');
  setInterval(() => {
    if (clockEl) {
      clockEl.textContent = `( ${new Date().toLocaleTimeString('en-US', { hour12: false })} )`;
    }
  }, 1000);
}

export function initNetworkSim(): void {
  const netSpeedEl = document.getElementById('net-speed');
  const signalFillEl = document.getElementById('signal-fill');

  const connection = (navigator as unknown as { connection?: { downlink?: number } }).connection;
  const baseSpeed = connection?.downlink ? connection.downlink * 10 : 45.0;
  let currentSpeed  = baseSpeed;
  let targetSpeed   = baseSpeed;

  setInterval(() => {
    targetSpeed = baseSpeed + (Math.random() * 8 - 4);
    targetSpeed = Math.max(5, Math.min(targetSpeed, 95));
  }, 2000);

  setInterval(() => {
    if (Math.abs(currentSpeed - targetSpeed) > 0.1) {
      currentSpeed += (targetSpeed - currentSpeed) * 0.1;
      if (netSpeedEl) netSpeedEl.textContent = currentSpeed.toFixed(1);
      if (signalFillEl) signalFillEl.style.width = `${(currentSpeed / 100) * 100}%`;
    }
  }, 50);
}
