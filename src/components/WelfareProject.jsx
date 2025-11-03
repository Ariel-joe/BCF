import React from "react";

const WelfareProject = () => {
    return (
        <>
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
                        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="bg-neutral-400 h-48 flex items-center justify-center">
                                <span className="text-white">
                                    Clean Water Initiative
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-sm rounded-full">
                                        Active
                                    </span>
                                    <span className="text-neutral-500 text-sm">
                                        Started Jan 2025
                                    </span>
                                </div>
                                <h3 className="text-xl text-neutral-900 mb-3">
                                    Clean Water Access Project
                                </h3>
                                <p className="text-neutral-600 mb-4">
                                    Providing clean drinking water to rural
                                    communities through sustainable well
                                    construction and water purification systems.
                                </p>
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm text-neutral-600 mb-1">
                                        <span>Progress</span>
                                        <span>67%</span>
                                    </div>
                                    <div className="w-full bg-neutral-200 rounded-full h-2">
                                        <div className="bg-neutral-900 h-2 rounded-full w-2/3"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-neutral-600">
                                        $45,000 raised
                                    </span>
                                    <button className="px-4 py-2 bg-neutral-900 text-white rounded-md text-sm hover:bg-neutral-800">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="bg-neutral-400 h-48 flex items-center justify-center">
                                <span className="text-white">
                                    Education Program
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-sm rounded-full">
                                        Active
                                    </span>
                                    <span className="text-neutral-500 text-sm">
                                        Started Dec 2024
                                    </span>
                                </div>
                                <h3 className="text-xl text-neutral-900 mb-3">
                                    Digital Learning Centers
                                </h3>
                                <p className="text-neutral-600 mb-4">
                                    Establishing computer labs and digital
                                    literacy programs in underserved schools
                                    across the region.
                                </p>
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm text-neutral-600 mb-1">
                                        <span>Progress</span>
                                        <span>42%</span>
                                    </div>
                                    <div className="w-full bg-neutral-200 rounded-full h-2">
                                        <div className="bg-neutral-900 h-2 rounded-full w-2/5"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-neutral-600">
                                        $32,500 raised
                                    </span>
                                    <button className="px-4 py-2 bg-neutral-900 text-white rounded-md text-sm hover:bg-neutral-800">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="bg-neutral-400 h-48 flex items-center justify-center">
                                <span className="text-white">
                                    Healthcare Initiative
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-sm rounded-full">
                                        Active
                                    </span>
                                    <span className="text-neutral-500 text-sm">
                                        Started Feb 2025
                                    </span>
                                </div>
                                <h3 className="text-xl text-neutral-900 mb-3">
                                    Mobile Health Clinics
                                </h3>
                                <p className="text-neutral-600 mb-4">
                                    Bringing essential healthcare services to
                                    remote areas through mobile medical units
                                    and trained staff.
                                </p>
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm text-neutral-600 mb-1">
                                        <span>Progress</span>
                                        <span>23%</span>
                                    </div>
                                    <div className="w-full bg-neutral-200 rounded-full h-2">
                                        <div className="bg-neutral-900 h-2 rounded-full w-1/4"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-neutral-600">
                                        $18,750 raised
                                    </span>
                                    <button className="px-4 py-2 bg-neutral-900 text-white rounded-md text-sm hover:bg-neutral-800">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 border border-neutral-300 text-neutral-700 rounded-md hover:bg-neutral-50">
                            View All Active Projects
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WelfareProject;
