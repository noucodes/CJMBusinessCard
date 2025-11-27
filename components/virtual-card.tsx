// components/virtual-card.tsx
"use client";

import { Phone, Mail, MapPin, Globe, Linkedin } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = {
    phone: Phone,
    mail: Mail,
    "map-pin": MapPin,
    globe: Globe,
    linkedin: Linkedin,
};

export type Contact = {
    icon: string;
    label: string;
    sublabel?: string;
    href: string;
};

export type Person = {
    id: string;
    name: string;
    title: string;
    company: string;
    avatar?: string;
    headerImage: string;
    signatureImage: string;
    eventSignatures?: {            // Optional event versions
        id: string;
        name: string;
        image: string;
    }[];
    contacts: Contact[];
};

type VirtualCardProps = {
    person: Person;
};

export function VirtualCard({ person }: VirtualCardProps) {
    const { name, title, company, headerImage, contacts } = person;

    return (
        <Card className="w-full max-w-md overflow-hidden border shadow-xl p-0 gap-2">
            <div className="relative h-36">
                <Image src={headerImage} alt="Header" fill className="object-cover" />
            </div>

            <CardContent className="px-8 pb-6 pt-4">
                <div className="mb-6 flex items-center gap-4">

                    <div className="flex-1">
                        <div className="border-l-4 border-[#030e4c] pl-4">
                            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{name}</h1>
                            <p className="text-slate-600 font-medium">{title}</p>
                            <p className="text-slate-500 text-sm italic">{company}</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    {contacts.map((c, i) => {
                        const Icon = iconMap[c.icon] || Globe; // fallback

                        return (
                            <a
                                key={i}
                                href={c.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 rounded-xl pb-3 transition-all hover:bg-slate-50/80 hover:shadow-sm"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#030e4c] to-[#0a1a6b] shadow-lg shadow-[#030e4c]/20">
                                    <Icon className="h-5 w-5 text-white" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="font-semibold text-sm text-slate-900 transition-colors group-hover:text-[#030e4c]">
                                        {c.label}
                                    </div>
                                    {c.sublabel && (
                                        <div className="mt-0.5 text-xs font-medium text-slate-500">
                                            {c.sublabel}
                                        </div>
                                    )}
                                </div>
                            </a>
                        );
                    })}
                </div>
            </CardContent>
        </Card>
    );
}