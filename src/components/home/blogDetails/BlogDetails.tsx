import Image from 'next/image'
import React from 'react'
import view from '../../../images/heart.svg'
import TopBlogs from './TopBlogs'
import Container from '@/components/shared/Container'

export default function BlogDetails() {
    return (
        <Container >
            <div className=" flex flex-wrap gap-5 m-5 py-16">
                <div className="max-w-[780px]">
                    <div className="text-center">
                        <h4 className='text-[#38B5F4] font-medium'>TRAVEL TIPS</h4>
                        <h1 className='text-4xl py-4'>Epic Sea View of Santorini, Greece</h1>
                        <p className='py-4 text-gray-500 text-xs'>MAY 15, 2016  3 COMMENTS</p>
                    </div>
                    <Image src='https://cheerup2.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045-1024x684.jpg' width={780} height={700} alt='view' />
                    <p className='py-4 mt-8'>More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.
                    </p> <br />
                    <p>
                        Coquettish darn pernicious foresaw therefore much amongst lingeringly shed much due antagonistically alongside so then more and about turgid wrote so stunningly this that much slew.</p>
                    <button className='text-[#38B5F4] text-semibold mt-6 text-center underline'>Read More</button>
                    <div className="flex justify-between py-6 mt-6">
                        <h2> <span className='font-mono text-gray-400'>By</span> Faysal</h2>
                        <div className="flex gap-2">
                            <Image src={view} width={20} alt='view' />
                            <p className='text-gray-400 font-semibold'> 99</p>
                        </div>
                    </div><hr />
                </div>

                <div className="w-[330px] md:w-[400px]">
                    <TopBlogs />
                </div>
            </div>
        </Container>
    )
}
