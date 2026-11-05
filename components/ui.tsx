"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useInView, useMotionValue, animate } from "motion/react";
import { ArrowUp } from "lucide-react";

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function Magnetic({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <motion.div ref={ref} style={{ x, y, display: "inline-block" }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        animate(x, (e.clientX - r.left - r.width / 2) * 0.25, { type: "spring", stiffness: 200, damping: 15 });
        animate(y, (e.clientY - r.top - r.height / 2) * 0.25, { type: "spring", stiffness: 200, damping: 15 });
      }}
      onMouseLeave={() => { animate(x, 0, { type: "spring" }); animate(y, 0, { type: "spring" }); }}>
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

export function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden" aria-hidden>
      <motion.div className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }} transition={{ duration: 32, ease: "linear", repeat: Infinity }}>
        {row.map((t, i) => (
          <span key={i} className="font-display flex items-center gap-10 text-3xl uppercase md:text-5xl">
            {t}<span className="text-2xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gold" />;
}

export function ToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 700);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full bg-gold text-bg transition-all duration-300 hover:scale-110 ${show ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>
      <ArrowUp size={20} />
    </button>
  );
}
