import EventsPage from "./events/page";
import HeroPage from "./components/hero/page";
import Navbar from "./components/navbar/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <EventsPage />
    </div>
  );
}
