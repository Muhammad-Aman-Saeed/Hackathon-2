import { Check } from "lucide-react";
import { IoMdStar } from "react-icons/io";
import { Button } from "./ui/button";
import { HiAdjustmentsVertical } from "react-icons/hi2";

const allReviews = [
    {
      name: "Sarah M.",
      feedback:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
      rating: 5,
      verified: true,
      date:"Posted on August 17, 2023"
    },
    {
      name: "John D.",
      feedback:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
      rating: 5,
      verified: true,
      date:"Posted on August 16, 2023"
    },
    {
      name: "Emma L.",
      feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: false,
      date:"Posted on August 15, 2023"
    },
    {
      name: "Michael B.",
      feedback:
       "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"Posted on August 14, 2023"
    },
    {
      name: "Sophia K.",
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"Posted on August 19, 2023"
    },
    {
        name:"Ava H.",
        feedback:"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        rating:4,
        Verified:true,
        date:"Posted on August 19, 2023"
    }
  ];
  const star = [
    <IoMdStar key={1} />,
    <IoMdStar key={2} />,
    <IoMdStar key={3} />,
    <IoMdStar key={4} />,
    <IoMdStar key={5} />,
];


export default function Reviews(){
    return(
        <main className="max-w-screen-2xl mx-auto ">

            <div className="w-[350px] md:w-full flex justify-between items-center px-10 m-10 text-lg border-b">
              <h3 className="text-gray-500">Product Details</h3>
              <h3 className="text-black border-b border-black ">Rating & Reviews</h3>
              <h3 className="text-gray-500">FAQs</h3>
            </div>

            {/* top */}

            <div className="px-5 flex justify-between">
              <div className="flex ">
                <h1 className="text-2xl font-bold">All Reviews</h1>
                <p className="mt-2 text-[#00000099]">(451)</p>
              </div>
                <div className="flex space-x-3 mb-5">
                    <Button className="bg-[#F0F0F0] text-black rounded-full hover:text-white">
                      <HiAdjustmentsVertical/>
                    </Button>
                    <Button variant={"outline"} className="hidden sm:block">Latest</Button>
                    <Button>Write a Review</Button>
                </div>
            </div>


            {/* Container */}
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-5 mt-3 sm:mt-0">
                    {
                        allReviews.map((data,i) => {
                            return(
                                <div className="border p-5 rounded-[20px]" key={i}>
                                     <div className="flex text-yellow-400">
                                            {star.map((icon, index) => (
                                                <span key={index}>{icon}</span>
                                            ))}
                                      </div>
                                    <h2 className="font-bold mt-1 flex text-2xl">{data.name} <Check className="bg-green-500 text-white rounded-full"/></h2>
                                    <p className="text-sm">{data.feedback}</p>
                                    <p className="mt-5 text-gray-400">{data.date}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex justify-center items-center mt-5">
                <button className="border-[1px] w-[218px] h-[52px] rounded-[62px] bg-white text-black">Load More Reviews</button>
            </div>


        </main>
    )
}