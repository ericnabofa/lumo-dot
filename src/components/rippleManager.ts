type Ripple = {
  x: number;
  y: number;
  startTime: number;
};

const ripples: Ripple[] = [];
const duration = 600;

export function addRipple(x: number, y: number) {
  ripples.push({ x, y, startTime: performance.now() });
}

export function animateRipples(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  dpr: number,
  drawDots: (
    ctx: CanvasRenderingContext2D,
    rippleRadius: number,
    rippleX: number,
    rippleY: number
  ) => void,
  onDone?: () => void // 👈 optional callback when animation ends
) {
  const startTime = performance.now();

  function animate() {
    const now = performance.now();
    const elapsedTotal = now - startTime;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    // Clear canvas
    const bg = getComputedStyle(document.documentElement).getPropertyValue("--lumo-primary").trim();
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    const activeRipples = ripples.filter(r => now - r.startTime < duration);

    if (activeRipples.length > 0) {
      for (const ripple of activeRipples) {
        const elapsed = now - ripple.startTime;
        const radius = (elapsed / duration) * Math.max(width, height);
        drawDots(ctx, radius, ripple.x, ripple.y);
      }
      requestAnimationFrame(animate);
    } else {
      // 👇 After animation ends, just draw static dots
      drawDots(ctx, 0, -9999, -9999);
      if (onDone) onDone();
    }
  }

  requestAnimationFrame(animate);
}
