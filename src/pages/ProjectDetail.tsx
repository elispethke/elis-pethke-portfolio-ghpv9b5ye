import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { content } from '@/data/content'
import { SEO } from '@/components/SEO'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = content.projects.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Button onClick={() => navigate('/')}>Go Home</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO
        title={project.title}
        description={project.description}
        image={project.screenshots[0]}
      />

      <Button
        variant="ghost"
        className="mb-8 gap-2 hover:text-accent"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-4 h-4" /> Back to Projects
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Info */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h1 className="text-4xl font-heading font-bold mb-4 text-primary">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              {project.role}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase tracking-wider text-accent">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase tracking-wider text-accent">
              Links
            </h3>
            <div className="flex flex-col gap-3">
              {project.links.live && (
                <Button className="w-full justify-start gap-2" asChild>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" /> Visit Live Site
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  asChild
                >
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" /> View Source Code
                  </a>
                </Button>
              )}
              {project.links.appStore && (
                <Button className="w-full justify-start gap-2" asChild>
                  <a
                    href={project.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4" /> App Store
                  </a>
                </Button>
              )}
              {project.links.testFlight && (
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  asChild
                >
                  <a
                    href={project.links.testFlight}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4" /> TestFlight
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Content & Gallery */}
        <div className="lg:col-span-2 space-y-12">
          <div className="prose dark:prose-invert max-w-none">
            <h3 className="text-2xl font-bold mb-4">About the Project</h3>
            <p className="text-lg leading-relaxed text-muted-foreground font-body">
              {project.fullDescription}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Gallery</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {project.screenshots.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border">
                      <img
                        src={src}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2 text-center opacity-70">
                        {project.title} - Screen {index + 1}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
