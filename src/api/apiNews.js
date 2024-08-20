import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

// const BASE_URL = "https://api.currentsapi.services/v1/";
// const API_KEY = "qAjlorfxfBqLqvjA5tWGeX0fK-iCbtU3ejJwTyek6auZM_h8";

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
