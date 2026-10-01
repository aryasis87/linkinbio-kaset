import { MIXTAPE, SITE } from '@/lib/kaset';
import Kembali from '../components/Kembali';
import FormTamu from '../components/FormTamu';

export const metadata = {
  title: 'Arsip Mixtape',
  description: 'Arsip mixtape Kaset Kita FM — #24 "Hujan Kota" sampai #21 "Kereta Pagi" — lengkap dengan tracklist band lokal, dan formulir kirim demo.',
  alternates: { canonical: `${SITE}/mixtape` },
};

export default function Mixtape() {
  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-lg">
        <Kembali sisi="Side B · 01" />
        <h1 className="mt-8 text-3xl font-bold tracking-tight">ARSIP MIXTAPE</h1>
        <p className="mt-1 text-sm text-cokelat/80">Satu mixtape tiap Jumat. Semua lagu dari band lokal, dengan izin mereka.</p>

        <ol className="mt-8 space-y-4">
          {MIXTAPE.map((m, i) => (
            <li key={m.no} id={`m${m.no}`} className="scroll-mt-6">
              <details open={i === 0} className="group rounded-xl bg-krem70 shadow-[0_8px_24px_-14px_rgba(74,52,38,0.6)] ring-1 ring-cokelat/15">
                <summary className="flex cursor-pointer list-none items-center gap-4 p-4 [&::-webkit-details-marker]:hidden">
                  <span aria-hidden="true" className="tape grid h-12 w-16 shrink-0 place-items-center rounded-md text-xs font-bold text-krem70">#{m.no}</span>
                  <span className="flex-1">
                    <span className="block font-bold">&ldquo;{m.judul}&rdquo;</span>
                    <span className="block text-[11px] text-cokelat/75">{m.tanggal} · {m.durasi} · {m.lagu.length} lagu</span>
                  </span>
                  <span aria-hidden="true" className="text-xs font-bold text-oranye-ink group-open:rotate-90">▸</span>
                </summary>
                <ol className="border-t border-dashed border-cokelat/25 px-4 py-3">
                  {m.lagu.map(([lagu, band], k) => (
                    <li key={lagu} className="flex gap-3 py-1.5 text-sm">
                      <span className="w-6 text-cokelat/75">{String(k + 1).padStart(2, '0')}</span>
                      <span className="flex-1 font-bold">{lagu}</span>
                      <span className="text-cokelat/80">{band}</span>
                    </li>
                  ))}
                </ol>
              </details>
            </li>
          ))}
        </ol>

        <FormTamu jenis="demo" />
        <p className="mt-8 text-center text-[11px] text-cokelat/75">Band dan lagu adalah contoh purwarupa desain.</p>
      </div>
    </main>
  );
}
