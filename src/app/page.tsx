import Fonts from "@/components/font";
import Hero from "@/components/Hero";
import Products from "./products/page";
import TopSell from "./products/sell";
import Dress from "@/components/dress";
import CustomerCarousel from "@/components/carousel";



export default function Home() {
  return (
    <div>
     
      <Hero/>
      <Fonts/>
      <Products/>
      <TopSell/>
      <Dress/>
      <CustomerCarousel/>
    </div>
  );
}
