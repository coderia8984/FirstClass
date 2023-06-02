import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    withCredentials: true,
    "Content-Type": `application/json`,
  },
});

export const AuthAPI = {};

export const AirportAPI = {
  getAirport: () => instance.get("/api/airports"),
};

export default instance;
