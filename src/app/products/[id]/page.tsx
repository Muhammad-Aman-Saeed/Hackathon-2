"use client"
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import Reviews from "@/components/reviews";
import MoreProducts from "@/components/more_products";
import { BreadcrumbDemo } from "@/components/Breadcrump";
const star = [
    <IoMdStar key={1} />,
    <IoMdStar key={2} />,
    <IoMdStar key={3} />,
    <IoMdStar key={4} />,
    <IoMdStar key={5} />,
];

interface Iproducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_rate?:string,
    img_url:string,
    image1:string,
    image2:string,
    image3:string
}

const product:Iproducts[] = [
    {
        title:"T-SHIRT WITH TAPE DETAILS",
        id:1,
        price:"$120",
        img_url:"/pic1.png",
        image1:"/detail1.png",
        image2:"/detail2.png",
        image3:"/pic1.png"
    },
    {
        title:"SKINNY FIT JEANS",
        id:2,
        price:"$240",
        img_url:"/pic2.png",
        old_rate:"$260",
        image1:"/detail1.png",
        image2:"/detail2.png",
        image3:"/pic2.png"
    },
    {
        title:"CHECKERED SHIRT",
        id:3,
        price:"$180",
        img_url:"/pic3.png",
        image1:"/detail1.png",
        image2:"/detail2.png",
        image3:"/pic3.png"
    },
    {
        title:"SLEEVE STRIPED T-SHIRT",
        id:4,
        price:"$130",
        img_url:"/pic4.png",
        old_rate:"$160",
        image1:"/detail1.png",
        image2:"/detail2.png",
        image3:"/pic4.png"
    },
    {
        title:"VERTICAL STRIPED SHIRT",
        id:5,
        price:"$212",
        img_url:"/pic5.png",
        old_rate:"$232",
        image1:"/detail1.png",
        image2:"/detail2.png",
        image3:"/pic5.png"
    },
    {
        title:"COURAGE GRAPHIC T-SHIRT",
        id:6,
        price:"$145",
        img_url:"/pic.png",
        image1:"/detail1.png",
        image2:"/detail2.png",
        image3:"/pic6.png"
    },
    {
        title:"LOOSE FIT BERMUDA SHORTS",
        id:7,
        price:"$80",
        img_url:"/pic7.png",
        image1:"/detail1.png",
        image2:"/detail2.png",
        image3:"/pic7.png"
    },  {
        title:"FADED SKINNY JEANS",
        id:8,
        price:"$210",
        img_url:"/pic8.png",
        image1:"/detail1.png",
        image2:"/detail2.png",
        image3:"/pic8.png"
    }
]

export default function ProductDetail(){
    const params = useParams()
    const id = params.id
    const items = product.find((items) => items.id === Number(id))
    if (!items){
        return <h1>Product Not Available</h1>
    }

    return (
        <div>
            <BreadcrumbDemo/>
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly sm:mt-10 p-5 sm:p-0 max-w-screen-2xl mx-auto">


            {/* left side images */}
            <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
                <Image src={items.image1} alt="Product Detail" width={100} height={100} className="sm:w-full w-[150px] h-[150px] sm:h-[150] "></Image>
                <Image src={items.image2} alt="Product Detail" width={100} height={100} className="sm:w-full w-[150px] h-[150px] sm:h-[150] sm:mt-3"></Image>
                <Image src={items.image3} alt="Product Detail" width={100} height={100} className="sm:w-full w-[150px] h-[150px] sm:h-[150] sm:mt-3"></Image>
            </div>


            {/* middle */}
            <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
                <Image src={items.image3} alt="Product Detail" width={100} height={100} className="w-full h-[95%]"></Image>
            </div>


            {/* right side */}
            <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
                <h1 className="text-2xl md:text-3xl font-extrabold">One Life Graphic T-shirt</h1>
                <div className="flex text-yellow-400">
                    {star.map((icon, index) => (
                        <span key={index}>{icon}</span>
                    ))}
                </div>
                <p className="font-bold mt-1">{items.price} <span>{items.old_rate}</span></p>
                <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

                {/* color selection */}
                <div>
                    <p className="flex mt-5 text-gray-500">Select Color</p>
                    <div className="flex space-x-3 mt-2">
                        <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
                        <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
                        <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
                    </div>
                </div>

                {/* size selection */}
                <p className="mt-4 text-gray-500">Choose Size</p>
                <div className="flex space-x-3 mt-2">
                    <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Small</div>
                    <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Medium</div>
                    <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Large</div>
                    <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">X-Large</div>
                </div>

                 {/* buttons */}
                <div>
                    <div className="flex justify-start items-center mt-7 space-x-4">
                        <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">
                            <Minus/> 
                            1
                            <Plus/>
                        </div>
                        <Button className="text-white bg-black w-[300px] rounded-full">Add To Cart</Button>
                    </div>
                </div>
            </div>
        </div>
            <Reviews/>
            <MoreProducts/>
        </div>
    )
}