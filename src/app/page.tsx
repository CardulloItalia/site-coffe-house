import MainSection from "@/components/MainSection/mainSection";
import Navbar from "@/components/Navbar/navbar";


export default function Home() {
  return (
    <div className="h-screen w-screen p-10 bg-sand">
      <Navbar />
      <MainSection/>
    </div>
  );
}
