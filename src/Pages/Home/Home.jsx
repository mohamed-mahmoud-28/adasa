import Explore from "./Explore";
import FeaturedSection from "./FeaturedArticles";
import HeroSec from "./HeroSec";
import Subscribe from "./Subscribe";

export default function Home() {

  return (
    <div>
      <HeroSec />
      <FeaturedSection />
      <Explore />
      <Subscribe />
    </div>
  );
}
