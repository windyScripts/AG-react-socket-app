import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3000/";

const getOpenRooms = () => {
  return axios.get(API_URL + "rooms");
};

const createRoom = () => {
  return axios.get(API_URL + "room", { headers: authHeader() });
};

const joinRoom = (payload) => {
  return axios.post(API_URL + "join", { headers: authHeader() },payload);
};

const getScores = (userId) => {
  return axios.get(API_URL + userId + "/scores", { headers: authHeader() });
};

const endGame = (result) => {
  return axios.post(API_URL + "/end", result, { headers: authHeader() })
}

const setExpiry = (Date) => {
  return axios.post(API_URL + "/expiry", result, { headers: authHeader() })
}
const GameService = {
  getOpenRooms,
  createRoom,
  joinRoom,
  getScores,
  endGame,
  setExpiry
};

export default GameService;
