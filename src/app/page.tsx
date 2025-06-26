import Footer from "@/components/Footer/footer";
import MainSection from "@/components/MainSection/mainSection";
import Navbar from "@/components/Navbar/navbar";
import TheSayAboutAs from "@/components/TheSayAboutUs/thesayaboutus";
import ShopProduct from "@/components/ShopProduct/shopProduct";


export default function Home() {
  return (
    <div className=" flex flex-col gap-20 bg-sand">
      <Navbar />
      <MainSection/>
      <Footer/>
      <TheSayAboutAs/>
      <ShopProduct/>
    </div>
  );
}
