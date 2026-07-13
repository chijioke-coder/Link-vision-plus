import { ShoppingBag } from "lucide-react";

const GlassHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
          Link Vision Plus
        </h1>
        <button className="relative p-2 rounded-full hover:bg-muted transition-colors">
          <ShoppingBag className="w-6 h-6 text-foreground" />
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gold-gradient text-xs font-bold flex items-center justify-center text-primary-foreground">
            0
          </span>
        </button>
      </div>
    </header>
  );
};

export default GlassHeader;
