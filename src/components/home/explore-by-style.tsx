import StyleCard from "@/components/home/style-card";
import { styles } from "@/lib/mock-data";

export default function ExploreByStyle() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary-900/30 text-primary-400 text-sm font-medium rounded-full mb-4">
            سبک‌های طراحی
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-50 mb-4">
            khám phá بر اساس سبک
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            استایل‌های مختلف طراحی داخلی را کاوش کنید و الهام برای پروژه‌ی خود
            پیدا کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style) => (
            <StyleCard
              key={style.id}
              id={style.id}
              name={style.name}
              image={style.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
