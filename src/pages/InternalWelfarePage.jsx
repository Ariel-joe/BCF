import React, { useEffect } from "react";
import { welfares } from "../data/welfare.json";
import WelfareCard from "../components/WelfareCard";
import { useWelfareStore } from "../stores/welfareStore";

const InternalWelfarePage = () => {

    const { welfarePosts, fetchWelfarePosts, loading } = useWelfareStore();

    useEffect(() => {
        fetchWelfarePosts();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                loading...
            </div>
        );
    }

    return (
        <>
            <section
                id="internalwelf-hero"
                className="bg-neutral-50 flex items-center py-20"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-2xl text-neutral-900 mb-6 font-bold marker-highlight">
                            Internal Welfare Programs
                        </h1>
                        <p className="text-lg font-semibold text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                            Supporting our team members and organizational
                            community
                        </p>
                    </div>
                </div>
            </section>
            <section id="internal-welfare" className="bg-white">
                <div className="max-w-7xl mx-auto px-2 lg:px-8">
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
                                {welfarePosts
                                    .filter((w) => w.category === "internal")
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
