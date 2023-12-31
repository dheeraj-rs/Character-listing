import axios from "axios";
import AppConstants from "../../constants/AppConstants";
import { API_END_POINTS } from "./ApiEndPoint";
export const getCharacters = async () => {
  try {
    const response = await axios.get(
      `https://the-one-api.dev/v2/${API_END_POINTS.getCharacters}`,
      {
        headers: {
          Authorization: `${AppConstants.API_BASE_URL}`,
        },
      }
    );
    const characterData = response.data.docs;
    return characterData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getCharacterDetails = async (characterId) => {
  try {
    const response = await axios.get(
      `https://the-one-api.dev/v2/${API_END_POINTS.getCharacters}/${characterId}`,
      {
        headers: {
          Authorization: `${AppConstants.API_BASE_URL}`,
        },
      }
    );
    const characterDetails = response.data.docs;
    return characterDetails;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
