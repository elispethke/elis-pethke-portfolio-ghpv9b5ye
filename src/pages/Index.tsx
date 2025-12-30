import { Hero } from '@/components/Hero'
import { VideoSection } from '@/components/VideoSection'
import { Bio } from '@/components/Bio'
import { PortfolioGallery } from '@/components/PortfolioGallery'
import { ContactSection } from '@/components/ContactSection'
import { SEO } from '@/components/SEO'
import { content } from '@/data/content'

const Index = () => {
  const { hero } = content

  return (
    <div className="flex flex-col w-full">
      <SEO title="Home" description={hero.subheading} />
      <Hero />
      <VideoSection />
      <Bio />
      <PortfolioGallery />
      <ContactSection />
    </div>
  )
}

export default Index
