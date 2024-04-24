import Image from "next/image";

export default function Gallery() {

  return (
    <div className='w-full'>
      <div className="travel-tour flex flex-wrap w-[100%] text-white justify-space-around mx-auto">
        <div className=" tour-info-color bg-[#00453f] h-[420px]">
          <div className="tour-info mx-5 lg:mx-52 h-[420px]">
            <div className="tour-details max-w-[500px] h-[310px] md:h-[261px] mt-24  border border-gray-600 text-center" data-aos="fade-down">
              <h1 className='p-3 mt-6 text-xl font-semibold'>Travel Blogs</h1>
              <p className='p-3 text-sm'>One of the most important benefits of traveling is the opportunity to build friendships and connections with people from all around the world. Sharing our travel experiences with others is what makes it an enriching life experience.</p>
              <button className='btn btn-sm btn-outline mt-2 text-white'>Lern more</button>
            </div>
          </div>
        </div>

        <div className="tour-img mx-12 lg:mx-0" data-aos="fade-up">
          <div className="imgs flex flex-wrap">
            <Image src="https://www.esikkimtourism.in/wp-content/uploads/2019/10/sikkim-tour-in-april.jpg" width={300} height={200} alt="" />
            <Image src="https://imgcld.yatra.com/ytimages/image/upload/v1436339077/Goa_104.jpg" width={300} height={200} alt="" />
          </div>
          <div className="imgs flex flex-wrap">
            <Image src="https://media.istockphoto.com/id/1156492509/photo/woman-near-nung-nung-waterfal-on-bali-indonesia.jpg?s=612x612&w=0&k=20&c=O6x4rEyJusX9LI9biqrA141KxMfiynJ3EtG7u3595Jo=" width={300} height={200} alt="" className='h-[200px]' />
            <Image src="https://www.traveloffpath.com/wp-content/uploads/2022/05/Happy-Young-Female-Traveler-Enjoying-A-Long-Tail-Boatride-In-Thailand-1.jpg" width={300} height={200} alt="" className='h-[200px]' />
          </div>
        </div>
      </div>
    </div>
  )
}
