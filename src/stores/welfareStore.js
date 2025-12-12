import { create } from "zustand";

const useWelfareStore = create((set) => ({
    loading: false,
    welfarePosts: [],
    welfareData: null,
    
    fetchWelfarePosts: async () => {
        try {
            set({ loading: true });
            const url = `${import.meta.env.VITE_SERVER_URL}/api/v1/welfare`;
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });
            if (res.ok) {
                const response = await res.json();
                set({ welfarePosts: response?.data || [], loading: false });
                return;
            }
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
        } catch (error) {
            console.error(error);
            set({ loading: false, welfareData: null });
        }
    },
}));

export { useWelfareStore };
