import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '120+', label: 'Happy Reviews' },
  { value: '3.9', label: 'Google Rating' },
  { value: '11K', label: 'FB Followers' },
]

const tagsRow1 = ['Rooftop Dining', 'Halal Food', 'Party Center', 'Art & Craft']
const tagsRow2 = ['Lake View', 'Open Till 10 PM']

export default function About() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative flex flex-col lg:flex-row overflow-hidden mx-auto w-full lg:max-h-[580px]" style={{ maxWidth: '1400px' }}>

      {/* ── LEFT: Edge-to-edge tall image (no padding, no border radius on outer edges) ── */}
      <div className="hidden lg:block relative w-[52%] overflow-hidden">
        <div ref={imgRef} className="absolute inset-0 scale-110">
          <img
            src="/shopnochura.jpg"
            alt="Shopnochura"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Right-side fade into dark panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-brand-dark" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark/40 to-transparent" />

        {/* Floating "Open Now" badge on image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute bottom-10 left-10 flex items-center gap-3 bg-brand-dark/80 backdrop-blur-md border border-brand-cream/10 rounded-2xl px-5 py-4"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <div>
            <div className="text-brand-cream font-body font-semibold text-sm">Open Today</div>
            <div className="text-brand-cream/50 text-xs">11:00 AM – 10:00 PM</div>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT: Content panel ── */}
      <div className="flex-1 bg-brand-dark flex flex-col justify-center px-6 sm:px-8 md:px-12 py-10 lg:items-start items-center text-center lg:text-left">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center lg:justify-start gap-3 mb-8"
        >
          <div className="w-8 h-px bg-brand-red" />
          <span className="text-brand-red text-xs font-body font-semibold tracking-[0.25em] uppercase">Our Story</span>
          <div className="w-8 h-px bg-brand-red lg:hidden" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-black text-brand-cream leading-none mb-6"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
        >
          A Dream Above<br />
          <span className="text-brand-red">the Skyline.</span>
        </motion.h2>

        {/* Stats — horizontal line of big numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center lg:justify-start gap-8 mb-6 pb-6 border-b border-brand-cream/10 w-full"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl font-black text-brand-red leading-none">{s.value}</div>
              <div className="font-body text-brand-cream/40 text-xs mt-2 tracking-wide leading-tight">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block font-body text-brand-cream/60 text-sm leading-relaxed mb-3 max-w-md"
        >
          Perched on the <span className="text-brand-cream font-medium">6th floor of Lake View Officers Club</span>,
          Shopnochura delivers an unforgettable rooftop dining experience in the heart of Madaripur.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-body text-brand-cream/40 text-xs leading-relaxed mb-6 max-w-md"
        >
          Vibrant art murals, rooftop fairy lights, and a menu spanning Bangladeshi curries,
          Western burgers, Italian pizza, and more — every meal is a celebration.
        </motion.p>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col items-center lg:items-start gap-2 mb-6"
        >
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {tagsRow1.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs font-body font-medium text-brand-cream/60 border border-brand-cream/10 rounded-full hover:border-brand-red/40 hover:text-brand-cream transition-all duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {tagsRow2.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 text-xs font-body font-medium text-brand-cream/60 border border-brand-cream/10 rounded-full hover:border-brand-red/40 hover:text-brand-cream transition-all duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex items-center justify-center lg:justify-start gap-4"
        >
          <a
            href="#menu"
            className="px-7 py-3 bg-brand-red text-white font-body font-semibold text-sm rounded-full hover:opacity-80 transition-all duration-300 glow-red hover:scale-105"
          >
            Explore Menu
          </a>
          <a
            href="tel:+8801704447948"
            className="px-7 py-3 border border-brand-cream/15 text-brand-cream/70 font-body font-medium text-sm rounded-full hover:border-brand-cream/40 hover:text-brand-cream transition-all duration-200"
          >
            📞 Reserve Table
          </a>
        </motion.div>

        {/* Address at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 pt-5 border-t border-brand-cream/5 w-full"
        >
          <p className="font-body text-brand-cream/30 text-xs tracking-wide">
            📍 6th Floor, Lake View Officers Club · Lake View Road, Madaripur 7900, Bangladesh
          </p>
        </motion.div>
      </div>
    </section>
  )
}
