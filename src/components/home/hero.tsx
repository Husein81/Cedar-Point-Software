"use client";

import { Button } from "@/components/ui/button";
import { Activity } from "react";
import { motion } from "framer-motion";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "../icon";
import { slides } from "./config";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <div className="w-full bg-surface pt-20 lg:pt-24 pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet !bg-slate-300 !w-2.5 !h-2.5 !rounded-full !opacity-100 transition-all duration-300",
            bulletActiveClass: "!bg-primary !w-6",
          }}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
                {/* Left Content */}
                <div className="flex-1 max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-800 mb-6 shadow-sm"
                  >
                    <Icon
                      name={slide.badgeIcon}
                      className="size-3.5 mr-1 text-primary"
                    />
                    {slide.badgeText}
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap items-center gap-4"
                  >
                    <Button
                      size="lg"
                      className="px-8 font-semibold h-12 text-base rounded-lg"
                    >
                      {slide.primaryButton}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="px-8 font-semibold h-12 text-base rounded-lg bg-white"
                    >
                      {slide.secondaryButton}
                    </Button>
                  </motion.div>
                </div>

                {/* Right Content - Mock UI */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-1 w-full flex justify-center lg:justify-end"
                >
                  <div className="relative w-full max-w-[600px] aspect-4/3 lg:aspect-auto lg:h-[450px] bg-linear-to-br from-slate-200 to-slate-100 rounded-2xl flex items-center justify-center p-6 lg:p-10">
                    {/* Floating elements for visual flair */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 blur-3xl rounded-full pointer-events-none" />

                    {/* Mock UI Container */}
                    <div className="relative w-full h-full bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col transform transition-transform hover:scale-[1.02] duration-500">
                      {/* Fake Browser/App Header */}
                      <div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50">
                        <div className="size-3 rounded-full bg-slate-200" />
                        <div className="size-3 rounded-full bg-slate-200" />
                        <div className="size-3 rounded-full bg-slate-200" />
                      </div>

                      {/* Fake App Body depending on mockType */}
                      <div className="flex-1 p-6 flex flex-col gap-6">
                        <Activity
                          mode={
                            slide.mockType === "dashboard"
                              ? "visible"
                              : "hidden"
                          }
                        >
                          <div className="h-24 bg-blue-500 rounded-lg w-full flex items-center px-6">
                            <div className="text-white">
                              <div className="text-sm opacity-80 mb-1">
                                Total Revenue
                              </div>
                              <div className="text-3xl font-bold">$12,350</div>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="flex-1 h-32 bg-slate-50 rounded-lg border border-slate-100 p-4">
                              <div className="h-4 w-1/2 bg-slate-200 rounded mb-4" />
                              <div className="flex items-end gap-2 h-16">
                                <div className="w-1/4 h-full bg-primary/20 rounded-t" />
                                <div className="w-1/4 h-2/3 bg-primary/40 rounded-t" />
                                <div className="w-1/4 h-5/6 bg-primary/60 rounded-t" />
                                <div className="w-1/4 h-1/2 bg-primary/80 rounded-t" />
                              </div>
                            </div>
                            <div className="w-1/3 h-32 bg-slate-50 rounded-lg border border-slate-100 p-4 flex flex-col justify-between">
                              <div className="h-4 w-2/3 bg-slate-200 rounded" />
                              <div className="size-12 rounded-full border-4 border-primary/30 border-t-primary mx-auto" />
                            </div>
                          </div>
                        </Activity>
                        <Activity
                          mode={
                            slide.mockType === "menu" ? "visible" : "hidden"
                          }
                        >
                          <div className="flex gap-6 h-full">
                            <div className="w-1/3 border-r border-slate-100 pr-4 flex flex-col gap-3">
                              <div className="h-8 bg-slate-100 rounded w-3/4 mb-2" />
                              <div className="h-4 bg-primary/20 rounded w-full" />
                              <div className="h-4 bg-slate-100 rounded w-full" />
                              <div className="h-4 bg-slate-100 rounded w-full" />
                              <div className="h-4 bg-slate-100 rounded w-full" />
                            </div>
                            <div className="flex-1 grid grid-cols-2 gap-4">
                              {[1, 2, 3, 4].map((i) => (
                                <div
                                  key={i}
                                  className="bg-slate-50 rounded-lg p-3 flex flex-col gap-2"
                                >
                                  <div className="aspect-square bg-slate-200 rounded-md w-full" />
                                  <div className="h-3 bg-slate-200 rounded w-3/4" />
                                  <div className="h-3 bg-slate-200 rounded w-1/2" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </Activity>

                        <Activity
                          mode={
                            slide.mockType === "analytics"
                              ? "visible"
                              : "hidden"
                          }
                        >
                          <div className="flex flex-col gap-4 h-full">
                            <div className="flex justify-between items-center mb-2">
                              <div className="h-6 w-1/3 bg-slate-200 rounded" />
                              <div className="h-8 w-24 bg-primary rounded-md" />
                            </div>
                            <div className="flex-1 bg-slate-50 rounded-lg border border-slate-100 p-4 flex items-end gap-3">
                              {[40, 70, 45, 90, 65, 85, 100, 55, 75].map(
                                (h, i) => (
                                  <div
                                    key={i}
                                    className="flex-1 bg-primary/80 rounded-t transition-all"
                                    style={{ height: `${h}%` }}
                                  />
                                ),
                              )}
                            </div>
                          </div>
                        </Activity>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
