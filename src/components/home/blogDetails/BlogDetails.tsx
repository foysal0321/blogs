import Image from 'next/image'
import React from 'react'
import view from '../../../images/heart.svg'

export default function BlogDetails() {
  return (
    <div className=' py-16'>
        <div className="max-w-[1200px] mx-auto flex flex-wrap gap-5">
        <div className="w-[780px]">
            <div className="text-center">
                <h4>Travel Tips</h4>
                <h1 className='text-4xl py-4'>Epic Sea View of Santorini, Greece</h1>
                <p className='py-4'>MAY 15, 2016  3 COMMENTS</p>
            </div>
            <Image src='https://cheerup2.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045-1024x684.jpg' width={780} height={700} alt='view' />
            <p className='py-4 mt-8'>More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.
</p> <br />
<p>
Coquettish darn pernicious foresaw therefore much amongst lingeringly shed much due antagonistically alongside so then more and about turgid wrote so stunningly this that much slew.</p>
<button className='text-teal-500 text-semibold mt-6 text-center'>Read More</button>
    <div className="flex justify-between py-6 mt-6">
        <h2> <span className='font-mono text-gray-400'>By</span> Faysal</h2>
        <div className="flex gap-2">
        <Image src={view} width={20} alt='view' />
        <p className='text-gray-400 font-semibold'> 99</p>
        </div> 
    </div><hr />
    
        </div>


        <div className="w-[400px]">
            <h2 className='text-center py-6 text-xl font-semibold'>TOP DESTINATIONS</h2>
            <div className="grid gap-6">
                <div>
                    <Image className='relative h-[180px]' src='https://cheerup2.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045-1024x684.jpg' width={400} height={180} alt='view' />
                    <div className="flex justify-center">
                    <p className='absolute text-center px-6 py-2 bg-white text-black -mt-24 '>P A R I S</p>
                    </div>
                </div>
                <div>
                    <Image className='relative h-[180px]' src='https://cheerup2.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045-1024x684.jpg' width={400} height={180} alt='view' />
                    <div className="flex justify-center">
                    <p className='absolute text-center px-6 py-2 bg-white text-black -mt-24 '>P A R I S</p>
                    </div>
                </div>
                <div>
                    <Image className='relative h-[180px]' src='https://cheerup2.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/OIN_01045-1024x684.jpg' width={400} height={180} alt='view' />
                    <div className="flex justify-center">
                    <p className='absolute text-center px-6 py-2 bg-white text-black -mt-24 '>P A R I S</p>
                    </div>
                </div>
            </div>
        <div className="p-8 mt-12 bg-gray-100 text-center">
            <h1 className='font-semibold  text-sm'>NEWSLETTER</h1>
            <p className='text-xs py-5 mt-2'>Enter your email address below to subscribe to <br /> my newsletter</p> 
            <input type="text" placeholder="Your email address.." className="input input-bordered w-full max-w-xs " />
            <button className='btn w-80 mt-2 btn-md bg-sky-400 text-white'>SUBSCRIBE</button>
        </div>
        
        </div>
        </div>
    </div>
  )
}
