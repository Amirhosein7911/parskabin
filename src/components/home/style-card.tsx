import { styles } from '@/lib/mock-data'
import Image from "next/image"

interface StyleCardProps {
  id: string
  name: string
  image: string
}

export default function StyleCard({ name, image }: StyleCardProps) {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900/50" />
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-serif font-semibold text-neutral-50">
          {name}
        </h3>
        <p className="text-neutral-400 text-sm mt-1">
          پروژه‌های {name}
        </p>
      </div>
    </div>
  )
}