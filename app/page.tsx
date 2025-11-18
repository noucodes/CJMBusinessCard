// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { people } from "@/data/people";

export default function Home() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copySignature = async (personId: string) => {
    const person = people.find((p) => p.id === personId);
    if (!person) return;

    const signatureHtml = `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td align="center" style="padding: 20px 0;">
      <a href="https://cjm-business-card.vercel.app/${personId}" target="_blank">
        <img src="${person.signatureImage}" 
             alt="${person.name} – CJM Lawyers Digital Card" 
             width="420" 
             style="width: 420px; max-width: 100%; height: auto; border-radius: 18px; box-shadow: 0 12px 40px rgba(0,0,0,0.15); display: block;" />
      </a>
    </td>
  </tr>
</table>`.trim();

    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([signatureHtml], { type: "text/html" }),
          "text/plain": new Blob([`Connect with ${person.name}: https://cjm-business-card.vercel.app/${personId}`], { type: "text/plain" }),
        }),
      ]);

      setCopiedId(personId);
      setTimeout(() => setCopiedId(null), 3000);
    } catch (err) {
      alert("Copy failed — please try again");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-8 py-8 flex justify-center">
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <div className="relative h-16 w-16">
              <Image src="/logo.svg" alt="CJM Lawyers" fill className="object-contain" priority />
            </div>
            <span className="text-3xl font-bold text-[#030e4c] tracking-tight">CJM Lawyers</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-[#030e4c] mb-6 leading-tight">
          Our People
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
          Tap any card to view • Click below to copy your email signature
        </p>
      </section>

      {/* Team Grid – No Avatars, Just Pure Elegance */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {people.map((person) => (
            <Card
              key={person.id}
              className="group relative overflow-hidden bg-white/95 backdrop-blur-2xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 rounded-3xl"
            >
              {/* Click card → go to virtual card */}
              <Link href={`/${person.id}`} className="block p-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                  {person.name}
                </h3>
                <p className="text-lg md:text-xl font-medium text-[#030e4c]">
                  {person.title}
                </p>
              </Link>

              {/* Copy Signature Button */}
              <div className="px-8 pb-10">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    copySignature(person.id);
                  }}
                  className="w-full h-14 rounded-2xl text-lg font-semibold transition-all bg-gradient-to-r from-[#030e4c] to-[#0a1a6b] hover:shadow-2xl text-white flex items-center justify-center gap-3"
                >
                  {copiedId === person.id ? (
                    <>
                      <Check className="h-6 w-6" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-5 w-5" />
                      Copy Email Signature
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 text-center">
        <p className="text-lg">© 2025 CJM Lawyers. All rights reserved.</p>
      </footer>
    </div>
  );
}