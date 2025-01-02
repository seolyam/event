import EventsPage from "./events/page";
import HeroPage from "./components/hero/page";
import ProjectPage from "./projects/page";
import Offers from "./components/offers/page";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <Offers />
      <ProjectPage />
      <EventsPage />
    </div>
  );
}
