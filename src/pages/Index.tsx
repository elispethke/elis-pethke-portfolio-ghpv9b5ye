import { Hero } from '@/components/Hero'
import { Bio } from '@/components/Bio'
import { ProjectsSection } from '@/components/ProjectsSection'
import { AppsSection } from '@/components/AppsSection'
import { ContactSection } from '@/components/ContactSection'
import { SEO } from '@/components/SEO'
import { useLanguage } from '@/lib/language-context'
import { content } from '@/data/content'

const Index = () => {
  const { language } = useLanguage()
  const { hero } = content

  return (
    <div className="flex flex-col w-full">
      <SEO title="Home" description={hero.subheading[language]} />
      <Hero />
      <Bio />
      <ProjectsSection />
      <AppsSection />
      <ContactSection />
    </div>
  )
}

export default Index
