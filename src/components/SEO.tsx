import { useEffect } from 'react'
import { useLanguage } from '@/lib/language-context'

interface SEOProps {
  title: string
  description?: string
  image?: string
  type?: string
}

export const SEO = ({
  title,
  description,
  image,
  type = 'website',
}: SEOProps) => {
  const { language } = useLanguage()

  useEffect(() => {
    document.title = `${title} | Elis Pethke`

    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    const updateOgMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('property', property)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    if (description) {
      updateMeta('description', description)
      updateOgMeta('og:description', description)
    }

    updateOgMeta('og:title', title)
    updateOgMeta('og:type', type)
    if (image) updateOgMeta('og:image', image)

    // Structured Data
    const scriptId = 'structured-data'
    let script = document.getElementById(scriptId) as HTMLScriptElement
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Elis Pethke',
      url: window.location.origin,
      jobTitle: 'Frontend & Mobile Engineer',
      sameAs: [
        'https://github.com/elispethke',
        'https://linkedin.com/in/elispethke',
      ],
    }
    script.text = JSON.stringify(structuredData)

    // Language attribute
    document.documentElement.lang = language
  }, [title, description, image, type, language])

  return null
}
