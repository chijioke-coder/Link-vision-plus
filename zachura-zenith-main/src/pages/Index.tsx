import GlassHeader from "@/components/GlassHeader";
import HeroSection from "@/components/HeroSection";
import ProductsGrid from "@/components/ProductsGrid";
import BundleSection from "@/components/BundleSection";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import MobileStickyAction from "@/components/MobileStickyAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <GlassHeader />
      <HeroSection />
      <ProductsGrid />
      <BundleSection />
      <SocialProof />
      <Footer />
      <MobileStickyAction />
    </div>
  );
};

export default Index;
