import { useEffect, useRef } from 'react';

export function MatrixRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const chars = '01';
        const fontSize = 10;
        const columns = Math.floor(canvas.width / fontSize);
        const drops: number[] = Array(columns).fill(1);

        context.font = `${fontSize}px "IBM Plex Mono"`;

        const draw = () => {
            context.fillStyle = 'rgba(255, 255, 255, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = '#18181B';
            drops.forEach((y, i) => {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const x = i * fontSize;
                context.fillText(char, x, y * fontSize);

                if (y * fontSize > canvas.height && Math.random() > 0.99) {
                    drops[i] = 0;
                }
                drops[i]++;
            });
        };

        const interval = setInterval(draw, 50);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

return (
    <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
    />
);

}
