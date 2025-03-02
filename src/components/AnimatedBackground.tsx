import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const logo = new Image();
    logo.src = '/src/assets/logo.svg';

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const logoSize = 50;
    const logos: { x: number; y: number; speedX: number; speedY: number; opacity: number; size: number }[] = [];

    // Create multiple logo instances
    for (let i = 0; i < 15; i++) {
      logos.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.2 + 0.05,
        size: Math.random() * 30 + 20
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      logos.forEach(item => {
        ctx.globalAlpha = item.opacity;
        ctx.drawImage(logo, item.x, item.y, item.size, item.size);

        // Update position
        item.x += item.speedX;
        item.y += item.speedY;

        // Bounce off walls
        if (item.x <= 0 || item.x >= canvas.width - logoSize) {
          item.speedX *= -1;
        }
        if (item.y <= 0 || item.y >= canvas.height - logoSize) {
          item.speedY *= -1;
        }
      });

      requestAnimationFrame(animate);
    };

    logo.onload = animate;

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
    />
  );
};

export default AnimatedBackground;