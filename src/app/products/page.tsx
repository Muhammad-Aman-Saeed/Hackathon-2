import Image from "next/image";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";

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
        title:"T-SHIRT WITH TAPE DETAILS",
        id:1,
        price:"$120",
        img_url:"/pic1.png"
    },
    {
        title:"SKINNY FIT JEANS",
        id:2,
        price:"$240",
        img_url:"/pic2.png",
        old_rate:"$260"
    },
    {
        title:"CHECKERED SHIRT",
        id:3,
        price:"$180",
        img_url:"/pic3.png"
    },
    {
        title:"SLEEVE STRIPED T-SHIRT",
        id:4,
        price:"$130",
        img_url:"/pic4.png",
        old_rate:"$160"
    }
]
const star = [
    <IoMdStar key={1} />,
    <IoMdStar key={2} />,
    <IoMdStar key={3} />,
    <IoMdStar key={4} />,
    <IoMdStar key={5} />,
];


export default function Products(){
    return (
        <div className="w-full h-full sm:h-[500px] mt-10 sm:border-b">
            <h1 className="text-3xl md:text-4xl text-center font-extrabold mt-20 ">NEW ARRIVALS</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-20">
                {
                    product.map((data)=>{
                        return (
                            <div key={data.id}>
                                <Link href={`/products/${data.id}`}>
                                <div className="w-[190px] h-[190px] md:w-[290px] md:h-[290px] mt-10 bg-[#F0EEED] rounded-[20px]"> 
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

            <div className="flex justify-center items-center mt-5">
                <button className="border-[1px] w-[218px] h-[52px] rounded-[62px] bg-white text-black">View All</button>
            </div>
        </div>
    )
}