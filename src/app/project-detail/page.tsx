import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailPage() {
  return (
    <>
      <Navbar />
      <section className="relative bg-background">
        {/* Project Hero Image */}
        <div className="relative h-[600px]">
          <div className="absolute inset-0">
            <Image
              src="/projects/project-detail.jpg"
              alt="Architectural kitchen project detail"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900/50" />
          </div>
        </div>

        {/* Project Content */}
        <div className="container mx-auto px-4 py-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-50 mb-4">
              آشپزخانه مدرن مینیمال
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-primary-900/50 text-primary-300 text-xs rounded">
                مدرن
              </span>
              <span className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded">
                تهران
              </span>
              <span className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded">
                ۲۵ متر مربع
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-4">
                  درباره پروژه
                </h2>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  این پروژه آشپزخانه مدرن مینیمال با استفاده از مواد با کیفیت بالا و طراحی مبتكر انجام شده است. تمرکز بر خطوط تمیز، فضاهای کارآمد و esthetic کلاسیک معاصر است.
                </p>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  با ترکیب چوب بلوط طبیعی و شیشه مات، این آشپزخانه حس شفافیت و gleichzeitig dava را ایجاد می‌کند که برای زندگی مدرن ایده‌آل است.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-4">
                  مشخصات فنی
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="w-8 h-8 flex-shrink-0 bg-neutral-800 rounded-md flex-items-center justify-center text-neutral-300">
                      🪵
                    </span>
                    <div className="ml-3">
                      <p className="font-medium text-neutral-50">مواد اولیه</p>
                      <p className="text-neutral-400">چوب بلوط، شیشه مات، فلدस्पار</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-8 h-8 flex-shrink-0 bg-neutral-800 rounded-md flex-items-center justify-center text-neutral-300">
                      📐
                    </span>
                    <div className="ml-3">
                      <p className="font-medium text-neutral-50">ابعاد</p>
                      <p className="text-neutral-400">۳٫۲ × ۷٫۸ متر</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="w-8 h-8 flex-shrink-0 bg-neutral-800 rounded-md flex-items-center justify-center text-neutral-300">
                      💰
                    </span>
                    <div className="ml-3">
                      <p className="font-medium text-neutral-50">برجسته costo</p>
                      <p className="text-neutral-400">۱۵۰ میلیون تومان</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Gallery */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-4">
                گالری تصاویر
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-[4/3] bg-neutral-800 rounded-lg">
                  <Image
                    src="/projects/gallery-1.jpg"
                    alt="Project gallery 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] bg-neutral-800 rounded-lg">
                  <Image
                    src="/projects/gallery-2.jpg"
                    alt="Project gallery 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] bg-neutral-800 rounded-lg">
                  <Image
                    src="/projects/gallery-3.jpg"
                    alt="Project gallery 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] bg-neutral-800 rounded-lg">
                  <Image
                    src="/projects/gallery-4.jpg"
                    alt="Project gallery 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cabinet Maker Section */}
          <div className="mt-16 pt-12 border-t border-neutral-800">
            <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-6">
              کابینت‌کار این پروژه
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-neutral-800 rounded-full flex-shrink-0">
                <Image
                  src="/makers/maker-detail.jpg"
                  alt="Cabinet maker portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-serif font-semibold text-neutral-50">
                  علی رضایی
                </h3>
                <p className="text-neutral-400">
                  طراح و مجری کابینت با بیش از ۱۲ سال تجربه در پروژه‌های سكنتی و اداری لوکس و مدرن.
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary-900/50 text-primary-300 text-xs rounded">
                    مدرن
                  </span>
                  <span className="px-3 py-1 bg-primary-900/50 text-primary-300 text-xs rounded">
                    مینیمال
                  </span>
                  <span className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded">
                    تأیید شده
                  </span>
                </div>
                <div className="flex items-center text-neutral-400">
                  <span className="text-yellow-400">★ ۴٫۹</span>
                  <span className="mx-2">(۱۲۸ نظر)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-16 flex flex-col lg:flex-row gap-6">
            <Link
              href="/cabinet-makers/profile"
              className="flex-1 lg:w-auto px-8 py-4 bg-neutral-800 text-neutral-200 rounded-md hover:bg-neutral-700 transition-colors duration-200 text-center font-medium"
            >
              مشاهده پروفایل الكابینت‌کار
            </Link>
            <Link
              href="/project-request"
              className="flex-1 lg:w-auto px-8 py-4 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors duration-200 text-center font-medium"
            >
              درخواست پروژه مشابه
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}