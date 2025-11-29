import { content } from '@/data/content'
import { useLanguage } from '@/lib/language-context'
import { ProjectCard } from './ProjectCard'

export const ProjectsSection = () => {
  const { language } = useLanguage()
  const webProjects = content.projects.filter((p) => p.type === 'web')

  return (
    <section id="projects" className="py-24 container mx-auto px-4">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          {language === 'en' ? 'Web Projects' : 'Projetos Web'}
        </h2>
        <div className="w-20 h-1 bg-accent rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {webProjects.map((project, index) => (
          <div
            key={project.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}
