import { addRipple, animateRipples } from "./rippleManager";
import { drawDots } from "./dotGrid";

export function handleClick(e: React.MouseEvent, canvasRef: React.RefObject<HTMLCanvasElement>) {
    console.log("handleClick fired", e.clientX, e.clientY);
  const canvas = canvasRef.current;
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  addRipple(x, y);
  animateRipples(ctx, rect.width, rect.height, dpr, drawDots);
}
