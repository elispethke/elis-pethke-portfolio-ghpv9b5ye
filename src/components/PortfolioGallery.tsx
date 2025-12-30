import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProjectCard } from './ProjectCard'
import { content } from '@/data/content'

export const PortfolioGallery = () => {
  const { projects } = content
  const [activeTab, setActiveTab] = useState('web')

  const webProjects = projects.filter((p) => p.type === 'web')
  const iosProjects = projects.filter((p) => p.type === 'ios')
  const rnProjects = projects.filter((p) => p.type === 'react-native')

  return (
    <section id="projects" className="py-24 container mx-auto px-4">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Project Gallery
        </h2>
        <div className="w-20 h-1 bg-accent rounded-full mb-6" />
        <p className="text-muted-foreground max-w-2xl">
          Explore my latest work across web and mobile platforms.
        </p>
      </div>

      <Tabs
        defaultValue="web"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="flex justify-center mb-12">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="web">Web Projects</TabsTrigger>
            <TabsTrigger value="ios">iOS Swift</TabsTrigger>
            <TabsTrigger value="rn">React Native</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="web" className="animate-fade-in space-y-8">
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
        </TabsContent>

        <TabsContent value="ios" className="animate-fade-in space-y-8">
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
        </TabsContent>

        <TabsContent value="rn" className="animate-fade-in space-y-8">
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
        </TabsContent>
      </Tabs>
    </section>
  )
}
