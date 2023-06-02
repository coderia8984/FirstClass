import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    withCredentials: true,
    "Content-Type": `application/json`,
  },
});


// 로그인관련 & token
export const AuthAPI = {};

// 공항 & 항공편 & 예약
export const AirportAPI = {
  getAirport: () => instance.get("/api/airports"),
};

export default instance;
