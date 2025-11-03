import React from "react";
import WelfareProject from "../components/WelfareProject";

const WelfarePage = () => {
    return (
        <>
            <section id="internal-welfare" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl text-neutral-900 mb-4 font-bold marker-highlight">
                            Internal Welfare Programs
                        </h2>
                        <p className="text-lg text-neutral-600 font-semibold">
                            Supporting our team members and organizational
                            community
                        </p>
                    </div>

                    <WelfareProject />
                    <div className="mt-16 bg-(--color-logo-orange) p-8 rounded-2xl text-center">
                        <h3 className="text-2xl text-white mb-4">
                            Internal Impact Statistics
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            <div>
                                <div className="text-3xl text-white mb-2">
                                    25
                                </div>
                                <div className="text-neutral-300">
                                    Team Members Supported
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl text-white mb-2">
                                    100%
                                </div>
                                <div className="text-neutral-300">
                                    Health Coverage
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl text-white mb-2">
                                    18
                                </div>
                                <div className="text-neutral-300">
                                    Training Programs
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl text-white mb-2">
                                    95%
                                </div>
                                <div className="text-neutral-300">
                                    Satisfaction Rate
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="internal-welfare" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl text-neutral-900 mb-4 font-bold marker-highlight">
                            External Community Welfare
                        </h2>
                        <p className="text-lg text-neutral-600 font-semibold">
                            Creating lasting impact in communities across Kenya
                        </p>
                    </div>

                    <WelfareProject />
                    <div className="bg-(--color-logo-orange) p-8 rounded-2xl">
                        <h3 className="text-2xl text-white mb-8 text-center">
                            Community Impact Achievements
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 text-center">
                            <div>
                                <div className="text-3xl text-white mb-2">
                                    500+
                                </div>
                                <div className="text-white text-sm">
                                    Lives Directly Impacted
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl text-white mb-2">
                                    12
                                </div>
                                <div className="text-white text-sm">
                                    Communities Served
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl text-white mb-2">
                                    200+
                                </div>
                                <div className="text-white text-sm">
                                    Students Supported
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl text-white mb-2">
                                    150
                                </div>
                                <div className="text-white text-sm">
                                    Families Fed Monthly
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl text-white mb-2">
                                    5
                                </div>
                                <div className="text-white text-sm">
                                    Water Projects
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl text-white mb-2">
                                    75
                                </div>
                                <div className="text-white text-sm">
                                    Skills Graduates
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WelfarePage;
