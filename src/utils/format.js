export function n(num) {
  if (num == null) return '—'
  const x = Number(num)
  if (x >= 1e9) return (x / 1e9).toFixed(1) + 'B'
  if (x >= 1e6) return (x / 1e6).toFixed(1) + 'M'
  if (x >= 1e3) return (x / 1e3).toFixed(1) + 'K'
  return String(x)
}

export function timeAgo(iso) {
  const d = new Date(iso)
  const diff = Date.now() - d.getTime()
  const s = Math.floor(diff / 1000)
  const m = Math.floor(s / 60)
  const h = Math.floor(m / 60)
  const day = Math.floor(h / 24)
  if (day > 0) return `${day} day${day>1?'s':''} ago`
  if (h > 0) return `${h} hour${h>1?'s':''} ago`
  if (m > 0) return `${m} min ago`
  return `${s} s ago`
}

export function dur(isoDuration) {
  // very small ISO8601 duration formatter (PT#M#S)
  const m = /PT(?:(\d+)M)?(?:(\d+)S)?/.exec(isoDuration || '')
  if (!m) return ''
  const mm = m[1] ? String(m[1]).padStart(2, '0') : '00'
  const ss = m[2] ? String(m[2]).padStart(2, '0') : '00'
  return `${mm}:${ss}`
}