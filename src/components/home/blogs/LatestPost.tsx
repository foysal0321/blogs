import Image from "next/image";


export default function LatestPost() {
    return (
        <div >
            <h1 className="text-xl text-[#38B5F4] font-semibold text-center md:mt-1 mt-4">LATEST POSTS</h1>
            <div className="md:w-[400px] w-[330px] flex flex-wrap  items-center gap-6 mt-4 ">
                <Image src='https://cheerup2.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1474447092129-94d386577849-1170x780.jpg' width={160} height={200} alt='blog' />
                <div className="md:w-[200px]">
                    <h4 className="text-zinc-900 font-medium">Epic Sea View of Santorini, Greece</h4>
                    <p className='text-gray-600 py-2 text-xs '>MAY 15, 2016</p>
                </div>
            </div>
            <div className="md:w-[400px] w-[330px] flex flex-wrap  items-center gap-6 mt-4 ">
                <Image src='https://cheerup2.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1474447092129-94d386577849-1170x780.jpg' width={160} height={200} alt='blog' />
                <div className="md:w-[200px]">
                    <h4 className="text-zinc-900 font-medium">10 Ideas To Spice up Your Next Hiking Trip</h4>
                    <p className='text-gray-600 py-2 text-xs '>MAY 15, 2016</p>
                </div>
            </div>
            <div className="md:w-[400px] w-[330px] flex flex-wrap  items-center gap-6 mt-4 ">
                <Image src='https://cheerup2.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1474447092129-94d386577849-1170x780.jpg' width={160} height={200} alt='blog' />
                <div className="md:w-[200px]">
                    <h4 className="text-zinc-900 font-medium">10 Ideas To Spice up Your Next Hiking Trip</h4>
                    <p className='text-gray-600 py-2 text-xs '>MAY 15, 2016</p>
                </div>
            </div>
            <div className="md:w-[400px] w-[330px] h-[120px] flex flex-wrap  items-center gap-6 mt-4 ">
                <Image src='https://cheerup2.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1474447092129-94d386577849-1170x780.jpg' width={160} height={200} alt='blog' />
                <div className="md:w-[200px]">
                    <h4 className="text-zinc-900 font-medium">A Calm Comes Over The Lake This Month</h4>
                    <p className='text-gray-600 py-2 text-xs '>MAY 15, 2016</p>
                </div>
            </div>

            <div className="mt-8 p-4 md:w-[400px] w-[330px]">
                <h1 className="text-xl text-[#38B5F4] font-semibold text-center py-4  md:mt-2 mt-5">CATEGORIES  </h1>
                <div className="flex flex-wrap justify-between py-4">
                    <button>America</button>
                    <p className="text-gray-400">(5)</p>
                </div> <hr />
                <div className="flex flex-wrap justify-between py-4">
                    <button>Eroupe</button>
                    <p className="text-gray-400">(10)</p>
                </div> <hr />
                <div className="flex flex-wrap justify-between py-4">
                    <button>Hill</button>
                    <p className="text-gray-400">(9)</p>
                </div> <hr />
                <div className="flex flex-wrap justify-between py-4">
                    <button>Tips </button>
                    <p className="text-gray-400">(7)</p>
                </div> <hr />
            </div>
        </div>
    )
}
