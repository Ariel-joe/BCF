import React from "react";
import WelfareCard from "../components/WelfareCard";
import { welfares } from "../data/welfare.json";

const FOBWelfarePage = () => {
    return (
        <>
            {/* friends of beacon welfare section */}
            <section id="internal-welfare" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl text-neutral-900 mb-4 font-bold marker-highlight">
                            Friends Of Beacon
                        </h2>
                        <p className="text-lg text-neutral-600 font-semibold">
                            Creating lasting impact in communities across Kenya
                        </p>
                    </div>

                    <section id="active-projects" className="py-16 bg-white">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="flex items-center justify-between mb-12">
                                <h2 className="text-lg font-semibold text-neutral-900">
                                    Active Projects
                                </h2>
                                <div className="flex items-center space-x-2 font-semibold text-neutral-600">
                                    <span>127 projects</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {welfares
                                    .filter(
                                        (w) =>
                                            w.category === "Friends of Beacon"
                                    )
                                    .map((w, i) => (
                                        <WelfareCard key={i} welfare={w} />
                                    ))}
                            </div>
                        </div>
                    </section>
                    <div className="bg-(--color-logo-orange) p-8 rounded-2xl">
                        <h3 className="text-xl font-bold text-white mb-8 text-center">
                            Community Impact Achievements
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 text-center">
                            <div>
                                <div className="text-lg font-bold text-white mb-2">
                                    500+
                                </div>
                                <div className="text-white text-sm">
                                    Lives Directly Impacted
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white mb-2">
                                    12
                                </div>
                                <div className="text-white text-sm">
                                    Communities Served
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white mb-2">
                                    200+
                                </div>
                                <div className="text-white text-sm">
                                    Students Supported
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white mb-2">
                                    150
                                </div>
                                <div className="text-white text-sm">
                                    Families Fed Monthly
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white mb-2">
                                    5
                                </div>
                                <div className="text-white text-sm">
                                    Water Projects
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white mb-2">
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

export default FOBWelfarePage;
