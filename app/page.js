'use client';
import { motion } from 'framer-motion';
import { Radio, Disc3, Mail, Mic, Rss } from 'lucide-react';

const SIDE_A = [
  { icon: Disc3, label: 'Mixtape #24 — "Hujan Kota"', meta: '60 menit · lo-fi & city pop', url: '#' },
  { icon: Radio, label: 'Dengarkan Siaran Langsung', meta: 'tiap Jumat 20.00 WIB', url: '#' },
];
const SIDE_B = [
  { icon: Rss, label: 'Arsip Semua Episode', meta: 'Spotify · RSS', url: '#' },
  { icon: Mic, label: 'Ikut Siaran / Kirim Demo', meta: 'terbuka untuk musisi lokal', url: '#' },
  { icon: Mail, label: 'Kontak Kolektif', meta: 'halo@kasetkita.fm', url: 'mailto:halo@kasetkita.fm' },
];

function Row({ l, i, delay }) {
  return (
    <motion.a
      href={l.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="group flex items-center gap-3 border-b border-cokelat/15 py-3.5 transition hover:bg-cokelat/5 hover:px-2"
    >
      <span className="text-xs text-cokelat/40">{String(i + 1).padStart(2, '0')}</span>
      <l.icon size={16} className="text-oranye70" />
      <span className="flex-1">
        <span className="block text-sm font-bold group-hover:underline">{l.label}</span>
        <span className="block text-[11px] text-cokelat/50">{l.meta}</span>
      </span>
      <span className="text-[10px] uppercase text-cokelat/35 transition group-hover:text-oranye70">play ▸</span>
    </motion.a>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Kaset */}
        <motion.div initial={{ opacity: 0, y: -18, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: -1 }} transition={{ duration: 0.55 }} className="tape rounded-2xl p-4">
          {/* Label */}
          <div className="rounded-lg bg-krem70 px-4 py-3">
            <div className="flex items-center justify-between border-b-2 border-oranye70 pb-1.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-oranye70">Kaset Kita · FM</p>
              <p className="text-[10px] text-cokelat/50">C-60</p>
            </div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight">MIXTAPE &amp; RADIO<br />KOMUNITAS</h1>
            <p className="text-[11px] text-cokelat/55">direkam manual di Bandung — sejak 2021</p>
          </div>
          {/* Jendela reel */}
          <div className="mt-3 flex items-center justify-between rounded-lg bg-[#2b1d12] px-6 py-4">
            <div className="reel h-14 w-14 rounded-full border-4 border-mustard/70" aria-hidden="true" />
            <div className="flex-1 px-4">
              <div className="h-1 rounded bg-mustard/30">
                <motion.div initial={{ width: '20%' }} animate={{ width: '78%' }} transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }} className="h-full rounded bg-oranye70" />
              </div>
              <p className="mt-1.5 text-center text-[10px] tracking-[0.3em] text-krem70/50">▶ PLAY</p>
            </div>
            <div className="reel h-14 w-14 rounded-full border-4 border-mustard/70" style={{ animationDuration: '2.6s' }} aria-hidden="true" />
          </div>
        </motion.div>

        {/* Side A */}
        <section className="rise mt-7" style={{ animationDelay: '0.25s' }} aria-label="Side A">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-oranye70">● Side A — dengarkan</p>
          <nav className="mt-1">{SIDE_A.map((l, i) => <Row key={l.label} l={l} i={i} delay={0.35 + i * 0.08} />)}</nav>
        </section>

        {/* Side B */}
        <section className="rise mt-6" style={{ animationDelay: '0.5s' }} aria-label="Side B">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-mustard">● Side B — ikut terlibat</p>
          <nav className="mt-1">{SIDE_B.map((l, i) => <Row key={l.label} l={l} i={i} delay={0.6 + i * 0.08} />)}</nav>
        </section>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-7 text-center text-[11px] text-cokelat/45">
          ⟲ putar-balik kaset sebelum mengembalikan · © {new Date().getFullYear()} kasetkita.fm
        </motion.p>
      </div>
    </main>
  );
}
