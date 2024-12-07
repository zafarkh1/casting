import fetchInstance from "@/components/utils/axios/axiosInstance";
import Cookies from "js-cookie";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const sendCode = async (email: string) => {
  try {
    return await fetchInstance("/ru/api/v1/users/send-code/", {
      method: "POST",
      body: JSON.stringify({ username: email }),
    });
  } catch (error) {
    console.error("Error sending code:", error);
    throw error;
  }
};

// export const getActors = async () => {
//   try {
//     const data = await fetchInstance("/ru/api/v1/actors/list/", {
//       method: "GET",
//     });
//     return {
//       props: { actors: data.results },
//     };
//   } catch (error) {
//     console.error("Error fetching actors:", error);
//     return { props: { actors: [] } };
//   }
// };

export const getActors = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const endpoint = `/ru/api/v1/actors/list/?${queryParams}`;
    const data = await fetchInstance(endpoint, {
      method: "GET",
    });
    return {
      props: { actors: data.results },
    };
  } catch (error) {
    return { props: { actors: [] } };
  }
};

export const getActorDetail = async (id: string) => {
  try {
    return await fetchInstance(`/ru/api/v1/actors/detail/${id}/`, {
      method: "GET",
    });
  } catch (error) {
    console.error("Error fetching actor detail:", error);
    throw error;
  }
};

export const createApplicationForm = async () => {
  try {
    const response = await fetchInstance(
      "/ru/api/v1/actors/application-form/create/",
      {
        method: "POST",
      }
    );
    return response;
  } catch (error) {
    console.error("Error creating application form:", error);
    throw error;
  }
};

export const getProfile = async () => {
  try {
    return await fetchInstance("/ru/api/v1/users/profile", { method: "GET" });
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};

export const getProfileData = async () => {
  try {
    return await fetchInstance("/ru/api/v1/actors/application-form/", {
      method: "GET",
    });
  } catch (error) {
    console.error("Error fetching profile data:", error);
    throw error;
  }
};

export const getRelatedValues = async (category: string) => {
  try {
    return await fetchInstance(
      `/ru/api/v1/actors/related-values/${category}/`,
      {
        method: "GET",
      }
    );
  } catch (error) {
    console.error("Error fetching related values:", error);
    throw error;
  }
};

export const updateProfileData = async (data: any) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/ru/api/v1/actors/application-form/`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${Cookies.get("access_token_casting")}`,
        },
        body: data,
      }
    );

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(
        `Server responded with ${response.status}: ${JSON.stringify(
          errorDetails
        )}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating profile data:", error);
    throw error;
  }
};

export const postApplicationForm = async (data: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ru/api/v1/actors/publish/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Cookies.get("access_token_casting")}`,
      },
      body: data,
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(
        `Server responded with ${response.status}: ${JSON.stringify(
          errorDetails
        )}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating application form:", error);
    throw error;
  }
};
