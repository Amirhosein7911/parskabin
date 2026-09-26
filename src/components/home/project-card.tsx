"use client"

import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  id: string
  title: string
  style: string
  location: string
  makerName: string
  image: string
  materials: string[]
  area: string
}

export default function ProjectCard({
  title,
  style,
  location,
  makerName,
  image,
  materials,
  area,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-background border border-neutral-800 hover:border-neutral-600 transition-colors duration-300 overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-serif font-semibold text-neutral-50 line-clamp-2">
            {title}
          </h3>
          <span className="px-2 py-1 bg-primary-900/50 text-primary-300 text-xs rounded">
            {style}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-neutral-400 text-sm">
            <span className="w-4 h-4 mr-2">📍</span>
            {location}
          </div>
          <div className="flex items-center text-neutral-400 text-sm">
            <span className="w-4 h-4 mr-2">🔨</span>
            {makerName}
          </div>
          <div className="flex items-center text-neutral-400 text-sm">
            <span className="w-4 h-4 mr-2">📏</span>
            {area}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {materials.map((material, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded"
            >
              {material}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
          className="inline-block w-full text-center py-3 bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-colors duration-200 text-sm font-medium"
        >
          مشاهده جزئیات
        </Link>
      </div>
    </div>
  )
}