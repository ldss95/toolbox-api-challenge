import https from 'https'

import { ExternalAPIError } from '../errors.js'

/**
 * Funcion para hacer requests al API externa
 * @param {*} url path al cual hacer el request (La URL base debe ser omitida)
 * @param {*} parse2JSON si la respuesta del API externa está en formato JSON este atributo deberá ser true
 */
export function externalAPI(url, parse2JSON = false) {
  const config = {
    port: 443,
    method: 'GET',
    hostname: 'echo-serv.tbxnet.com',
    path: url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer aSuperSecretKey'
    }
  }

  return new Promise((resolve, reject) => {
    const req = https.request(config, responseHandler)

    function responseHandler(res) {
      res.on('data', (buffer) => onDataEvent(buffer, res))
    }

    function onDataEvent(buffer, res) {
      const { statusCode } = res
      const stringData = buffer.toString()

      // Si la respuesta no es 200 lanza error
      if (statusCode.toString().charAt(0) !== '2') {
        const data = JSON.parse(stringData)
        return reject(new ExternalAPIError(res.statusCode, data.message))
      }

      if (parse2JSON) {
        return resolve(JSON.parse(stringData))
      }

      resolve(stringData)
    }

    req.on('error', (error) => {
      reject(error)
    })

    req.end()
  })
}
