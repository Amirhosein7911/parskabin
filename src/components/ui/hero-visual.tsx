"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroVisual() {
  return (
    <div className="absolute inset-0">
      {/* High-quality architectural kitchen image */}
      <Image
        src="/hero-kitchen.svg"
        alt="Premium architectural kitchen design"
        fill
        priority
        className="object-cover"
      />

      {/* Subtle overlay for text readability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900/50"
      />
    </div>
  )
}