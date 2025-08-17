import { create } from 'zustand'

export const useStore = create((set, get) => ({
  region: 'IN',
  setRegion: region => set({ region }),

  watchlist: JSON.parse(localStorage.getItem('watchlist') || '[]'),
  addToWatchlist: video => set(state => {
    const exists = state.watchlist.find(v => v.id === video.id)
    const next = exists ? state.watchlist : [video, ...state.watchlist]
    localStorage.setItem('watchlist', JSON.stringify(next))
    return { watchlist: next }
  }),
  removeFromWatchlist: id => set(state => {
    const next = state.watchlist.filter(v => v.id !== id)
    localStorage.setItem('watchlist', JSON.stringify(next))
    return { watchlist: next }
  }),

  notesByVideo: JSON.parse(localStorage.getItem('notesByVideo') || '{}'),
  addNote: (videoId, time, text) => set(state => {
    const cur = state.notesByVideo[videoId] || []
    const next = { time, text, id: crypto.randomUUID(), createdAt: Date.now() }
    const updated = { ...state.notesByVideo, [videoId]: [next, ...cur] }
    localStorage.setItem('notesByVideo', JSON.stringify(updated))
    return { notesByVideo: updated }
  }),
  deleteNote: (videoId, noteId) => set(state => {
    const cur = state.notesByVideo[videoId] || []
    const updated = cur.filter(n => n.id !== noteId)
    const all = { ...state.notesByVideo, [videoId]: updated }
    localStorage.setItem('notesByVideo', JSON.stringify(all))
    return { notesByVideo: all }
  }),
}))