import EventsPage from "./events/page";
import HeroPage from "./components/hero/page";
import Navbar from "./components/navbar/page";
import FooterPage from "./components/footer/page";
import ProjectPage from "./projects/page";
import Offers from "./components/offers/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <Offers />
      <ProjectPage />
      <EventsPage />
      <FooterPage />
    </div>
  );
}
