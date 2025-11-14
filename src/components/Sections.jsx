import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Hourglass, CheckCircle, Monitor, Smartphone, Cloud, Palette, Cog, Bot, ArrowUpRight, Github, Linkedin, Dribbble, Filter } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } })
}

export function About() {
  const stats = [
    { icon: Rocket, title: '50+ Projects Delivered' },
    { icon: Hourglass, title: '5+ Years of Experience' },
    { icon: CheckCircle, title: '100% Client Satisfaction' },
  ]

  return (
    <section id="about" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-3xl md:text-4xl font-semibold">
          Who We Are
        </motion.h2>
        <motion.p custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="mt-4 text-white/70 max-w-3xl">
          We’re a team of creative developers and designers passionate about building scalable, future-proof digital experiences for startups and enterprises.
        </motion.p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="group rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl p-6 hover:border-white/40 transition">
              <s.icon className="h-6 w-6 text-white/80" />
              <p className="mt-4 text-lg font-medium">{s.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const items = [
    { icon: Monitor, title: 'Web Development', desc: '' },
    { icon: Smartphone, title: 'Mobile Applications', desc: '' },
    { icon: Cloud, title: 'Cloud Solutions', desc: '' },
    { icon: Palette, title: 'UI/UX Design', desc: '' },
    { icon: Cog, title: 'Automation (n8n)', desc: 'Automate workflows and integrate systems using n8n and no-code tools.' },
    { icon: Bot, title: 'AI Development', desc: 'Build and deploy intelligent AI-driven solutions using OpenAI and LangChain.' },
  ]

  return (
    <section id="services" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-3xl md:text-4xl font-semibold">
          Our Expertise
        </motion.h2>
        <motion.p custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="mt-4 text-white/70 max-w-3xl">
          We provide end-to-end digital solutions tailored to your business.
        </motion.p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((s, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="group rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl p-6 hover:scale-[1.02] hover:border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.08)] transition">
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6 text-white/80" />
                <p className="text-lg font-medium">{s.title}</p>
              </div>
              {s.desc && <p className="mt-3 text-sm text-white/70">{s.desc}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Portfolio() {
  const categories = ['All', 'Web', 'App', 'Design']
  const items = new Array(6).fill(0).map((_, i) => ({ id: i + 1, cat: categories[(i % 3) + 1] }))

  return (
    <section id="portfolio" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-4">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-3xl md:text-4xl font-semibold">
            Our Work
          </motion.h2>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <Filter className="h-4 w-4" />
            <span className="text-white/70">Categories: All / Web / App / Design</span>
          </div>
        </div>
        <motion.p custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="mt-2 text-white/70">
          A glimpse into our latest creations.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.a key={it.id} href="#" custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl">
              <div className="aspect-video overflow-hidden">
                <img src={`https://picsum.photos/seed/bruno-${it.id}/800/450`} alt="Portfolio thumbnail" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/80">{it.cat}</p>
                  <p className="text-lg font-medium">Project #{it.id}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-3xl md:text-4xl font-semibold">
          Let’s Work Together
        </motion.h2>
        <motion.p custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="mt-2 text-white/70">Got an idea? Let’s turn it into reality.</motion.p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 outline-none focus:border-white/40 transition" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 outline-none focus:border-white/40 transition" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Message</label>
              <textarea rows={5} className="mt-2 w-full rounded-xl border border-white/20 bg-black/40 px-4 py-3 outline-none focus:border-white/40 transition" placeholder="Tell us about your project..." />
            </div>
            <button type="button" className="mt-6 inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium hover:border-white/40 hover:bg-white/15 transition">
              Send Message
            </button>

            <div className="mt-6 text-sm text-white/70 space-y-1">
              <p>📧 developer@brunocode.in</p>
              <p>📞 +91 1234567890</p>
              <p>🌐 brunocode.tech</p>
            </div>
          </motion.form>

          {/* Info / CTA */}
          <motion.div custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-white/70">We typically respond within 24 hours. Share details, timelines, and goals — we’ll craft a tailored plan.</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[Github, Linkedin, Dribbble].map((Icon, i) => (
                  <a key={i} href="#" className="group flex items-center justify-center rounded-xl border border-white/20 bg-black/40 p-4 hover:border-white/40">
                    <Icon className="h-5 w-5 text-white/80 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 text-xs text-white/50">© 2025 Brunocode.tech — All rights reserved.</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="relative bg-black text-white py-10">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md" />
          <span className="text-sm">Brunocode.tech</span>
        </div>
        <a href="#top" className="text-xs text-white/70 hover:text-white">Back to top</a>
      </div>
    </footer>
  )
}
