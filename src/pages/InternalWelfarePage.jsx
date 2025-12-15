import React, { useEffect, useState } from "react";
import WelfareCard from "../components/WelfareCard";
import { useWelfareStore } from "../stores/welfareStore";

const InternalWelfarePage = () => {
    const { welfarePosts, fetchWelfarePosts, loading, pagination } = useWelfareStore();
    const [fetchAttempted, setFetchAttempted] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // Filter internal welfare posts
    const internalWelfarePosts = welfarePosts.filter((w) => w.category === "internal");

    useEffect(() => {
        fetchWelfarePosts(1);
        setFetchAttempted(true);
    }, []);

    const loadMore = async () => {
        const nextPage = currentPage + 1;
        await fetchWelfarePosts(nextPage);
        setCurrentPage(nextPage);
    };

    if (loading && !fetchAttempted) {
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
                                    <span>{internalWelfarePosts.length} projects</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {internalWelfarePosts.map((w, i) => (
                                    <WelfareCard key={w._id || i} welfare={w} />
                                ))}
                            </div>

                            {/* Load More Button */}
                            {pagination?.hasMore && (
                                <div className="flex justify-center mt-12">
                                    <button
                                        onClick={loadMore}
                                        disabled={loading}
                                        className="px-8 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors font-semibold"
                                    >
                                        {loading ? "Loading..." : "Load More Projects"}
                                    </button>
                                </div>
                            )}

                            {/* End of Results Message */}
                            {!pagination?.hasMore && internalWelfarePosts.length > 0 && (
                                <div className="text-center mt-12">
                                    <p className="text-neutral-600">
                                        You've reached the end of all projects
                                    </p>
                                </div>
                            )}
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