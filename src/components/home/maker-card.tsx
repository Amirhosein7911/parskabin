"use client"

import Link from "next/link"
import Image from "next/image"

interface MakerCardProps {
  id: string
  name: string
  specialty: string
  location: string
  yearsOfExperience: number
  avatar: string
  coverImage: string
  selectedProjects: string[]
  verified: boolean
  rating: number
  reviewCount: number
}

export default function MakerCard({
  name,
  specialty,
  location,
  yearsOfExperience,
  avatar,
  coverImage,
  selectedProjects,
  verified,
  rating,
  reviewCount,
}: MakerCardProps) {
  return (
    <div className="group relative bg-background border border-neutral-800 hover:border-neutral-600 transition-colors duration-300 overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={coverImage}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-serif font-semibold text-neutral-50">
              {name}
            </h3>
            {verified && (
              <span className="inline-block px-2 py-1 bg-primary-900/50 text-primary-300 text-xs rounded mt-2">
                تأیید شده
              </span>
            )}
          </div>
          <div className="flex flex-col items-end">
            <span className="text-yellow-400 text-sm">★ {rating}</span>
            <span className="text-neutral-500 text-xs">({reviewCount})</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-neutral-400 text-sm">
            <span className="w-4 h-4 mr-2">🔧</span>
            {specialty}
          </div>
          <div className="flex items-center text-neutral-400 text-sm">
            <span className="w-4 h-4 mr-2">📍</span>
            {location}
          </div>
          <div className="flex items-center text-neutral-400 text-sm">
            <span className="w-4 h-4 mr-2">📅</span>
            {yearsOfExperience} سال تجربه
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {selectedProjects.slice(0, 3).map((_, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded"
            >
              پروژه {index + 1}
            </span>
          ))}
        </div>

        <Link
          href="/cabinet-makers/profile"
          className="inline-block w-full text-center py-3 bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-colors duration-200 text-sm font-medium"
        >
          مشاهده پروفایل
        </Link>
      </div>
    </div>
  )
}