const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export async function fetchProjects() {
  if (!BASE_URL) {
    // Return empty so Projects.jsx gracefully falls back to static data
    return [];
  }
  const response = await fetch(`${BASE_URL}/projects`);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
}
