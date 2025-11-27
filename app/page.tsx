"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Check,
  MapPin,
  Calendar,
  Users,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

import { people } from "@/data/people";
import { locations } from "@/data/location";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = async (html: string, plain: string, key: string) => {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([plain], { type: "text/plain" }),
        }),
      ]);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 3000);
    } catch (err) {
      alert("Copy failed — please try again");
    }
  };

  const generateHtml = (imageUrl: string, linkUrl?: string, alt?: string) => `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
  <tr>
    <td align="left" style="padding: 20px 0;">
      ${linkUrl
      ? `<a href="${linkUrl}" target="_blank">
             <img src="${imageUrl}" alt="${alt || "CJM Lawyers"}" width="700" style="width:700px;max-width:100%;height:auto;border-radius:18px;box-shadow:0 12px 40px rgba(0,0,0,0.15);display:block;" />
           </a>`
      : `<img src="${imageUrl}" alt="${alt || "CJM Lawyers"}" width="700" style="width:700px;max-width:100%;height:auto;border-radius:18px;box-shadow:0 12px 40px rgba(0,0,0,0.15);display:block;" />`
    }
    </td>
  </tr>
</table>`.trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-8 py-8 flex justify-center">
          <Link href="/" className="flex items-center hover:scale-105 transition-transform duration-300">
            <div className="relative h-16 w-16">
              <Image src="/logo.svg" alt="CJM Lawyers" fill className="object-contain" priority />
            </div>
            <span className="text-3xl font-bold text-[#030e4c] tracking-tight ml-4">
              CJM Lawyers
            </span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-24 px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-[#030e4c] mb-6 leading-tight">
          Email Signature Hub
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto">
          Choose your category below • Click any signature to copy it instantly
        </p>
      </section>

      {/* Our People */}
      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="flex items-center gap-4 mb-12">
          <Users className="h-10 w-10 text-[#030e4c]" />
          <h2 className="text-4xl font-bold text-[#030e4c]">Our People</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {people.map((person) => (
            <Card
              key={person.id}
              className="group relative overflow-hidden bg-white/95 backdrop-blur-2xl border-0 shadow-lg rounded-3xl"
            >
              <Link href={`/${person.id}`} className="block p-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                  {person.name}
                </h3>
                <p className="text-lg md:text-xl font-medium text-[#030e4c]">
                  {person.title}
                </p>
              </Link>

              <div className="px-8 pb-10 space-y-4">
                {/* General Personal Signature */}
                <Button
                  onClick={() => {
                    const html = generateHtml(
                      person.signatureImage,
                      `https://cjm-business-card.vercel.app/${person.id}`,
                      `${person.name} – CJM Lawyers`
                    );
                    copyToClipboard(html, `Connect with ${person.name}`, `personal-${person.id}`);
                  }}
                  className="w-full h-14 rounded-2xl text-lg font-semibold bg-gradient-to-r from-[#030e4c] to-[#0a1a6b] text-white flex items-center justify-center gap-3"
                >
                  {copiedKey === `personal-${person.id}` ? (
                    <>Copied!</>
                  ) : (
                    <>Copy Personal Signature</>
                  )}
                </Button>

                {/* Event Signatures for this person */}
                {person.eventSignatures && person.eventSignatures.length > 0 && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-14 rounded-2xl text-lg font-semibold hover:bg-[#030e4c]/5 text-[#030e4c] flex items-center justify-center gap-2"
                      >
                        <Calendar className="h-5 w-5" />
                        Event Signature
                        <ChevronDown className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-72">
                      {person.eventSignatures.map((sig) => {
                        const key = `person-event-${sig.id}-${person.id}`;
                        return (
                          <DropdownMenuItem
                            key={sig.id}
                            onClick={() => {
                              const html = generateHtml(sig.image, undefined, sig.name);
                              copyToClipboard(html, sig.name, key);
                            }}
                            className="flex items-center justify-between py-3"
                          >
                            <span>{sig.name}</span>
                            {copiedKey === key && <Check className="h-5 w-5 text-green-600" />}
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Locations */}
      <section className="max-w-7xl mx-auto px-8 pb-20 bg-gradient-to-r py-20">
        <div className="flex items-center gap-4 mb-12 max-w-7xl mx-auto">
          <MapPin className="h-10 w-10 text-[#030e4c]" />
          <h2 className="text-4xl font-bold text-[#030e4c]">Our Locations</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {locations.map((loc) => (
            <Card
              key={loc.id}
              className="group relative overflow-hidden bg-white/95 backdrop-blur-2xl border-0 shadow-lg rounded-3xl"
            >
              <div className="p-8 text-center space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {loc.name}
                </h3>

                {/* General Location Signature */}
                <Button
                  onClick={() => {
                    const html = generateHtml(loc.image, loc.link, loc.name);
                    copyToClipboard(html, loc.link || loc.name, `location-${loc.id}`);
                  }}
                  className="w-full h-14 rounded-2xl text-lg font-semibold bg-gradient-to-r from-[#030e4c] to-[#0a1a6b] text-white flex items-center justify-center gap-3"
                >
                  {copiedKey === `location-${loc.id}` ? (
                    <>Copied!</>
                  ) : (
                    <>Copy General Signature</>
                  )}
                </Button>

                {/* Event Location Signatures */}
                {loc.eventImages && loc.eventImages.length > 0 && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-14 rounded-2xl text-lg font-semibold hover:bg-[#030e4c]/5 text-[#030e4c] flex items-center justify-center gap-2"
                      >
                        <Calendar className="h-5 w-5" />
                        Event Version
                        <ChevronDown className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-72">
                      {loc.eventImages.map((ev) => {
                        const key = `location-event-${ev.id}-${loc.id}`;
                        return (
                          <DropdownMenuItem
                            key={ev.id}
                            onClick={() => {
                              const html = generateHtml(ev.image, ev.link, ev.name);
                              copyToClipboard(html, ev.link || ev.name, key);
                            }}
                            className="flex items-center justify-between py-3"
                          >
                            <span>{ev.name}</span>
                            {copiedKey === key && <Check className="h-5 w-5 text-green-600" />}
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 text-center">
        <p className="text-lg">© 2025 CJM Lawyers. All rights reserved.</p>
      </footer>
    </div>
  );
}