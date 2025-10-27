import {
    BadgeCheck,
    HeartHandshake,
    Lightbulb,
    UsersIcon,
    UsersRound,
} from "lucide-react";
import React from "react";
import { Link } from "react-router";

const HomePage = () => {
    return (
        <>
            <main id="main">
                <section
                    id="hero"
                    class="h-[600px] flex items-center relative text-white hero bg-cover bg-center"
                    style={{ backgroundImage: 'url("/LEE_8924.jpg")' }}
                >
                    {/* <!-- Overlay Div --> */}
                    <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

                    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center container py-10 md:flex-row flex-col justify-center h-full relative z-20">
                        <div>
                            <h1 class="text-5xl mb-6 font-bold">
                                Making a Difference in Our Community
                            </h1>
                            <p class="text-xl mb-8 leading-relaxed">
                                Join us in our mission to create positive change
                                and build a better future for everyone.
                                Together, we can make an impact that lasts.
                            </p>
                            <div class="flex space-x-4">
                                <Link rel="noopener noreferrer" to={"/donate"}>
                                    <button className="self-center px-8 py-3 font-semibold rounded bg-(--color-logo-orange) text-gray-100">
                                        Donate Now
                                    </button>
                                </Link>
                                <button class="px-8 py-3 border border-neutral-300 text-white rounded-md hover:bg-neutral-50">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        {/* <div class="rounded-lg flex items-center justify-center">
                            <img src={"LEE_8924.jpg"} alt="" />
                        </div> */}
                    </div>
                </section>
                <section id="introduction" class="py-20 bg-white">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="text-center mb-16">
                            <h2 class="text-4xl text-neutral-900 mb-6 font-bold">
                                <span class="marker-highlight">Who We Are</span>
                            </h2>
                            <p class="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                                We are a dedicated organization committed to
                                creating meaningful change in our community
                                through innovative programs, collaborative
                                partnerships, and unwavering dedication to our
                                cause.
                            </p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div class="text-center p-6">
                                <div class="w-16 h-16 bg-neutral-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <UsersRound color="white" size={36} />
                                </div>
                                <h3 class="text-xl text-neutral-900 mb-3">
                                    Community Focus
                                </h3>
                                <p class="text-neutral-600">
                                    Building stronger communities through direct
                                    engagement and support programs.
                                </p>
                            </div>
                            <div class="text-center p-6">
                                <div class="w-16 h-16 bg-neutral-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Lightbulb color="white" size={36} />
                                </div>
                                <h3 class="text-xl text-neutral-900 mb-3">
                                    Innovation
                                </h3>
                                <p class="text-neutral-600">
                                    Developing creative solutions to address
                                    complex social challenges.
                                </p>
                            </div>
                            <div class="text-center p-6">
                                <div class="w-16 h-16 bg-neutral-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <HeartHandshake color="white" size={36} />
                                </div>
                                <h3 class="text-xl text-neutral-900 mb-3">
                                    Collaboration
                                </h3>
                                <p class="text-neutral-600">
                                    Working together with partners to maximize
                                    our collective impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="mission" class="py-20 bg-neutral-50">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div class="grid grid-cols-3 md:grid-cols-4 gap-4">
                                    <div class="grid gap-4">
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="/DSC_3049.jpeg"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="IMG-20250901-WA0035.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="IMG-20250901-WA0022.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="grid gap-4">
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="IMG-20250901-WA0029.jpg"
                                                alt=""
                                            />
                                        </div>

                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="IMG-20250901-WA0018.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="DSC_3270.jpeg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="grid gap-4">
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="DSC_3042.jpeg"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="IMG-20250901-WA0026.jpg"
                                                alt=""
                                            />
                                        </div>

                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="IMG-20250901-WA0032.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 class="text-4xl mb-6 font-bold marker-highlight">
                                    Our Mission
                                </h2>
                                <p class="text-lg text-neutral-600 mb-6 text-justify leading-relaxed">
                                    To empower communities and individuals by
                                    providing resources, support, and
                                    opportunities that foster growth, education,
                                    and sustainable development. We believe in
                                    creating lasting change through
                                    compassionate action and strategic
                                    partnerships.
                                </p>
                                <div class="space-y-4">
                                    <div class="flex items-start space-x-3">
                                        <BadgeCheck color="var(--color-logo-blue)" />
                                        <span class="text-neutral-700">
                                            Provide essential resources to
                                            underserved communities
                                        </span>
                                    </div>
                                    <div class="flex items-start space-x-3">
                                        <BadgeCheck color="var(--color-logo-blue)" />
                                        <span class="text-neutral-700">
                                            Create educational opportunities for
                                            all ages
                                        </span>
                                    </div>
                                    <div class="flex items-start space-x-3">
                                        <BadgeCheck color="var(--color-logo-blue)" />
                                        <span class="text-neutral-700">
                                            Foster sustainable development
                                            initiatives
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="vision" class="py-20 bg-white">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 class="text-4xl mb-6 font-bold marker-highlight">
                                    Our Vision
                                </h2>
                                <p class="text-lg text-neutral-600 mb-6 leading-relaxed">
                                    We envision a world where every individual
                                    has access to the tools, resources, and
                                    opportunities they need to thrive. A future
                                    where communities are empowered,
                                    sustainable, and connected through shared
                                    values of compassion and progress.
                                </p>
                                <div class="bg-neutral-100 p-6 rounded-lg">
                                    <h3 class="text-xl text-neutral-900 mb-3">
                                        Looking Ahead to 2025
                                    </h3>
                                    <p class="text-neutral-600">
                                        Our strategic plan focuses on expanding
                                        our reach, deepening our impact, and
                                        building stronger partnerships to create
                                        meaningful change in the communities we
                                        serve.
                                    </p>
                                </div>
                            </div>
                            <div class="">
                                <div class="grid grid-cols-3 md:grid-cols-4 gap-4">
                                    <div class="grid gap-4">
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="/DSC_3049.jpeg"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="IMG-20250901-WA0035.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="IMG-20250901-WA0022.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="grid gap-4">
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="IMG-20250901-WA0029.jpg"
                                                alt=""
                                            />
                                        </div>

                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="IMG-20250901-WA0018.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="DSC_3270.jpeg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="grid gap-4">
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="DSC_3042.jpeg"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="IMG-20250901-WA0026.jpg"
                                                alt=""
                                            />
                                        </div>

                                        <div>
                                            <img
                                                class="h-auto max-w-full rounded-lg"
                                                src="IMG-20250901-WA0032.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="cta" class="py-20 bg-(--color-logo-orange)">
                    <div class="max-w-7xl mx-auto px-6 text-center">
                        <h2 class="text-4xl text-white mb-6">
                            Ready to Make a Difference?
                        </h2>
                        <p class="text-xl text-neutral-300 mb-12 max-w-3xl mx-auto">
                            Join our community of changemakers and help us
                            create lasting impact. Whether through volunteering,
                            donating, or spreading awareness, every action
                            counts.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div class="bg-neutral-800 p-8 rounded-lg">
                                <i class="fa-solid fa-hand-holding-heart text-white text-3xl mb-4"></i>
                                <h3 class="text-xl text-white mb-3">
                                    Volunteer
                                </h3>
                                <p class="text-neutral-300 mb-6">
                                    Share your time and skills to directly
                                    impact our programs and initiatives.
                                </p>
                                <button class="w-full px-6 py-2 bg-white text-neutral-900 rounded-md hover:bg-neutral-100">
                                    Join as Volunteer
                                </button>
                            </div>
                            <div class="bg-neutral-800 p-8 rounded-lg">
                                <i class="fa-solid fa-donate text-white text-3xl mb-4"></i>
                                <h3 class="text-xl text-white mb-3">Donate</h3>
                                <p class="text-neutral-300 mb-6">
                                    Support our mission with a financial
                                    contribution that goes directly to our
                                    programs.
                                </p>
                                <button class="w-full px-6 py-2 bg-white text-neutral-900 rounded-md hover:bg-neutral-100">
                                    Make a Donation
                                </button>
                            </div>
                            <div class="bg-neutral-800 p-8 rounded-lg">
                                <i class="fa-solid fa-share text-white text-3xl mb-4"></i>
                                <h3 class="text-xl text-white mb-3">
                                    Spread the Word
                                </h3>
                                <p class="text-neutral-300 mb-6">
                                    Help us reach more people by sharing our
                                    mission with your network.
                                </p>
                                <button class="w-full px-6 py-2 bg-white text-neutral-900 rounded-md hover:bg-neutral-100">
                                    Share Our Story
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;
