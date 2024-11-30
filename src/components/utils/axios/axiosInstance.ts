import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("access_token_casting");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const refreshToken = Cookies.get("refresh_token_casting");
        if (!refreshToken) {
          throw new Error("Refresh token missing");
        }
        const { data } = await axios.post(
          `${API_BASE_URL}/ru/api/v1/users/refresh/`,
          {
            refresh: refreshToken,
          }
        );
        Cookies.set("access_token_casting", data.access, {
          secure: true,
          sameSite: "strict",
        });
        originalRequest.headers["Authorization"] = `Bearer ${data.access}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        clearTokens();
        throw refreshError;
      }
    }
    return Promise.reject(error);
  }
);

export const login = async (user_uid: string, code: string) => {
  try {
    const { data } = await axios.post(
      `${API_BASE_URL}/ru/api/v1/users/login/`,
      {
        user_uid,
        code,
      }
    );
    Cookies.set("access_token_casting", data.access, {
      secure: true,
      sameSite: "strict",
    });
    Cookies.set("refresh_token_casting", data.refresh, {
      secure: true,
      sameSite: "strict",
    });
  } catch (error) {
    console.error("Login failed", error);
    throw new Error("Invalid login credentials");
  }
};

export const logout = () => {
  clearTokens();
};

export const refreshAccessToken = async () => {
  try {
    const refreshToken = Cookies.get("refresh_token_casting");
    if (refreshToken) {
      const { data } = await axios.post(
        `${API_BASE_URL}/ru/api/v1/users/refresh/`,
        {
          refresh: refreshToken,
        }
      );
      Cookies.set("access_token_casting", data.access, {
        secure: true,
        sameSite: "strict",
      });
    } else {
      throw new Error("Refresh token missing");
    }
  } catch (error) {
    console.error("Error refreshing token", error);
    clearTokens();
    throw error;
  }
};

const clearTokens = () => {
  Cookies.remove("access_token_casting");
  Cookies.remove("refresh_token_casting");
};

export default axiosInstance;
