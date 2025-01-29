import Image from "next/image";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";
import { PaginationDemo } from "./ui/pagination1";


interface Iproducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_rate?:string,
    img_url:string
}

const product:Iproducts[] = [
    {
        title:"Gradient Graphic T-shirt",
        id:9,
        price:"$145",
        img_url:"/casual1.png"
    },
    {
        title:"Polo with Tipping Details",
        id:10,
        price:"$180",
        img_url:"/casual2.png",
    },
    {
        title:"Black Striped T-shirt",
        id:11,
        price:"$120",
        img_url:"/casual3.png",
        old_rate:"$150"
    },
    {
        title:"Skinny Fit Jeans",
        id:12,
        price:"$240",
        img_url:"/pic2.png",
        old_rate:"$260"
    }, 
    {
        title:"Checkered Shirt",
        id:13,
        price:"$180",
        img_url:"/pic3.png"
    },
    {
        title:"Sleeve Striped T-Shirt",
        id:14,
        price:"$130",
        img_url:"/pic4.png",
        old_rate:"$160"
    },
    {
        title:"Vertical Striped Shirt",
        id:15,
        price:"$212",
        img_url:"/pic5.png",
        old_rate:"$232"
    },
    {
        title:"Courage Graphic T-Shirt",
        id:16,
        price:"$145",
        img_url:"/pic6.png",
        old_rate:"$160"
    }, 
    {
        title:"Loose Fit Bermuda Shorts",
        id:17,
        price:"$80",
        img_url:"/pic7.png"
    }
]
const star = [
    <IoMdStar key={1} />,
    <IoMdStar key={2} />,
    <IoMdStar key={3} />,
    <IoMdStar key={4} />,
    <IoMdStar key={5} />,
];


export default function Casual_Shirts(){
    return (
        <div className="w-full h-full sm:h-[500px] mt-10">
            <h1 className="text-3xl md:text-4xl text-start pl-20 font-extrabold mt-20">Casual</h1>
            <div className="flex flex-wrap flex-col md:flex-row justify-center items-center md:justify-between px-20">
                {
                    product.map((data)=>{
                        return (
                            <div key={data.id}>
                                <Link href={`/products/${data.id}`}>
                                <div className="w-[230px] h-[230px] mt-10 bg-[#F0EEED] rounded-[20px]"> 
                                    <Image src={data.img_url} alt="data.title" width={100} height={100} className="w-full h-full rounded-[20px]"></Image>
                                </div>
                                </Link>
                                <div>
                                    <p className="text-lg mt-2 font-bold">{data.title}</p>
                                    <div className="flex text-yellow-400">
                                            {star.map((icon, index) => (
                                                <span key={index}>{icon}</span>
                                            ))}
                                        </div>
                                    <p className="font-bold mt-1">{data.price} <span className="text-gray-500 font-bold line-through">{data.old_rate}</span></p>

                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-5">
                <PaginationDemo/>
            </div>
        </div>
    )
}