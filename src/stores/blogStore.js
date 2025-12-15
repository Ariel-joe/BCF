import { create } from "zustand";

const useBlogStore = create((set) => ({
    blogs: [],
    singleBlog: null,
    loading: false,
    pagination: null,
    
    allBlogs: async (page = 1) => {
        try {
            set({ loading: true });
            const url = `${import.meta.env.VITE_SERVER_URL}/api/v1/blog/?page=${page}&limit=10`;
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
                    const response = await res.json();
                    
                    // Append new blogs to existing ones for "Load More" functionality
                    set((state) => ({ 
                        blogs: page === 1 ? response.data : [...state.blogs, ...response.data],
                        pagination: response.pagination,
                        loading: false 
                    }));
                } catch (err) {
                    console.error("Failed to parse allBlogs response", err);
                    set({ loading: false });
                }
            }
            
            if (!res.ok) {
                set({ loading: false });
                return { ok: false, status: res.status };
            }
            
            return { ok: true, status: res.status };
        } catch (error) {
            console.error(error);
            set({ loading: false });
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