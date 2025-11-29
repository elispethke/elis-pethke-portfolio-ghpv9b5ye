import { Hero } from '@/components/Hero'
import { Bio } from '@/components/Bio'
import { ProjectsSection } from '@/components/ProjectsSection'
import { AppsSection } from '@/components/AppsSection'
import { ContactSection } from '@/components/ContactSection'

const Index = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Bio />
      <ProjectsSection />
      <AppsSection />
      <ContactSection />
    </div>
  )
}

export default Index
