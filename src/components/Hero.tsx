import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThreeDTitle } from './ThreeDTitle'
import { LizyAvatar } from './LizyAvatar'
import { useLanguage } from '@/lib/language-context'
import { content } from '@/data/content'

export const Hero = () => {
  const { language } = useLanguage()
  const { hero } = content

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background -z-20" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div
        className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-float-slow"
        style={{ animationDelay: '2s' }}
      />

      <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
        <ThreeDTitle text={hero.title} className="mb-6" />

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-up delay-200 font-light">
          {hero.subheading[language]}
        </p>

        <div className="mb-12 animate-fade-in-up delay-300">
          <LizyAvatar />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={scrollToProjects}
          >
            {hero.cta.projects[language]}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 text-lg border-2 hover:bg-secondary hover:scale-105 transition-all duration-300"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            {hero.cta.resume[language]}
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
