import { getFormatedFiles, getSecretFileList, getFormatedSpecificFile } from './services.js'
import { CustomError, ExternalAPIError } from '../../errors.js'

export default {
  getData: async (req, res) => {
    try {
      const { fileName } = req.query
      const data = (fileName)
        ? await getFormatedSpecificFile(fileName)
        : await getFormatedFiles()
      res.status(200).send(data)
    } catch (error) {
      if (error instanceof ExternalAPIError || error instanceof CustomError) {
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
