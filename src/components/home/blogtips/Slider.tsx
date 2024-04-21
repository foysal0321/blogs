"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import './styles.css'
import travel1 from '../../../images/header.jpg'


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
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                }}
                className="mySwiper max-w-[1200px]"
            >
                <SwiperSlide>
                    <div className="md:w-[390px] w-[335px] h-[400px] mx-auto">
                        <Image className="relative h-[370px]" src={travel1} width={400} alt="image" />
                        <div className="md:w-[390px] w-[335px] absolute -mt-32 bg-[#00000077] text-center text-white">
                            <button className="text-center btn btn-primary btn-sm ">America</button>
                            <h2 className="text-xl  p-5">Beautiful Hut Converted in Lush Green Trees</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:w-[390px] w-[335px] h-[400px] mx-auto">
                        <Image className="relative h-[370px]" src={travel1} width={400} alt="image" />
                        <div className="md:w-[390px] w-[335px] absolute -mt-32 bg-[#00000077] text-center text-white">
                            <button className="text-center btn btn-primary btn-sm ">America</button>
                            <h2 className="text-xl  p-5">Beautiful Hut Converted in Lush Green Trees</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:w-[390px] w-[335px] h-[400px] mx-auto">
                        <Image className="relative h-[370px]" src={travel1} width={400} alt="image" />
                        <div className="md:w-[390px] w-[335px] absolute -mt-32 bg-[#00000077] text-center text-white">
                            <button className="text-center btn btn-primary btn-sm ">America</button>
                            <h2 className="text-xl  p-5">Beautiful Hut Converted in Lush Green Trees</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:w-[390px] w-[335px] h-[400px] mx-auto">
                        <Image className="relative h-[370px]" src={travel1} width={400} alt="image" />
                        <div className="md:w-[390px] w-[335px] absolute -mt-32 bg-[#00000077] text-center text-white">
                            <button className="text-center btn btn-primary btn-sm ">America</button>
                            <h2 className="text-xl  p-5">Beautiful Hut Converted in Lush Green Trees</h2>
                        </div>
                    </div>
                </SwiperSlide>






            </Swiper>
        </>
    );
}