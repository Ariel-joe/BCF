import React, { useEffect } from "react";
import { Link, useParams } from "react-router";
import { useWelfareStore } from "../stores/welfareStore";

const SingleWelfare = () => {
    // get the :id param from the URL
    const params = useParams();
    const id = params?.id;
    const stringId = String(id);

    const { fetchWelfareById, welfareData, loading } = useWelfareStore();
    const [fetchAttempted, setFetchAttempted] = React.useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            if (stringId && stringId !== "undefined") {
                await fetchWelfareById(stringId);
                setFetchAttempted(true);
            }
        };
        fetchBlog();
    }, [stringId, fetchWelfareById]); // Fixed: use stringId instead of id

    // Show loading state
    if (loading || !fetchAttempted) {
        return (
            <div className="flex items-center justify-center h-screen">
                Loading...
            </div>
        );
    }

    if (!welfareData) {
        return (
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-semibold">
                        Welfare not found
                    </h2>
                    <p className="mt-4 text-neutral-600">
                        No welfare program matches the id in the URL.
                    </p>
                    <Link
                        to="/welfare/internal"
                        className="inline-block mt-6 text-blue-600 underline"
                    >
                        Back to list
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-neutral-900 mb-4 leading-tight">
                                {welfareData.title}
                            </h1>
                            <div className="flex gap-3">
                                <div className="space-x-3 mb-4">
                                    <span className="bg-neutral-300 text-neutral-700 px-3 py-1 rounded-full text-sm">
                                        {welfareData.status}
                                    </span>
                                </div>
                                <div className="space-x-3 mb-4">
                                    <span className="bg-(--color-logo-blue) text-white px-3 py-1 rounded-full text-sm">
                                        {welfareData.category}
                                    </span>
                                </div>
                            </div>

                            <p className="text-left text-neutral-600 mb-6">
                                {welfareData.summary}
                            </p>
                        </div>
                        <div className="lg:order-first">
                            <img
                                src={welfareData.image}
                                alt="welfare image"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="welfare-overview" className="py-16 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg p-8 border border-neutral-200">
                                <h2 className="text-xl font-bold text-neutral-900 mb-6">
                                    Program Overview
                                </h2>
                                <div className="prose prose-neutral max-w-none text-justify">
                                    {welfareData.content &&
                                    Array.isArray(welfareData.content) ? (
                                        welfareData.content.map(
                                            (section, i) => {
                                                if (
                                                    typeof section === "string"
                                                ) {
                                                    return (
                                                        <p
                                                            key={i}
                                                            className="text-sm text-neutral-700 leading-relaxed mb-6"
                                                        >
                                                            {section}
                                                        </p>
                                                    );
                                                }

                                                const subtitle =
                                                    section?.subtitle ||
                                                    section?.title ||
                                                    null;
                                                const paragraphs =
                                                    Array.isArray(
                                                        section?.paragraphs
                                                    )
                                                        ? section.paragraphs
                                                        : section?.paragraphs
                                                        ? [section.paragraphs]
                                                        : section?.paragraph
                                                        ? [section.paragraph]
                                                        : section?.text
                                                        ? [section.text]
                                                        : [];

                                                return (
                                                    <div key={i}>
                                                        {subtitle && (
                                                            <h2 className="text-xl font-semibold text-neutral-900 mt-12 mb-6">
                                                                {subtitle}
                                                            </h2>
                                                        )}
                                                        {paragraphs.map(
                                                            (p, idx) => (
                                                                <p
                                                                    key={idx}
                                                                    className="text-base text-neutral-700 leading-relaxed mb-6"
                                                                >
                                                                    {p}
                                                                </p>
                                                            )
                                                        )}
                                                    </div>
                                                );
                                            }
                                        )
                                    ) : (
                                        <p className="text-neutral-600">
                                            No content available.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {welfareData.status === "completed" ? null : (
                                <div className="bg-neutral-900 rounded-lg p-6 text-white">
                                    <h3 className="text-xl mb-4">
                                        Make a Difference
                                    </h3>
                                    <p className="text-neutral-300 text-sm mb-4">
                                        Your donation can provide a full year of
                                        education for a child in need.
                                    </p>
                                    <Link
                                        rel="noopener noreferrer"
                                        to={"/donate"}
                                    >
                                        <button className="self-center px-8 py-3 font-semibold rounded bg-(--color-logo-orange) text-gray-100">
                                            Donate
                                        </button>
                                    </Link>
                                </div>
                            )}
                            <div className="bg-white rounded-lg p-6 border border-neutral-200">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                                    Program Statistics
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-neutral-600">
                                            Individuals Supported
                                        </span>
                                        <span className="text-neutral-900">
                                            {
                                                welfareData.impactRecord
                                                    .individuals
                                            }
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-neutral-600">
                                            Partners
                                        </span>
                                        <span className="text-neutral-900">
                                            {Array.isArray(welfareData.partners)
                                                ? welfareData.partners.join(
                                                      ", "
                                                  )
                                                : welfareData.partners}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-neutral-600">
                                            Communities Reached
                                        </span>
                                        <span className="text-neutral-900">
                                            {
                                                welfareData.impactRecord
                                                    .communities
                                            }
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-neutral-600">
                                            Success Rate
                                        </span>
                                        <span className="text-neutral-900">
                                            {welfareData.successRate}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg p-6 border border-neutral-200">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                                    Program Details
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">
                                            Started:
                                        </span>
                                        <span className="text-neutral-900">
                                            {new Date(
                                                welfareData.startDate
                                            ).toLocaleDateString()}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">
                                            Budget:
                                        </span>
                                        <span className="text-neutral-900">
                                            Budget: Ksh{" "}
                                            {parseInt(
                                                welfareData.budget
                                            ).toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">
                                            Coordinator:
                                        </span>
                                        <span className="text-neutral-900">
                                            {welfareData.coordinator.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleWelfare;
