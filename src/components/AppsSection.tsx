import { content } from '@/data/content'
import { useLanguage } from '@/lib/language-context'
import { ProjectCard } from './ProjectCard'

export const AppsSection = () => {
  const { language } = useLanguage()
  // Display up to 10 iOS projects
  const iosProjects = content.projects
    .filter((p) => p.type === 'ios')
    .slice(0, 10)
  // Display up to 5 React Native projects
  const rnProjects = content.projects
    .filter((p) => p.type === 'react-native')
    .slice(0, 5)

  return (
    <section id="apps" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {language === 'en' ? 'Mobile Apps' : 'Apps Mobile'}
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        {/* iOS Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-primary rounded-full" />
            iOS (Swift)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iosProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${Math.min(index * 50, 500)}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* React Native Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-accent rounded-full" />
            React Native
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rnProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${Math.min(index * 50, 500)}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
