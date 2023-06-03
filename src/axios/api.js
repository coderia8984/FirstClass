import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    withCredentials: true,
    "Content-Type": `application/json`,
  },
});

// 로그인관련 & token
export const AuthAPI = {
  getLogin: () => instance.get("/auth/kakao"),
};

// 공항 & 항공편 & 예약
export const AirportAPI = {
  getAirport: () => instance.get("/api/airports"),
  getFlights: (payload) => {
    const query = `sairport_id=${payload.departureID}&eairport_id=${payload.arrivalID}&start_datetime=${payload.date}0000&people_num=${payload.number}`;
    return instance.get(`/api/flights?${query}`);
  },
};

export default instance;
