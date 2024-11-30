import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendCode = async (email: string) => {
  const url = `/ru/api/v1/users/send-code/`;
  try {
    const response = await axiosInstance.post(url, { username: email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getActors = async () => {
  const url = `/ru/api/v1/actors/list/`;

  try {
    const { data } = await axiosInstance.get(url);
    return {
      props: {
        actors: data.results,
      },
    };
  } catch (error) {
    console.error("Error fetching actors:", error);
    return {
      props: {
        actors: [],
      },
    };
  }
};

export const createApplicationForm = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/ru/api/v1/actors/application-form/create/`;

  const token = Cookies.get("access_token_casting");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error;
  }
};
