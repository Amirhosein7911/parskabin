import Navbar from "@/components/ui/navbar";
import Link from "next/link";

export default function ProjectRequestPage() {
  return (
    <>
      <Navbar />
      <section className="min-h-[calc(100vh-4.5rem)] bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-50 mb-4">
                ثبت پروژه
              </h1>
              <p className="text-lg md:text-xl text-neutral-400">
                اطلاعات پروژه خود را کامل کنید تا بتوانیم شما را با بهترین کابینت‌کاران مناسب همkinson کنیم.
              </p>
            </div>

            <form className="space-y-6">
              {/* Project Type */}
              <div>
                <label className="block text-sm font-medium text-neutral-50 mb-2">
                  نوع پروژه
                </label>
                <select
                  className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">اختيار کنید...</option>
                  <option value="kitchen">آشپزخانه</option>
                  <option value="bathroom">دورباين</option>
                  <option value="closet">کابینت لباس</option>
                  <option value="tv">کابینت تلویزیون</option>
                  <option value="library">کابینت کتاب</option>
                  <option value="office">کابینت اداری</option>
                  <option value="other">سایر</option>
                </select>
              </div>

              {/* Space/Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-50 mb-2">
                    فضا
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">اختيار کنید...</option>
                    <option value="apartment">آپارتمان</option>
                    <option value="villa">ویلا</option>
                    <option value="office">دفتر کار</option>
                    <option value="store">قفسه</option>
                    <option value="other">سایر</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-50 mb-2">
                    مساحة (متر مربع)
                  </label>
                  <input
                    type="number"
                    placeholder="مثلاً ۲۵"
                    className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Style */}
              <div>
                <label className="block text-sm font-medium text-neutral-50 mb-2">
                  سبک طراحی
                </label>
                <select
                  className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">اختيار کنید...</option>
                  <option value="modern">مدرن</option>
                  <option value="minimal">مینیمال</option>
                  <option value="classic">کلاسیک</option>
                  <option value="neoclassic">نئوکلاسیک</option>
                  <option value="luxury">لوکس</option>
                  <option value="wooden">چوبی</option>
                  <option value="other">سایر</option>
                </select>
              </div>

              {/* Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-50 mb-2">
                    بودجه approximated (تومان)
                  </label>
                  <input
                    type="text"
                    placeholder="مثلاً ۱۵۰۰۰۰۰۰۰"
                    className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-50 mb-2">
                    شهر
                  </label>
                  <input
                    type="text"
                    placeholder="مثلاً تهران"
                    className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-neutral-50 mb-2">
                  توضیحات پروژه
                </label>
                <textarea
                  rows={4}
                  placeholder="لطفاً توضیح کامل در مورد فضای مورد نظر، نیازهای خاص و ایده‌های خود را بنویسید..."
                  className="w-full px-4 py-3 bg-neutral-800 text-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-neutral-50 mb-2">
                  عکس‌های پروژه (اختیاری)
                </label>
                <div className="flex flex-wrap space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-neutral-800 rounded-md flex-items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16h4a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-neutral-400">کلیک برای بارگذاری یا کش و رها کردن</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    حداکثر ۵ عکس، فرمت‌های پشتیبانی شده: JPG, PNG, حداکثر ۵ مگابایت هر فایل
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-accent-500 text-white rounded-md hover:bg-accent-600 transition-colors duration-200 text-lg font-medium"
                >
                  ارسال درخواست
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}