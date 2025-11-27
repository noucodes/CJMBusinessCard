// data/people.ts
import type { Person } from "@/components/virtual-card";

export type Contact = {
  icon: string; // "phone" | "mail" | "map-pin" | "globe" | "linkedin"
  label: string;
  sublabel?: string;
  href: string;
};

export const people: Person[] = [
  {
    id: "shannon",
    name: "Shannon McLaughlin",
    title: "Director",
    company: "CJM Lawyers",
    avatar: "/avatars/shannon.jpg",
    headerImage: "/header.png",
    signatureImage:
      "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/shannon-email1.png",
    eventSignatures: [
      {
        id: "christmas",
        name: "Christmas 2025",
        image:
          "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/shannon-email-christmas.png",
      },
    ],
    contacts: [
      {
        icon: "phone",
        label: "1300 245 299",
        sublabel: "telephone",
        href: "tel:1300245299",
      },
      {
        icon: "mail",
        label: "shannon@cjmlaw.com.au",
        href: "mailto:shannon@cjmlaw.com.au",
      },
      {
        icon: "map-pin",
        label: "91 Bundall Road, Surfers Paradise QLD",
        sublabel: "PO Box 8378",
        href: "https://share.google/JQVl1eM8Zi8fNlVKw",
      },
      {
        icon: "globe",
        label: "www.cjmlaw.com.au",
        href: "https://www.cjmlaw.com.au",
      },
      {
        icon: "linkedin",
        label: "CJM Lawyers",
        href: "https://www.linkedin.com/company/cjmlawyers/about/",
      },
    ],
  },
  {
    id: "kent",
    name: "Kent James",
    title: "Director",
    company: "CJM Lawyers",
    avatar: "/avatars/jane.jpg",
    headerImage: "/header.png",
    signatureImage:
      "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/kent-email.png",
    eventSignatures: [
      {
        id: "christmas",
        name: "Christmas 2025",
        image:
          "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/kent-email-christmas.png",
      },
    ],
    contacts: [
      { icon: "phone", label: "1300 245 299", href: "tel:1300245299" },
      {
        icon: "mail",
        label: "kent@cjmlaw.com.au",
        href: "mailto:kent@cjmlaw.com.au",
      },
      {
        icon: "map-pin",
        label: "91 Bundall Road, Surfers Paradise QLD",
        href: "https://share.google/JQVl1eM8Zi8fNlVKw",
      },
      {
        icon: "globe",
        label: "www.cjmlaw.com.au",
        href: "https://www.cjmlaw.com.au",
      },
      {
        icon: "linkedin",
        label: "CJM Lawyers",
        href: "https://www.linkedin.com/company/cjmlawyers/about/",
      },
    ],
  },
  {
    id: "jenna",
    name: "Jenna McIntyre",
    title: "Relationship Manager",
    company: "CJM Lawyers",
    avatar: "/avatars/jane.jpg",
    headerImage: "/header.png",
    signatureImage:
      "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/jenna-email1.png",
    eventSignatures: [
      {
        id: "christmas",
        name: "Christmas 2025",
        image:
          "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/jenna-email-christmas.png",
      },
    ],
    contacts: [
      { icon: "phone", label: "1300 245 299", href: "tel:1300245299" },
      {
        icon: "mail",
        label: "jenna@cjmlaw.com.au",
        href: "mailto:jenna@cjmlaw.com.au",
      },
      {
        icon: "map-pin",
        label: "91 Bundall Road, Surfers Paradise QLD",
        href: "https://share.google/JQVl1eM8Zi8fNlVKw",
      },
      {
        icon: "globe",
        label: "www.cjmlaw.com.au",
        href: "https://www.cjmlaw.com.au",
      },
      {
        icon: "linkedin",
        label: "CJM Lawyers",
        href: "https://www.linkedin.com/company/cjmlawyers/about/",
      },
    ],
  },
  // Add more…
];

export const getPersonById = (id: string): Person | undefined =>
  people.find((p) => p.id === id);
