import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// All real photos mapped with labels
const galleryItems = [
  {
    src: '/unnamed (6).jpg',
    label: 'Art & Craft Murals',
    sublabel: 'Exterior',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/unnamed (2).webp',
    label: 'Rooftop Open Air',
    sublabel: 'Fairy Lights',
    span: '',
  },
  {
    src: '/unnamed (3).webp',
    label: 'Indoor Dining',
    sublabel: 'Rattan Lamps',
    span: '',
  },
  {
    src: '/unnamed.webp',
    label: 'Dining Hall',
    sublabel: 'Cozy Ambiance',
    span: '',
  },
  {
    src: '/unnamed (4).webp',
    label: 'Interior Lounge',
    sublabel: 'Warm Lighting',
    span: '',
  },
]

function GalleryCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span}`}
      style={{ minHeight: '220px' }}
    >
      <img
        src={item.src}
        alt={item.label}
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        style={{ minHeight: 'inherit' }}
      />

      {/* Permanent soft bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />

      {/* Label — always visible at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <motion.div
          initial={false}
          className="translate-y-1 group-hover:translate-y-0 transition-transform duration-300"
        >
          <div className="font-body text-brand-cream font-semibold text-sm leading-tight">
            {item.label}
          </div>
          <div className="font-body text-brand-cream/50 text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.sublabel}
          </div>
        </motion.div>
      </div>

      {/* Top-right red dot on hover */}
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg" />

      {/* Subtle red border glow on hover */}
      <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 ring-brand-red/30 transition-all duration-300" />
    </motion.div>
  )
}

export default function Gallery() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="gallery" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-sm font-body font-medium tracking-wider uppercase">
              Gallery
            </span>
            <div className="w-8 h-px bg-brand-red" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream mb-4">
            See the <span style={{ color: '#4C8CE4' }}>Vibe</span>
          </h2>
          <p className="font-body text-brand-cream/50 text-base max-w-lg mx-auto">
            Art murals, rooftop fairy lights, cozy interiors — this is Shopnochura.
          </p>
        </motion.div>

        {/* Bento mosaic grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
          style={{ gridTemplateRows: 'auto' }}
        >
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.label} item={item} index={index} />
          ))}
        </div>

        {/* Facebook CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.facebook.com/shopnochura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-cream/40 hover:text-brand-cream font-body text-sm transition-colors duration-200"
          >
            📘 See more on Facebook →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
