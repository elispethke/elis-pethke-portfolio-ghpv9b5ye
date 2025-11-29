import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { content } from '@/data/content'

const Resume = () => {
  const { language } = useLanguage()
  const { bio } = content

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
        <h1 className="text-4xl font-heading font-bold">Resume</h1>
        <div className="flex gap-4">
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Download className="w-4 h-4" />
            Download PDF (EN)
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download PDF (PT)
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-card shadow-xl rounded-xl p-8 md:p-12 border border-border">
        {/* Header */}
        <header className="border-b border-border pb-8 mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">Elis Pethke</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Frontend & Mobile Engineer
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> contact@elispethke.com
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Berlin, Germany
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" /> elispethke.com
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" /> linkedin.com/in/elis
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h3 className="text-lg font-bold uppercase tracking-wider text-accent mb-4">
            Summary
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {bio[language]}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-lg font-bold uppercase tracking-wider text-accent mb-4">
            Experience
          </h3>

          <div className="mb-6">
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="font-bold text-lg">Senior Frontend Engineer</h4>
              <span className="text-sm text-muted-foreground">
                2022 - Present
              </span>
            </div>
            <p className="text-primary font-medium mb-2">Tech Corp • Berlin</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>
                Led the migration of legacy codebase to Next.js and TypeScript.
              </li>
              <li>
                Improved site performance by 40% through code splitting and
                image optimization.
              </li>
              <li>
                Mentored junior developers and established code quality
                standards.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="font-bold text-lg">Mobile Developer</h4>
              <span className="text-sm text-muted-foreground">2020 - 2022</span>
            </div>
            <p className="text-primary font-medium mb-2">App Studio • Remote</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>
                Developed and launched 3 native iOS apps using Swift and
                SwiftUI.
              </li>
              <li>
                Collaborated with designers to implement complex animations and
                transitions.
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-lg font-bold uppercase tracking-wider text-accent mb-4">
            Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold mb-2">Frontend</h4>
              <p className="text-muted-foreground">
                React, Next.js, TypeScript, Tailwind CSS, Redux, HTML5, CSS3
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Mobile</h4>
              <p className="text-muted-foreground">
                Swift, SwiftUI, React Native, Expo
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Tools & Others</h4>
              <p className="text-muted-foreground">
                Git, Figma, Jest, CI/CD, Agile
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Languages</h4>
              <p className="text-muted-foreground">
                English (Fluent), Portuguese (Native), German (B1)
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume
