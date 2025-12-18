import { create } from 'zustand';

const useDonationStore = create((set) => ({
    loading: false,
    error: null,
    success: false,

    // Initiate donation on the server
    initiateDonation: async (donationData) => {
        set({ loading: true, error: null, success: false });

        try {
            const url = `${import.meta.env.VITE_SERVER_URL}/api/v1/donation/initiate`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: donationData.email,
                    firstName: donationData.firstName,
                    lastName: donationData.lastName,
                    amount: donationData.amount * 100, // Convert to cents
                }),
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || 'Failed to initialize donation');
            }

            set({ loading: false });
            return data; // Return the response with access_code
        } catch (error) {
            set({
                loading: false,
                error: error.message || 'Failed to initialize donation'
            });
            throw error;
        }
    },

    // Verify donation on the server
    verifyDonation: async (reference) => {
        try {
            const url = `${import.meta.env.VITE_SERVER_URL}/api/v1/donation/verify/${reference}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (data.success && data.data.status === 'success') {
                set({ success: true, error: null });

            }

            return data;
        } catch (error) {
            console.error('Verification error:', error);
            set({ error: 'Failed to verify donation' });
            throw error;
        }
    },

    // Reset state
    reset: () => {
        set({ loading: false, error: null, success: false });
    },
}));

export { useDonationStore };