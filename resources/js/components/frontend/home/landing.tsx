import React, { useEffect } from "react";

const FollowOutLanding: React.FC = () => {
  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          el.classList.remove("opacity-0", "translate-y-6");
          el.classList.add("opacity-100", "translate-y-0");
        }
      });
    };

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("load", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("load", checkVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePlanClick = (type: "monthly" | "yearly") => {
    console.log(`Open ${type} modal`);
  };

  return (
    <div className="font-sans text-blue-900">

      {/* HERO */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 to-blue-800 text-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center w-full">

          <div className="inline-block bg-white/10 backdrop-blur border border-white/20 px-6 py-2 rounded-full font-semibold text-sm mb-8">
            ✓ No Hidden Fees • No Commissions
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-none mb-6">
            Refreshingly <br /> Simple!
          </h1>

          <p className="text-lg md:text-2xl max-w-3xl mx-auto opacity-90 mb-12">
            Promote your business without the hassle. No commissions, no forced
            discounts, no expensive ads.
          </p>

          {/* BENEFITS */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              "No commissions and fees",
              "No deep discounting",
              "No expensive advertising",
              "No recurring billings",
              "No unfair public reviews",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur border border-white/20 p-5 rounded-xl text-sm font-medium hover:-translate-y-2 transition duration-300"
              >
                {item}
              </div>
            ))}
          </div>

          {/* PRICING */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Monthly */}
            <div className="bg-white text-blue-900 p-10 rounded-3xl shadow-xl hover:-translate-y-3 transition duration-300">
              <div className="text-sm font-bold uppercase mb-4 text-blue-600">
                Monthly
              </div>

              <div className="text-6xl font-extrabold mb-6">
                $49<span className="text-xl align-top">.95</span>
              </div>

              <ul className="space-y-3 mb-8 text-left text-sm font-medium">
                <li>✔ Create FollowOuts</li>
                <li>✔ Coupons & Deals</li>
                <li>✔ Reward Programs</li>
                <li>✔ Promote to Everyone</li>
                <li>✔ Analytics & Insights</li>
              </ul>

              <button
                onClick={() => handlePlanClick("monthly")}
                className="w-full bg-red-600 text-white py-4 rounded-full font-bold uppercase tracking-wide hover:bg-red-700 transition"
              >
                Get Started
              </button>
            </div>

            {/* Yearly */}
            <div className="bg-red-600 text-white p-10 rounded-3xl shadow-2xl scale-105 hover:scale-110 transition duration-300">
              <div className="text-sm font-bold uppercase mb-2 bg-white/20 inline-block px-4 py-1 rounded-full">
                🔥 Best Value
              </div>

              <div className="text-6xl font-extrabold my-6">
                $179<span className="text-xl align-top">.95</span>
              </div>

              <p className="text-sm opacity-90 mb-4">Save over 70%!</p>

              <ul className="space-y-3 mb-8 text-left text-sm font-medium">
                <li>✔ Create FollowOuts</li>
                <li>✔ Coupons & Deals</li>
                <li>✔ Reward Programs</li>
                <li>✔ Promote to Everyone</li>
                <li>✔ Analytics & Insights</li>
                <li>✔ Priority Support</li>
              </ul>

              <button
                onClick={() => handlePlanClick("yearly")}
                className="w-full bg-white text-red-600 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-gray-100 transition"
              >
                Get Started
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 uppercase">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Create FollowOut",
                desc: "Post your business location and basic information.",
              },
              {
                title: "Enhance FollowOut",
                desc: "Add images, videos, coupons & rewards.",
              },
              {
                title: "Measure FollowOut",
                desc: "Track traffic, invites and analytics.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-2xl shadow-lg hover:-translate-y-3 transition fade-in opacity-0 translate-y-6 duration-700"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-600 to-blue-900 text-white flex items-center justify-center text-2xl font-bold">
                  {i + 1}
                </div>

                <h3 className="text-xl font-bold mb-3 uppercase">
                  {step.title}
                </h3>

                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 px-6 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 uppercase">
          See FollowOut In Action
        </h2>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
          <video controls className="w-full">
            <source
              src="https://www.followout.tv/vid/GalleryVideo_2022.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-white text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 uppercase">
          Ready to Get Started?
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Join thousands of businesses already promoting with FollowOut.
          No contracts. Cancel anytime.
        </p>

        <button
          onClick={scrollToTop}
          className="bg-red-600 text-white px-10 py-4 rounded-full font-bold uppercase hover:bg-red-700 transition"
        >
          Choose Your Plan
        </button>
      </section>

    </div>
  );
};

export default FollowOutLanding;
