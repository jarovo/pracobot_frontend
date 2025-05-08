const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:8000/api";

export const config = {
  api: {
    base: API_BASE,
    contacts: `${API_BASE}/contacts`,
    // Add other endpoints here
  },
};