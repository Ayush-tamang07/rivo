import {
  Header,
  Hero,
  BestSelling,
  OurProduct,
  ExclusiveOffer,
  ForYou,
  FeedBack,
  Footer,
} from "./component.js";

function LandingPage() {
  return (
    <main className="w-full">
      {/* Header and Hero section */}
      <div className="primary overall-text pt-4 pb-1">
        <Header />
        <Hero />
      </div>

      {/* Main content - stacked on smaller screens, aligned center */}
      <div className="flex flex-col items-center space-y-8 md:space-y-12">
        <BestSelling />
        <OurProduct />
        <ExclusiveOffer />
        <ForYou />
        <FeedBack />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default LandingPage;
