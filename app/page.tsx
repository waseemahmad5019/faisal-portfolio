import { Nav, Loader, Hero, MarqueeStrip, About, Experience, Education, Skills, Works, Stats, Contact, Footer } from "@/components/sections";
import { ScrollProgress, ToTop } from "@/components/ui";

export default function Page() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero /><MarqueeStrip /><About /><Experience /><Education /><Skills /><Works /><Stats /><Contact />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}
