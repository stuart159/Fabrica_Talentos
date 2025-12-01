import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCompanies } from "@/components/home/FeaturedCompanies";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { StatsSection } from "@/components/home/StatsSection";
import { CTASection } from "@/components/home/CTASection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedCompanies />
      <CategoriesSection />
      <FeaturedJobs />
      <StatsSection />
      <CTASection />
      <WhyChooseUs />
    </Layout>
  );
};

export default Index;
