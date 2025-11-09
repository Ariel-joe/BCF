import React from "react";
import { welfares } from "../data/welfare.json";
import WelfareCard from "../components/WelfareCard";

const InternalWelfarePage = () => {
    return (
        <>
            <section id="internal-welfare" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-2 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl text-neutral-900 mb-4 font-bold marker-highlight">
                            Internal Welfare Programs
                        </h2>
                        <p className="text-lg text-neutral-600 font-semibold">
                            Supporting our team members and organizational
                            community
                        </p>
                    </div>
                    {/* internal welfare section */}
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
                                    .filter((w) => w.category === "Internal")
                                    .map((w, i) => (
                                        <WelfareCard key={i} welfare={w} />
                                    ))}
                            </div>
                        </div>
                    </section>

                    <div className="mt- bg-(--color-logo-orange) p-8 rounded-2xl text-center">
                        <h3 className="text-xl font-bold text-white mb-4">
                            Internal Impact Statistics
                        </h3>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            <div>
                                <div className="text-lg font-bold text-white mb-2">
                                    25
                                </div>
                                <div className="text-white text-sm">
                                    Team Members Supported
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white mb-2">
                                    100%
                                </div>
                                <div className="text-white text-sm">
                                    Health Coverage
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white mb-2">
                                    18
                                </div>
                                <div className="text-white text-sm">
                                    Training Programs
                                </div>
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white mb-2">
                                    95%
                                </div>
                                <div className="text-white text-sm">
                                    Satisfaction Rate
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InternalWelfarePage;
