// fonts name

import {
    Playfair_Display,
    Cinzel,
    Bodoni_Moda,
    Prata,
    Montserrat
} from "next/font/google";

const Playfair = Playfair_Display ({subsets:["latin"]})
const Cinze = Cinzel ({subsets:["latin"]})
const Bodoni = Bodoni_Moda ({subsets:["latin"]})
const Prata1 = Prata ({subsets:["latin"], weight:["400"]})
const Montserrat1 = Montserrat ({subsets:["latin"]})

export default function Fonts(){
    return(
        <div className="bg-black w-full max-w-screen-2xl mx-auto h-[122px] text-white flex justify-center space-x-4 md:justify-between items-center text-2xl md:text-4xl px-5 flex-wrap">
            <h1 className={`${Playfair.className}`}>VERCASE</h1>
            <h1 className={`${Cinze.className}`}>ZARA</h1>
            <h1 className={`${Bodoni.className}`}>GUCCI</h1>
            <h1 className={`${Prata1.className}`}>PRADA</h1>
            <h1 className={`${Montserrat1.className}`}>Calvin Klein</h1>
        </div>
    )
}
