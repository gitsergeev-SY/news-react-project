import axios from "axios";

const BASE_URL = "https://api.currentsapi.services/v1/";
const API_KEY = "qAjlorfxfBqLqvjA5tWGeX0fK-iCbtU3ejJwTyek6auZM_h8";

export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
