import React, { useEffect } from "react";
import BlogCard from "./BlogCard";
import {useBlogStore} from "../stores/blogStore"

const BlogSection = () => {

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
        <section id="blog-articles-section" className="py-16 bg-white">
            <div className="text-center mb-16">
                <h2 className="text-2xl text-neutral-900 font-bold mb-6 marker-highlight">
                    Blogs & Updates
                </h2>
            </div>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.slice(0, 3).map((blog, i) => (
                        <BlogCard key={i} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
