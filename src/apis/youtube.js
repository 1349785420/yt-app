import axios from "axios";

const KEY = "AIzaSyARKsGr8rc7CIJDnTtkjDa63Zly5V3xHsc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
