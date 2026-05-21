import Navbar from "@/app/component/Navbar";
import Image from "next/image";
import Banner from "./component/Banner";
import Dynamic from "./component/Dynamic";

export default function Home() {
  return (
    <div>
      <Banner />
      <Dynamic />
    </div>
  );
}
