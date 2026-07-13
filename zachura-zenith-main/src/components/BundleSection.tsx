import { useState } from "react";
import { MessageCircle } from "lucide-react";
import CheckoutModal from "./CheckoutModal";

const BundleSection = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  // Example bundle pricing for a security starter pack
  const originalPrice = 95000 + 145000 + 160000;
  const discountedPrice = Math.round(originalPrice * 0.88);
  const formattedOriginal = `₦${originalPrice.toLocaleString()}`;
  const formattedDiscount = `₦${discountedPrice.toLocaleString()}`;

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="glass rounded-card p-8 md:p-12 text-center relative overflow-hidden">
        <span className="absolute top-4 right-4 gold-gradient text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
          SAVE 15%
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">
          Security Starter Pack
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          A curated starter pack of solar CCTV essentials for homes and small businesses.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 mb-8 md:flex-row">
          <span className="text-muted-foreground line-through text-xl">{formattedOriginal}</span>
          <div className="flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-2 shadow-sm">
            <span className="text-emerald-700 text-sm font-semibold uppercase tracking-[0.24em]">New price</span>
            <span className="text-emerald-700 font-black text-3xl md:text-4xl">{formattedDiscount}</span>
          </div>
        </div>
        <button
          onClick={() => setShowCheckout(true)}
          className="inline-flex items-center gap-2 gold-gradient gold-glow text-primary-foreground font-semibold px-10 py-4 rounded-full text-lg transition-transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-5 h-5" />
          Order Starter Pack
        </button>
      </div>

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        productName="Security Starter Pack"
        productPrice={formattedDiscount}
      />
    </section>
  );
};

export default BundleSection;
