export const fetchFirstImageUrl = async (query: string) => {
  try {
    // URL encode the query to handle spaces and special characters
    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(
      `http://localHost.170:5000/api/images?query=${encodedQuery}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching image URL:", error);
    alert("FAILED")
    return "";
  }
};
