"use client"

import { Phone, Smartphone, Mail, MapPin, Globe, Linkedin } from "lucide-react"
import Image from "next/image"

export function VirtualCard() {
    const contactInfo = [
        {
            icon: Phone,
            label: "1300 245 299",
            sublabel: "telephone",
            href: "tel:1300245299",
        },
        {
            icon: Mail,
            label: "info@cjmlaw.com.au",
            sublabel: "",
            href: "mailto:info@cjmlaw.com.au",
        },
        {
            icon: MapPin,
            label: "91 Bundall Road, Surfers Paradise QLD",
            sublabel: "PO Box 8378",
            href: "https://share.google/JQVl1eM8Zi8fNlVKw",
        },
        {
            icon: Globe,
            label: "www.cjmlaw.com.au",
            sublabel: "",
            href: "https://www.cjmlaw.com.au",
        },
        {
            icon: Linkedin,
            label: "CJM Lawyers",
            sublabel: "",
            href: "https://www.linkedin.com/company/cjmlawyers/about/",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
                <div className="relative h-36 bg-gradient-to-br from-[#030e4c] to-[#0a1a6b] mb-6">
                    <Image
                        src="/header.png"
                        alt="Header"
                        fill
                        className="object-cover"
                    />


                </div>

                {/* Content */}
                <div className="px-8 pb-2 pt-2">
                    <div className="mb-6">
                        <div className="border-l-3 border-[#030e4c] pl-5">
                            <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Shannon McLaughlin</h1>
                            <p className="text-slate-600 text-base font-medium mb-1">Director</p>
                            <p className="text-slate-500 text-sm font-light italic">CJM Lawyers</p>
                        </div>
                    </div>

                    <div className="">
                        {contactInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="flex items-center gap-4 group hover:bg-slate-50/80 -mx-3 px-3 py-2.5 rounded-xl transition-all duration-200 hover:shadow-sm"
                                target="_blank"
                            >
                                <div className="w-11 h-11 bg-gradient-to-br from-[#030e4c] to-[#0a1a6b] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#030e4c]/20">
                                    <item.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-slate-900 font-semibold text-sm group-hover:text-[#030e4c] transition-colors duration-200">
                                        {item.label}
                                    </div>
                                    {item.sublabel && <div className="text-slate-500 text-xs font-medium mt-0.5">{item.sublabel}</div>}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
