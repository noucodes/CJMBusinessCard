// @/data/location.ts
export type Location = {
  id: string;
  name: string;
  image: string;
  link?: string;
  eventImages?: {
    id: string;
    name: string;
    image: string;
    link?: string;
  }[];
};

export const locations: Location[] = [
  {
    id: "surfers-paradise",
    name: "Surfers Paradise Office",
    image:
      "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/surfers-paradise.png",
    eventImages: [
      {
        id: "christmas",
        name: "Surfers Paradise – Christmas 2025",
        image:
          "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/surfers-paradise-christmas.png",
      },
    ],
  },
  {
    id: "chinderah",
    name: "Chinderah Office",
    image:
      "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/chinderah.png",
    eventImages: [
      {
        id: "christmas",
        name: "Chinderah – Christmas 2025",
        image:
          "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/chinderah-christmas.png",
      },
    ],
  },
  {
    id: "grafton",
    name: "Grafton Office",
    image:
      "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/grafton.png",
    eventImages: [
      {
        id: "christmas",
        name: "Grafton – Christmas 2025",
        image:
          "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/grafton-christmas.png",
      },
    ],
  },
  {
    id: "murwillumbah",
    name: "Murwillumbah Office",
    image:
      "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/murwillumbah.png",
    eventImages: [
      {
        id: "christmas",
        name: "Murwillumbah – Christmas 2025",
        image:
          "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/murwillumbah-christmas.png",
      },
    ],
  },
  {
    id: "tweed-heads",
    name: "Tweed Heads Office",
    image:
      "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/tweed-heads.png",
    eventImages: [
      {
        id: "christmas",
        name: "Tweed Heads – Christmas 2025",
        image:
          "https://raw.githubusercontent.com/noucodes/CJMBusinessCard/refs/heads/main/public/tweed-heads-christmas.png",
      },
    ],
  },
];
