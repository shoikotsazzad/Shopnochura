import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { gsap } from 'gsap'

// to = HashLink (navigates to page + scrolls to anchor), page = router Link
const navLinks = [
  { to: '/#home', label: 'Home' },
  { to: '/#about', label: 'About' },
  { page: '/menu', label: 'Menu' },
  { to: '/#gallery', label: 'Gallery' },
  { to: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  // GSAP entrance animation on mount
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    )
  }, [])

  // Scroll handler — add background blur when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-red/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group min-w-0">
          <img
            src="/logo..jpg"
            alt="Shopnochura"
            className="h-8 sm:h-12 w-8 sm:w-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300 rounded-md shrink-0"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <span className="font-display text-sm sm:text-xl font-bold text-brand-cream truncate">
            Shopnochura
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.page || link.to}>
              {link.page ? (
                <Link
                  to={link.page}
                  className="relative font-body text-sm font-medium text-brand-cream/80 hover:text-brand-cream transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              ) : (
                <HashLink
                  smooth
                  to={link.to}
                  className="relative font-body text-sm font-medium text-brand-cream/80 hover:text-brand-cream transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300 rounded-full" />
                </HashLink>
              )}
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <HashLink
          smooth
          to="/#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-brand-red text-white text-sm font-medium rounded-full hover:opacity-80 transition-all duration-300 glow-red"
        >
          <span>📞</span> Reserve Now
        </HashLink>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 mr-2"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-brand-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-brand-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-brand-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-dark/95 backdrop-blur-md border-t border-brand-red/20"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.page || link.to}>
                  {link.page ? (
                    <Link
                      to={link.page}
                      onClick={() => setMenuOpen(false)}
                      className="block font-body text-brand-cream/80 hover:text-brand-red transition-colors duration-200 py-1"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <HashLink
                      smooth
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="block font-body text-brand-cream/80 hover:text-brand-red transition-colors duration-200 py-1"
                    >
                      {link.label}
                    </HashLink>
                  )}
                </li>
              ))}
              <li>
                <HashLink
                  smooth
                  to="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center px-4 py-2 bg-brand-red text-white text-sm font-medium rounded-full"
                >
                  📞 Reserve Now
                </HashLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
