import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import HeroScene from './HeroScene'

export default function Hero() {
  const textRef = useRef(null)

  // GSAP stagger on hero text
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-text-item',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 1,
        }
      )
    }, textRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Banner background image — primary hero visual */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/banner.jpg)' }}
      />

      {/* 3D scene layered on top with low opacity for depth */}
      <div className="absolute inset-0 z-10 opacity-40">
        <HeroScene />
      </div>

      {/* Dark gradient overlay — keep text readable */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-brand-dark/50 via-brand-dark/30 to-brand-dark" />

      {/* Hero content */}
      <div ref={textRef} className="relative z-30 text-center px-6 max-w-4xl mx-auto pb-16 sm:pb-0">
        {/* Badge */}
        <div className="hero-text-item hidden sm:inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-brand-red/40 bg-brand-red/10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span className="text-brand-cream/80 text-sm font-body tracking-wider uppercase">
            Rooftop Restaurant & Party Center
          </span>
        </div>

        {/* Main heading */}
        <h1 className="hero-text-item font-display text-5xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="text-white">স্বপ্ন</span>
          <span style={{ color: '#4C8CE4' }}>চূড়া</span>
        </h1>

        <h2 className="hero-text-item font-display text-xl sm:text-2xl md:text-3xl font-semibold text-brand-cream/90 mb-6">
          Shopnochura
        </h2>

        {/* Tagline */}
        <p className="hero-text-item font-body text-base md:text-xl text-brand-cream/60 mb-6 max-w-2xl mx-auto leading-relaxed">
          Where every meal becomes a dream above the skyline.
          <br />
          <span className="text-brand-red">Madaripur's finest rooftop dining experience.</span>
        </p>

        {/* Address */}
        <div className="hero-text-item flex items-center justify-center gap-2 mb-10 px-2">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-dark/60 backdrop-blur-sm border border-brand-cream/10">
            <span className="text-brand-red text-sm shrink-0">📍</span>
            <span className="font-body text-brand-cream/70 text-xs sm:text-sm text-left">
              6th Floor, Lake View Officers Club · Lake View Road, Madaripur
            </span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="hero-text-item flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="px-8 py-3.5 bg-brand-red text-white font-body font-semibold rounded-full hover:opacity-80 transition-all duration-300 glow-red hover:scale-105 active:scale-95"
          >
            Explore Menu
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 border border-brand-green/60 text-brand-cream font-body font-medium rounded-full hover:bg-brand-green/20 transition-all duration-300"
          >
            Our Story
          </a>
        </div>

        {/* Stats row */}
        <div className="hero-text-item flex items-center justify-center gap-4 sm:gap-8 mt-12 sm:mt-16 pt-8 border-t border-brand-cream/10">
          {[
            { num: '120', suffix: '+', label: 'Reviews' },
            { num: '3.9', suffix: '★', label: 'Rating' },
            { num: '6', suffix: 'th', label: 'Floor' },
            { num: '11K', suffix: '+', label: 'Followers' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-xl sm:text-2xl font-bold text-brand-red leading-none">
                {stat.num}<span className="text-xs sm:text-sm font-semibold align-top mt-0.5 inline-block">{stat.suffix}</span>
              </div>
              <div className="font-body text-xs text-brand-cream/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden sm:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <span className="text-brand-cream/40 text-xs font-body tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-red to-transparent" />
      </motion.div>
    </section>
  )
}
