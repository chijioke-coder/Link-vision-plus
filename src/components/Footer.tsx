import { Instagram, MessageCircle } from "lucide-react";
import { VENDOR_WHATSAPP_NUMBER } from "@/lib/checkout";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
        <h2 className="font-display text-xl font-bold text-foreground">Link Vision Plus</h2>
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <a
          href={`https://wa.me/${VENDOR_WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full text-base transition-transform hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-5 h-5" />
          Chat with a Specialist
        </a>
        <p className="text-muted-foreground text-sm">
          © 2026 Link Vision Plus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
