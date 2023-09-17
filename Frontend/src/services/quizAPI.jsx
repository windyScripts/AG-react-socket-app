import axios from "axios";

const API_URL = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean";

const getQuestions = () => {
  return axios.get(API_URL);
};

export {getQuestions}