'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Archive, Disc3, Mic, Radio, Users } from 'lucide-react';
import { NAMA_HARI, SIDE_A, SIDE_B, berikutnya } from '@/lib/kaset';

const IKON = { kaset: Disc3, radio: Radio, arsip: Archive, mic: Mic, tamu: Users };
const MotionLink = motion.create(Link);

function Row({ l, i, delay }) {
  const Ikon = IKON[l.ikon];
  return (
    <MotionLink
      href={l.href}
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="group flex items-center gap-3 border-b border-cokelat/15 py-3.5 transition hover:bg-cokelat/5 hover:px-2"
    >
      <span className="text-xs text-cokelat/75">{String(i + 1).padStart(2, '0')}</span>
      <Ikon size={16} className="text-oranye-ink" aria-hidden="true" />
      <span className="flex-1">
        <span className="block text-sm font-bold group-hover:underline">{l.label}</span>
        <span className="block text-[11px] text-cokelat/75">{l.meta}</span>
      </span>
      <span className="text-[10px] uppercase text-cokelat/75 transition group-hover:text-oranye-ink" aria-hidden="true">play ▸</span>
    </MotionLink>
  );
}

export default function Home() {
  const [next, setNext] = useState(null);
  useEffect(() => { setNext(berikutnya()); }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <motion.div initial={{ opacity: 0, y: -18, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: -1 }} transition={{ duration: 0.55 }} className="tape rounded-2xl p-4">
          <div className="rounded-lg bg-krem70 px-4 py-3">
            <div className="flex items-center justify-between border-b-2 border-oranye70 pb-1.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-oranye-ink">Kaset Kita · FM</p>
              <p className="text-[10px] text-cokelat/75">C-60</p>
            </div>
            <h1 className="mt-2 font-mono text-2xl font-bold tracking-tight">MIXTAPE &amp; RADIO<br />KOMUNITAS</h1>
            <p className="text-[11px] text-cokelat/75">direkam manual di Bandung — sejak 2021</p>
          </div>
          <div className="mt-3 flex items-center justify-between rounded-lg bg-[#2b1d12] px-6 py-4">
            <div className="reel h-14 w-14 rounded-full border-4 border-mustard/70" aria-hidden="true" />
            <div className="flex-1 px-4">
              <div className="h-1 rounded bg-mustard/30" aria-hidden="true">
                <motion.div initial={{ width: '20%' }} animate={{ width: '78%' }} transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }} className="h-full rounded bg-oranye70" />
              </div>
              <p role="status" className="mt-1.5 text-center text-[10px] tracking-[0.2em] text-krem70/85">
                {next ? (next.live ? `● SEDANG SIARAN: ${next.nama.toUpperCase()}` : `BERIKUTNYA ${NAMA_HARI[next.hari].toUpperCase()} ${String(next.jam).padStart(2, '0')}.00 WIB`) : '▶ PLAY'}
              </p>
            </div>
            <div className="reel h-14 w-14 rounded-full border-4 border-mustard/70" style={{ animationDuration: '2.6s' }} aria-hidden="true" />
          </div>
        </motion.div>

        <section className="rise mt-7" style={{ animationDelay: '0.25s' }} aria-labelledby="side-a">
          <h2 id="side-a" className="text-[11px] font-bold uppercase tracking-[0.3em] text-oranye-ink">● Side A — dengarkan</h2>
          <nav className="mt-1" aria-label="Side A">{SIDE_A.map((l, i) => <Row key={l.label} l={l} i={i} delay={0.35 + i * 0.08} />)}</nav>
        </section>
        <section className="rise mt-6" style={{ animationDelay: '0.5s' }} aria-labelledby="side-b">
          <h2 id="side-b" className="text-[11px] font-bold uppercase tracking-[0.3em] text-mustard-ink">● Side B — ikut terlibat</h2>
          <nav className="mt-1" aria-label="Side B">{SIDE_B.map((l, i) => <Row key={l.label} l={l} i={i} delay={0.6 + i * 0.08} />)}</nav>
        </section>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-7 text-center text-[11px] text-cokelat/75">
          ⟲ putar-balik kaset sebelum mengembalikan · radio komunitas fiktif untuk purwarupa desain
        </motion.p>
      </div>
    </main>
  );
}
