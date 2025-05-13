type Dot = {
  x: number;
  y: number;
  baseRadius: number;
};

export let dots: Dot[] = [];

export function setupGrid(ctx: CanvasRenderingContext2D, width: number, height: number) {
  dots = [];
  const spacing = 40;
  const radius = 2;

  // Fill background with primary color
  const bg = getComputedStyle(document.documentElement).getPropertyValue("--lumo-primary").trim();
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  // Get exclusion zones from DOM elements
  const excludeElements = document.querySelectorAll<HTMLElement>('.exclude-dots');
  const exclusionRects = Array.from(excludeElements).map(el => {
    const rect = el.getBoundingClientRect();
    const padding = 40; // Adjust padding for exclusion zones
    return {
      left: rect.left - padding,
      top: rect.top - padding,
      right: rect.right + padding,
      bottom: rect.bottom + padding
    };
  });

  for (let y = spacing / 2; y < height; y += spacing) {
    for (let x = spacing / 2; x < width; x += spacing) {
      // Skip dots inside exclusion zones
      const isExcluded = exclusionRects.some(rect =>
        x >= rect.left && x <= rect.right &&
        y >= rect.top && y <= rect.bottom
      );
      
      if (!isExcluded) {
        dots.push({ x, y, baseRadius: radius });
      }
    }
  }

  drawDots(ctx); // Draw the grid of dots
}




export function drawDots(
  ctx: CanvasRenderingContext2D,
  rippleRadius = 0,
  rippleX = 0,
  rippleY = 0
) {
  ctx.fillStyle = "#fff"; // You can make this dynamic if needed

  for (const dot of dots) {
    const dx = dot.x - rippleX;
    const dy = dot.y - rippleY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    let r = dot.baseRadius;

    if (rippleRadius > 0 && distance < rippleRadius) {
      const t = 1 - distance / rippleRadius;
      r += 3 * t * t; // Ripple growth easing
    }

    ctx.beginPath();
    ctx.arc(dot.x, dot.y, r, 0, 2 * Math.PI);
    ctx.fill();
  }
}

