import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-heading font-bold text-lg">Elis Pethke</h3>
          <p className="text-sm text-muted-foreground mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/elispethke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/elispethke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:contact@elispethke.com" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
