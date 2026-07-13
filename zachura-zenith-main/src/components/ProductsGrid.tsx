import ProductCard from "./ProductCard";

const products = [
  {
    image: "/images/IMG-20260712-WA0008.jpg",
    name: "4G Solar AI Camera — 64GB Bundle",
    price: "₦75,000",
    originalPrice: "₦95,000",
    tag: "Most Popular",
    options: [
      { label: "64GB High-Speed Memory Card Bundle", price: "₦75,000" },
      { label: "128GB Ultra-Capacity Memory Card Bundle", price: "₦120,000" },
    ],
  },
  {
    image: "/images/IMG-20260712-WA0006.jpg",
    name: "4G Solar AI Camera — 128GB Bundle",
    price: "₦120,000",
    originalPrice: "₦150,000",
    tag: "Best Value",
    options: [
      { label: "64GB High-Speed Memory Card Bundle", price: "₦75,000" },
      { label: "128GB Ultra-Capacity Memory Card Bundle", price: "₦120,000" },
    ],
  },
  {
    image: "/images/IMG-20260712-WA0013.jpg",
    name: "Premium PTZ Dual Lens Solar System",
    price: "₦145,000",
    originalPrice: "₦185,000",
    tag: "Industrial",
  },
  {
    image: "/images/IMG-20260712-WA0009.jpg",
    name: "2-in-1 Solar Street Light & CCTV Combo",
    price: "₦160,000",
    originalPrice: "₦210,000",
    tag: "All-in-One",
  },
  {
    image: "/images/IMG-20260712-WA0005.jpg",
    name: "Solar Battery CCTV — Outdoor",
    price: "₦85,000",
    originalPrice: "₦110,000",
  },
  {
    image: "/images/IMG-20260712-WA0010.jpg",
    name: "4G Dome Camera — Ultra HD",
    price: "₦95,000",
    originalPrice: "₦125,000",
  },
  {
    image: "/images/IMG-20260712-WA0011.jpg",
    name: "Battery-Backed Solar Camera",
    price: "₦65,000",
    originalPrice: "₦85,000",
  },
  {
    image: "/images/IMG-20260712-WA0004.jpg",
    name: "Night Vision Pro Camera",
    price: "₦105,000",
    originalPrice: "₦130,000",
  },
  {
    image: "/images/IMG-20260712-WA0007.jpg",
    name: "Dual Lens Smart Camera",
    price: "₦135,000",
    originalPrice: "₦170,000",
  },
];

const ProductsGrid = () => {
  return (
    <section id="products" className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
        Link Vision Plus — Security Catalog
      </h2>
      <p className="text-muted-foreground text-center mb-12 text-lg">
        Premium 4G Solar CCTV & Smart Security Systems — Alaba International Market
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, i) => (
          <ProductCard key={product.name} {...product} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
