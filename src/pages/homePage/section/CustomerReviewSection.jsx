import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CustomerReviewCard } from "../components/CustomerReviewCard";
import { CUSTOMER_REVIEWS } from "../data/customerReview";

export function CustomerReviewSection() {
  // Refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="customer-review">
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-24 py-4">
        <div className="flex flex-col gap-8">
          {/* Heading */}
          <div>
            <h1
              className="text-primary text-3xl md:text-5xl text-center font-bold"
              style={{ fontFamily: "Great Vibes" }}
            >
              Testimonials
            </h1>

            <h2 className="text-2xl md:text-6xl text-center font-bold">
              What Our Customer Says
            </h2>
          </div>

          {/* Swiper */}
          <div className="flex flex-col gap-6">
            <div>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  // Swiper requires the refs to be set before initialization
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-full md:w-3/4 lg:w-1/2"
              >
                {CUSTOMER_REVIEWS.map((review) => (
                  <SwiperSlide
                    key={review.id}
                    className="py-3 px-2 flex justify-center items-center"
                  >
                    <CustomerReviewCard review={review} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Custom Arrows */}
            <div className="flex justify-center items-center gap-10">
              <button
                ref={prevRef}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary hover:text-white text-black flex items-center justify-center"
              >
                <ChevronLeft />
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-primary hover:text-white text-black flex items-center justify-center"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
