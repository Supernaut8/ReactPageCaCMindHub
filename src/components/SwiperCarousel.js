import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles/SwiperCarousel.css'

import img1 from '../images/centro-medico1.jpg'
import img2 from '../images/centro-medico2.png'
import img3 from '../images/centro-medico3.jpg'
import img4 from '../images/centro-medico4.jpg'


export default function SwiperCarousel() {
    return (
        <>
            <Swiper className="mySwiper">
                <SwiperSlide><img src={img1} /></SwiperSlide>
                <SwiperSlide><img src={img2} /></SwiperSlide>
                <SwiperSlide><img src={img3} /></SwiperSlide>
                <SwiperSlide><img src={img4} /></SwiperSlide>
            </Swiper>
        </>
    );
}