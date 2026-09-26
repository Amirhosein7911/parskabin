import { Maker } from '@/lib/mock-data';
import MakerCard from './maker-card';
import Link from 'next/link';

interface MakerCardProps {
  id: string;
  name: string;
  specialty: string;
  location: string;
  yearsOfExperience: number;
  avatar: string;
  coverImage: string;
  selectedProjects: string[];
  verified: boolean;
  rating: number;
  reviewCount: number;
}

export default function MakerGrid({ makers }: { makers: Maker[] }) {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary-900/30 text-primary-400 text-sm font-medium rounded-full mb-4">
            متخصصان برتر
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-50 mb-4">
            متخصصی برای پروژه‌ی شما
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            با همکاری با کابینت‌کاران مجرب و تأیید شده، پروژه‌های واقعی و با کیفیت بالا را کشف کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {makers.map((maker) => (
            <div key={maker.id} className="bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <MakerCard
                id={maker.id}
                name={maker.name}
                specialty={maker.specialty}
                location={maker.location}
                yearsOfExperience={maker.yearsOfExperience}
                avatar={maker.avatar}
                coverImage={maker.coverImage}
                selectedProjects={maker.selectedProjects}
                verified={maker.verified}
                rating={maker.rating}
                reviewCount={maker.reviewCount}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/cabinet-makers"
            className="inline-block px-8 py-3 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors duration-200 text-lg font-medium"
          >
            مشاهده همه کابینت‌کارها
          </Link>
        </div>
      </div>
    </div>
  );
}