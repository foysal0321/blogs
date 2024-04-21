import Image from 'next/image'
import header from '../../../images/hero.jpg'

export default function Header() {
  return (
    <div>
      <div className='relative  h-[70vh]  w-full'>
        <Image className='absolute w-full h-[70vh] object-cover mix-blend-overlay' src={header} alt="" />
        <div className="flex justify-center items-end">
          <div className="text-center text-white py-40">
            <h1 className=' text-4xl py-4'>Where will you go next?</h1>
            <p>Welcome to Trawell, a WordPress theme carefully crafted for travelers and <br /> adventurers. Pack your bags, hit the road and dont forget to write down all of <br /> your amazing stories!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
