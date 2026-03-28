import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuCategories } from '../data/menuData'
import Navbar from '../components/Navbar'
import PhotoStrip from '../components/PhotoStrip'
import Footer from '../components/Footer'

function MenuItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
      className="flex items-start justify-between gap-4 py-3 border-b border-brand-cream/5 group hover:border-brand-red/20 transition-colors duration-200"
    >
      <div className="flex-1">
        <h4 className="font-body text-brand-cream/90 text-sm font-medium group-hover:text-brand-cream transition-colors">
          {item.name}
        </h4>
        {item.description && (
          <p className="font-body text-brand-cream/40 text-xs mt-0.5">{item.description}</p>
        )}
      </div>
      <div className="shrink-0 font-display text-brand-red font-bold text-sm">৳ {item.price}</div>
    </motion.div>
  )
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)
  const currentCategory = menuCategories.find((c) => c.id === activeCategory)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />

      {/* ── Hero header ── */}
      <div className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-body font-medium tracking-[0.25em] uppercase">Full Menu</span>
            <div className="w-8 h-px bg-brand-red" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-brand-cream mb-3">
            Taste Every <span className="text-brand-red">Dream</span>
          </h1>
          <p className="font-body text-brand-cream/50 text-sm sm:text-base max-w-md mx-auto">
            From rooftop grills to cool mocktails — explore our full menu.
          </p>
          <p className="mt-2 font-body text-brand-cream/30 text-xs">All prices in BDT (৳) · All items halal · Tax may apply</p>
        </motion.div>
      </div>

      {/* ── Category tabs — sticky below navbar ── */}
      <div className="sticky top-[60px] sm:top-[72px] z-30 bg-brand-dark/90 backdrop-blur-sm border-y border-brand-cream/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="flex gap-2 overflow-x-auto py-3"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-body font-medium whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-brand-red text-white shadow-lg'
                    : 'bg-brand-card/60 text-brand-cream/60 hover:text-brand-cream hover:bg-brand-card border border-brand-cream/10'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Menu items ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl">{currentCategory.icon}</span>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-cream">
                  {currentCategory.label}
                </h2>
                <p className="text-brand-cream/40 text-xs font-body mt-0.5">
                  {currentCategory.items.length} items
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
              {currentCategory.items.map((item, i) => (
                <MenuItem key={item.name} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Reserve CTA ── */}
      <div className="text-center pb-10 px-4">
        <a
          href="tel:+8801704447948"
          className="inline-flex items-center gap-2 px-8 py-3 bg-brand-red text-white font-body font-semibold rounded-full hover:opacity-80 transition-opacity text-sm"
        >
          📞 Call to Reserve a Table
        </a>
      </div>

      <PhotoStrip />
      <Footer />
    </div>
  )
}
