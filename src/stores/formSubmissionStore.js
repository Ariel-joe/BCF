import { create } from "zustand";

const useFormSubmissionStore = create((set) => ({
    loading: false,
    error: null,
    success: false,

    postSubmission: async (formData) => {
        set({ loading: true, error: null, success: false });

        try {
            const res = await fetch(
                `${import.meta.env.VITE_SERVER_URL}/api/v1/form/create`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(formData),
                }
            );

            const data = await res.json();

            if (res.ok && data.success) {
                set({ loading: false, success: true, error: null });
                return true;
            } else {
                const errorMessage = data.message || "Failed to submit form";
                set({ loading: false, success: false, error: errorMessage });
                return false;
            }
        } catch (error) {
            console.error("Form submission error:", error);
            set({
                loading: false,
                success: false,
                error: "Network error. Please check your connection and try again.",
            });
            return false;
        }
    },

    // Reset the store state
    resetForm: () => {
        set({ loading: false, error: null, success: false });
    },
}));

export { useFormSubmissionStore };
