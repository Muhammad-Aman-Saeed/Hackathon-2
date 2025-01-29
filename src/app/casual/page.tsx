import { AccordionDemo } from "@/components/accordion";
import { CheckboxDemo } from "@/components/checkbox";
import { DressStyle } from "@/components/dressstyle";
import Casual_Shirts from "@/components/shirts";
import Size from "@/components/size";
import { SliderDemo } from "@/components/slider";

export default function Casual(){
    return(
        <main className="flex flex-col sm:flex-row justify-center items-center space-x-6">
            {/* left */}
            <div className="w-full h-full md:w-[295px] md:h-[1200px] border rounded-[16px]">
                <AccordionDemo/>
                <SliderDemo/>
                <CheckboxDemo/>
                <Size/>
                <DressStyle/>
            </div>

            {/* right */}
            <div className="w-full md:w-[900px] h-full sm:h-[1200px] ">
                <Casual_Shirts/>
            </div>
        
        </main>
    )
}