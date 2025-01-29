import { BreadcrumbDemo } from "@/components/Breadcrump"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import Image from "next/image"
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GoTag } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";

interface Icart{
    imageurl:string,
    title:string,
    id:number,
    size:string,
    color:string,
    price:string
}
const cartItem : Icart[] = [
    {
        imageurl:"/casual1.png",
        title:"Gradient Graphic T-shirt",
        id:1,
        size:"Large",
        color:"White",
        price:"$145"
    },
    {
        imageurl:"/pic3.png",
        title:"Checkered Shirt",
        id:2,
        size:"Medium",
        color:"Red",
        price:"$180"
    },
    {
        imageurl:"/pic2.png",
        title:"Skinny Fit Jeans",
        id:3,
        size:"Large",
        color:"Blue",
        price:"$240"
    }
    
] 

export default function Cart(){
    return(
        <>
           <div className="pl-5">
               <BreadcrumbDemo/>
               <h1 className="text-3xl font-extrabold mt-2">YOUR CART</h1>
           </div>
                <div className="flex flex-col md:flex-row justify-center items-star gap-3 mt-6">

                {/*  left portion */}

                    <div className=" md:w-[700px] md:h-[508px] w-full h-full border rounded-[20px]">
                        {
                            cartItem.map((items) => {
                                return (
                                    <div className="flex justify-between mt-4 p-4 border-b" key={items.id}>
                                        <div className="flex gap-3">
                                        <Image src={items.imageurl} alt={items.title} width={100} height={100} className="rounded-16px[]"></Image>

                                            <div>
                                                <h3 className="font-bold">{items.title}</h3>
                                                <p className="text-sm">Size: {items.size}</p>
                                                <p className="text-sm">Color: {items.color}</p>
                                                <p className="font-bold mt-2 text-xl">{items.price}</p>
                                            </div>
                                        </div>


                                            {/* side area */}
                                        <div className="flex flex-col justify-between items-center">
                                            <RiDeleteBin5Fill className="text-[#FF3333] text-xl" />
                                            <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">
                                                <Minus/> 
                                                1
                                                <Plus/>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>


                {/*  right portion */}

                    <div className="w-full md:w-[400px] h-full md:h-[450px] border rounded-[20px] justify-start items-center flex flex-col p-4">
                        <div className="w-[90%] space-y-2">
                            <h1 className="text-xl font-bold">Order Summary</h1>
                            <p className="flex justify-between">Subtotal <span className="font-bold">$565</span></p>
                            <p className="flex justify-between">Discount (-20%) <span className="text-red-600 font-bold">-$113</span></p>
                            <p className="flex justify-between">Delivery Fee <span className="font-bold">$15</span></p>
                            <p className="flex justify-between">Total <span className="font-bold">$467</span></p>
                        
                            <div className="flex">
                                <div className="flex justify-start items-center w-[330px] h-[40px] rounded-[62px] ml-2 bg-[#F0F0F0]">
                                    <GoTag className="text-2xl ml-2 text-[#00000066]"/>
                                    <input placeholder="Add promo code" className="bg-[#F0F0F0] text-black outline-none w-[200px] md:w-full py-2 px-5 rounded-full" />
                                </div>
                                <Button className="ml-1 rounded-full ">Apply</Button>
                            </div>
                            <Button className="rounded-full w-full">Go to Checkout 
                                <FaArrowRight />
                            </Button>

                        </div>
                    </div>
                </div>
        </>
    )
}