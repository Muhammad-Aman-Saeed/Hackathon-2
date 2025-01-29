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
        title:"Polo with Contrast Trims",
        id:5,
        price:"$212",
        img_url:"/casual0.png",
        old_rate:"$242"
    },
    {
        title:"Gradient Graphic T-shirt",
        id:6,
        price:"$145",
        img_url:"/casual1.png",
    },
    {
        title:"Polo with Tipping Details",
        id:7,
        price:"$180",
        img_url:"/casual2.png"
    },
    {
        title:"Black Striped T-shirt",
        id:8,
        price:"$120",
        img_url:"/casual3.png",
        old_rate:"$150"
    }
]
const star = [
    <IoMdStar key={1} />,
    <IoMdStar key={2} />,
    <IoMdStar key={3} />,
    <IoMdStar key={4} />,
    <IoMdStar key={5} />,
];


export default function MoreProducts(){
    return (
        <div className="w-full h-full sm:h-[500px] mt-10 max-w-screen-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl text-center font-extrabold mt-20">YOU MIGHT ALSO LIKE</h1>
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
        </div>
    )
}