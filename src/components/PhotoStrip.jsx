import { useRef } from 'react'
import { motion } from 'framer-motion'

const photos = [
  '/food picture/1.jpg',
  '/food picture/2.jpg',
  '/food picture/3.jpg',
  '/food picture/4.jpg',
  '/food picture/5.jpg',
  '/food picture/6.jpg',
  '/food picture/8.jpg',
  '/food picture/9.jpg',
  '/food picture/10.jpg',
  '/food picture/11.jpg',
  '/food picture/12.jpg',
  '/food picture/13.jpg',
  '/food picture/14.jpg',
]

// Duplicate for seamless loop
const allPhotos = [...photos, ...photos]

export default function PhotoStrip() {
  return (
    <section className="bg-brand-dark py-16 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10 px-6">
        <p className="font-body text-brand-cream/50 uppercase tracking-[0.3em] text-xs mb-3">
          Follow us on Facebook
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-black text-brand-cream uppercase tracking-wide">
          Never Miss a <span className="text-brand-red">Snap!</span>
        </h2>
        <div className="mt-6">
          <a
            href="https://www.facebook.com/shopnochura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-red text-white font-body font-semibold text-sm px-8 py-3 rounded-full hover:opacity-80 transition-opacity duration-200"
          >
            📘 Follow on Facebook
          </a>
        </div>
      </div>

      {/* Scrolling Strip */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{ width: 'max-content' }}
        >
          {allPhotos.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden group"
            >
              <img
                src={src}
                alt={`Shopnochura food ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-all duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
