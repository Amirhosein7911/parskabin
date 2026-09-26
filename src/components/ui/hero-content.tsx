"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroContent() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative z-10 text-neutral-50 flex flex-col items-start space-y-6 max-w-3xl"
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
        className="text-4xl md:text-5xl font-serif font-bold leading-tight text-center md:text-left"
      >
        <span className="block">پروژه‌ی رویایی شما،</span>
        <span className="block">از یک انتخاب درست شروع می‌شود.</span>
      </motion.h1>

      {/* Supporting Text */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-lg md:text-xl text-neutral-300 max-w-2xl text-center md:text-left"
      >
        بهترین پروژه‌ها را ببینید، کابینت‌کار حرفه‌ای خود را پیدا کنید و ایده‌ی خود را به واقعیت تبدیل کنید.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="flex flex-wrap justify-center md:justify-start gap-4"
      >
        {/* Primary CTA */}
        <Link
          href="/projects"
          className="px-8 py-3 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors duration-200 font-medium text-lg"
        >
          مشاهده پروژه‌ها
        </Link>

        {/* Secondary CTA */}
        <Link
          href="/project-request"
          className="px-8 py-3 border border-neutral-600 text-neutral-200 rounded-md hover:border-neutral-400 hover:text-neutral-100 transition-colors duration-200 font-medium text-lg"
        >
          ثبت پروژه
        </Link>
      </motion.div>
    </motion.div>
  )
}