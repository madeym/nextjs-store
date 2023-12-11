"use client";

import Navbar from "@/_components/navbar"
import { useEffect, useState } from "react";
import type { checkoutProductModel } from "@/types/product";

export default function SamplePage() {
    const [productImage, setProductImage] = useState<checkoutProductModel | null>(null);

    useEffect(() => {
        setProductImage({
            activeImage: "/assets/t-shirt/1.jpg",
            listImage: [
                "/assets/t-shirt/2.jpg",
                "/assets/t-shirt/3.jpg",
                "/assets/t-shirt/4.jpg",
                "/assets/t-shirt/5.jpg"
            ]
        });
    }, []);

    const changeActiveProductImage = (idx: number) => {
        if (productImage != null) {
            let currentActiveImage: string = productImage.activeImage;
            let targetImage: string = productImage.listImage[idx];
            let listImage: string[] = productImage.listImage;

            listImage[idx] = currentActiveImage;

            setProductImage({
                activeImage: targetImage,
                listImage: listImage
            });
        }
    }

    return (
        <div className="w-100 bg-white text-black">
            <Navbar />
            <div className="w-100 flex py-4 px-[100px] pt-[50px] justify-between">
                {productImage && productImage.activeImage && productImage.listImage && (
                    <div className="">
                        <div className="mb-2">
                            <img src={productImage.activeImage} alt="" className="w-[430px] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]" />
                        </div>
                        <div className="flex gap-[10px]">
                            {productImage.listImage.map((val, idx) => (
                                <img key={idx} src={val} alt="" className="w-[100px] rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer" onClick={() => changeActiveProductImage(idx)} />
                            ))}
                        </div>
                    </div>
                )}
                <div className="flex flex-col w-[45%] py-0">
                    <span className="text-[40px]">Astronout T-shirt Vol.1</span>
                    <span className="text-[40px]">$125</span>
                    <div className="flex text-[24px]">
                        <i className="bi bi-star-fill text-[yellow]"></i>
                        <i className="bi bi-star-fill text-[yellow]"></i>
                        <i className="bi bi-star-fill text-[yellow]"></i>
                        <i className="bi bi-star-fill text-[yellow]"></i>
                        <i className="bi bi-star-half text-[yellow]"></i>
                        <span className="ml-2">4.5</span> <span className="text-gray">(1.345 reviews)</span>
                    </div>
                    <span className="text-justify mt-6">Maecenas sapien ex, auctor eget augue quis, mattis bibendum justo. Curabitur hendrerit turpis non enim porta, ac eleifend lectus tempus. Morbi vehicula condimentum nisl at lacinia. Sed at metus in tellus rhoncus aliquam. Sed egestas, sapien consequat faucibus efficitur, metus erat ultrices sapien, vel ornare nibh enim non mauris. Pellentesque at semper sapien. Quisque ultricies porttitor tincidunt. Donec at dolor ipsum. Aenean sodales scelerisque ipsum, vitae egestas augue. Sed condimentum turpis ut pharetra ornare. Aliquam ultrices, massa eget semper ornare, velit sapien tempus tellus, vel consectetur tellus lectus sit amet urna. Aliquam sed eros euismod, tempor mauris nec, aliquam neque. Praesent dui velit, porttitor cursus tristique eget, posuere vel tortor. Mauris fringilla elementum nisl. Sed pulvinar lacus sit amet lorem rhoncus ultricies.</span>
                </div>
                <div className="">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-[100px]">Size</span>
                        :<span className="border-2 border-black rounded-xl py-1 px-4">S</span>
                        <span className="border-2 border-black rounded-xl py-1 px-4">M</span>
                        <span className="border-2 border-black rounded-xl py-1 px-4">L</span>
                        <span className="border-2 border-black rounded-xl py-1 px-4">XL</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-[100px]">Quantity</span>
                        :<i className="bi bi-dash"></i>
                        <span className="border-2 border-black rounded-xl py-1 px-4">3</span>
                        <i className="bi bi-plus"></i>
                        <span>(Stock 25)</span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-[100px]">Subtotal </span>
                        : <span>$375</span>
                    </div>
                    <div>
                        <textarea name="" id="" className="border-2 w-full p-2 px-4" placeholder="Note"></textarea>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full mt-[30px] flex gap-3 justify-center items-center">
                        <i className="!text-[24px] bi bi-cart"></i>
                        <span>Add To Cart</span>
                    </button>
                    <button className="bg-white text-white font-bold py-2 px-4 rounded-lg w-full mt-[15px] flex gap-3 justify-center items-center border-[#79bb5f] border-2">
                        <img src="/icons/tokopedia.png" className="w-[130px]" alt="" />
                    </button>
                    <button className="bg-white text-white font-bold py-2 px-4 rounded-lg w-full mt-[15px] flex gap-3 justify-center items-center border-[#ea501f] border-2">
                        <img src="/icons/shopee.png" className="w-[100px]" alt="" />
                    </button>
                    <div className="mt-[15px] flex gap-1 justify-between">
                        <button className="border-2 border-black font-bold py-2 px-4 rounded-lg w-[49%] flex gap-3 justify-center items-center">
                            <i className="!text-[20px] bi bi-chat-dots"></i>
                            <span>Chat</span>
                        </button>
                        <button className="border-2 border-black font-bold py-2 px-4 rounded-lg w-[49%] flex gap-3 justify-center items-center">
                            <i className="!text-[20px] bi bi-share-fill"></i>
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-100 flex flex-col py-4 px-[100px] pt-[50px]">
                <span className="text-[24px]">Reviews</span>
                <div className="flex w-100 mt-[20px] p-2">
                    <i className="!text-[40px] bi bi-person-circle"></i>
                    <div className="w-100 flex flex-col ml-6 gap-4">
                        <div className="flex text-[24px]">
                            <i className="bi bi-star text-[yellow]"></i>
                            <i className="bi bi-star text-[yellow]"></i>
                            <i className="bi bi-star text-[yellow]"></i>
                            <i className="bi bi-star text-[yellow]"></i>
                            <i className="bi bi-star text-[yellow]"></i>
                        </div>
                        <textarea name="" id="" placeholder="Review" className="border-2 w-full p-2 px-4" cols={100}></textarea>
                        
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-fit flex gap-3 justify-center items-center">
                            <span>Submit</span>
                        </button>
                    </div>
                </div>
                <div className="flex w-100 mt-[20px] p-2">
                    <i className="!text-[40px] bi bi-person-circle"></i>
                    <div className="w-100 flex flex-col ml-6 gap-2">
                        <div>
                            <span className="text-[16px]">user@example.com</span>
                            <span className="text-[14px] ml-2 text-gray-400">6 Des 2023 14:30</span>
                        </div>
                        <div className="flex text-[24px] items-center">
                            <i className="bi bi-star-fill text-[yellow]"></i>
                            <i className="bi bi-star-fill text-[yellow]"></i>
                            <i className="bi bi-star-fill text-[yellow]"></i>
                            <i className="bi bi-star-fill text-[yellow]"></i>
                            <i className="bi bi-star text-[yellow]"></i>
                        </div>
                        <span className="text-justify">
                            us tempus. Morbi vehicula condimentum nisl at lacinia. Sed at metus in tellus rhoncus aliquam. Sed egestas, sapien consequat faucibus efficitur, metus erat ultrices sapien, vel ornare nibh enim non mauris. Pellentesque at semper sapien. Quisque ultricies porttitor tincidunt. Donec at dolor ipsum. Aenean sodales scelerisque ipsum, vitae egestas augue. Sed condimentum turpis ut pharetra ornare. Aliquam ultrices, massa eget semper ornare, velit sapien tempus tellus, vel consectetur tellus lectus sit amet urna. Aliquam sed eros euismod, tempor mauris nec, aliquam neque. Praesent dui velit, porttitor cursus tristique eget.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}