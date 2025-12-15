import { create } from "zustand";

const useWelfareStore = create((set) => ({
    loading: false,
    welfarePosts: [],
    welfareData: null,
    pagination: null,
    
    fetchWelfarePosts: async (page = 1) => {
        try {
            set({ loading: true });
            const url = `${import.meta.env.VITE_SERVER_URL}/api/v1/welfare?page=${page}&limit=10`;
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if (res.ok) {
                const response = await res.json();
                
                // Append new welfare posts to existing ones for "Load More" functionality
                set((state) => ({
                    welfarePosts: page === 1 ? response.data : [...state.welfarePosts, ...response.data],
                    pagination: response.pagination,
                    loading: false
                }));
                return;
            }
            set({ loading: false });
        } catch (error) {
            console.error(error);
            set({ loading: false });
        }
    },

    fetchWelfareById: async (id) => {
        try {
            set({ loading: true, welfareData: null });
            const url = `${import.meta.env.VITE_SERVER_URL}/api/v1/welfare/${id}`;
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if (res.ok) {
                const response = await res.json();
                set({ welfareData: response?.data || {}, loading: false });
                return;
            }
            set({ loading: false });
        } catch (error) {
            console.error(error);
            set({ loading: false, welfareData: null });
        }
    },
}));

export { useWelfareStore };