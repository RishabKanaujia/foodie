import Navbar from "./_components/Navbar";
import HomeContent from "./_components/Home";
import Menu from "./_components/Menu";
import FavDish from "./_components/FavDish";
import ChefPage from "./_components/ChefPage";
import Review from "./_components/Review";
import OpenCard from "./_components/OpenCard";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="h-90 bg-gradient-to-b from-[#F8DEDE] to-white">
        <Navbar />
        <HomeContent />
      </div>
      <div className="bg-[#F9F9F9]">
        <FavDish />
        <Menu />
        <ChefPage />
        <Review />
        <OpenCard />
        <Footer/>
      </div>
    </>
  );
}
