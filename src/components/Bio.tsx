import { useLanguage } from '@/lib/language-context'
import { content } from '@/data/content'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export const Bio = () => {
  const { language } = useLanguage()
  const { bio } = content

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-accent rounded-full blur-lg opacity-20 animate-pulse" />
              <Avatar className="w-full h-full border-4 border-white dark:border-gray-800 shadow-xl">
                <AvatarImage
                  src="https://img.usecurling.com/ppl/large?gender=female"
                  alt="Elis Pethke"
                  className="object-cover"
                />
                <AvatarFallback>EP</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl font-heading font-bold">About Me</h2>
              <p className="text-lg leading-relaxed text-muted-foreground font-body">
                {bio.en}
              </p>
              <div className="h-px w-20 bg-accent/50 mx-auto md:mx-0" />
              <p className="text-lg leading-relaxed text-muted-foreground font-body italic">
                {bio.pt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
