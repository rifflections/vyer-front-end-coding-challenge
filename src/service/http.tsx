import axios from "axios";

const GITHUB_PERSONAL_ACCESS_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

export default axios.create({
  baseURL: `https://api.github.com/search`,
  headers: {
    "Authorization": `bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
});