import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useState } from 'react'
import { Search } from 'lucide-react'

export default function Header() {
  const [term, setTerm] = useState('')
  const nav = useNavigate()
  const loc = useLocation()

  function submit(e) {
    e.preventDefault()
    const q = term.trim()
    if (!q) return
    nav(`/search?q=${encodeURIComponent(q)}`)
    setTerm('')
  }

  return (
    <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="mx-auto flex items-center gap-3 p-3 max-w-7xl">
        <Link to="/" className="font-semibold text-lg">YT Companion</Link>
        <form onSubmit={submit} className="flex-1 flex">
          <input
            className="w-full bg-neutral-900 border border-neutral-700 rounded-l px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-600"
            placeholder="Search YouTube…"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
          <button className="bg-neutral-800 border border-neutral-700 border-l-0 rounded-r px-3">
            <Search className="size-5" />
          </button>
        </form>
        <Link to="/watchlist" className={`px-3 py-1 rounded border border-neutral-700 ${loc.pathname.startsWith('/watchlist')?'bg-neutral-800':''}`}>Watchlist</Link>
      </div>
    </header>
  )
}