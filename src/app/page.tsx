import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ProductsPreview } from '@/components/sections/ProductsPreview';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { CTASection } from '@/components/sections/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ved Rexine Store | Premium Foam, EVA & Mattress Supplier Delhi Since 1967',
  description:
    'Delhi\'s most trusted foam supplier since 1967. Premium PU foam sheets, EVA sheets, spring mattresses, rubber adhesives & shoe materials in Karol Bagh, New Delhi.',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProductsPreview />
      <IndustriesSection />
      <GalleryPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
