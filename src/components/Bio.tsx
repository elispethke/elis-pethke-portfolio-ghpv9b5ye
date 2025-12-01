import { useLanguage } from '@/lib/language-context'
import { content } from '@/data/content'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export const Bio = () => {
  const { language } = useLanguage()
  const { bio } = content

  // Split bio into paragraphs
  const paragraphs = bio[language].split('\n\n')

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-float-slow delay-1000" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {language === 'en' ? 'About Me' : 'Sobre Mim'}
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden border-none shadow-2xl bg-white/60 dark:bg-black/40 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Side */}
            <div className="lg:col-span-4 relative min-h-[300px] lg:min-h-full bg-secondary/30 flex items-center justify-center p-8">
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
                <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-30 animate-pulse" />
                <Avatar className="w-full h-full border-4 border-white dark:border-gray-800 shadow-xl z-10">
                  <AvatarImage
                    src="https://img.usecurling.com/ppl/large?gender=female&seed=12"
                    alt="Elis Pethke"
                    className="object-cover"
                  />
                  <AvatarFallback>EP</AvatarFallback>
                </Avatar>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-accent/50 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-accent/50 rounded-br-xl" />
            </div>

            {/* Content Side */}
            <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                {paragraphs.map((paragraph, index) => {
                  // Check if paragraph contains a list (e.g., "Technology: Description")
                  if (paragraph.includes(':') && paragraph.length < 250) {
                    const [title, desc] = paragraph.split(':')
                    return (
                      <div
                        key={index}
                        className="pl-4 border-l-2 border-accent/60 hover:border-accent transition-colors"
                      >
                        <span className="font-bold text-foreground block mb-1">
                          {title}:
                        </span>
                        <span className="text-muted-foreground font-body">
                          {desc}
                        </span>
                      </div>
                    )
                  }
                  return (
                    <p
                      key={index}
                      className={cn(
                        'text-muted-foreground font-body leading-relaxed',
                        index === 0 &&
                          'text-lg md:text-xl font-medium text-foreground/90',
                      )}
                    >
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
