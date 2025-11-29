import { Download, Mail, MapPin, Globe, Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { content } from '@/data/content'
import { SEO } from '@/components/SEO'

const Resume = () => {
  const { language } = useLanguage()
  const { bio, experience, education, skills } = content

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <SEO
        title={language === 'en' ? 'Resume' : 'Currículo'}
        description={bio[language].substring(0, 150)}
      />

      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4 no-print">
        <h1 className="text-4xl font-heading font-bold">
          {language === 'en' ? 'Resume' : 'Currículo'}
        </h1>
        <div className="flex gap-4">
          <Button
            className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => window.open('/resume-en.pdf', '_blank')}
          >
            <Download className="w-4 h-4" />
            Download PDF (EN)
          </Button>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => window.open('/resume-pt.pdf', '_blank')}
          >
            <Download className="w-4 h-4" />
            Download PDF (PT)
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-card shadow-xl rounded-xl p-8 md:p-12 border border-border print:shadow-none print:border-none print:p-0">
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
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" /> github.com/elispethke
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h3 className="text-lg font-bold uppercase tracking-wider text-accent mb-4">
            {language === 'en' ? 'Summary' : 'Resumo'}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-justify">
            {bio[language]}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-lg font-bold uppercase tracking-wider text-accent mb-4">
            {language === 'en' ? 'Experience' : 'Experiência'}
          </h3>

          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.id}>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-bold text-lg">{job.role[language]}</h4>
                  <span className="text-sm text-muted-foreground">
                    {job.period[language]}
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">{job.company}</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {job.description[language].map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h3 className="text-lg font-bold uppercase tracking-wider text-accent mb-4">
            {language === 'en' ? 'Education' : 'Educação'}
          </h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg">{edu.degree[language]}</h4>
                  <span className="text-sm text-muted-foreground">
                    {edu.year}
                  </span>
                </div>
                <p className="text-muted-foreground">{edu.institution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-lg font-bold uppercase tracking-wider text-accent mb-4">
            {language === 'en' ? 'Skills' : 'Habilidades'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Frontend</h4>
              <p className="text-muted-foreground">
                {skills.frontend.join(', ')}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Mobile</h4>
              <p className="text-muted-foreground">
                {skills.mobile.join(', ')}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Tools & Others</h4>
              <p className="text-muted-foreground">{skills.tools.join(', ')}</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">
                {language === 'en' ? 'Languages' : 'Idiomas'}
              </h4>
              <p className="text-muted-foreground">
                {skills.languages[language]}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Resume
