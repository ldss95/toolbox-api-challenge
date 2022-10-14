import https from 'https'

import { ExternalAPIError } from '../../errors.js'

const EXTERNAL_API = {
  HOST: 'echo-serv.tbxnet.com',
  API_KEY: 'aSuperSecretKey'
}

export async function getSecretFileList() {
  const config = {
    port: 443,
    method: 'GET',
    hostname: EXTERNAL_API.HOST,
    path: '/v1/secret/files',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + EXTERNAL_API.API_KEY
    }
  }

  return new Promise((resolve, reject) => {
    const req = https.request(config, (res) => {
      res.on('data', (buffer) => {
        const { statusCode } = res
        const data = JSON.parse(buffer.toString())

        // Si la respuesta no es 200 lanza error
        if (statusCode.toString().charAt(0) !== '2') {
          return reject(new ExternalAPIError(res.statusCode, data.message))
        }

        resolve(data)
      })
    })

    req.on('error', (error) => {
      reject(error)
    })

    req.end()
  })
}
