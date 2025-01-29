import { TfiEmail } from "react-icons/tfi";

export default function Offers(){
    return (
        <main className="w-full flex justify-center items-center mt-10 max-w-screen-2xl mx-auto">
            <div className="w-[80%] h-full sm:h-[150px] bg-black text-white flex-col sm:flex-row flex items-center p-5 rounded-[20px]">
                <h1 className="text-2xl sm:text-4xl font-extrabold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                <div className="space-y-3">
                    <div className="flex justify-start items-center sm:w-[330px] h-[40px] rounded-[62px] ml-2 bg-[#F0F0F0]">
                        <TfiEmail className="text-xl ml-2 text-[#00000066]"/>
                        <input placeholder="Enter your email address" className="w-full h-full rounded-[62px] ml-2 outline-none bg-[#F0F0F0]"></input>
                    </div>

                    <div className="flex justify-center items-center sm:w-[330px] h-[40px] rounded-[62px] ml-2 bg-[#F0F0F0]">
                        <p className="text-black">Subscribe to Newsletter</p>
                    </div>
                </div>
            </div>
        </main>
    )
}