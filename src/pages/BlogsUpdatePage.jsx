import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { useBlogStore } from "../stores/blogStore";

const BlogsUpdatePage = () => {
    const { blogs, allBlogs, loading, pagination } = useBlogStore();
    const [fetchAttempted, setFetchAttempted] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        allBlogs(1);
        setFetchAttempted(true);
    }, []);

    const loadMore = async () => {
        const nextPage = currentPage + 1;
        await allBlogs(nextPage);
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
                id="blog-hero"
                className="bg-neutral-50 flex items-center py-20"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-2xl text-neutral-900 mb-6 font-bold marker-highlight">
                            Blogs & Updates
                        </h1>
                        <p className="text-lg font-semibold text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                            Stay updated with our latest news, community
                            stories, and insights from the field.
                        </p>
                        {pagination && (
                            <p className="text-sm text-neutral-500 mt-4">
                                Showing {blogs.length} of {pagination.totalBlogs} posts
                            </p>
                        )}
                    </div>
                </div>
            </section>

            <section id="blog-articles-section" className="items-center py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, i) => (
                            <BlogCard key={blog._id || i} blog={blog} />
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
                                {loading ? "Loading..." : "Load More Posts"}
                            </button>
                        </div>
                    )}

                    {/* End of Results Message */}
                    {!pagination?.hasMore && blogs.length > 0 && (
                        <div className="text-center mt-12">
                            <p className="text-neutral-600">
                                You've reached the end of all posts
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default BlogsUpdatePage;