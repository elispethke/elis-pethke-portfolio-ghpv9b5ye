import { AspectRatio } from '@/components/ui/aspect-ratio'
import { content } from '@/data/content'

export const VideoSection = () => {
  const { presentation } = content

  return (
    <section className="py-24 relative overflow-hidden bg-secondary/5">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-float-slow" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {presentation.title}
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        <div
          className="max-w-4xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 dark:border-white/10 bg-black group">
            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src={presentation.videoUrl}
                  title={presentation.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
