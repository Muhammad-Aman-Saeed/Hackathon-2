import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Offers from "./offers";



export default function Footer(){
    return (
        <main className="w-full h-full md:h-[450px] bg-[#F0F0F0] relative mt-32 max-w-screen-2xl mx-auto">


              <span className="absolute top-[-80px]"><Offers/></span>
            
            <div className="h-full md:h-[400px] flex-col md:flex-row flex justify-between items-start p-5 pt-[200px] sm:pt-32 border-b">
              {/* top */}
              <div className="flex flex-col justify-center items-center w-[200px]">
                <ul>
                    <h2 className="text-2xl sm:text-3xl font-extrabold">SHOP.CO</h2>
                    <p className="text-sm mt-2">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

                    {/* icons */}
                    <div className="flex items-center mt-5 space-x-5">
                          <FaTwitter className="text-xl"/>
                         <FaFacebook className="text-xl"/>
                        <FaInstagram className="text-xl"/>
                           <FaGithub className="text-xl"/>
                    </div>

                </ul>
              </div>


              {/* middle */}
              <div className="w-full md:w-[1200px] grid grid-cols-2 sm:grid-cols-4 place-items-center space-y-4">
                <ul className="space-y-3">
                    <h2 className="text-sm sm:text-xl font-bold">COMPANY</h2>
                    <li className="text-sm">About</li>
                    <li className="text-sm">Features</li>
                    <li className="text-sm">Works</li>
                    <li className="text-sm">Career</li>
                </ul>

                <ul className="space-y-3">
                    <h2 className="text-sm sm:text-xl font-bold">HELP</h2>
                    <li className="text-sm">Customer Support</li>
                    <li className="text-sm">Delivery Detail</li>
                    <li className="text-sm">Terms & Conditions</li>
                    <li className="text-sm">Privacy Policy</li>
                </ul>

                <ul className="space-y-3">
                    <h2 className="text-sm sm:text-xl font-bold">FAQ</h2>
                    <li className="text-sm">Account</li>
                    <li className="text-sm">Manage Deliveries</li>
                    <li className="text-sm">Orders</li>
                    <li className="text-sm">Payments</li>
                </ul>

                <ul className="space-y-3">
                    <h2 className="text-sm sm:text-xl font-bold">RESOURCES</h2>
                    <li className="text-sm">Free eBooks</li>
                    <li className="text-sm">Development Tutorials</li>
                    <li className="text-sm">How To - Blog</li>
                    <li className="text-sm">YouTube Playlist</li>
                </ul>
              </div>


             
              </div>

               {/* bottom */}
               <div className="flex-col md:flex-row flex justify-between items-center mt-3">
                <p className="text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
                <div className="flex items-center">
                    <Image src={"/Badge1.png"} alt="visa pic" width={100} height={100} className="w-[50px]"/>
                    <Image src={"/Badge2.png"} alt="master pic" width={100} height={100} className="w-[50px]"/>
                    <Image src={"/Badge3.png"} alt="paypal pic" width={100} height={100} className="w-[50px]"/>
                    <Image src={"/Badge4.png"} alt="applepay pic" width={100} height={100} className="w-[50px]"/>
                    <Image src={"/Badge5.png"} alt="gpay pic" width={100} height={100} className="w-[50px]"/>
                </div>
            </div>
        </main>
    )
}