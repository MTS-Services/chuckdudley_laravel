"use client";

import { useState } from "react";

export default function FollowOutLanding() {
  const [modalOpen, setModalOpen] = useState(false);
  const [code, setCode] = useState("");
  const [planName, setPlanName] = useState("");
  const [priceValue, setPriceValue] = useState<number>(0);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const detectPlatform = () => {
    const ua = navigator.userAgent || navigator.vendor;
    if (/iPad|iPhone|iPod/.test(ua)) return "ios";
    if (/android/i.test(ua)) return "android";
    return "web";
  };

  const handleSubscription = (plan: "basic" | "premium", price: number) => {
    setLoadingPlan(plan);

    const generated =
      (plan === "premium" ? "PREM-" : "BASIC-") +
      Math.random().toString(36).substring(2, 10).toUpperCase();

    setTimeout(() => {
      const platform = detectPlatform();

      if (platform === "ios") {
        window.location.href = `followout://subscribe?code=${generated}&plan=${plan}`;
        setTimeout(
          () =>
          (window.location.href =
            "https://apps.apple.com/app/followout"),
          1000
        );
      } else if (platform === "android") {
        window.location.href = `followout://subscribe?code=${generated}&plan=${plan}`;
        setTimeout(
          () =>
          (window.location.href =
            "https://play.google.com/store/apps/details?id=com.followout"),
          1000
        );
      } else {
        setCode(generated);
        setPlanName(plan === "premium" ? "Premium" : "Basic");
        setPriceValue(price);
        setModalOpen(true);
      }

      setLoadingPlan(null);
    }, 1200);
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  const downloadReceipt = () => {
    const text = `FollowOut Subscription Receipt
==============================
Plan: ${planName}
Price: $${priceValue}
Code: ${code}
Date: ${new Date().toLocaleDateString()}
==============================`;

    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `FollowOut_${code}.txt`;
    link.click();
  };

  return (
    <div className="bg-white text-[#002868] font-sans">
      {/* NAV */}

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8">
          REFRESHINGLY SIMPLE!
        </h1>

        <div className="max-w-4xl mx-auto">
          <img
            src="/assets/images/LandingPageBeforeAfter_2.png"
            className="rounded-3xl shadow-2xl"
            alt="Before After"
          />
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="https://apps.apple.com/us/app/followout/id1254455001?ls=1"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center 
               bg-black hover:bg-[#002868] 
               px-6 py-3 rounded-2xl 
               shadow-lg hover:shadow-xl 
               transition-all duration-300 
               hover:-translate-y-1"
          >
            <img
              src="/assets/svg/app_store_en.svg"
              alt="Download on the App Store"
              className="h-12 w-auto"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.followout"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center 
               bg-black hover:bg-[#002868] 
               px-6 py-3 rounded-2xl 
               shadow-lg hover:shadow-xl 
               transition-all duration-300 
               hover:-translate-y-1"
          >
            <img
              src="/assets/svg/google_play_en.svg"
              alt="Get it on Google Play"
              className="h-12 w-auto"
            />
          </a>

        </div>
      </section>

      {/* PRICING */}
      <section id="join" className="py-20 px-6 bg-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-center mb-12">
          CHOOSE YOUR PLAN
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* BASIC */}
          <div className="border p-8 rounded-3xl shadow hover:-translate-y-2 transition">
            <div className="text-4xl font-black mb-6">
              $49.95
            </div>

            <ul className="space-y-3 font-semibold mb-8">
              <li>✓ Create FollowOuts</li>
              <li>✓ Create Coupons</li>
              <li>✓ Create Reward Programs</li>
            </ul>

            <button
              onClick={() => handleSubscription("basic", 49.95)}
              className="w-full bg-[#002868] text-white py-4 rounded-xl font-bold"
            >
              {loadingPlan === "basic"
                ? "Processing..."
                : "BUY SUBSCRIPTION CODE"}
            </button>
          </div>

          {/* PREMIUM */}
          <div className="border-4 border-[#BF0A30] p-8 rounded-3xl shadow-xl relative hover:-translate-y-2 transition">
            <span className="absolute -top-4 right-8 bg-[#BF0A30] text-white px-4 py-1 rounded-full text-sm font-bold">
              BEST VALUE
            </span>

            <div className="text-4xl font-black text-[#BF0A30] mb-6">
              $179.95
            </div>

            <ul className="space-y-3 font-semibold mb-8">
              <li>✓ Create FollowOuts</li>
              <li>✓ Create Coupons</li>
              <li>✓ Create Reward Programs</li>
            </ul>

            <button
              onClick={() => handleSubscription("premium", 179.95)}
              className="w-full bg-[#BF0A30] text-white py-4 rounded-xl font-bold"
            >
              {loadingPlan === "premium"
                ? "Processing..."
                : "BUY SUBSCRIPTION CODE"}
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gloryBlue text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-8 sm:mb-12 lg:mb-16 uppercase tracking-widest text-center">
            The FollowOut Workflow
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            <div className="p-6 sm:p-8 border-2 border-white/20 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:border-white/40 hover:scale-105">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 font-black text-gloryRed">01</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">CREATE</h3>
              <p className="text-base sm:text-lg opacity-80">Post Your Location</p>

            </div>

            <div className="p-6 sm:p-8 border-2 border-white/20 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:border-white/40 hover:scale-105">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 font-black text-gloryRed">02</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">ENHANCE</h3>
              <p className="text-base sm:text-lg opacity-80">Images, Videos, Links, Coupons, Rewards</p>
            </div>

            <div className="p-6 sm:p-8 border-2 border-white/20 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:border-white/40 hover:scale-105 sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 font-black text-gloryRed">03</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">MEASURE</h3>
              <p className="text-base sm:text-lg opacity-80">Send Invites, Read Foot Traffic Stats</p>

            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:scale-[1.02]">
            <img src="/assets/images/FOLLOWOUTUNIVERSITY_MEASUREFOLLOWOUT.png" alt="Measure Stats"
              className="w-full h-auto rounded-xl sm:rounded-2xl" />
          </div>
        </div>
      </section>
      {/* VIDEO */}
      <section className="py-24 bg-gradient-to-br from-gloryBlue to-gloryBlue/80 px-6 text-white text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-12 uppercase">
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
      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 bg-[#002868]/90 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
            <h3 className="text-2xl font-black mb-4">
              Subscription Code Generated!
            </h3>

            <div className="border rounded-2xl p-6 mb-6">
              <p className="mb-2 font-semibold text-gray-500">
                {planName} Plan Code:
              </p>
              <p className="text-3xl font-black mb-2">
                {code}
              </p>
              <p className="text-xl font-bold text-[#BF0A30]">
                ${priceValue}
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={copyCode}
                className="w-full bg-[#002868] text-white py-3 rounded-xl font-bold"
              >
                Copy Code
              </button>
              <button
                onClick={downloadReceipt}
                className="w-full bg-[#BF0A30] text-white py-3 rounded-xl font-bold"
              >
                Download Receipt
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="w-full border py-3 rounded-xl font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
