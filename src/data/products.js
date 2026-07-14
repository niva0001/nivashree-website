import sabudana from "../assets/products/sabudana.png";
import jeera from "../assets/products/jeera.png";
import tejpatta from "../assets/products/tejpatta.png";
import nakuldana from "../assets/products/nakuldana.png";
import cuttingMishri from "../assets/products/cutting-mishri.png";

const products = [
  {
    id: 1,
    slug: "sabudana",
    name: "Premium Sabudana",
    image: sabudana,
    badge: "Best Seller",
    featured: true,

    sizes: ["200g", "500g"],

    description:
      "Premium quality sabudana carefully selected for delicious vrat recipes, creamy kheer, khichdi and other traditional Indian dishes. Hygienically packed to preserve freshness and purity.",

    features: [
      "Premium Quality",
      "Hygienically Packed",
      "Perfect for Vrat",
      "Easy to Cook",
      "Fresh & Clean",
    ],
  },

  {
    id: 2,
    slug: "jeera",
    name: "Premium Jeera",
    image: jeera,
    badge: "Premium",

    featured: false,

    sizes: ["Coming Soon"],

    description:
      "Fresh and aromatic cumin seeds carefully selected to enhance the flavor of curries, vegetables, rice dishes and Indian spices.",

    features: [
      "Rich Aroma",
      "Premium Quality",
      "Freshly Packed",
      "Authentic Taste",
      "Daily Cooking Essential",
    ],
  },

  {
    id: 3,
    slug: "tej-patta",
    name: "Premium Tej Patta",
    image: tejpatta,
    badge: "Premium",

    featured: false,

    sizes: [ "50g", ],

    description:
      "Naturally dried premium bay leaves that add a rich aroma and authentic flavor to biryani, pulao, curries and traditional recipes.",

    features: [
      "Natural Aroma",
      "Premium Leaves",
      "Hygienically Packed",
      "Rich Flavor",
      "Perfect for Indian Cuisine",
    ],
  },

  {
    id: 4,
    slug: "nakuldana",
    name: "Premium Nakuldana",
    image: nakuldana,
    badge: "Traditional",

    featured: false,

    sizes: ["coming soon"],

    description:
      "Traditional premium Nakuldana prepared with quality ingredients, ideal for festivals, puja, prasad and daily offerings.",

    features: [
      "Traditional Taste",
      "Premium Quality",
      "Freshly Packed",
      "Perfect for Puja",
      "Pure & Hygienic",
    ],
  },

  {
    id: 5,
    slug: "cutting-mishri",
    name: "Premium Cutting Mishri",
    image: cuttingMishri,
    badge: "Premium",

    featured: false,

    sizes: ["coming soon"],

    description:
      "Premium quality cutting mishri made from carefully selected sugar crystals. Sweet, crunchy and perfect for daily use, prasad and refreshments.",

    features: [
      "Pure Sugar Crystals",
      "Premium Quality",
      "Hygienically Packed",
      "Fresh & Crunchy",
      "Traditional Sweetness",
    ],
  },
];

export default products;