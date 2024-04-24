import Image from "next/image";
import LatestPost from "./LatestPost";
import Container from "@/components/shared/Container";

export default function Blogs() {
    return (
        <Container>
            <div className="flex flex-wrap p-5 gap-6">
                <div className="max-w-[760px] mx-auto">
                    <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="max-w-[370px]">
                            <Image className="md:w-[370px] w-[350px]" src='https://cheerup2.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1462798209360-48743134a7c9-1024x682.jpg'
                                alt="blog" width={370} height={300}
                            />
                            <div className="text-center py-4 ">
                                <p className="text-xs text-gray-600"> <span className="text-[#38B5F4] font-semibold">EUROPE</span>  - MAY 15, 2016</p>
                                <h2 className="text-xl py-4 font-semibold">10 Ideas To Spice up Your Next Hiking Trip</h2>
                                <p className=" text-gray-700">More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot…</p>
                                <button className="btn-outline btn-sm text-[#38B5F4] underline mt-6 font-semibold ">Read More</button>
                            </div>
                        </div>
                        <div className="max-w-[370px]">
                            <Image className="md:w-[370px] w-[350px]" src='https://cheerup2.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1462798209360-48743134a7c9-1024x682.jpg'
                                alt="blog" width={370} height={300}
                            />
                            <div className="text-center py-4">
                                <p className="text-xs text-gray-600"> <span className="text-[#38B5F4] font-semibold">EUROPE</span>  - MAY 15, 2016</p>
                                <h2 className="text-xl py-4 font-semibold">10 Ideas To Spice up Your Next Hiking Trip</h2>
                                <p className=" text-gray-700">More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot…</p>
                                <button className="btn-outline btn-sm text-[#38B5F4] underline mt-6 font-semibold">Read More</button>
                            </div>
                        </div>
                        <div className="max-w-[370px]">
                            <Image className="md:w-[370px] w-[350px]" src='https://cheerup2.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1462798209360-48743134a7c9-1024x682.jpg'
                                alt="blog" width={370} height={300}
                            />
                            <div className="text-center py-4">
                                <p className="text-xs text-gray-600"> <span className="text-[#38B5F4] font-semibold">EUROPE</span>  - MAY 15, 2016</p>
                                <h2 className="text-xl py-4 font-semibold">10 Ideas To Spice up Your Next Hiking Trip</h2>
                                <p className=" text-gray-700">More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot…</p>
                                <button className="btn-outline btn-sm text-[#38B5F4] underline mt-6 font-semibold">Read More</button>
                            </div>
                        </div>
                        <div className="max-w-[370px]">
                            <Image className="md:w-[370px] w-[350px]" src='https://cheerup2.theme-sphere.com/travel/wp-content/uploads/sites/6/2016/05/photo-1462798209360-48743134a7c9-1024x682.jpg'
                                alt="blog" width={370} height={300}
                            />
                            <div className="text-center py-4">
                                <p className="text-xs text-gray-600"> <span className="text-[#38B5F4] font-semibold">EUROPE</span>  - MAY 15, 2016</p>
                                <h2 className="text-xl py-4 font-semibold">10 Ideas To Spice up Your Next Hiking Trip</h2>
                                <p className=" text-gray-700">More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot…</p>
                                <button className="btn-outline btn-sm text-[#38B5F4] underline mt-6 font-semibold">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="join w-full py-4">
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="5" />
                    </div> <hr />
                </div>
                <div className="max-w-[400px] mx-auto">
                    <LatestPost />
                </div>

            </div>
        </Container>
    )
}
