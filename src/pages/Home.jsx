import Navbar from "../components/Navbar/Navbar";
import HomeAbout from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Diverse from "../components/Home/Diverse";
import Info2 from "../components/Home/Info2";
import Contact from "../components/cards/Contact";
import Info from "../components/Home/Info";
import Footer from "../components/Footer/footer";

import { memo } from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="fixed top-0 left-0 w-screen z-50 bg-white">
        <Navbar />
      </div>
      <Hero/>
      <section id="about" className="mt-10">
        <HomeAbout />
      </section>
      <Diverse />
      <Info2/>
      <Contact/>
      <Info/>
      <Footer/>
    </div>
  );
};
export default memo(Home);
