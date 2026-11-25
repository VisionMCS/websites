import { site, page } from "./content";
import { Header } from "./components/Header";
import { AnnouncementBar } from "./sections/AnnouncementBar";
import { Contact } from "./sections/Contact";
import registry from "./pages/registry.json";
import { components } from "./pages/components";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CartDrawer } from "./sections/CartDrawer";
export function App() {
  const definition = registry.find((item) => item.id === page);
  const Page = (definition && components[definition.component]) || NotFoundPage;
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        {site.ui.skip}
      </a>
      <AnnouncementBar />
      <Header />
      <main id="main">
        <Page />
        <Contact />
      </main>
      <CartDrawer />
    </div>
  );
}
