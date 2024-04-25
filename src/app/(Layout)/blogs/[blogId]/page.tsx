import Container from '@/components/shared/Container'
import Image from 'next/image'
import view from '../../../../images/heart.svg'

export default async function page({ params }: { params: any }) {

    const baseUrl = 'https://blog.jrrecyclingsolutionsltd.com.bd'

    const res = await fetch(`${baseUrl}/wp-json/wp/v2/posts/${params.blogId}`, {
        method: 'GET'
    })
    const postData = await res.json()

    return (
        <Container >
            <div className="max-w-[800px] mx-auto py-20 p-5">
                <div className="text-center">
                    <h4 className='text-[#38B5F4] font-medium'>BLOG DETAILS</h4>
                    <h1 className='text-4xl py-4'>{postData.title.rendered}</h1>
                    <p className='py-4 text-gray-500 text-xs'>{postData.date}</p>
                </div>
                <Image src='https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/04/cropped-logo.png' width={480} height={400} alt='view' />
                <p className='py-4 mt-8'>{postData.content.rendered}</p>

                <div className="flex justify-between py-6 mt-6">
                    <h2> <span className='font-mono text-gray-400'>By</span> {postData.author}</h2>
                    <div className="flex gap-2">
                        <Image src={view} width={20} alt='view' />
                        <p className='text-gray-400 font-semibold'> 99</p>
                    </div>
                </div><hr />
            </div>
        </Container>
    )
}
