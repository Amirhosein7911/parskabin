"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Image - High-quality architectural kitchen */}
      <div className="absolute inset-0">
        <Image
          src="/hero-kitchen.svg"
          alt="Premium architectural kitchen design"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900/50" />
      </div>

      {/* Content */}
      <div className="relative h-[90vh] min-h-[600px] flex flex-col items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10 text-neutral-50 flex flex-col items-center space-y-6 max-w-3xl text-center"
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm font-medium text-primary-400 tracking-wider"
          >
            پلتفرم تخصصی کابینت و طراحی داخلی
          </motion.span>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-4xl md:text-5xl font-serif font-bold leading-tight"
          >
            <span className="block">پروژه‌ی رویایی شما،</span>
            <span className="block">از یک انتخاب درست شروع می‌شود.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-lg md:text-xl text-neutral-300 max-w-2xl"
          >
            بهترین پروژه‌ها را ببینید، کابینت‌کار حرفه‌ای خود را پیدا کنید و ایده‌ی خود ر به واقعیت تبدیل کنید.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/projects"
              className="px-8 py-3 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors duration-200 font-medium text-lg"
            >
              مشاهده پروژه‌ها
            </Link>
            <Link
              href="/project-request"
              className="px-8 py-3 border border-neutral-600 text-neutral-200 rounded-md hover:border-neutral-400 hover:text-neutral-100 transition-colors duration-200 font-medium text-lg"
            >
              ثبت پروژه
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-4 bg-neutral-400 rounded-full"
            />
            <span className="text-xs text-neutral-400">اسکرول کنید</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}