const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://13.201.194.90:8080/api";

export async function fetchProjects() {
  const response = await fetch(`${BASE_URL}/projects`);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
}
