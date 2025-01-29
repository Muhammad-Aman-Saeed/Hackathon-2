import Image from "next/image";

export default function Hero(){
    return(
        <main className="w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-start  bg-[#F2F0F1] max-w-screen-2xl mx-auto">
            {/* left */}

            <div className="w-full md:w-[500px] mt-3 md:mt-10 md:ml-10 pl-3">
                <h1 className="text-2xl md:text-5xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className="text-sm md:mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className="bg-black px-8 py-2 rounded-[100px] mt-4 text-white">Shop Now</button>

                <div className="flex mt-8">
                    <div className="sm:flex">
                        <div className="flex flex-col">
                            <h1 className="text-6xl">200+</h1>
                            <p>International Brands</p>
                        </div>

                        <div className="flex flex-col ml-8 md:ml-2">
                            <h1 className="text-6xl">2,000+</h1>
                            <p>High-Quality Products</p>
                        </div>
                    </div>

                    <div className="flex flex-col ml-8 ">
                        <h1 className="text-6xl">30,000+</h1>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>


            {/* right */}
            <div className="relative">
                <Image src={"/main_page_image_1.png"} className="w-[500px] mr-4" width={200} height={200} alt="Main Page Image"></Image>
                <Image src={"/Vector.png"} className="w-[40px] md:w-[60px] absolute top-[150px] md:top-[300px] left-[25px] md:left-[-100px] " width={200} height={200} alt="Star"></Image>
                <Image src={"/Vector.png"} className="w-[70px] md:w-[100px] absolute top-[40px] md:top-[70px] right-[20px] md:right-[30px] " width={200} height={200} alt="Star"></Image>
            </div>
        </main>
    )
}