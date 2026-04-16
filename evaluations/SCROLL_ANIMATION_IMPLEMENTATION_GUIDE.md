# Scroll-Animated "LosslessContext-Style" Web Experience Guide

## Goal
Build a high-performance, scroll-driven storytelling section similar to LosslessContext.ai, and adapt the same pattern to a technical services site (like ByteForge) without hurting usability or Core Web Vitals.

## Recommended Architecture

### 1) Animation Engine
- Use **GSAP + ScrollTrigger** for scrubbed, pinned scroll choreography.
- Use **Canvas frame sequences** for cinematic 3D-style visuals.
- Use **Lenis** (or GSAP ScrollSmoother) for smooth inertial scroll feel.

### 2) Visual Asset Pipeline
1. Produce one short 3D camera animation (8–12 seconds) in Blender/Spline/C4D.
2. Export to video at a fixed frame rate (e.g., 30 fps).
3. Extract image sequence with FFmpeg.
4. Convert frames to AVIF/WebP and keep dimensions practical (e.g., 1920×1080 desktop, 1080×1350 mobile variant).

Example FFmpeg commands:
```bash
# Extract PNG master frames
ffmpeg -i hero.mp4 -vf fps=30 frames/frame_%04d.png

# Convert to WebP (quality tune as needed)
ffmpeg -i frames/frame_%04d.png -q:v 75 frames-webp/frame_%04d.webp
```

### 3) Scroll Layout Pattern
- Create a long section (`height: 300vh–500vh`) to provide scroll distance.
- Put the canvas in a `position: sticky; top: 0; height: 100vh` container.
- Drive frame index from scroll progress.

---

## Minimal React + GSAP Blueprint

### Install
```bash
npm i gsap @studio-freight/lenis
```

### Component skeleton
```jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    const frameState = { frame: 0 };
    const totalFrames = 180;
    const images = [];

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const render = () => {
      const img = images[Math.round(frameState.frame)];
      if (!img) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
    };

    const preload = async () => {
      const makeSrc = (i) => `/sequence/frame_${String(i).padStart(4, "0")}.webp`;
      await Promise.all(
        Array.from({ length: totalFrames }, (_, i) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = makeSrc(i + 1);
            img.onload = () => resolve((images[i] = img));
            img.onerror = () => resolve(null);
          });
        })
      );
      render();

      gsap.to(frameState, {
        frame: totalFrames - 1,
        ease: "none",
        snap: "frame",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 0.35,
          pin: true,
        },
        onUpdate: render,
      });
    };

    setCanvasSize();
    preload();
    window.addEventListener("resize", setCanvasSize);
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} style={{ height: "400vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh" }}>
        <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      </div>
    </section>
  );
}
```

---

## How to Apply This to ByteForge-Style Positioning

### Recommended single "hero moment" (do first)
Use one premium scroll sequence in the hero instead of animating the full site.

**Narrative concept**
1. Raw data particles appear.
2. Particles route into cloud architecture nodes.
3. Nodes resolve into a polished dashboard/product outcome.

This matches a consulting/engineering story: **inputs → architecture → business result**.

### Service-section micro interactions (do second)
- Keep cards static for accessibility.
- Add light scroll-tied accents (line drawings, node pulses, connector paths) with CSS/GSAP timelines.
- Avoid heavy full-frame sequences in every section.

### Case-study visual dissection (do third)
For one flagship case study, animate stack layers in order:
- UI layer
- API/services layer
- database/infrastructure layer

This communicates engineering depth better than generic screenshots.

---

## Performance Budget Checklist (Non-negotiable)
- First meaningful render should not wait for all frames.
- Preload first 12–20 frames; stream the rest in background.
- Use `requestAnimationFrame` and avoid React state per frame.
- Cap DPR to 2 for memory safety.
- Provide mobile fallback (single still/short loop) under weaker devices.
- Respect `prefers-reduced-motion` and disable scrub animation.

Example reduced-motion guard:
```js
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduceMotion) {
  // Show static frame and skip ScrollTrigger timeline
}
```

---

## Practical Production Plan (2 Weeks)

### Week 1
- Day 1–2: storyboarding + section wireframe.
- Day 3–4: produce 3D animation and export sequence.
- Day 5: integrate Canvas + ScrollTrigger baseline.

### Week 2
- Day 1–2: optimization (compression, preload strategy, mobile variant).
- Day 3: analytics + A/B (animated hero vs static hero).
- Day 4: accessibility pass (`prefers-reduced-motion`, keyboard focus flow).
- Day 5: launch and monitor CWV/LCP.

---

## Tooling Alternatives
- **Lottie + GSAP**: best for vector/diagrammatic explainers (lighter, scalable).
- **Three.js + react-three-fiber**: best for real-time interactive 3D (heavier engineering effort).
- **Spline embed**: fastest to prototype, less control over low-level performance.

---

## Common Mistakes to Avoid
- Over-animating multiple sections at once.
- Loading 200+ full-resolution PNG frames uncompressed.
- Tying scroll updates to React `setState`.
- Ignoring reduced-motion and low-power mobile fallback.

---

## Suggested Success Metrics
- Hero section completion rate.
- Scroll depth increase through services/case-study sections.
- LCP/INP impact before vs after.
- Lead conversion delta from hero CTA.

If metrics drop, simplify animation first (frame count, resolution, section length) before adding effects.
