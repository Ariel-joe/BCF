import React from "react";
import { Link, useParams } from "react-router";
import blogData from "../data/blog.json";

const { blogs } = blogData;

const BlogPage = () => {
    // get the :id param from the URL
    const params = useParams();
    const id = params?.id;

    // find the blog  by id (ids in JSON are numbers)
    const blog = blogs.find((w) => String(w.id) === String(id));

    if (!blog) {
        return (
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-semibold">Blog not found</h2>
                </div>
            </section>
        );
    }

    return (
        <>
            <main id="blog-article-main">
                <article id="blog-article-container" className="bg-white">
                    <div
                        id="article-header"
                        className="max-w-4xl mx-auto px-4 sm:px-4 lg:px-4 py-8"
                    >
                        <h1 className="text-2xl sm:text-4xl text-neutral-900 font-bold leading-tight">
                            {blog.title}
                        </h1>

                        <div
                            id="article-tags"
                            className="flex flex-wrap gap-2 items-center pt-4 mb-12"
                        >
                            <span className="text-sm text-neutral-600">
                                TAGS:
                            </span>
                            {blog.tags.map((t) => (
                                <span
                                    key={t}
                                    className="bg-(--color-logo-blue) text-white px-3 py-1 rounded-md text-sm"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between border-b border-neutral-200 pb-6">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={blog.author.image}
                                    alt="Author"
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <div className="text-neutral-900">
                                        {blog.author.name}
                                    </div>
                                    <div className="text-sm text-neutral-600">
                                        {blog.author.title}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 text-sm text-neutral-600">
                                <div className="flex items-center space-x-2">
                                    <i className="fa-regular fa-calendar"></i>
                                    <span>{blog.datePublished}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="article-featured-image"
                        className="max-w-4xl mx-auto px-4 sm:px-4 lg:px-4 mb-12"
                    >
                        {/* Use a fixed-height, overflow-hidden container and object-cover to make the image fit */}
                        <div className="bg-neutral-400 w-full h-96 rounded-lg flex items-center justify-center overflow-hidden">
                            {blog.image ? (
                                <img
                                    src={blog.image}
                                    alt={blog.title || "Featured image"}
                                    className="w-full h-full object-cover rounded-lg"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-neutral-700">
                                    No image available
                                </div>
                            )}
                        </div>
                    </div>

                    <div
                        id="article-content"
                        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-justify"
                    >
                        <div className="prose prose-lg">
                            {blog.content.map((section, i) => {
                                // section can be a simple string paragraph, or an object like:
                                // { subtitle: '...', paragraphs: ['p1', 'p2'] } or { subtitle: '...', paragraph: '...' }
                                if (typeof section === "string") {
                                    return (
                                        <p
                                            key={i}
                                            className="text-lg text-neutral-700 leading-relaxed mb-6"
                                        >
                                            {section}
                                        </p>
                                    );
                                }

                                const subtitle =
                                    section?.subtitle || section?.title || null;
                                const paragraphs = Array.isArray(
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
                                            <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-6">
                                                {subtitle}
                                            </h2>
                                        )}
                                        {paragraphs.map((p, idx) => (
                                            <p
                                                key={idx}
                                                className="text-lg text-neutral-700 leading-relaxed mb-6"
                                            >
                                                {p}
                                            </p>
                                        ))}
                                    </div>
                                );
                            })}

                            {blog.pdf ? (
                                <>
                                    <h3 className="text-xl font-semibold text-neutral-900 mt-12 mb-6">
                                        {blog.pdf.title}
                                    </h3>
                                    <div className="flex items-center gap-3 bg-neutral-200 rounded-lg p-4">
                                        {/* <!-- PDF Icon --> */}
                                        <div className="bg-(--color-logo-blue) text-white p-2.5 rounded-lg flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 14.25v-2.036a4.5 4.5 0 00-1.232-3.09L13.5 4.5H6A1.5 1.5 0 004.5 6v12A1.5 1.5 0 006 19.5h12a1.5 1.5 0 001.5-1.5v-3.75z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13.5 4.5v4.875c0 .621.504 1.125 1.125 1.125H19.5"
                                                />
                                            </svg>
                                        </div>

                                        {/* <!-- PDF URL --> */}
                                        <a
                                            href={blog.pdf.url}
                                            target="_blank"
                                            className="text-sm text-(--color-logo-blue) hover:underline truncate max-w-[250px]"
                                        >
                                            {blog.pdf.url}
                                        </a>
                                    </div>
                                </>
                            ) : null}

                            <div className="bg-neutral-900 text-white p-8 rounded-lg my-10">
                                <h3 className="text-2xl mb-4">
                                    How You Can Help
                                </h3>
                                <p className="text-neutral-300 mb-6">
                                    Your support can make a real difference.
                                    Whether through donations, volunteering as a
                                    mentor, or spreading awareness about our
                                    work, every contribution counts.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to={"/donate"}>
                                        <button className="bg-(--color-logo-orange) text-white px-6 py-3 rounded-md hover:bg-neutral-100 hover:text-black">
                                            Donate
                                        </button>
                                    </Link>

                                    <Link to={"/volunteer"}>
                                        <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-neutral-800">
                                            Become a Volunteer
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
};

export default BlogPage;
