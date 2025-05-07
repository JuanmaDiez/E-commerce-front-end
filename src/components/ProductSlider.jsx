// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import styles from "../modules/ProductSlider.module.css";

// import required modules
import { Navigation } from "swiper";

export default function ProductSlider({ products }) {
  return (
    products && (
      <div className="container mt-5 mb-5">
        <h2 className="mt-5 mb-4 d-flex justify-content-center">
          GoPro's Top Picks
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  );
}
