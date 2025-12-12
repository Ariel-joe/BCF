import React, { useEffect } from "react";
import BlogCard from "../components/BlogCard";
import { useBlogStore } from "../stores/blogStore";


const BlogsUpdatePage = () => {

    const { blogs, allBlogs, loading } = useBlogStore();
    const [fetchAttempted, setFetchAttempted] = React.useState(false);

    useEffect(() => {
        allBlogs();
        setFetchAttempted(true);
    }, []);

    if (loading || !fetchAttempted) {
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
                    </div>
                </div>
            </section>
            <section
                id="blog-articles-section"
                className="items-center py-16"
            >
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, i) => (
                            <BlogCard key={i} blog={blog} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogsUpdatePage;
