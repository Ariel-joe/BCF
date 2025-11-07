import React from "react";
import BlogCard from "./BlogCard";
import { blogs } from "../data/blog.json";

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
                    {blogs.map((blog, i) => (
                        <BlogCard key={i} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
