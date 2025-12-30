import { Link } from 'react-router-dom'
import { ArrowRight, Github, ExternalLink, Download } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Project } from '@/data/content'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/project/${project.id}`} className="block group h-full">
      <Card className="h-full glass-panel border-transparent hover:border-accent/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden flex flex-col">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={project.screenshots[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-medium flex items-center gap-2">
              View Details <ArrowRight className="w-4 h-4" />
            </span>
          </div>
          {/* Fallback Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-[10px] p-1 text-center opacity-50">
            {project.title}
          </div>
        </div>

        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">
              {project.title}
            </CardTitle>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.techStack.length - 3}
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm line-clamp-3 font-body">
            {project.description}
          </p>
        </CardContent>

        <CardFooter className="pt-0 gap-4">
          {project.links.live && (
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 px-0 hover:bg-transparent hover:text-accent"
              asChild
            >
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" /> Live
              </a>
            </Button>
          )}
          {project.links.github && (
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 px-0 hover:bg-transparent hover:text-accent"
              asChild
            >
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" /> Code
              </a>
            </Button>
          )}
          {project.links.appStore && (
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 px-0 hover:bg-transparent hover:text-accent"
              asChild
            >
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="w-4 h-4" /> App Store
              </a>
            </Button>
          )}
          {project.links.testFlight && (
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 px-0 hover:bg-transparent hover:text-accent"
              asChild
            >
              <a
                href={project.links.testFlight}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="w-4 h-4" /> TestFlight
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </Link>
  )
}
