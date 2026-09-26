import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import Link from "next/link";

export default function CabinetMakerProfilePage() {
  return (
    <>
      <Navbar />
      <section className="relative bg-background">
        {/* Profile Header */}
        <div className="relative h-[500px]">
          <div className="absolute inset-0">
            <Image
              src="/makers/cover-profile.jpg"
              alt="Cabinet maker profile cover"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent" />
          </div>

          {/* Profile Avatar and Name */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center space-x-4">
            <div className="w-20 h-20 bg-neutral-800 rounded-full overflow-hidden border-4 border-neutral-950">
              <Image
                src="/makers/avatar-profile.jpg"
                alt="Cabinet maker avatar"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-neutral-50">
                علی رضایی
              </h2>
              <p className="text-neutral-400">
                طراح و مجری کابینت حرفه‌ای
              </p>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="container mx-auto px-4 py-24">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-50 mb-4">
              پروفایل کابینت‌کار
            </h1>
          </div>

          {/* About Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-4">
              درباره من
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              با بیش از ۱۲ سال تجربه در مجال طراحی و تولید کابینت‌های لوکس و مدرن، تیم ما تمرکز بر ترکیب esthetic و کارایی را دارد. ما به hver مشتری kayded به الخوصص و استفاده از مواد با کیفیت بالا توجه ویژه‌ای داریم.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-6">
              تخصص ما در پروژه‌های سكنتی لوکس، آشپزخانه‌های integrating و فضاهای اداری modern است. با استفاده از تکنیک‌های پیشرفته و matériaux آتی، تا به حال بیش از ۲۰۰ پروژه موفق را به Picture irreversiblement تحویل داده‌ایم.
            </p>
          </div>

          {/* Skills and Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-xl font-serif font-semibold text-neutral-50 mb-4">
                مهارت‌ها
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-5 h-5 mr-2">🎨</span>
                  <span className="text-neutral-400">طراحی داخلی</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 mr-2">🔨</span>
                  <span className="text-neutral-400">تنفيذ کابینت</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 mr-2">📐</span>
                  <span className="text-neutral-400">نقشه کشی و طرح</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 mr-2">🪵</span>
                  <span className="text-neutral-400">انتخاب و پردازش چوب</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 mr-2">💡</span>
                  <span className="text-neutral-400">طراحی نورسنجی</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-semibold text-neutral-50 mb-4">
                خدمات
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-5 h-5 mr-2">🏠</span>
                  <span className="text-neutral-400">کابینت آشپزخانه</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 mr-2">🚪</span>
                  <span className="text-neutral-400">کابینت دوار</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 mr-2">🗄️</span>
                  <span className="text-neutral-400">کابینت screenplay</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 mr-2">📚</span>
                  <span className="text-neutral-400">کابینت کتاب</span>
                </div>
                <div className="flex items-center">
                  <span className="w-5 h-5 mr-2">🛋️</span>
                  <span className="text-neutral-400">کابینت تلویزیون</span>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-6">
              кбіпортфوليو
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden">
                <Image
                  src="/projects/portfolio-1.jpg"
                  alt="Portfolio project 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden">
                <Image
                  src="/projects/portfolio-2.jpg"
                  alt="Portfolio project 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden">
                <Image
                  src="/projects/portfolio-3.jpg"
                  alt="Portfolio project 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden">
                <Image
                  src="/projects/portfolio-4.jpg"
                  alt="Portfolio project 4"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden">
                <Image
                  src="/projects/portfolio-5.jpg"
                  alt="Portfolio project 5"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden">
                <Image
                  src="/projects/portfolio-6.jpg"
                  alt="Portfolio project 6"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Testimonials Placeholder */}
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-6">
              نظرات مشتریان
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-neutral-800 rounded-lg">
                <p className="text-neutral-400 italic mb-3">
                  «عالی بود! تیم علی رضایی پروژه آشپزخانه ما را به فوق‌العاده کرد. از طراحی تا اجرا همه چیز profesyonel بود.»
                </p>
                <p className="text-neutral-500 font-medium">— رضا أحمدی، تهران</p>
              </div>
              <div className="p-6 bg-neutral-800 rounded-lg">
                <p className="text-neutral-400 italic mb-3">
                  «کابینت دوار سالن ما خیلی زیبای شده و کارایی بالایی داره. فريق کار بسیار حرفه‌ای و دقیق بود.»
                </p>
                <p className="text-neutral-500 font-medium">— فاطمه纯войي، اصفهان</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col lg:flex-row gap-6">
            <Link
              href="/project-request"
              className="flex-1 lg:w-auto px-8 py-4 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors duration-200 text-center font-medium"
            >
              درخواست همکاری
            </Link>
            <Link
              href="/cabinet-makers"
              className="flex-1 lg:w-auto px-8 py-4 bg-neutral-800 text-neutral-200 rounded-md hover:bg-neutral-700 transition-colors duration-200 text-center font-medium"
            >
              بازگشت به لیست کابینت‌کارها
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}