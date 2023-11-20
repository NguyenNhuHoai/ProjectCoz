import { useEffect } from "react";
import BannerDetail from "./component/bannerDetail/BannerDetail";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/navbar";
import OverviewCounter from "./component/overview-counter/OverviewCounter";
import SimpleBanner from "./component/simpleBanner/SimpleBanner";
import Blog from "./component/blogs/Blogs";
import Footer from "./component/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 1,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="dark:bg-gray-900 bg-white">
      <Navbar />
      <Hero />
      <OverviewCounter />
      <BannerDetail />
      <BannerDetail reverse={true} />
      <SimpleBanner />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
