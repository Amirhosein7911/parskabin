import Navbar from "@/components/ui/navbar";
import Link from "next/link";
import { makers } from "@/lib/mock-data";
import MakerCard from "@/components/home/maker-card";

export default function CabinetMakersPage() {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-50 mb-4">
              کابینت‌کارها
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl">
              کشف و ارتباط با بهترین کابینت‌کاران حرفه‌ای ایران
            </p>
          </div>

          {/* Search and filters */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="جستجو در کابینت‌کاران..."
              className="w-full px-6 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="outline" className="px-4 py-2 text-sm">
              همه کاربران
            </Button>
            <Button variant="outline" className="px-4 py-2 text-sm">
              تأیید شده
            </Button>
            <Button variant="outline" className="px-4 py-2 text-sm">
              جدید
            </Button>
          </div>

          {/* Makers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {makers.map((maker) => (
              <div
                key={maker.id}
                className="bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
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
        </div>
      </section>
    </>
  );
}

function Button({
  variant = "outline",
  className = "",
  children,
}: {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  children: React.ReactNode;
}) {
  const baseClasses =
    "font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none";

  const variantClasses = {
    primary: "bg-accent-500 text-white hover:bg-accent-600",
    secondary:
      "border border-neutral-600 text-neutral-200 hover:border-neutral-400 hover:text-neutral-100",
    outline:
      "border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:text-primary-600",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
