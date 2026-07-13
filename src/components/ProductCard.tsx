import { useState } from "react";
import CheckoutModal from "./CheckoutModal";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  tag?: string;
  options?: { label: string; price: string }[];
  index: number;
}

const ProductCard = ({ image, name, price, originalPrice, tag, options, index }: ProductCardProps) => {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <>
      <div
        className="glass rounded-card overflow-hidden group transition-transform hover:scale-[1.02] active:scale-[0.98]"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-display text-base font-semibold text-foreground mb-1">{name}</h3>
            {tag ? (
              <span className="text-xs px-2 py-1 rounded-full bg-emerald-700/10 text-emerald-200 font-semibold">{tag}</span>
            ) : null}
          </div>
          <div className="flex items-baseline gap-3">
            {originalPrice ? (
              <span className="text-muted-foreground line-through">{originalPrice}</span>
            ) : null}
            <p className="text-gold font-bold text-lg mb-3">{price}</p>
          </div>
          <button
            onClick={() => setShowCheckout(true)}
            className="w-full gold-gradient gold-glow text-primary-foreground font-semibold py-3 rounded-full text-sm transition-transform hover:scale-105 active:scale-95"
          >
            Order via Pay on Delivery
          </button>
        </div>
      </div>

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        productName={name}
        productPrice={price}
        options={options}
      />
    </>
  );
};

export default ProductCard;
