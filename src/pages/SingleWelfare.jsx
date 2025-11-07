import React from "react";
import welfareData from "../data/welfare.json";
import { Link, useParams } from "react-router";

const { welfares } = welfareData;

const SingleWelfare = () => {
    // get the :id param from the URL
    const params = useParams();
    const id = params?.id;

    

    // find the welfare item by id (ids in JSON are numbers)
    const welfare = welfares.find((w) => String(w.id) === String(id));

    if (!welfare) {
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
                        to="/welfare"
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
                                {welfare.title}
                            </h1>
                            <div className="flex gap-3">
                                <div className="space-x-3 mb-4">
                                    <span className="bg-neutral-300 text-neutral-700 px-3 py-1 rounded-full text-sm">
                                        {welfare.status}
                                    </span>
                                </div>
                                <div className="space-x-3 mb-4">
                                    <span className="bg-(--color-logo-blue) text-white px-3 py-1 rounded-full text-sm">
                                        {welfare.category}
                                    </span>
                                </div>
                            </div>

                            <p className="text-left text-neutral-600 mb-6">
                                {welfare.about}
                            </p>
                        </div>
                        <div className="lg:order-first">
                            <img
                                src={welfare.image}
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
                                <p className="prose prose-neutral max-w-none text-justify">
                                    {(Array.isArray(welfare.description)
                                        ? welfare.description
                                        : String(welfare.description).split(
                                              /\n{2,}/
                                          )
                                    ).map((para, idx) => (
                                        <p
                                            key={idx}
                                            className="text-neutral-600 leading-relaxed mb-6"
                                        >
                                            {para}
                                        </p>
                                    ))}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {welfare.status === "completed" ? null : (
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
                                            {welfare.individuals}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-neutral-600">
                                            Partners
                                        </span>
                                        <span className="text-neutral-900">
                                            {Array.isArray(welfare.partners)
                                                ? welfare.partners.join(", ")
                                                : welfare.partners}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-neutral-600">
                                            Communities Reached
                                        </span>
                                        <span className="text-neutral-900">
                                            {welfare.communities}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-neutral-600">
                                            Success Rate
                                        </span>
                                        <span className="text-neutral-900">
                                            {welfare.successRate}%
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
                                            {welfare.date}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">
                                            Budget:
                                        </span>
                                        <span className="text-neutral-900">
                                            Ksh {welfare.budget}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">
                                            Coordinator:
                                        </span>
                                        <span className="text-neutral-900">
                                            {welfare.coordinator}
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
