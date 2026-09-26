import Navbar from "@/components/ui/navbar";
import Link from "next/link";

export default function ResumeBuilderPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-[calc(100vh-4.5rem)] bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-50 mb-4">
                رزومه‌ساز کابینت‌کاران
              </h1>
              <p className="text-lg md:text-xl text-neutral-400">
                رزومه حرفه‌ای خود را ایجاد کنید تا بتوانید بهتر به پروژه‌های مناسب دسترسی پیدا کنید.
              </p>
            </div>

            <div className="space-y-8">
              {/* Personal Info */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-4">
                  اطلاعات شخصی
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-50 mb-2">
                      نام کامل
                    </label>
                    <input
                      type="text"
                      placeholder="مثلاً علی رضایی"
                      className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-50 mb-2">
                      عنوان حرفه‌ای
                    </label>
                    <input
                      type="text"
                      placeholder="مثلاً طراح و مجری کابینت لوکس"
                      className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-neutral-50 mb-2">
                    شماره تماس
                  </label>
                  <input
                    type="tel"
                    placeholder="مثلاً ۰۹۱۲۳۴۵۶۷۸۹"
                    className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-neutral-50 mb-2">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    placeholder="مثلاً info@email.com"
                    className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-neutral-50 mb-2">
                    شهر و استان
                  </label>
                  <input
                    type="text"
                    placeholder="مثلاً تهران، تهران"
                    className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* About */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-4">
                  درباره من
                </h2>
                <textarea
                  rows={4}
                  placeholder="حداقل ۲۰۰ کاراکتر در مورد سوابق، فلسفه کاری و تخصص خود بنویسید..."
                  className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                />
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-4">
                  سوابق کاری
                </h2>
                <div className="space-y-4">
                  {/* Experience Item */}
                  <div className="border border-neutral-800 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <input
                          type="text"
                          placeholder="نام شرکت یا atelier"
                          className="w-full px-3 py-2 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          placeholder="۲۰۲۰"
                          className="w-20 px-3 py-2 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <span>-</span>
                        <input
                          type="text"
                          placeholder="حاضر"
                          className="w-20 px-3 py-2 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="موقعیت (شهر، استان)"
                      className="w-full px-3 py-2 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 mb-2"
                    />
                    <textarea
                      rows={3}
                      placeholder="توضیح مخفف در مورد نقش، پروژه‌های کلیدی و دستاوردهای خود..."
                      className="w-full px-3 py-2 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    />
                    <div className="mt-2 flex flex-wrap gap-2">
                      <button
                        type="button"
                        className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded hover:bg-neutral-700 transition-colors"
                      >
                        اضافه کردن تجربه جدید
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-4">
                  مهارت‌ها
                </h2>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="skill-1"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="skill-1" className="ml-2 text-neutral-400">
                      طراحی داخلی
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="skill-2"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="skill-2" className="ml-2 text-neutral-400">
                      تنفيذ کابینت
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="skill-3"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="skill-3" className="ml-2 text-neutral-400">
                      نقشه کشی و طرح
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="skill-4"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="skill-4" className="ml-2 text-neutral-400">
                      انتخاب و پردازش چوب
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="skill-5"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="skill-5" className="ml-2 text-neutral-400">
                      نورسنجی و럭сіری
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="skill-6"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="skill-6" className="ml-2 text-neutral-400">
                      مدیریت پروژه
                    </label>
                  </div>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="مهارت دیگر..."
                    className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-4">
                  خدمات ارائه شده
                </h2>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="service-1"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="service-1" className="ml-2 text-neutral-400">
                      کابینت آشپزخانه
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="service-2"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="service-2" className="ml-2 text-neutral-400">
                      کابینت دوار
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="service-3"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="service-3" className="ml-2 text-neutral-400">
                      کابینت تلویزیون
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="service-4"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="service-4" className="ml-2 text-neutral-400">
                      کابینت کتاب
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="service-5"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="service-5" className="ml-2 text-neutral-400">
                      کابینت módul
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="service-6"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="service-6" className="ml-2 text-neutral-400">
                      سفارشی‌سازی فضا
                    </label>
                  </div>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="سرویس دیگر..."
                    className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Portfolio */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-4">
                  creamاسننت
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="aspect-[4/3] bg-neutral-800 rounded-lg">
                      <div className="flex items-center justify-center text-neutral-500">
                        + 加项目
                      </div>
                    </div>
                    <div className="aspect-[4/3] bg-neutral-800 rounded-lg">
                      <div className="flex items-center justify-center text-neutral-500">
                        + 加项目
                      </div>
                    </div>
                    <div className="aspect-[4/3] bg-neutral-800 rounded-lg">
                      <div className="flex items-center justify-center text-neutral-500">
                        + 加项目
                      </div>
                    </div>
                    <div className="aspect-[4/3] bg-neutral-800 rounded-lg">
                      <div className="flex items-center justify-center text-neutral-500">
                        + 加项目
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-colors"
                    >
                      اضافه کردن پروژه جدید به creamاسننت
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-neutral-50 mb-4">
                  تماس با من
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="contact-1"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="contact-1" className="ml-2 text-neutral-400">
                      تماس تلفنی
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="contact-2"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="contact-2" className="ml-2 text-neutral-400">
                      پیامک / واتساپ
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="contact-3"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="contact-3" className="ml-2 text-neutral-400">
                      ایمیل
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="contact-4"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="contact-4" className="ml-2 text-neutral-400">
                      ఇستقرام
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="contact-5"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="contact-5" className="ml-2 text-neutral-400">
                      تلگرام
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col lg:flex-row gap-4">
              <Link
                href="/cabinet-makers/profile"
                className="flex-1 lg:w-auto px-8 py-4 bg-neutral-800 text-neutral-200 rounded-md hover:bg-neutral-700 transition-colors duration-200 text-center font-medium"
              >
                مشاهده پروفایل
              </Link>
              <button
                type="button"
                className="flex-1 lg:w-auto px-8 py-4 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors duration-200 text-center font-medium"
              >
                ذخیره و انتشار رزومه
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}