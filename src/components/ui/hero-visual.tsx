"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroVisual() {
  return (
    <div className="absolute inset-0">
      {/* High-quality architectural kitchen image */}
      <Image
        src="/images/background.webp"
        alt="ParsKabin premium kitchen showcase"
        fill
        priority
        className="object-cover object-[center_25%] md:object-[center_30%]"
        sizes="100vw"
        onError="console.error('Failed to load hero background image')"
      />

      {/* Subtle overlay for text readability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/50 to-neutral-900/80"
      />
    </div>
  )
}