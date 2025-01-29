import Image from "next/image";

export default function Dress(){
    return (
        <div className="w-full h-full mt-8 sm:h-[500px] bg-[#F0F0F0] flex flex-col justify-start items-center pt-2 rounded-[40px] max-w-screen-2xl mx-auto">
            {/* upper part */}
            <div className="mt-2">
                <h1 className=" text-3xl font-extrabold pl-8 sm:pl-0 ">
                    BROWSE BY DRESS STYLE
                </h1>
            </div>



                {/* bottom */}
            <div className="mt-5 w-[80%] h-full sm:h-[400px] flex flex-wrap justify-center items-center">
                <div className="w-[400px] h-[200px] m-1 relative"> <Image src={"/dress1.png"} width={100} height={100} alt="dress_style_1" className="w-full h-full rounded-[20px]"></Image>
                <span className="absolute top-10 left-5 text-xl font-bold">Casual</span>
                </div>
                <div className="w-[600px] h-[200px] m-1 relative"><Image src={"/dress2.png"} width={100} height={100} alt="dress_style_2" className="w-full h-full rounded-[20px]"></Image>
                <span className="absolute top-10 left-5 text-xl font-bold">Formal</span>
                </div>
                <div className="w-[600px] h-[200px] m-1 relative "><Image src={"/dress3.png"} width={100} height={100} alt="dress_style_3" className="w-full h-full rounded-[20px]"></Image>
                <span className="absolute top-10 left-5 text-xl font-bold">Party</span>
                </div>
                <div className="w-[400px] h-[200px] m-1 relative "> <Image src={"/dress4.png"} width={100} height={100} alt="dress_style_4" className="w-full h-full rounded-[20px]"></Image>
                <span className="absolute top-10 left-5 text-xl font-bold">Gym</span>
                </div>
                
            </div>
        </div>
    )
}