import { create } from "zustand";

const useProfileStore = create((set) => ({
    profile: null,
    loading: false,
    profilesData: [],

    fetchProfiles: async () => {
        try {
            set({ loading: true });
            const res = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/api/v1/profile`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            const { data } = await res.json();
            set({ profilesData: data, loading: false });
        } catch (error) {
            console.error(error);
            set({ loading: false });
        }
    },

    getProfileById: async (id) => {
        try {
            set({ loading: true });
            const res = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/api/v1/profile/${id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                }
            );
            const { data } = await res.json();
            set({ profile: data, loading: false });
        } catch (error) {
            console.error(error);
            set({ loading: false });
        }
    },
}));

export { useProfileStore };
