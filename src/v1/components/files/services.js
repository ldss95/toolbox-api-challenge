import { externalAPI } from '../../utils/http.js'

export async function getSecretFileList() {
  const files = await externalAPI('/v1/secret/files', true)
  return files
}

export async function downloadFile(name) {
  const file = await externalAPI('/v1/secret/file/' + name)
  return file
}
