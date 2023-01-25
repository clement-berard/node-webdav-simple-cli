import { createClient } from 'webdav'

export function getWebDavClient (params) {
  return createClient(
    params.host,
    {
      username: params.login,
      password: params.password
    }
  )
}

export function withWebdav (rootParams) {
  console.log('CLI options', rootParams)

  const client = getWebDavClient({
    host: rootParams.host,
    login: rootParams.login,
    password: rootParams.password
  })

  return function (callableFunction) {
    callableFunction(client)
  }
}
