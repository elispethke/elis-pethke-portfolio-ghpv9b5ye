import { cn } from '@/lib/utils'

export const LizyAvatar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'relative w-32 h-32 flex items-center justify-center',
        className,
      )}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse" />

      {/* Main Body */}
      <div className="relative w-24 h-24 bg-gradient-to-br from-white to-secondary rounded-full shadow-lg border-2 border-white/50 flex items-center justify-center animate-float-slow overflow-hidden">
        {/* Face Screen */}
        <div className="w-16 h-12 bg-foreground/90 rounded-xl flex items-center justify-center gap-2 relative overflow-hidden">
          {/* Eyes */}
          <div className="w-3 h-3 bg-accent rounded-full animate-blink" />
          <div className="w-3 h-3 bg-accent rounded-full animate-blink" />

          {/* Reflection */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Speech Bubble (Static for now, could be dynamic) */}
      <div className="absolute -top-8 -right-8 bg-white dark:bg-card text-xs font-bold px-3 py-1.5 rounded-tl-xl rounded-tr-xl rounded-br-xl shadow-md animate-fade-in-up delay-1000 opacity-0 fill-mode-forwards">
        Hi there!
      </div>
    </div>
  )
}
