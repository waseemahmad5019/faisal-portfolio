"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Briefcase, Download, Calculator, Database, FileSpreadsheet, GraduationCap, Mail, MapPin, Menu, Phone, Sparkles, Users, X } from "lucide-react";
import { Counter, Magnetic, Marquee, Reveal } from "./ui";
import { P, education, experience, nav, skills, specialties, stats, training, works } from "@/data/profile";

const id = (s: string) => (s === "Portfolio" ? "portfolio" : s.toLowerCase());
const icons = { calc: Calculator, db: Database, sheet: FileSpreadsheet, users: Users };

/* ---------- Loader ---------- */
export function Loader() {
  const [on, setOn] = useState(true);
  useEffect(() => { const t = setTimeout(() => setOn(false), 1300); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {on && (
        <motion.div exit={{ y: "-100%" }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-gold text-bg">
          <motion.span initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}
            className="font-display text-8xl">{P.initials}</motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------- Nav ---------- */
export function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach((n) => { const el = document.getElementById(id(n)); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-bg/80 px-5 py-3 backdrop-blur-md">
        <a href="#home" className="font-display flex items-center gap-2 text-2xl">
          <span className="grid size-9 place-items-center rounded-full bg-gold text-lg text-bg">{P.initials}</span>
          <span className="hidden sm:inline">FAISAL</span>
        </a>
        <nav className="hidden gap-7 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n} href={`#${id(n)}`} className={`group relative text-sm font-semibold ${active === id(n) ? "text-gold" : "text-white/80"}`}>
              {n}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${active === id(n) ? "w-full" : "w-0 group-hover:w-full"}`} />
            </a>
          ))}
        </nav>
        <a href={P.cv} download="Faisal_Raza_CV.pdf" className="hidden items-center gap-2 rounded-full border border-gold/60 px-4 py-2 text-sm font-bold text-gold transition hover:bg-gold hover:text-bg lg:flex"><Download size={16} /> CV</a>
        <a href="#contact" className="hidden rounded-full bg-gold px-5 py-2 text-sm font-bold text-bg lg:block">Contact me</a>
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-bg2 p-3 lg:hidden" aria-label="Mobile">
            {nav.map((n) => (
              <a key={n} href={`#${id(n)}`} onClick={() => setOpen(false)}
                className={`block rounded-2xl px-4 py-3.5 text-lg font-semibold ${active === id(n) ? "bg-gold text-bg" : ""}`}>{n}</a>
            ))}
            <a href={P.cv} download="Faisal_Raza_CV.pdf" onClick={() => setOpen(false)} className="mt-1 flex items-center gap-2 rounded-2xl border border-gold/60 px-4 py-3.5 text-lg font-semibold text-gold"><Download size={20} /> Download CV</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------- Hero ---------- */
export function Hero() {
  return (
    <section id="home" className="grain relative flex min-h-screen items-center overflow-hidden pb-16 pt-32">
      <div aria-hidden className="font-display pointer-events-none absolute inset-x-0 top-20 select-none text-center text-[38vw] leading-none text-white/[0.04] md:text-[24vw]">RAZA</div>
      <motion.div aria-hidden className="absolute left-[6%] top-[22%] size-24 rounded-full border-2 border-gold/40"
        animate={{ y: [0, -22, 0], rotate: 360 }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
            className="mb-4 flex items-center gap-2 text-sm font-semibold text-gold"><Sparkles size={16} /> Hi, I&apos;m</motion.p>
          <h1 className="font-display text-[22vw] leading-[0.9] sm:text-[15vw] lg:text-[9.5vw]">
            {["FAISAL", "RAZA"].map((w, i) => (
              <span key={w} className="block overflow-hidden pb-1">
                <motion.span className={`block ${i ? "text-gold" : ""}`} initial={{ y: "110%" }} animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 1.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>
              </span>
            ))}
          </h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7, duration: 0.7 }}>
            <p className="mt-6 text-xl font-bold md:text-2xl">{P.role}, with a sales and operations background</p>
            <p className="mt-3 max-w-xl text-mute">{P.summary}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Magnetic><a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-bg">Explore my work <ArrowUpRight size={18} /></a></Magnetic>
              <Magnetic><a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-bold transition hover:border-gold hover:text-gold">Contact me</a></Magnetic>
              <Magnetic><a href={P.cv} download="Faisal_Raza_CV.pdf" className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-4 font-bold text-gold transition hover:bg-gold hover:text-bg"><Download size={18} /> Download CV</a></Magnetic>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mute">
              <a href={`mailto:${P.email}`} className="flex items-center gap-2 hover:text-gold"><Mail size={16} />{P.email}</a>
              <span className="flex items-center gap-2"><MapPin size={16} />{P.location}</span>
              {P.socials.map((s) => <a key={s.label} href={s.href} className="hover:text-gold">{s.label}</a>)}
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.2, delay: 1.3, ease: [0.76, 0, 0.24, 1] }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-3xl bg-gold" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-bg2">
            <Image src={P.photo} alt={`Portrait of ${P.name}`} fill priority sizes="(max-width:1024px) 90vw, 440px" className="object-cover object-[50%_20%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */
export function MarqueeStrip() {
  return <div className="rotate-[-1.2deg] bg-gold py-5 text-bg"><Marquee items={specialties} /></div>;
}

/* ---------- About ---------- */
export function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-28 lg:grid-cols-2">
      <Reveal className="relative mx-auto w-full max-w-md">
        <motion.div aria-hidden className="absolute -right-4 -top-4 z-10 text-gold" animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }}><Sparkles size={56} /></motion.div>
        <div className="relative aspect-square overflow-hidden rounded-[2rem] rounded-bl-[6rem] border border-white/10">
          <Image src={P.photo} alt="" fill sizes="(max-width:1024px) 90vw, 440px" className="object-cover object-[50%_30%] transition duration-700 hover:scale-105" />
        </div>
        <div className="absolute -bottom-5 right-4 rounded-2xl bg-gold px-5 py-3 font-bold text-bg">{P.location}</div>
      </Reveal>
      <div>
        <Reveal><h2 className="font-display text-5xl md:text-7xl">Accurate books, <span className="text-gold">clear follow-ups</span></h2></Reveal>
        <Reveal delay={0.1}><p className="mt-6 text-mute">{P.summary} I work with reconciliations, invoices, AP/AR follow-ups, ERP-based processes, Excel records and business documentation.</p></Reveal>
        <Reveal delay={0.15}><p className="mt-4 text-mute">My approach: keep records organized, reconcile accounts, follow up on payments and leave documentation ready for audit.</p></Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Reconciliations & ledgers", "AP/AR and invoices", "SAP Business One, Zoho Books, Hisab PK", "Sales coordination"].map((s) => (
              <div key={s} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-bg2 px-4 py-3 text-sm"><span className="size-2 rounded-full bg-gold" />{s}</div>
            ))}
          </div>
          <p className="mt-6 rounded-2xl border border-gold/40 p-4 text-sm"><b className="text-gold">Career objective:</b> {P.objective}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Experience (sticky stacked cards) ---------- */
export function Experience() {
  return (
    <section id="experience" className="bg-bg2 px-5 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal><h2 className="font-display text-5xl md:text-7xl">Experience</h2></Reveal>
        <div className="mt-14 space-y-6">
          {experience.map((e, i) => (
            <article key={e.role + e.org} style={{ top: 96 + i * 14 }}
              className="sticky rounded-3xl border border-white/10 bg-bg p-6 shadow-2xl shadow-black/60 md:p-10">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl">{e.role}</h3>
                  <p className="mt-1 flex items-center gap-2 text-gold"><Briefcase size={16} />{e.org}</p>
                </div>
                <span className="rounded-full border border-gold/50 px-4 py-1.5 text-sm text-gold">{e.when}</span>
              </div>
              <ul className="mt-5 space-y-2 text-mute">
                {e.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Education ---------- */
export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-5 py-28">
      <Reveal><h2 className="font-display text-5xl md:text-7xl">Education & <span className="text-gold">training</span></h2></Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.1}>
            <div className="group h-full rounded-3xl border border-white/10 bg-bg2 p-7 transition hover:border-gold hover:-translate-y-1">
              <GraduationCap className="text-gold" size={30} />
              <p className="font-display mt-6 text-4xl">{e.when}</p>
              <h3 className="mt-2 text-xl font-bold">{e.title}</h3>
              <p className="text-mute">{e.place}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-3xl border border-dashed border-gold/40 p-6">
          <span className="font-bold text-gold">Additional training:</span>
          {training.map((t) => <span key={t} className="rounded-full bg-bg2 px-4 py-2 text-sm">{t}</span>)}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Skills ---------- */
export function Skills() {
  return (
    <section id="skills" className="bg-bg2 px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal><h2 className="font-display text-5xl md:text-7xl">Skills & expertise</h2></Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skills.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.cat} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-white/10 bg-bg p-7">
                  <div className="flex items-center gap-4">
                    <motion.span whileHover={{ rotate: 12, scale: 1.1 }} className="grid size-12 place-items-center rounded-2xl bg-gold text-bg"><Icon size={24} /></motion.span>
                    <h3 className="font-display text-3xl">{s.cat}</h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.items.map((it) => <span key={it} className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-gold hover:text-gold">{it}</span>)}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Portfolio ---------- */
export function Works() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-5 py-28">
      <Reveal><h2 className="font-display text-5xl md:text-7xl">Selected <span className="text-gold">works</span></h2></Reveal>
      <Reveal delay={0.1}><p className="mt-4 max-w-2xl text-mute">A practice project built as a sample workflow. It is a demonstration, not client employment. Real projects can be added in <code>data/profile.ts</code>.</p></Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {works.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.08} className={w.big ? "md:col-span-2 md:row-span-2" : ""}>
            <motion.article whileHover={{ y: -6 }} className="group relative flex h-full min-h-72 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-bg2 p-7">
              <div aria-hidden className="grain absolute inset-0 opacity-70" />
              <div aria-hidden className="absolute -right-10 -top-10 size-48 rounded-full bg-gold/15 transition duration-500 group-hover:scale-150" />
              <FileSpreadsheet className="relative text-gold" size={w.big ? 48 : 32} />
              <div className="relative mt-16">
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-bg">{w.cat}</span>
                <h3 className={`font-display mt-4 ${w.big ? "text-4xl md:text-5xl" : "text-2xl"}`}>{w.title}</h3>
                <p className="mt-3 text-sm text-mute">{w.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">{w.tags.map((t) => <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs">{t}</span>)}</div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */
export function Stats() {
  return (
    <section aria-label="Highlights" className="bg-gold px-5 py-16 text-bg">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-7xl"><Counter to={s.n} suffix={s.suffix} /></p>
            <p className="mt-1 max-w-[16rem] text-sm font-semibold">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Enter a subject"),
  message: z.string().min(10, "Write at least 10 characters"),
});
type Form = z.infer<typeof schema>;

export function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm<Form>({ resolver: zodResolver(schema) });
  // No backend needed: opens the visitor's email app with the message filled in.
  const send = (d: Form) => {
    const body = encodeURIComponent(`${d.message}\n\nFrom: ${d.name} (${d.email})`);
    window.location.href = `mailto:${P.email}?subject=${encodeURIComponent(d.subject)}&body=${body}`;
  };
  const field = "w-full rounded-2xl border border-white/15 bg-bg2 px-4 py-3.5 outline-none transition focus:border-gold";
  return (
    <section id="contact" className="mx-auto grid max-w-7xl gap-12 px-5 py-28 lg:grid-cols-2">
      <div>
        <Reveal><h2 className="font-display text-6xl md:text-8xl">Need your books <span className="text-gold">in order?</span></h2></Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-8 space-y-4">
            <li><a href={`mailto:${P.email}`} className="flex items-center gap-3 hover:text-gold"><Mail className="text-gold" />{P.email}</a></li>
            <li><a href={P.phoneHref} className="flex items-center gap-3 hover:text-gold"><Phone className="text-gold" />{P.phone}</a></li>
            <li className="flex items-center gap-3"><MapPin className="text-gold" />{P.location}</li>
            <li><a href={P.cv} download="Faisal_Raza_CV.pdf" className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-bg"><Download size={18} /> Download my CV (PDF)</a></li>
          </ul>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <form onSubmit={handleSubmit(send)} noValidate className="space-y-4 rounded-3xl border border-white/10 bg-bg2 p-6 md:p-8">
          {(["name", "email", "subject"] as const).map((f) => (
            <div key={f}>
              <label htmlFor={f} className="mb-1.5 block text-sm font-semibold capitalize">{f}</label>
              <input id={f} type={f === "email" ? "email" : "text"} className={field} aria-invalid={!!errors[f]} {...register(f)} />
              {errors[f] && <p role="alert" className="mt-1 text-sm text-red-400">{errors[f]?.message}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">Message</label>
            <textarea id="message" rows={5} className={field} aria-invalid={!!errors.message} {...register("message")} />
            {errors.message && <p role="alert" className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
          </div>
          <Magnetic><button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-bold text-bg">Send message <ArrowUpRight size={18} /></button></Magnetic>
          {isSubmitSuccessful && <p role="status" className="text-sm text-gold">Your email app should open with the message ready to send.</p>}
        </form>
      </Reveal>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg2 px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display flex items-center gap-2 text-3xl"><span className="grid size-10 place-items-center rounded-full bg-gold text-bg">{P.initials}</span>{P.name.toUpperCase()}</p>
          <p className="mt-4 max-w-xs text-sm text-mute">{P.tagline}. {P.location}.</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
          {nav.map((n) => <a key={n} href={`#${id(n)}`} className="text-mute hover:text-gold">{n}</a>)}
        </nav>
        <div className="space-y-2 text-sm text-mute">
          <a href={`mailto:${P.email}`} className="block hover:text-gold">{P.email}</a>
          <a href={P.phoneHref} className="block hover:text-gold">{P.phone}</a>
          <a href={P.cv} download="Faisal_Raza_CV.pdf" className="flex items-center gap-2 text-gold hover:underline"><Download size={14} /> Download CV</a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-mute">© {new Date().getFullYear()} {P.name}. All rights reserved.</p>
    </footer>
  );
}
