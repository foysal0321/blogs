
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex items-center justify-center h-[90vh] mb-12 bg-fixed bg-center bg-cover custom-image'>
      <div className='p-5 text-white z-[2] '>
        <h1 className=' text-5xl py-4 font-medium'>Where will you go next?</h1>
        <p>Welcome to Trawell, a WordPress theme carefully crafted for travelers and <br /> adventurers. Pack your bags, hit the road and dont forget to write down all of <br /> your amazing stories!</p>
        <Link href='/create-blog'>
        <button className="btn btn-sm mt-4 btn-outline text-white">Create a Blog</button>
        </Link>
        
      </div>
    </div>

  )
}