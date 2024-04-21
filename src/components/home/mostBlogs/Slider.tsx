"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import '../blogtips/styles.css';
import travel1 from '../../../images/header.jpg'


export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={4}
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
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                }}
                className="mySwiper max-w-[1200px]"
            >
               
               
                <SwiperSlide>
                    <div className="w-[280px] h-[400px] mx-auto">
                        <Image className="h-[270px]" src={travel1} width={300} alt="image" />
                        <div className=" text-center p-4">
                            <h6 className='text-teal-400'>Travel Tips</h6>
                            <h2 className="py-2">Beautiful Hut Converted in Lush Green Trees</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[280px] h-[400px] mx-auto">
                        <Image className="h-[270px]" src={travel1} width={300} alt="image" />
                        <div className=" text-center p-4">
                            <h6 className='text-teal-400'>Travel Tips</h6>
                            <h2 className="py-2">Beautiful Hut Converted in Lush Green Trees</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[280px] h-[400px] mx-auto">
                        <Image className="h-[270px]" src={travel1} width={300} alt="image" />
                        <div className=" text-center p-4">
                            <h6 className='text-teal-400'>Travel Tips</h6>
                            <h2 className="py-2">Beautiful Hut Converted in Lush Green Trees</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[280px] h-[400px] mx-auto">
                        <Image className="h-[270px]" src={travel1} width={300} alt="image" />
                        <div className=" text-center p-4">
                            <h6 className='text-teal-400'>Travel Tips</h6>
                            <h2 className="py-2">Beautiful Hut Converted in Lush Green Trees</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-[280px] h-[400px] mx-auto">
                        <Image className="h-[270px]" src={travel1} width={300} alt="image" />
                        <div className=" text-center p-4">
                            <h6 className='text-teal-400'>Travel Tips</h6>
                            <h2 className="py-2">Beautiful Hut Converted in Lush Green Trees</h2>
                        </div>
                    </div>
                </SwiperSlide>
              
               
               
               






            </Swiper>
        </>
    );
}