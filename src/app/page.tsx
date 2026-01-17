"use client";
import { useState } from "react";
import FeaturesCourses from "@/src/components/FeaturesCourses";
import HeroSection from "@/src/components/HeroSection";
import WhyChoose from "@/src/components/WhyChooseUs";
import { TestimonialCard } from "../components/TestimonialCard";
import UpcomingWebinar from "../components/UpcomingWebinar";
import Instructor from "../components/Instructor";
import Footer from "../components/Footer";

// import ConfettiEffect from "./components/ConfettiEffect";
export default function Home() {
//     const [showConfetti, setshowConfetti] = useState(false);
// const handleClick=()=>{
//   setshowConfetti(true)
// }

  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.02]">
       {/* <div>
            <button onClick={handleClick}>Success</button>
      {showConfetti && <ConfettiEffect />}

    </div> */}
  <h1 className="text-2xl text-center"> Ishika Dhingra</h1>
<HeroSection/>
<FeaturesCourses/>
 <WhyChoose/>
<TestimonialCard/>
<UpcomingWebinar/>
<Instructor/>
<Footer/>
    </main>
  );
}
