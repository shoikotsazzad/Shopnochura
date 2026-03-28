import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t border-brand-cream/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Shopnochura"
              className="h-10 w-auto object-contain"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className="text-center md:text-left">
              <div className="font-display font-bold text-brand-cream text-base">Shopnochura</div>
              <div className="font-body text-brand-cream/40 text-xs">Rooftop Restaurant & Party Center</div>
            </div>
          </div>

          {/* Quick links */}
          <nav className="flex items-center gap-6">
            {[
              { to: '/#home', label: 'Home' },
              { to: '/#about', label: 'About' },
              { to: '/#gallery', label: 'Gallery' },
              { to: '/#contact', label: 'Contact' },
            ].map((link) => (
              <HashLink
                key={link.to}
                smooth
                to={link.to}
                className="font-body text-brand-cream/40 hover:text-brand-cream text-xs transition-colors duration-200 capitalize"
              >
                {link.label}
              </HashLink>
            ))}
            <Link
              to="/menu"
              className="font-body text-brand-cream/40 hover:text-brand-cream text-xs transition-colors duration-200 capitalize"
            >
              Menu
            </Link>
          </nav>

          {/* Copyright */}
          <div className="font-body text-brand-cream/30 text-xs text-center md:text-right">
            <div>© 2025 Shopnochura</div>
            <div className="mt-0.5">Lake View Road, Madaripur, Bangladesh</div>
          </div>
        </div>

        {/* Bottom flame line */}
        <div className="mt-8 flex items-center justify-center gap-2 text-brand-cream/20 text-xs font-body">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-red/30" />
          <span>🔥</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-red/30" />
        </div>
      </div>
    </footer>
  )
}
