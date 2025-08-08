import React, { useEffect, useRef } from "react";

const circles = [
  { x: 100, y: 120, r: 40, color: "#5896c7", dx: 2 },
  { x: 300, y: 80, r: 30, color: "#deecaa", dx: 1.5 },
  { x: 600, y: 180, r: 50, color: "#0473cb", dx: 2.2 },
];

const HomeCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 320;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Gradient background
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, "#0473cb");
      grad.addColorStop(1, "#deecaa");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Animated circles
      circles.forEach((c) => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = 0.8;
        ctx.fill();
        ctx.globalAlpha = 1;
        c.x += c.dx;
        if (c.x > canvas.width - c.r || c.x < c.r) c.dx = -c.dx;
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return <canvas ref={canvasRef} className="w-full block rounded-b-3xl shadow-lg" style={{ height: 320 }} />;
};

export default HomeCanvas;
