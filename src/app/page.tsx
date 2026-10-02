import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PartnersBar from '@/components/PartnersBar';
import CoursesSection from '@/components/CoursesSection';
import CategoriesSection from '@/components/CategoriesSection';
import GrowthSection from '@/components/GrowthSection';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <HeroSection />
      <PartnersBar />
      <CoursesSection />
      <CategoriesSection />
      <GrowthSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
