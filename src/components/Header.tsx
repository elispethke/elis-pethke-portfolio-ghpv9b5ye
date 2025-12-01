import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useLanguage } from '@/lib/language-context'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './ThemeToggle'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'projects', label: { en: 'Web Projects', pt: 'Projetos Web' } },
    { id: 'apps', label: { en: 'Mobile Apps', pt: 'Apps Mobile' } },
    { id: 'contact', label: { en: 'Contact', pt: 'Contato' } },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent no-print',
        isScrolled
          ? 'bg-white/80 dark:bg-background/80 backdrop-blur-md shadow-sm border-border/40 py-2'
          : 'bg-transparent py-4',
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 hover:scale-105 transition-transform duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Avatar className="h-10 w-10 border border-accent/20 bg-secondary p-0.5">
            <AvatarImage
              src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=12"
              alt="Elis Pethke"
              className="object-cover rounded-full"
            />
            <AvatarFallback className="bg-secondary text-xs text-secondary-foreground">
              EP
            </AvatarFallback>
          </Avatar>
          <span className="text-xl md:text-2xl font-heading font-bold tracking-tighter">
            Elis Pethke
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {item.label[language]}
            </button>
          ))}
          <Link
            to="/resume"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            {language === 'en' ? 'Resume' : 'Currículo'}
          </Link>

          <div className="h-4 w-px bg-border" />

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
            className="gap-2"
          >
            <Globe className="w-4 h-4" />
            <span className={cn(language === 'en' && 'font-bold')}>EN</span>
            <span>/</span>
            <span className={cn(language === 'pt' && 'font-bold')}>PT</span>
          </Button>

          <ThemeToggle />
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
          >
            <span className="text-xs font-bold">{language.toUpperCase()}</span>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-lg font-medium text-left hover:text-accent transition-colors"
                  >
                    {item.label[language]}
                  </button>
                ))}
                <Link
                  to="/resume"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-left hover:text-accent transition-colors"
                >
                  {language === 'en' ? 'Resume' : 'Currículo'}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
