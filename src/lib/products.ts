export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  comparePrice?: number;
  description: string;
  category: string;
  tags: string[];
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "mielle-scalp-oil",
    name: "Scalp & Hair Strengthening Oil",
    brand: "Mielle",
    price: 199,
    description:
      "Rosmarin och mint stimulerar hårsäckarna och förbättrar blodcirkulationen för starkare, friskare hår.",
    category: "oljor",
    tags: ["rosmarin", "mint", "hårväxt"],
    image: "/products/oil.jpg",
    badge: "Bästsäljare",
  },
  {
    id: "mielle-shampoo",
    name: "Strengthening Shampoo",
    brand: "Mielle",
    price: 239,
    description:
      "Djuprengörande shampoo med rosmarin och mint som stärker håret från roten.",
    category: "schampo",
    tags: ["rosmarin", "mint", "stärkande"],
    image: "/products/shampoo.jpg",
  },
  {
    id: "mielle-conditioner",
    name: "Strengthening Leave-In Conditioner",
    brand: "Mielle",
    price: 239,
    description:
      "Leave-in balsam som ger intensiv fukt och detangling utan att tynga ner håret.",
    category: "balsam",
    tags: ["rosmarin", "mint", "leave-in"],
    image: "/products/conditioner.jpg",
  },
  {
    id: "mielle-mask",
    name: "Strengthening Hair Mask",
    brand: "Mielle",
    price: 249,
    description:
      "Djupverkande hårinpackning som reparerar och stärker skadat hår på bara 15 minuter.",
    category: "behandlingar",
    tags: ["rosmarin", "inpackning", "reparerande"],
    image: "/products/mask.jpg",
  },
  {
    id: "mielle-edge-gel",
    name: "Rosemary Mint Strengthening Edge Gel",
    brand: "Mielle",
    price: 179,
    description:
      "Formler baby hairs och edges utan flaking. Håller hela dagen.",
    category: "styling",
    tags: ["edge control", "rosmarin", "mint"],
    image: "/products/edge-gel.jpg",
  },
  {
    id: "mielle-styling-creme",
    name: "Rosemary Mint Daily Styling Créme",
    brand: "Mielle",
    price: 229,
    description:
      "Daglig stylingkräm som definierar lockar och ger fukt utan crunch.",
    category: "styling",
    tags: ["styling", "lockar", "fukt"],
    image: "/products/styling-creme.jpg",
  },
  {
    id: "difeel-biotin-shampoo",
    name: "Biotin Pro Growth Shampoo",
    brand: "Difeel",
    price: 189,
    description:
      "Biotinberikat schampo som stimulerar hårväxt och ger volym från roten.",
    category: "schampo",
    tags: ["biotin", "hårväxt", "volym"],
    image: "/products/difeel-shampoo.jpg",
  },
  {
    id: "difeel-biotin-conditioner",
    name: "Biotin Pro Growth Conditioner",
    brand: "Difeel",
    price: 189,
    description:
      "Matchande balsam till Biotin-serien. Stärker och mjukgör utan att tynga.",
    category: "balsam",
    tags: ["biotin", "hårväxt", "mjukgörande"],
    image: "/products/difeel-conditioner.jpg",
  },
  {
    id: "difeel-biotin-mask",
    name: "Biotin Pro Growth Hair Mask",
    brand: "Difeel",
    price: 199,
    description:
      "Intensiv biotinmask som reparerar och stärker håret på djupet.",
    category: "behandlingar",
    tags: ["biotin", "reparerande", "mask"],
    image: "/products/difeel-mask.jpg",
  },
  {
    id: "k18-repair-mask",
    name: "Peptide Leave-In Molecular Repair Mask",
    brand: "K18",
    price: 399,
    comparePrice: 449,
    description:
      "Patenterad K18Peptide™ reparerar hårskador på molekylär nivå. 4 minuter — synligt resultat.",
    category: "behandlingar",
    tags: ["reparerande", "peptid", "premium"],
    image: "/products/k18.jpg",
    badge: "Premium",
  },
  {
    id: "doux-defining-gel",
    name: "Big Poppa Defining Gel",
    brand: "The Doux",
    price: 249,
    description:
      "Maximalt definition utan crunch. Perfekt för wash-and-go och twist-outs.",
    category: "styling",
    tags: ["gel", "definition", "lockar"],
    image: "/products/doux-gel.jpg",
  },
  {
    id: "doux-mousse",
    name: "Fresh Mousse Def Texture Foam",
    brand: "The Doux",
    price: 249,
    description:
      "Texturerande mousse som ger volym och definition utan att tynga.",
    category: "styling",
    tags: ["mousse", "volym", "textur"],
    image: "/products/doux-mousse.jpg",
  },
];

export const categories = [
  { slug: "alla", label: "Alla" },
  { slug: "schampo", label: "Schampo" },
  { slug: "balsam", label: "Balsam" },
  { slug: "oljor", label: "Oljor" },
  { slug: "behandlingar", label: "Behandlingar" },
  { slug: "styling", label: "Styling" },
];

export const brands = [...new Set(products.map((p) => p.brand))];
