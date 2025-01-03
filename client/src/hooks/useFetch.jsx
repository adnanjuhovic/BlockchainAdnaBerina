import { useEffect, useState } from "react";

// API key from environment variables
const APIKEY = import.meta.env.VITE_GIPHY_API;

/**
 * Custom hook to fetch GIFs from Giphy API
 * @param {Object} params - Hook parameters
 * @param {string} params.keyword - Search term for GIF
 * @returns {string} URL of the fetched GIF
 */
const useFetch = ({ keyword }) => {
  // State to store the GIF URL
  const [gifUrl, setGifUrl] = useState("");

  // Function to fetch GIFs from Giphy
  const fetchGifs = async () => {
    try {
      // Make API request to Giphy
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`
      );
      const { data } = await response.json();

      // Update state with the GIF URL
      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      // Set fallback GIF URL in case of error
      setGifUrl(
        "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
      );
    }
  };

  // Fetch GIF when keyword changes
  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
