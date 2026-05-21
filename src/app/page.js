import Navbar from "@/app/component/Navbar";
import Image from "next/image";
import Banner from "./component/Banner";
import Dynamic from "./component/Dynamic";
import WhyChoose from "./component/WhyChoose";
import HowWorks from "./component/HowWorks";

export default function Home() {
  return (
    <div>
      <Banner />
      <Dynamic />
      <WhyChoose />
      <HowWorks />
    </div>
  );
}
