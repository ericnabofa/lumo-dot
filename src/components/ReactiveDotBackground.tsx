"use client";

import { useEffect } from "react";
import { addRipple, animateRipples } from "./rippleManager";

export default function ReactiveDotBackground() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.id = "dot-bg-canvas";
    Object.assign(canvas.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      zIndex: "0",
      pointerEvents: "none",
      backgroundColor: "var(--lumo-primary)",
    });

    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;

    const drawDots = (
      ctx: CanvasRenderingContext2D,
      rippleRadius: number,
      rippleX: number,
      rippleY: number
    ) => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      const gap = 40;
      const dotSize = 10;

      for (let x = 0; x < canvas.width / dpr; x += gap) {
        for (let y = 0; y < canvas.height / dpr; y += gap) {
          const dx = x - rippleX;
          const dy = y - rippleY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const inRipple = rippleRadius > 0 && distance < rippleRadius;

          ctx.beginPath();
          ctx.arc(x, y, dotSize / 5, 0, 2 * Math.PI);
          // Change dot color to yellow during ripple
          ctx.fillStyle = inRipple ? "#FFF04D" : "#FFFFFF";  // Yellow inside ripple, white outside
          ctx.fill();
        }
      }
    };

   const resizeCanvas = () => {
  // Adjust canvas width and height based on the window size
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;

  // Apply width and height to style as well for proper scaling
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;

  // Draw the dots grid with updated canvas size
  drawDots(ctx, 0, -9999, -9999); // Redraw static white grid on resize
};


    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleClick = (e: MouseEvent) => {
      addRipple(e.clientX, e.clientY);
      animateRipples(
        ctx,
        window.innerWidth,
        window.innerHeight,
        dpr,
        drawDots
      );
    };
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("click", handleClick);
      canvas.remove();
    };
  }, []);

  return null;
}

