import Footer from "@/components/Footer/footer";
import MainSection from "@/components/MainSection/mainSection";
import Navbar from "@/components/Navbar/navbar";


export default function Home() {
  return (
    <div className="h-screen w-screen bg-sand">
      <Navbar />
      <MainSection/>
      <Footer/>
    </div>
  );
}
