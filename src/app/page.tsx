import MainSection from "@/components/MainSection/mainSection";
import Navbar from "@/components/Navbar/navbar";
import TheSayAboutAs from "@/components/TheSayAboutUs/thesayaboutus";
import ShopProduct from "@/components/ShopProduct/shopProduct";



export default function Home() {
  return (
    <div className=" p-10 bg-sand">
      <Navbar />
      <MainSection/>
      <ShopProduct/>
    </div>
  );
}
