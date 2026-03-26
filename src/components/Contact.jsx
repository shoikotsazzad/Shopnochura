import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contactInfo = [
  {
    icon: '📍',
    title: 'Location',
    lines: ['6th Floor, Lake View Officers Club', 'Lake View Road, Madaripur 7900', 'Dhaka Division, Bangladesh'],
  },
  {
    icon: '📞',
    title: 'Phone',
    lines: ['01704-447948', '01307-471994'],
  },
  {
    icon: '✉️',
    title: 'Email',
    lines: ['rooftopshopnochura@gmail.com'],
  },
  {
    icon: '🕐',
    title: 'Hours',
    lines: ['Open Daily', '11:00 AM – 10:00 PM', 'Dinner reservations recommended'],
  },
]

const socialLinks = [
  { icon: '📘', label: 'Facebook', href: 'https://www.facebook.com/shopnochura' },
  { icon: '📷', label: 'Instagram', href: '#' },
  { icon: '🗺️', label: 'Google Maps', href: 'https://maps.app.goo.gl/5684F6Madaripur' },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-16 sm:py-24 px-4 sm:px-6 bg-brand-card/20">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-brand-green/40 to-transparent" />

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
              Visit Us
            </span>
            <div className="w-8 h-px bg-brand-red" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream mb-4">
            Find Us on the <span className="text-gradient-red-green">Rooftop</span>
          </h2>
          <p className="font-body text-brand-cream/50 text-base max-w-lg mx-auto">
            Reserve your table or drop by — we're always ready to serve you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Contact cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                className="p-5 rounded-2xl bg-brand-card/60 border border-brand-cream/5 hover:border-brand-red/30 transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{info.icon}</div>
                <h3 className="font-body font-semibold text-brand-cream text-sm mb-2 group-hover:text-brand-red transition-colors duration-200">
                  {info.title}
                </h3>
                {info.lines.map((line) => (
                  <p key={line} className="font-body text-brand-cream/50 text-xs leading-relaxed">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}

            {/* Social links card */}
            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 p-5 rounded-2xl bg-brand-card/60 border border-brand-cream/5"
            >
              <h3 className="font-body font-semibold text-brand-cream text-sm mb-4">
                Follow & Connect
              </h3>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cream/10 hover:border-brand-red/40 hover:bg-brand-red/10 text-brand-cream/60 hover:text-brand-cream text-xs font-body transition-all duration-200"
                  >
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Map embed & reservation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-brand-cream/5 h-64">
              <iframe
                title="Shopnochura Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7!2d90.197!3d23.164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEwJzAuMCJOIDkwwrAxMSc0OS4yIkU!5e0!3m2!1sen!2sbd!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            {/* Reservation CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-red/20 to-brand-green/10 border border-brand-red/20">
              <h3 className="font-display text-xl font-bold text-brand-cream mb-2">
                Reserve Your Table
              </h3>
              <p className="font-body text-brand-cream/50 text-sm mb-4">
                For groups or special events, call us directly. Dinner reservations recommended.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+8801704447948"
                  className="flex-1 text-center px-5 py-3 bg-brand-red text-white font-body font-semibold text-sm rounded-full hover:opacity-80 transition-all duration-300 glow-red"
                >
                  📞 Call Now
                </a>
                <a
                  href="https://www.facebook.com/shopnochura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-5 py-3 border border-brand-green/40 text-brand-cream font-body font-medium text-sm rounded-full hover:bg-brand-green/20 transition-all duration-300"
                >
                  💬 Message on Facebook
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
