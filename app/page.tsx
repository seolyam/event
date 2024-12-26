import EventsPage from "./events/page";
import HeroPage from "./components/hero/page";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroPage />
      <EventsPage />
      <Footer />
    </div>
  );
}
