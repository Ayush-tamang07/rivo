import FeedBackCard from "../card/FeedBackCard.jsx";

const one =
  "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!";
const two =
  "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!";
const three =
  "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!";

function FeedBack() {
  return (
    <section className="mt-8 mb-10">
      <h1 className="text-center text-5xl roboto-slab primary-text mb-10">
        Feedback Corner
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <FeedBackCard username="Emily Wilson" description={one} />
        <FeedBackCard username="Sarah Thompson" description={two}/>
        <FeedBackCard username="Olivia Martinez" description={three} />
      </div>
      <div className="flex items-center justify-center gap-4 mt-16">
        <button
          className="px-6 py-3 bg-white rounded-lg text-primary shadow-md text-lg"
        >
          {"<"}
        </button>
        <button className="px-6 py-3 bg-[#C2EFD4] rounded-lg text-primary shadow-md text-lg">
          {">"}
        </button>
      </div>
    </section>
  );
}

export default FeedBack;
