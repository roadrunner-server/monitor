const host = window.location.host
const httpProtocol = window.location.protocol === 'https:' ? 'https' : 'http'
const API_URL = process.env.API_URL || `${httpProtocol}://${host}`

export default function ({$axios, $logger, redirect}) {
  $axios.setBaseURL(API_URL)

  $axios.onRequest(config => {
    $logger.debug(`Making request: ${config.url}`, config)
  })

  $axios.onResponse(response => {
    $logger.debug(`Response:`, response)
  })

  $axios.onError(error => {
    $logger.error('Request error', error)
  })
}
