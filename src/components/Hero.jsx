import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  const layerRef = useRef(null)

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth - 0.5) * 10
    const y = (e.clientY / innerHeight - 0.5) * 10
    if (layerRef.current) {
      layerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
  }

  return (
    <section onMouseMove={handleMouseMove} className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ether gradient veil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.05),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.04),transparent_40%)] mix-blend-screen" />

      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <div className="relative z-10 h-full flex flex-col">
        {/* Top nav */}
        <div className="flex items-center justify-between px-6 sm:px-10 pt-6">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md" />
            <span className="text-lg font-semibold tracking-wide">Brunocode.tech</span>
          </motion.div>
          <motion.a href="#contact" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm backdrop-blur-md hover:border-white/40 hover:bg-white/10">
            <span>Let’s talk</span>
            <span className="h-1 w-1 rounded-full bg-white/60 group-hover:bg-white" />
          </motion.a>
        </div>

        {/* Headline */}
        <div className="relative flex-1 flex items-center">
          <motion.div ref={layerRef} className="mx-auto max-w-5xl px-6 sm:px-10 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Liquid Ether experiences for the modern web
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-4 text-white/70 max-w-2xl mx-auto">
              We craft minimal, immersive interfaces powered by scalable engineering.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }} className="mt-8 flex items-center justify-center gap-3">
              <a href="#services" className="relative group inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur-md hover:bg-white/15 transition">
                Explore services
              </a>
              <a href="#portfolio" className="relative group inline-flex items-center rounded-xl border border-white/10 px-5 py-3 text-sm font-medium hover:border-white/30 transition">
                View work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
