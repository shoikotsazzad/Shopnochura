import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { menuCategories } from '../data/menuData'

// Single menu item card with hover animation
function MenuItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="flex items-start justify-between gap-4 py-3 border-b border-brand-cream/5 group hover:border-brand-red/20 transition-colors duration-200"
    >
      <div className="flex-1">
        <h4 className="font-body text-brand-cream/90 text-sm font-medium group-hover:text-brand-cream transition-colors duration-200">
          {item.name}
        </h4>
        {item.description && (
          <p className="font-body text-brand-cream/40 text-xs mt-0.5">{item.description}</p>
        )}
      </div>
      <div className="shrink-0 font-display text-brand-red font-bold text-sm">
        ৳ {item.price}
      </div>
    </motion.div>
  )
}

// Category tab button
function CategoryTab({ category, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-body font-medium whitespace-nowrap transition-all duration-300 ${
        isActive
          ? 'bg-brand-red text-white shadow-lg glow-red'
          : 'bg-brand-card/60 text-brand-cream/60 hover:text-brand-cream hover:bg-brand-card border border-brand-cream/10'
      }`}
    >
      <span>{category.icon}</span>
      <span>{category.label}</span>
    </button>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  const currentCategory = menuCategories.find((c) => c.id === activeCategory)

  return (
    <section id="menu" ref={sectionRef} className="relative py-16 sm:py-24 px-4 sm:px-6 bg-brand-card/20">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-sm font-body font-medium tracking-wider uppercase">
              Our Menu
            </span>
            <div className="w-8 h-px bg-brand-red" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-cream mb-4">
            Taste Every <span className="text-gradient-red-green">Dream</span>
          </h2>
          <p className="font-body text-brand-cream/50 text-base max-w-lg mx-auto">
            From rooftop grills to cool mocktails — our menu is a culinary journey across flavors.
          </p>
        </motion.div>

        {/* Category tabs — horizontally scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {menuCategories.map((cat) => (
            <CategoryTab
              key={cat.id}
              category={cat}
              isActive={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            />
          ))}
        </motion.div>

        {/* Menu items panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-brand-card/60 backdrop-blur-sm rounded-2xl border border-brand-cream/5 p-6 md:p-8"
        >
          {/* Panel header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-cream/10">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{currentCategory.icon}</span>
              <div>
                <h3 className="font-display text-xl font-bold text-brand-cream">
                  {currentCategory.label}
                </h3>
                <p className="text-brand-cream/40 text-xs font-body">
                  {currentCategory.items.length} items
                </p>
              </div>
            </div>
            <div className="hidden sm:block text-brand-cream/20 font-body text-sm">Price in BDT (৳)</div>
          </div>

          {/* Items list with AnimatePresence for smooth transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {currentCategory.items.map((item, index) => (
                <MenuItem key={item.name} item={item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom note */}
          <p className="mt-6 text-brand-cream/30 text-xs font-body text-center">
            All items are halal. Prices may vary. Tax may apply.
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="tel:+8801704447948"
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-brand-red/40 text-brand-red font-body font-medium rounded-full hover:bg-brand-red hover:text-white transition-all duration-300"
          >
            📞 Call to Reserve a Table
          </a>
        </motion.div>
      </div>
    </section>
  )
}
