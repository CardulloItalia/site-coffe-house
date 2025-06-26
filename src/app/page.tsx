import MainSection from "@/components/MainSection/mainSection";
import Navbar from "@/components/Navbar/navbar";
import TheSayAboutAs from "@/components/TheSayAboutUs/thesayaboutus";


export default function Home() {
  return (
    <div className="h-screen w-screen p-10">
      <Navbar />
      <MainSection/>
      <TheSayAboutAs/>
    </div>
  );
}
