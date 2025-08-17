import axios from 'axios'

const API_KEY = "AIzaSyCQ2khBaHj_lxj1UCuzpQeWLdCeYO7Q_cc"; // यहाँ अपनी API key डालना
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function fetchTrending() {
  const res = await fetch(
    `${BASE_URL}/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${API_KEY}`
  );
  return res.json();
}

export async function searchVideos(query) {
  const res = await fetch(
    `${BASE_URL}/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`
  );
  return res.json();
}
