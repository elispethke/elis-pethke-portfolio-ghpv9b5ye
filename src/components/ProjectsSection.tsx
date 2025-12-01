import { content } from '@/data/content'
import { useLanguage } from '@/lib/language-context'
import { ProjectCard } from './ProjectCard'

export const ProjectsSection = () => {
  const { language } = useLanguage()
  // Display up to 10 web projects
  const webProjects = content.projects
    .filter((p) => p.type === 'web')
    .slice(0, 10)

  return (
    <section id="projects" className="py-24 container mx-auto px-4">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          {language === 'en' ? 'Web Projects' : 'Projetos Web'}
        </h2>
        <div className="w-20 h-1 bg-accent rounded-full" />
        <p className="mt-4 text-muted-foreground">
          {language === 'en'
            ? 'A selection of my latest web development work.'
            : 'Uma seleção dos meus trabalhos mais recentes de desenvolvimento web.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {webProjects.map((project, index) => (
          <div
            key={project.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${Math.min(index * 50, 500)}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}
