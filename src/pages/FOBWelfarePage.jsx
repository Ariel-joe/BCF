import React, { useEffect } from "react";
import WelfareCard from "../components/WelfareCard";
import { useWelfareStore } from "../stores/welfareStore";

const FOBWelfarePage = () => {

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
                            Friends Of Beacon
                        </h1>
                        <p className="text-lg font-semibold text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                            Creating lasting impact in communities across Kenya
                        </p>
                    </div>
                </div>
            </section>
            {/* friends of beacon welfare section */}
            <section id="internal-welfare" className="bg-white">
                <div className="max-w-7xl mx-auto px-2 lg:px-8">
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
                                    .filter(
                                        (w) =>
                                            w.category === "friends-of-beacon"
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
