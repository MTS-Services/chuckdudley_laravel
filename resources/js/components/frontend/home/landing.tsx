'use client';

import { useState } from 'react';

export default function FollowOutLanding() {
    const [modalOpen, setModalOpen] = useState(false);
    const [code, setCode] = useState('');
    const [planName, setPlanName] = useState('');
    const [priceValue, setPriceValue] = useState<number>(0);
    const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

    const handleSubscription = (plan: 'basic' | 'premium', price: number) => {
        setLoadingPlan(plan);
        const generated = (plan === 'premium' ? 'PREM-' : 'BASIC-') + Math.random().toString(36).substring(2, 10).toUpperCase();
        
        setTimeout(() => {
            setCode(generated);
            setPlanName(plan === 'premium' ? 'Premium' : 'Basic');
            setPriceValue(price);
            setModalOpen(true);
            setLoadingPlan(null);
        }, 1000);
    };

    const copyCode = async () => {
        await navigator.clipboard.writeText(code);
        alert('Code copied!');
    };

    return (
        <div className="overflow-x-hidden bg-white font-sans text-[#002868]">
            {/* ============================================================
            HERO — "Refreshingly Simple!" top-left + phone mockup + wavy bg
            ============================================================ */}
            <section className="relative overflow-hidden px-6 pt-28 pb-16">
                {/* Yuka-style soft blob background */}
                <div className="absolute top-0 right-0 -z-10 bg-[#e8f4f8]" />

                <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
                    {/* Left copy */}
                    <div className="">
                        <div>
                            <img src="/assets/images/sss.png" alt="" />
                        </div>

                        <div className="flex flex-wrap justify-start gap-4">
                            <a
                                href="https://apps.apple.com/us/app/followout/id1254455001?ls=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-xl bg-black px-5 py-2.5 shadow-lg transition-all hover:-translate-y-1 hover:bg-[#002868]"
                            >
                                <img
                                    src="/assets/svg/app_store_en.svg"
                                    alt="Download on the App Store"
                                    className="h-10 w-auto"
                                />
                            </a>

                            <a
                                href="https://play.google.com/store/apps/details?id=com.followout"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-xl bg-black px-5 py-2.5 shadow-lg transition-all hover:-translate-y-1 hover:bg-[#002868]"
                            >
                                <img
                                    src="/assets/svg/google_play_en.svg"
                                    alt="Get it on Google Play"
                                    className="h-10 w-auto"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Right — smartphone mockup */}
                    <div className="relative flex justify-center md:justify-end">
                        {/* Background decorative elements */}
                        <div className="absolute top-[70%] left-[30%] z-0 w-full">
                            <img
                                src="/assets/images/nuage_1.svg"
                                alt="Cloud decoration"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <div className="absolute -top-0 left-[30%] z-0 w-full">
                            <img
                                src="/assets/images/objets_desktop.svg"
                                alt="Desktop objects decoration"
                                className="w-full object-contain"
                            />
                        </div>

                        {/* Phone frame */}
                        <div className="relative z-20">
                            <div className="aspect-[9/19] w-56 rounded-[2.5rem] md:w-64">
                                <img
                                    src="/assets/images/tel.png"
                                    alt="FollowOut App Screenshot"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
            "A 100% independent project" style trust bar
            ============================================================ */}
            <section className="bg-white px-6 py-10 text-center">
                <h2 className="mb-16 text-center text-3xl font-black">
                    A truly independent platform for outdoor businesses
                </h2>
                <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
                    {[
                        {
                            icon: '🤝',
                            title: 'No hidden fees',
                            desc: 'Straightforward subscription pricing. No per-event charges or surprise fees.',
                        },
                        {
                            icon: '📢',
                            title: 'No paid rankings',
                            desc: 'Businesses cannot pay to appear higher in search results. Purely organic.',
                        },
                        {
                            icon: '💚',
                            title: 'Community first',
                            desc: 'Built to serve food trucks, outdoor events, and local communities — not advertisers.',
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="flex flex-col items-center gap-3"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f4f8] text-3xl">
                                {item.icon}
                            </div>
                            <h3 className="text-base font-black">
                                {item.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-500">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <a
                    href="#join"
                    className="mt-10 inline-block rounded-full bg-[#002868] px-8 py-3 font-bold text-white transition-colors hover:bg-[#BF0A30]"
                >
                    Learn more
                </a>
            </section>

      
            {/* ============================================================
            WORKFLOW — Step 01 / 02 / 03 (Yuka style alternating layout)
            ============================================================ */}
            <section id="workflow" className="bg-white px-6 py-16">
                <h2 className="mb-16 text-center text-3xl font-black">
                    The FollowOut Workflow
                </h2>

                <div className="mx-auto max-w-5xl space-y-20">
                    {/* Step 1 */}
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="flex min-h-[200px] items-center justify-center rounded-3xl bg-[#e8f4f8] p-8">
                            <div className="text-center">
                                <div className="mb-4 text-7xl">📍</div>
                                <p className="text-lg font-bold text-[#002868]">
                                    Share Your Location
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-black tracking-widest text-[#BF0A30]">
                                STEP 01
                            </p>
                            <h3 className="mb-4 text-xl font-semibold">CREATE</h3>
                            <p className="leading-relaxed text-gray-600">
                                Post your live location with a single tap. Tell
                                the world where your food truck, pop-up, or
                                outdoor business is set up today — whether it's
                                a park, beach, street corner, or festival
                                ground.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="order-2 md:order-1">
                            <p className="mb-2 text-sm font-black tracking-widest text-[#BF0A30]">
                                STEP 02
                            </p>
                            <h3 className="mb-4 text-xl font-semibold">
                                ENHANCE
                            </h3>
                            <p className="leading-relaxed text-gray-600">
                                Add images, videos, links, digital coupons, and
                                reward programs to make your listing
                                irresistible. Give customers a compelling reason
                                to visit — and keep coming back for more.
                            </p>
                        </div>
                        <div className="order-1 flex min-h-[200px] items-center justify-center rounded-3xl bg-[#fff5e8] p-8 md:order-2">
                            <div className="text-center">
                                <div className="mb-4 text-7xl">🎟️</div>
                                <p className="text-lg font-bold text-[#002868]">
                                    Coupons & Rewards
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div className="flex min-h-[200px] items-center justify-center rounded-3xl bg-[#eef8ee] p-8">
                            <img
                                src="/assets/images/FOLLOWOUTUNIVERSITY_MEASUREFOLLOWOUT.png"
                                alt="FollowOut Measure"
                                className="w-full rounded-2xl"
                            />
                        </div>
                        <div>
                            <p className="mb-2 text-sm font-black tracking-widest text-[#BF0A30]">
                                STEP 03
                            </p>
                            <h3 className="mb-4 text-xl font-semibold">
                                MEASURE
                            </h3>
                            <p className="leading-relaxed text-gray-600">
                                Track invites, coupon redemptions, and
                                real-world foot traffic in one dashboard.
                                Understand what's working and optimize your next
                                outing with real data.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================================
            BEFORE / AFTER — enlarged, Yuka recommendation style
            ============================================================ */}
            <section className="container mx-auto px-6 py-16 text-center">
                <img
                    src="/assets/images/LandingPageBeforeAfter.png"
                    alt="BEFOREAFTER"
                />
            </section>

            {/* ============================================================
            JOIN A COMMUNITY — Yuka "60M users" style social proof
            ============================================================ */}
            <section className="bg-[#f0f7fa] px-6 py-16">
                <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-3xl font-black md:text-4xl">
                            Join a growing community of outdoor businesses
                        </h2>
                        <div className="mb-2 flex items-center gap-1">
                            {[1, 2, 3, 4].map((i) => (
                                <svg
                                    key={i}
                                    className="h-6 w-6 fill-current text-yellow-400"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            <svg
                                className="h-6 w-6 fill-current text-yellow-400 opacity-40"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <p className="mb-6 font-semibold text-gray-500">
                            4.0/5 • 1,200+ reviews
                        </p>
                    </div>
                    {/* Testimonial card */}
                    <div className="relative rounded-3xl bg-white p-8 shadow-xl">
                        <div className="absolute -top-5 left-8 h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-[#002868]">
                            <div className="h-full w-full bg-gradient-to-br from-[#002868] to-[#BF0A30]" />
                        </div>
                        <p className="mt-4 leading-relaxed text-gray-700 italic">
                            "FollowOut completely changed how we find customers.
                            We used to spend hours posting on social media — now
                            one tap does it all. Our foot traffic is up 40%
                            since we started using it."
                        </p>
                        <p className="mt-4 font-black text-[#002868]">
                            Marcus T.
                        </p>
                        <p className="text-sm text-gray-400">
                            Street Taco Vendor, Miami Beach
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================================================
            PRICING — moved after Press section per client request
            ============================================================ */}
            <section id="join" className="px-6 py-16">
                <h2 className="mb-4 text-center text-3xl font-black">
                    Choose Your Plan
                </h2>
                <p className="mb-12 text-center text-gray-500">
                    Simple, transparent pricing. No surprises.
                </p>

                <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
                    {/* BASIC */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow transition-transform hover:-translate-y-2">
                        <div className="mb-2 text-4xl font-black text-[#002868]">
                            $49.95
                        </div>
                        <p className="mb-6 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                            Basic Plan
                        </p>
                        <ul className="mb-8 space-y-3 font-semibold text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="font-black text-green-500">
                                    ✓
                                </span>{' '}
                                Create FollowOuts
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-black text-green-500">
                                    ✓
                                </span>{' '}
                                Create Coupons
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-black text-green-500">
                                    ✓
                                </span>{' '}
                                Create Reward Programs
                            </li>
                        </ul>
                        <button
                            onClick={() => handleSubscription('basic', 49.95)}
                            className="w-full rounded-2xl bg-[#002868] py-4 font-bold text-white transition-colors hover:bg-[#001a4d]"
                        >
                            {loadingPlan === 'basic'
                                ? 'Processing...'
                                : 'BUY SUBSCRIPTION CODE'}
                        </button>
                    </div>

                    {/* PREMIUM */}
                    <div className="relative rounded-3xl border-4 border-[#BF0A30] bg-white p-8 shadow-xl transition-transform hover:-translate-y-2">
                        <span className="absolute -top-4 right-8 rounded-full bg-[#BF0A30] px-4 py-1 text-sm font-bold text-white">
                            BEST VALUE
                        </span>
                        <div className="mb-2 text-4xl font-black text-[#BF0A30]">
                            $179.95
                        </div>
                        <p className="mb-6 text-sm font-semibold tracking-wide text-gray-500 uppercase">
                            Premium Plan
                        </p>
                        <ul className="mb-8 space-y-3 font-semibold text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="font-black text-green-500">
                                    ✓
                                </span>{' '}
                                Create FollowOuts
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-black text-green-500">
                                    ✓
                                </span>{' '}
                                Create Coupons
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="font-black text-green-500">
                                    ✓
                                </span>{' '}
                                Create Reward Programs
                            </li>
                        </ul>
                        <button
                            onClick={() =>
                                handleSubscription('premium', 179.95)
                            }
                            className="w-full rounded-2xl bg-[#BF0A30] py-4 font-bold text-white transition-colors hover:bg-[#9a0824]"
                        >
                            {loadingPlan === 'premium'
                                ? 'Processing...'
                                : 'BUY SUBSCRIPTION CODE'}
                        </button>
                    </div>
                </div>
            </section>

           
            {/* ============================================================
             VIDEO
            ============================================================ */}
            <section className="bg-gradient-to-br from-gloryBlue to-[#001030] px-6 py-16 text-center text-white">
                <h2 className="mb-12 text-3xl font-black">
                    See FollowOut In Action
                </h2>
                <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl">
                    <video controls className="w-full">
                        <source
                            src="https://www.followout.tv/vid/GalleryVideo_2022.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </section>

            {/* ============================================================
            MODAL
            ============================================================ */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#002868]/90 p-4">
                    <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
                        <h3 className="mb-4 text-2xl font-black text-[#002868]">
                            Subscription Code Generated!
                        </h3>
                        <div className="mb-6 rounded-2xl border bg-slate-50 p-6">
                            <p className="mb-2 font-semibold text-gray-500">
                                {planName} Plan Code:
                            </p>
                            <p className="mb-2 text-3xl font-black text-[#002868]">
                                {code}
                            </p>
                            <p className="text-xl font-bold text-[#BF0A30]">
                                ${priceValue}
                            </p>
                        </div>
                        <div className="space-y-3">
                            <button
                                onClick={copyCode}
                                className="w-full rounded-xl bg-[#002868] py-3 font-bold text-white transition-colors hover:bg-[#001a4d]"
                            >
                                Copy Code
                            </button>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="w-full rounded-xl border border-slate-200 py-3 font-bold transition-colors hover:bg-slate-50"
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
