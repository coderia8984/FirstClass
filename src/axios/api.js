import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    withCredentials: true,
    "Content-Type": `application/json`,
  },
});

instance.interceptors.request.use(
  function (config) {
    if (!!sessionStorage.getItem("RefreshToken")) {
      const refreshToken = sessionStorage.getItem("RefreshToken");
      config.headers.RefreshToken = `Bearer ${refreshToken}`;
    }

    return config;
  },
  function (error) {
    console.log("request error", error);
    return Promise.reject(error);
  }
);

// 로그인관련 & token
export const AuthAPI = {
  getLogin: () => instance.get("/auth/kakao"),
};

// 공항 & 항공편 & 예약
export const AirportAPI = {
  getAirport: () => instance.get("/api/airports"),
  getFlights: (payload) => {
    const query = `sairport_id=${payload.s_id}&eairport_id=${payload.e_id}&start_datetime=${payload.start_datetime}0000&people_num=${payload.people_num}&sort_field=${payload.field}&sort_by=${payload.by}`;
    return instance.get(`/api/flights?${query}`);
  },
};

export default instance;
