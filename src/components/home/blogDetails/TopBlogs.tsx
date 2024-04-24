import Image from 'next/image'
import london from '../../../images/london.webp'
import paris from '../../../images/paris.avif'
import san from '../../../images/san.webp'

export default function TopBlogs() {
    return (
        <div>
            <h2 className='text-center py-6 text-xl font-semibold text-[#38B5F4]'>TOP DESTINATIONS</h2>
            <div className="grid gap-6">
                <div>
                    <Image className='relative h-[180px]' src={paris} width={400} height={180} alt='view' />
                    <div className="flex justify-center">
                        <p className='absolute text-center px-6 py-2 bg-white text-black -mt-24'>P A R I S</p>
                    </div>
                </div>
                <div>
                    <Image className='relative h-[180px]' src={london} width={400} height={180} alt='view' />
                    <div className="flex justify-center">
                        <p className='absolute text-center px-6 py-2 bg-white text-black -mt-24 '>SAN FRANSISCO</p>
                    </div>
                </div>
                <div>
                    <Image className='relative h-[180px]' src={san} width={400} height={180} alt='view' />
                    <div className="flex justify-center">
                        <p className='absolute text-center px-6 py-2 bg-white text-black -mt-24 '>L O N D O N</p>
                    </div>
                </div>
            </div>
            <div className="p-8 mt-12 bg-gray-100 text-center">
                <h1 className='font-semibold  text-sm'>NEWSLETTER</h1>
                <p className='text-xs py-5 mt-2'>
                    Enter your email address below to subscribe to <br /> my newsletter
                </p>
                <input type="text" placeholder="Your email address.." className="input input-bordered w-full max-w-xs " />
                <button className='btn md:w-80 w-[270px] mt-2 bg-[#38B5F4] text-white'>
                    SUBSCRIBE
                </button>
            </div>


        </div>
    )
}
