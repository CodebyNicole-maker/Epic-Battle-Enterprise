import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/leaderboard";

export const fetchLeaderboard = async (sortBy: string = "total_power", alignment: string = "all") => {
    let url = API_BASE_URL;
    if (alignment !== "all") {
        url = `${API_BASE_URL}/filter/${alignment}`;
    } else {
        url = `${API_BASE_URL}/sort/${sortBy}`;
    }

    const response = await axios.get(url);
    return response.data;
};
