import React, { useEffect, useRef, useState } from "react";

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const createNodes = (count) =>
  Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI * 2 * i) / count;
    const radius = 120 + ((i * 37) % 180);

    return {
      cloudX: (Math.random() - 0.5) * 1.7,
      cloudY: (Math.random() - 0.5) * 1.3,
      ringX: Math.cos(angle) * radius,
      ringY: Math.sin(angle) * radius * 0.6,
      rackX: ((i % 12) - 5.5) * 52,
      rackY: (Math.floor(i / 12) - 3) * 28,
      size: 2 + (i % 4)
    };
  });

const ScrollStory = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return undefined;

    const context = canvas.getContext("2d", { alpha: false });
    const nodes = createNodes(108);

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawBackdrop = (width, height, value) => {
      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#04070d");
      gradient.addColorStop(0.6, "#0f172a");
      gradient.addColorStop(1, "#111827");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.globalAlpha = 0.18;
      context.strokeStyle = "#38bdf8";
      context.lineWidth = 1;
      const spacing = 44;
      const offset = (value * 80) % spacing;

      for (let x = -spacing + offset; x < width + spacing; x += spacing) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x + 80, height);
        context.stroke();
      }

      context.globalAlpha = 1;
    };

    const drawNodes = (width, height, value) => {
      const centerX = width / 2;
      const centerY = height / 2;

      nodes.forEach((node) => {
        const stageOne = clamp(value / 0.45, 0, 1);
        const stageTwo = clamp((value - 0.45) / 0.35, 0, 1);
        const stageThree = clamp((value - 0.8) / 0.2, 0, 1);

        const xOne = centerX + node.cloudX * width * 0.42;
        const yOne = centerY + node.cloudY * height * 0.38;
        const xTwo = centerX + node.ringX;
        const yTwo = centerY + node.ringY;
        const xThree = centerX + node.rackX;
        const yThree = centerY + node.rackY;

        const xMid = xOne + (xTwo - xOne) * stageOne;
        const yMid = yOne + (yTwo - yOne) * stageOne;
        const finalX = xMid + (xThree - xMid) * stageTwo;
        const finalY = yMid + (yThree - yMid) * stageTwo;

        const glow = 0.3 + stageOne * 0.4 + stageTwo * 0.2;
        context.globalAlpha = glow;
        context.fillStyle = stageThree > 0.4 ? "#22d3ee" : "#93c5fd";
        context.beginPath();
        context.arc(finalX, finalY, node.size + stageThree * 1.8, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = clamp((value - 0.72) / 0.28, 0, 1);
      context.strokeStyle = "#22d3ee";
      context.lineWidth = 2;
      context.strokeRect(centerX - 220, centerY - 120, 440, 240);
      context.strokeRect(centerX - 180, centerY - 80, 160, 40);
      context.strokeRect(centerX + 20, centerY - 80, 160, 40);
      context.strokeRect(centerX - 180, centerY - 20, 360, 80);
      context.globalAlpha = 1;
    };

    const draw = (value) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      drawBackdrop(width, height, value);
      drawNodes(width, height, value);
    };

    const update = () => {
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const localProgress = total > 0 ? clamp(-rect.top / total, 0, 1) : 0;
      setProgress(localProgress);
      draw(localProgress);
      rafRef.current = window.requestAnimationFrame(update);
    };

    setCanvasSize();

    if (reduceMotion) {
      draw(1);
      setProgress(1);
      return undefined;
    }

    rafRef.current = window.requestAnimationFrame(update);
    window.addEventListener("resize", setCanvasSize);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[320vh] bg-black" id="scroll-story">
      <div className="sticky top-0 h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-between px-6 py-14 text-white md:px-12">
          <div className="max-w-2xl">
            <p className="mb-4 inline-block rounded-full border border-cyan-300/40 bg-slate-900/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-200">
              Scroll narrative demo
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              From raw signals to production-ready architecture.
            </h2>
            <p className="mt-4 max-w-xl text-base text-slate-200/90 sm:text-lg">
              This section uses a sticky canvas and scroll-linked animation to tell one technical story before users continue into your profile and project sections.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-3 sm:gap-5 sm:text-base">
            <div className="rounded-xl border border-white/20 bg-slate-950/55 p-4 backdrop-blur-sm">
              <p className="font-semibold">01 Data intake</p>
              <p className="text-slate-300">Distributed events form a noisy cloud.</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-slate-950/55 p-4 backdrop-blur-sm">
              <p className="font-semibold">02 Orchestration</p>
              <p className="text-slate-300">Signals route into resilient cloud pathways.</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-slate-950/55 p-4 backdrop-blur-sm">
              <p className="font-semibold">03 Outcome</p>
              <p className="text-slate-300">A stable product dashboard emerges.</p>
            </div>
          </div>

          <div className="self-start rounded-md border border-cyan-300/40 bg-slate-900/55 px-3 py-2 text-xs tracking-widest text-cyan-100">
            SCROLL PROGRESS {(progress * 100).toFixed(0)}%
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStory;
