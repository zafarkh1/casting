import Cookies from "js-cookie";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Helper function for clearing tokens
const clearTokens = () => {
  Cookies.remove("access_token_casting");
  Cookies.remove("refresh_token_casting");
};

// Function to refresh access token
const refreshAccessToken = async () => {
  const refreshToken = Cookies.get("refresh_token_casting");

  if (!refreshToken) {
    console.error("Refresh token missing");
    return false;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/ru/api/v1/users/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) {
      console.error("Failed to refresh token:", response.statusText);
      return false;
    }

    const data = await response.json();
    // console.log("Login response:", response);
    // console.log("Refresh response:", data);

    Cookies.set("access_token_casting", data.access, {
      secure: true,
      sameSite: "strict",
    });
    return true;
  } catch (error) {
    console.error("Error during token refresh:", error);
    return false;
  }
};

// Centralized fetch utility
const fetchInstance = async (url: string, options: RequestInit = {}) => {
  const accessToken = Cookies.get("access_token_casting");
  const headers = {
    "Content-Type": "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    ...options.headers,
  };
  // console.log("Access Token:", Cookies.get("access_token_casting"));
  // console.log("Refresh Token:", Cookies.get("refresh_token_casting"));

  // console.log("Request Headers:", headers);

  const config = { ...options, headers };
  const response = await fetch(`${API_BASE_URL}${url}`, config);

  const responseBody = await response.clone().json(); // Clone response to read the body
  // console.log("API Response:", {
  //   status: response.status,
  //   statusText: response.statusText,
  //   body: responseBody,
  // });

  if (response.status === 401) {
    // console.log("Access token expired, attempting refresh...");
    const refreshed = await refreshAccessToken();
    if (refreshed) {
      // console.log("Token refreshed, retrying request...");
      return fetchInstance(url, { ...options });
    } else {
      // console.log("Refresh failed, clearing tokens.");

      clearTokens();
      throw new Error("Session expired. Please log in again.");
    }
  }

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

// Login function
export const login = async (user_uid: string, code: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ru/api/v1/users/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_uid, code }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    // console.log("Login response:", response);
    // console.log("Refresh response:", data);

    Cookies.set("access_token_casting", data.access, {
      secure: true,
      sameSite: "strict",
    });
    Cookies.set("refresh_token_casting", data.refresh, {
      secure: true,
      sameSite: "strict",
    });
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Logout function
export const logout = () => {
  clearTokens();
};

export default fetchInstance;
