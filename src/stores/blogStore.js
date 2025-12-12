import { create } from "zustand";

const useBlogStore = create((set) => ({
    blogs: [],
    singleBlog: null,
    loading: false,
    

    allBlogs: async () => {
        try {
            set({ loading: true });
            const url = `${import.meta.env.VITE_SERVER_URL}/api/v1/blog/`;
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            const contentType = res.headers.get("content-type") || "";
            if (contentType.includes("application/json")) {
                try {
                    const { data } = await res.json();
                    set({ blogs: data || [], loading: false });
                } catch (err) {
                    console.error("Failed to parse allBlogs response", err);
                }
            }

            if (!res.ok) {
                return { ok: false, status: res.status };
            }

            return { ok: true, status: res.status };
        } catch (error) {
            console.error(error);
            return {
                ok: false,
                status: 0,
                message: error?.message || "Network error",
            };
        }
    },

    getBlogById: async (id) => {
        try {
            set({ loading: true, singleBlog: null });
            const url = `${import.meta.env.VITE_SERVER_URL}/api/v1/blog/${id}`;
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (res.ok) {
                const response = await res.json();

                set({ singleBlog: response?.data || {}, loading: false });
                return;
            }
        } catch (error) {
            console.error(error);
            set({ singleBlog: null, loading: false });
            return {
                ok: false,
                status: 0,
                message: error?.message || "Network error",
            };
        }
    },
}));

export { useBlogStore };
