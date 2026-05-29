export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  previousPrice?: number;
  tag: string;
  sizes: string[];
  colors: string[];
  description: string;
  details: string[];
  kitStyle: string;
  accent: string;
};

export const products: Product[] = [
  {
    slug: "amarela-essencial",
    name: "Camisa Amarela Essencial",
    subtitle: "Leve, respiravel e pronta para pelada ou arquibancada.",
    price: 189,
    previousPrice: 229,
    tag: "Mais vendida",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Amarelo", "Verde"],
    description:
      "Modelo autoral inspirado no futebol brasileiro, com corte esportivo, tecido macio e acabamento em verde nas mangas.",
    details: ["Dry knit 145 g/m2", "Gola careca canelada", "Recortes laterais respiraveis", "Producao limitada"],
    kitStyle: "linear-gradient(145deg, #ffe15f 0%, #f5bf26 54%, #0b7a47 55%, #0b7a47 100%)",
    accent: "#f6d64a"
  },
  {
    slug: "azul-noturna",
    name: "Camisa Azul Noturna",
    subtitle: "Visual alternativo com detalhes em amarelo.",
    price: 199,
    tag: "Nova",
    sizes: ["P", "M", "G", "GG", "XG"],
    colors: ["Azul", "Amarelo"],
    description:
      "Uma camisa de presenca forte para quem prefere um uniforme alternativo, com textura sutil e caimento limpo.",
    details: ["Malha fria premium", "Costura reforcada", "Punhos com contraste", "Secagem rapida"],
    kitStyle: "linear-gradient(145deg, #174c99 0%, #102f67 58%, #f4ce3f 59%, #f4ce3f 100%)",
    accent: "#1f4f9a"
  },
  {
    slug: "branca-treino",
    name: "Camisa Branca Treino",
    subtitle: "Minimalista, fresca e facil de combinar.",
    price: 169,
    tag: "Treino",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Branco", "Verde", "Azul"],
    description:
      "Feita para treinos e dias quentes, com base branca, faixas discretas e toque macio no corpo.",
    details: ["Tecido ultraleve", "Barra levemente alongada", "Acabamento anti-atrito", "Etiqueta interna impressa"],
    kitStyle: "linear-gradient(145deg, #ffffff 0%, #edf2f7 52%, #167a51 53%, #167a51 67%, #1f4f9a 68%, #1f4f9a 100%)",
    accent: "#157f4f"
  },
  {
    slug: "verde-urbana",
    name: "Camisa Verde Urbana",
    subtitle: "Energia de rua com pegada esportiva.",
    price: 179,
    tag: "Casual",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Verde", "Azul"],
    description:
      "Camisa casual de futebol para usar fora de campo, com tom verde profundo e detalhes azuis nas laterais.",
    details: ["Corte regular", "Tecido com elasticidade", "Detalhe lateral contrastante", "Lavagem facil"],
    kitStyle: "linear-gradient(145deg, #168653 0%, #0c5f3a 58%, #1d56a5 59%, #1d56a5 100%)",
    accent: "#157f4f"
  }
];

export function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
