import { useEffect } from 'react'

/**
 * Dynamically load legacy CSS files from the public folder.
 * Pass absolute paths such as /user/assets/css/home.css.
 */
export function usePageStyles(styleHrefs = []) {
  useEffect(() => {
    if (!Array.isArray(styleHrefs) || styleHrefs.length === 0) return undefined

    const head = document.head
    const createdLinks = styleHrefs.map((href) => {
      const linkEl = document.createElement('link')
      linkEl.rel = 'stylesheet'
      linkEl.href = href
      head.appendChild(linkEl)
      return linkEl
    })

    return () => {
      createdLinks.forEach((linkEl) => {
        if (linkEl && head.contains(linkEl)) {
          head.removeChild(linkEl)
        }
      })
    }
  }, [styleHrefs.join('|')])
}
