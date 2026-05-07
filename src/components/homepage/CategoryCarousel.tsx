"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

type Category = { _id: string; name: string; image?: string };

export default function CategoryCarousel() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [api, setApi] = useState<CarouselApi>();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!apiUrl) { setLoading(false); return; }
    fetch(`${apiUrl}/category`)
      .then(r => r.json())
      .then(data => { if (data.categories) setCategories(data.categories); })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [apiUrl]);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => { api.off("select", update); };
  }, [api]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  if (!loading && categories.length === 0) return null;

  return (
    <section className="max-w-frame mx-auto text-center px-4 xl:px-0">
      <motion.h2
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn([integralCF.className, "text-[32px] md:text-5xl mb-8 md:mb-14 capitalize"])}
      >
        All Categories
      </motion.h2>

      <motion.div
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: "0", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {loading ? (
          <div className="flex gap-4 overflow-hidden justify-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-3 animate-pulse shrink-0">
                <div className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full bg-brand/10" />
                <div className="h-4 w-24 bg-brand/10 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <Carousel opts={{ align: "start" }} setApi={setApi} className="w-full mb-4 md:mb-9">
              <CarouselContent className="mx-4 xl:mx-0 space-x-4 sm:space-x-6">
                {categories.map(cat => (
                  <CarouselItem key={cat._id} className="pl-0 basis-auto">
                    <Link
                      href={`/shop?categories=${encodeURIComponent(cat.name)}`}
                      className="flex flex-col items-center gap-2 sm:gap-3 group"
                    >
                      <div className="relative w-[110px] h-[110px] sm:w-[160px] sm:h-[160px] rounded-full overflow-hidden bg-[#f5ede4] border-2 border-transparent group-hover:border-brand transition-all duration-300 shrink-0">
                        {cat.image ? (
                          <Image
                            src={cat.image}
                            alt={cat.name}
                            fill
                            sizes="160px"
                            className="object-cover group-hover:scale-110 transition-all duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-3xl sm:text-4xl">
                            🛍️
                          </div>
                        )}
                      </div>
                      <span className="text-xs sm:text-base font-medium text-brand group-hover:text-brand-dark transition-colors max-w-[110px] sm:max-w-none truncate">
                        {cat.name}
                      </span>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Desktop arrows */}
              <CarouselPrevious className="hidden sm:flex -left-5 xl:-left-8 border-brand/20 text-brand hover:bg-brand hover:text-white hover:border-brand disabled:opacity-20" />
              <CarouselNext className="hidden sm:flex -right-5 xl:-right-8 border-brand/20 text-brand hover:bg-brand hover:text-white hover:border-brand disabled:opacity-20" />
            </Carousel>

            {/* Mobile arrow row */}
            <div className="flex sm:hidden justify-center gap-3 mb-6">
              <button
                onClick={scrollPrev}
                disabled={!canPrev}
                aria-label="Previous"
                className={cn(
                  "w-9 h-9 rounded-full border border-brand/20 flex items-center justify-center transition-all",
                  canPrev ? "text-brand hover:bg-brand hover:text-white hover:border-brand" : "opacity-30 cursor-not-allowed text-brand/40"
                )}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <button
                onClick={scrollNext}
                disabled={!canNext}
                aria-label="Next"
                className={cn(
                  "w-9 h-9 rounded-full border border-brand/20 flex items-center justify-center transition-all",
                  canNext ? "text-brand hover:bg-brand hover:text-white hover:border-brand" : "opacity-30 cursor-not-allowed text-brand/40"
                )}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          </>
        )}

        <Link
          href="/shop"
          className="inline-block px-[54px] py-4 border rounded-full hover:bg-brand hover:text-white text-brand transition-all font-medium text-sm sm:text-base border-brand/20"
        >
          View All Products
        </Link>
      </motion.div>
    </section>
  );
}
