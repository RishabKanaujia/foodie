import Navbar from "./_components/Navbar";
import HomeContent from "./_components/Home";
import Menu from "./_components/Menu";
import FavDish from "./_components/FavDish";
import ChefPage from "./_components/ChefPage";
import Review from "./_components/Review";
import OpenCard from "./_components/OpenCard";
import Footer from "./_components/Footer";
import { getFoodData, getFoodDataDinner } from "./api/foodEntry/route";
import { getReviewData } from "./api/contactUs/route";

export default async function Home() {

  const foodDataList = await getFoodData()
  const reviewDataList = await getReviewData()
  const foodDataDinnerList = await getFoodDataDinner()

  return (
    <>
      <div className="h-90 bg-gradient-to-b from-[#F8DEDE] to-white">
        <Navbar />
        <HomeContent />
      </div>
      <div className="bg-[#F9F9F9]">
        <FavDish />
        <Menu foodDataList={foodDataList} foodDataDinnerList={foodDataDinnerList} />
        <ChefPage />
        <Review reviewDataList={reviewDataList} />
        <OpenCard />
        <Footer/>
      </div>
    </>
  );
}
