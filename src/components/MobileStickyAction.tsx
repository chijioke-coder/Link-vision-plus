import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import CheckoutModal from "./CheckoutModal";

const MobileStickyAction = () => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroHeight = heroSection?.offsetHeight ?? 0;
      setShow(window.scrollY > heroHeight * 0.95);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2 border-t border-white/20 bg-emerald-600 px-4 py-4 text-sm font-semibold text-white shadow-[0_-10px_30px_rgba(0,0,0,0.16)] transition-all duration-300 md:hidden ${show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}
      >
        <MessageCircle className="h-4 w-4" />
        🛒 Order via WhatsApp — Pay on Delivery
      </button>

      <CheckoutModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        productName="4G Solar AI Camera — 64GB Bundle"
        productPrice="₦75,000"
      />
    </>
  );
};

export default MobileStickyAction;
