import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { LanguageProvider } from '@/lib/language-context'

export default function Layout() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-background text-foreground font-sans selection:bg-accent/20">
        <Header />
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
