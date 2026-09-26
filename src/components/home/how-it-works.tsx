"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "۰۱",
    title: "پروژه‌ها را ببینید",
    description: "گالری پروژه‌های واقعی و کامل از کابینت‌کاران برتر را کاوش کنید.",
    icon: "🏠"
  },
  {
    number: "۰۲",
    title: "کابینت‌کار مناسب را پیدا کنید",
    description: "متخصصان را بر اساس سبک، موقعیت و سابقه فیلتر کنید.",
    icon: "🔍"
  },
  {
    number: "۰۳",
    title: "درخواست پروژه ارسال کنید",
    description: "فرم پروژه خود را پر کنید و با متخصصان مناسب در ارتباط باشید.",
    icon: "📋"
  },
  {
    number: "۰۴",
    title: "پروژه خود را شروع کنید",
    description: "با تیم انتخاب شده همکاری آغاز کنید و رویای خود را محقق سازید.",
    icon: "🚀"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary-900/30 text-primary-400 text-sm font-medium rounded-full mb-4">
            نحوه کارکرد
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-50 mb-4">
            چگونه ParsKabin کار می‌کند؟
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            فرآیند ساده و شفاف برای تبدیل ایده‌های شما به واقعیت.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center p-6 bg-neutral-800/50 border border-neutral-700 rounded-xl hover:border-neutral-600 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <div className="text-2xl font-serif font-bold text-primary-400 mb-2">{step.number}</div>
              <h3 className="text-xl font-semibold text-neutral-50 mb-2">{step.title}</h3>
              <p className="text-neutral-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}