import HeroBanner from "@/components/home/HeroBanner";
import TrustBar from "@/components/home/TrustBar";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import ProductRecommendation from "@/components/home/ProductRecommendation";
import ProductBenefits from "@/components/home/ProductBenefits";
import MattressAnatomy from "@/components/home/MattressAnatomy";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroBanner />
      <TrustBar />
      <FeaturedCollections />
      <ProductBenefits />
      <MattressAnatomy />
      <ProductRecommendation />
      <Testimonials />
    </div>
  );
}
