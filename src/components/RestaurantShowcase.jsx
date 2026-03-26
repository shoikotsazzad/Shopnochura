import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Full-width restaurant photo section — placed right after Hero
// Shows shopnochura.jpg as primary + fairy lights + indoor shots as side panels
export default function RestaurantShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative py-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-40 bg-brand-red/10 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex flex-col items-center gap-5"
      >
        {/* Logo */}
        <img
          src="/logo..jpg"
          alt="Shopnochura Logo"
          className="h-28 md:h-36 w-auto object-contain drop-shadow-2xl"
        />

        {/* Tagline pill */}
        <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-brand-card/60 backdrop-blur-md border border-brand-cream/10">
          <span className="w-2 h-2 rounded-full bg-brand-flame animate-pulse" />
          <span className="font-body text-brand-cream/80 text-sm tracking-wide">
            6th Floor · Lake View Road · Madaripur
          </span>
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
