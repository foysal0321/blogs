"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import './styles.css'
import travel2 from '../../../images/blogtip2.avif'
import travel3 from '../../../images/blogtip3.jpg'
import travel4 from '../../../images/blogtip4.avif'
import travel5 from '../../../images/blogtip5.jpg'


export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="md:w-[410px] w-[335px] h-[400px] mx-auto">
                        <Image className="relative h-[370px]" src={travel2} width={400} alt="image" />
                        <div className="md:w-[400px] w-[335px] absolute -mt-32 bg-[#00000077] text-center text-white">
                            <button className="text-center btn btn-primary btn-sm ">DESTINATIONS</button>
                            <h2 className="text-xl  p-5">Beautiful Hut Converted in Lush Green Trees</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:w-[410px] w-[335px] h-[400px] mx-auto">
                        <Image className="relative h-[370px]" src={travel3} width={400} alt="image" />
                        <div className="md:w-[400px] w-[335px] absolute -mt-32 bg-[#00000077] text-center text-white">
                            <button className="text-center btn btn-primary btn-sm ">DESTINATIONS</button>
                            <h2 className="text-xl  p-5">Mist All Around The Golden Gate Bridge</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:w-[410px] w-[335px] h-[400px] mx-auto">
                        <Image className="relative h-[370px]" src={travel5} width={400} alt="image" />
                        <div className="md:w-[400px] w-[335px] absolute -mt-32 bg-[#00000077] text-center text-white">
                            <button className="text-center btn btn-primary btn-sm ">DESTINATIONS</button>
                            <h2 className="text-xl  p-5">10 Ideas To Spice up Your Next Hiking Trip</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:w-[410px] w-[335px] h-[400px] mx-auto">
                        <Image className="relative h-[370px]" src={travel4} width={400} alt="image" />
                        <div className="md:w-[400px] w-[335px] absolute -mt-32 bg-[#00000077] text-center text-white">
                            <button className="text-center btn btn-primary btn-sm ">DESTINATIONS</button>
                            <h2 className="text-xl  p-5">Improve Your Photos With These Photography Tips</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}