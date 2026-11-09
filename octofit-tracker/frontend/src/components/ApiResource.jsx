import { useEffect, useState } from 'react'
import { getApiUrl } from '../api.js'

function formatValue(value) {
  if (value === null || value === undefined || value === '') {
    return '—'
  }

  if (Array.isArray(value)) {
    return value.map(formatValue).join(', ')
  }

  if (typeof value === 'object') {
    return value.displayName || value.username || value.name || value._id || value.id || JSON.stringify(value)
  }

  return String(value)
}

export default function ApiResource({ title, resource, columns }) {
  const [records, setRecords] = useState([])
  const [error, setError] = useState('')
  const apiUrl = getApiUrl(resource)
  const [loading, setLoading] = useState(() => Boolean(apiUrl))

  useEffect(() => {
    if (!apiUrl) {
      return
    }

    const controller = new AbortController()

    async function loadRecords() {
      try {
        const response = await fetch(apiUrl, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`요청에 실패했습니다. (${response.status})`)
        }

        const payload = await response.json()
        const rows = Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.results)
            ? payload.results
            : null

        if (!rows) {
          throw new Error('API 응답 형식이 배열 또는 페이지 응답(results)이 아닙니다.')
        }

        setRecords(rows)
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message || '데이터를 불러오지 못했습니다.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadRecords()

    return () => controller.abort()
  }, [apiUrl])

  return (
    <section className="container py-5">
      <h1 className="h2 mb-4">{title}</h1>
      {!apiUrl && (
        <div className="alert alert-warning" role="alert">
          API에 연결하려면 프런트엔드의 <code>.env.local</code> 파일에{' '}
          <code>VITE_CODESPACE_NAME</code>을 설정하세요.
        </div>
      )}
      {loading && <p role="status">데이터를 불러오는 중입니다...</p>}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      {apiUrl && !loading && !error && records.length === 0 && (
        <p className="text-secondary">표시할 데이터가 없습니다.</p>
      )}
      {apiUrl && !error && records.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead>
              <tr>
                {columns.map(({ label }) => <th key={label} scope="col">{label}</th>)}
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={record._id || record.id || index}>
                  {columns.map(({ field }) => (
                    <td key={field}>{formatValue(record[field])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
