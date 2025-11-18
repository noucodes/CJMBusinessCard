// app/[id]/page.tsx
import { notFound } from "next/navigation";
import { VirtualCard } from "@/components/virtual-card";
import { getPersonById } from "@/data/people";
import { Metadata } from "next";

type Props = {
    params: { id: string };
};

// Generate metadata for SEO & social sharing
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const person = getPersonById(params.id);
    if (!person) return { title: "Not Found" };

    return {
        title: `${person.name} – ${person.title} at ${person.company}`,
        description: `Contact ${person.name}, ${person.title} at CJM Lawyers.`,
        openGraph: {
            title: `${person.name} – CJM Lawyers`,
            description: `Connect with ${person.name}`,
            images: person.avatar ? [{ url: person.avatar }] : [],
        },
    };
}

export default function PersonPage({ params }: Props) {
    const person = getPersonById(params.id);

    if (!person) notFound();

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
            <VirtualCard person={person} />
        </main>
    );
}