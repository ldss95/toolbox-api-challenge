import { CustomError } from '../../errors.js'
import { externalAPI } from '../../utils/http.js'

export async function getSecretFileList() {
  const files = await externalAPI('/v1/secret/files', true)
  return files
}

export async function getFileContent(name) {
  const file = await externalAPI('/v1/secret/file/' + name)
  return file
}

export async function getFormatedFiles() {
  const { files: fileList } = await getSecretFileList()

  /**
   * Usando un array de promesas en vez de un loop se hacen todas las llamadas al API externa
   * en paralelo, agilizando la respuesta
   */
  const results = await Promise.allSettled(
    fileList.map(fileName => getFileContent(fileName))
  )

  const files = results
    .filter(({ status }) => status === 'fulfilled') // Descartra requests fallidas (Not Found)
    .map(({ value }) => value)                      // Conserva solo la informacion del archivo
    .filter(file => {                               // Descarta archivos que solo tienen 1 linea, suponiendo que dicha linea solo es la cabecera
      const lines = file.split('\n')
      return lines.length > 1
    })
    .map(csv2JSON)

  return files
}

export async function getFormatedSpecificFile(name) {
  const file = await getFileContent(name)

  const lines = file.split('\n')
  if (lines.length <= 1) {
    throw new CustomError(400, 'Invalid file')
  }

  return [csv2JSON(file)]
}

function csv2JSON(file) {
  const lines = file.split('\n')
    .filter((_, index) => index > 0)  // Ignora primera linea, cabecera del archivo
    .filter(line => {                 // Ignora lineas que no tengan las 4 columnas requeridas
      const cols = line.split(',')
      return cols.length === 4
    })

  const [firstLine] = lines
  const [fileName] = firstLine.split(',')

  return {
    file: fileName,
    lines: lines.map(line => {
      const cols = line.split(',')

      return {
        text: cols[1],
        number: cols[2],
        hex: cols[3]
      }
    })
  }
}
