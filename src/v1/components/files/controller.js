import { getFormatedFiles, getSecretFileList } from './services.js'
import { ExternalAPIError } from '../../errors.js'

export default {
  getData: async (req, res) => {
    try {
      const data = await getFormatedFiles()
      res.status(200).send(data)
    } catch (error) {
      if (error instanceof ExternalAPIError) {
        return res.status(error.status).send({
          message: error.message
        })
      }

      res.sendStatus(500)
      throw error
    }
  },
  getList: async (req, res) => {
    try {
      const data = await getSecretFileList()
      res.status(200).send(data)
    } catch (error) {
      if (error instanceof ExternalAPIError) {
        return res.status(error.status).send({
          message: error.message
        })
      }

      res.sendStatus(500)
      throw error
    }
  }
}
