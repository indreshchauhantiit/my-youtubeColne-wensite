import axios from 'axios'

const API = 'https://www.googleapis.com/youtube/v3'
const KEY = import.meta.env.VITE_YT_API_KEY

const cache = new Map()
const TTL = 1000 * 60 * 5 // 5 minutes

function getCache(key) {
  const hit = cache.get(key)
  if (!hit) return null
  const [time, data] = hit
  if (Date.now() - time > TTL) {
    cache.delete(key)
    return null
  }
  return data
}

function setCache(key, data) {
  cache.set(key, [Date.now(), data])
}

async function request(path, params = {}) {
  const qp = new URLSearchParams({ key: KEY, ...params })
  const url = `${API}/${path}?${qp.toString()}`
  const cached = getCache(url)
  if (cached) return cached
  const { data } = await axios.get(url)
  setCache(url, data)
  return data
}

export async function searchVideos(q, opts = {}) {
  // `search.list` gives ids; follow up with `videos.list` for stats/snippets
  const params = {
    part: 'snippet',
    type: 'video',
    maxResults: opts.maxResults ?? 24,
    q,
    order: opts.order ?? 'relevance', // date | rating | relevance | title | viewCount
    videoDuration: opts.videoDuration ?? 'any', // any | short | medium | long
    videoEmbeddable: 'true',
  }
  const s = await request('search', params)
  const ids = s.items.map(i => i.id.videoId).filter(Boolean).join(',')
  if (!ids) return { items: [] }
  return videosByIds(ids)
}

export async function videosByIds(idsCSV) {
  const v = await request('videos', {
    part: 'snippet,contentDetails,statistics',
    id: idsCSV,
    maxResults: 50,
  })
  return v
}

export async function trending(regionCode = 'IN', maxResults = 24) {
  // uses `videos.list` with chart=mostPopular
  return request('videos', {
    part: 'snippet,contentDetails,statistics',
    chart: 'mostPopular',
    regionCode,
    maxResults,
  })
}

export async function channelById(id) {
  return request('channels', {
    part: 'snippet,statistics',
    id,
  })
}

export async function playlistItems(playlistId, maxResults = 24) {
  return request('playlistItems', {
    part: 'snippet,contentDetails',
    playlistId,
    maxResults,
  })
}