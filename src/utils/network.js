import { HTTP, HTTPS } from '@constants/api'

/**
 * Changing URL from HTTP to HTTPS
 * @param {String} url - url to be changed
 * @returns {String} - url with HTTPS
 */

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url
  return result
}

/**
 * Sending Fetch request
 * @param {String} url - request url
 * @returns {Promise} - Promise with request result
 */

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      console.error('Could not fetch.', res.status)
      return false
    }

    return await res.json()
  } catch (error) {
    console.error('Could not fetch.', error.message)
    return false
  }
}
