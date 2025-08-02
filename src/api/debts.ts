const apiUrl = import.meta.env.VITE_API_URL;

const apiRequest = async (endpoint: string, options?: RequestInit) => {
  try {
    const response = await fetch(`${apiUrl}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Unknown error");
  }
};

export const getTopDebts = async () => {
  return apiRequest("/GetTopDebts");
};

export const getFilteredDebts = async (phrase: string) => {
  return apiRequest("/GetFilteredDebts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phrase }),
  });
};
