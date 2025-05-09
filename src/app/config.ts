const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export const config = {
  api: {
    base: API_BASE,
    contacts: `${API_BASE}/contacts`,
    // Add other endpoints here
  },
};