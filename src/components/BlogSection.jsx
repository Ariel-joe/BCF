import React from "react";

const BlogSection = () => {
    return (
        <section id="blog-articles-section" className="py-16 bg-white">
            <div className="text-center mb-16">
                <h2 className="text-2xl text-neutral-900 font-bold mb-6 marker-highlight">
                   Blogs & Updates
                </h2>
                
            </div>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="w-full h-48 bg-neutral-400 flex items-center justify-center">
                            <span className="text-white text-sm">
                                Education Program Success
                            </span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center space-x-2 text-xs text-neutral-500 mb-3">
                                <span>January 12, 2025</span>
                                <span>•</span>
                                <span>Michael Ochieng</span>
                            </div>
                            <h3 className="text-lg text-neutral-900 mb-3 leading-tight">
                                Empowering Youth Through Education: 50
                                Scholarships Awarded
                            </h3>
                            <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                                Our scholarship program reaches a milestone with
                                50 students receiving full educational support
                                for the 2025 academic year.
                            </p>
                            <div className="flex items-center justify-between">
                                <button className="text-neutral-900 text-sm hover:text-neutral-600 transition-colors">
                                    Read More{" "}
                                    <i className="fa-solid fa-arrow-right ml-1"></i>
                                </button>
                                <div className="flex space-x-2">
                                    <button className="w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200">
                                        <i className="fa-brands fa-facebook text-neutral-600 text-xs"></i>
                                    </button>
                                    <button className="w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200">
                                        <i className="fa-brands fa-twitter text-neutral-600 text-xs"></i>
                                    </button>
                                    <button className="w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200">
                                        <i className="fa-solid fa-share text-neutral-600 text-xs"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="w-full h-48 bg-neutral-400 flex items-center justify-center">
                            <span className="text-white text-sm">
                                Volunteer Team Building
                            </span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center space-x-2 text-xs text-neutral-500 mb-3">
                                <span>January 10, 2025</span>
                                <span>•</span>
                                <span>Grace Wanjiku</span>
                            </div>
                            <h3 className="text-lg text-neutral-900 mb-3 leading-tight">
                                Meet Our Amazing Volunteers: Stories of
                                Dedication
                            </h3>
                            <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                                Get to know the incredible individuals who
                                dedicate their time and energy to making our
                                mission possible.
                            </p>
                            <div className="flex items-center justify-between">
                                <button className="text-neutral-900 text-sm hover:text-neutral-600 transition-colors">
                                    Read More{" "}
                                    <i className="fa-solid fa-arrow-right ml-1"></i>
                                </button>
                                <div className="flex space-x-2">
                                    <button className="w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200">
                                        <i className="fa-brands fa-facebook text-neutral-600 text-xs"></i>
                                    </button>
                                    <button className="w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200">
                                        <i className="fa-brands fa-twitter text-neutral-600 text-xs"></i>
                                    </button>
                                    <button className="w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200">
                                        <i className="fa-solid fa-share text-neutral-600 text-xs"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="w-full h-48 bg-neutral-400 flex items-center justify-center">
                            <span className="text-white text-sm">
                                Healthcare Outreach
                            </span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center space-x-2 text-xs text-neutral-500 mb-3">
                                <span>January 8, 2025</span>
                                <span>•</span>
                                <span>Dr. James Mwangi</span>
                            </div>
                            <h3 className="text-lg text-neutral-900 mb-3 leading-tight">
                                Free Medical Camp Serves 300+ Community Members
                            </h3>
                            <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                                Our monthly medical outreach program continues
                                to provide essential healthcare services to
                                underserved communities.
                            </p>
                            <div className="flex items-center justify-between">
                                <button className="text-neutral-900 text-sm hover:text-neutral-600 transition-colors">
                                    Read More{" "}
                                    <i className="fa-solid fa-arrow-right ml-1"></i>
                                </button>
                                <div className="flex space-x-2">
                                    <button className="w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200">
                                        <i className="fa-brands fa-facebook text-neutral-600 text-xs"></i>
                                    </button>
                                    <button className="w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200">
                                        <i className="fa-brands fa-twitter text-neutral-600 text-xs"></i>
                                    </button>
                                    <button className="w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center hover:bg-neutral-200">
                                        <i className="fa-solid fa-share text-neutral-600 text-xs"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
