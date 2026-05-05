/**
 * ─── GEO DATA CACHE ───
 * Module-level singleton cache for TopoJSON map data.
 * Prevents duplicate network requests for countries-50m.json
 * which react-simple-maps normally fetches on every mount.
 */

const GEO_URL = '/data/countries-50m.json'

let cachedData = null
let fetchPromise = null

/**
 * Returns a promise that resolves to the TopoJSON data.
 * Uses module-level caching so the file is fetched at most once.
 */
export function fetchGeoData() {
  if (cachedData) {
    return Promise.resolve(cachedData)
  }

  if (!fetchPromise) {
    fetchPromise = fetch(GEO_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch geo data: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        cachedData = data
        return data
      })
      .catch((err) => {
        fetchPromise = null // Allow retry on error
        throw err
      })
  }

  return fetchPromise
}

import { useEffect, useState } from 'react'

/**
 * React hook that provides cached geo/topo JSON data.
 * Only triggers a single network request across all components.
 */
export function useGeoData() {
  const [data, setData] = useState(cachedData)
  const [loading, setLoading] = useState(!cachedData)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (cachedData) {
      setData(cachedData)
      setLoading(false)
      return
    }

    let cancelled = false

    fetchGeoData()
      .then((result) => {
        if (!cancelled) {
          setData(result)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err)
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { data, loading, error }
}
