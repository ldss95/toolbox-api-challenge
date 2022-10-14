/* eslint-env mocha */

import chai, { assert, expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

import { getFileContent, getFormatedFiles, getSecretFileList } from './services.js'

describe('Archivos', () => {
  describe('Lista de archivos', () => {
    it('Deberia obtener la lista de archivos del API externa', async () => {
      const data = await getSecretFileList()

      assert.typeOf(data, 'object')
      expect(data).to.have.property('files')
      expect(data.files).to.be.an('array')
      const allString = data.files.every(item => typeof item === 'string')
      assert.equal(allString, true)
    })

    it('Deberia descargar 1 arcihvo del API externa', async () => {
      const file = await getFileContent('test3.csv')
      assert.typeOf(file, 'string')
    })

    it('Deberia obtener todos los archivos en formato JSON', async () => {
      const files = await getFormatedFiles()
      expect(files).to.be.an('array')

      // Validamos el primer elemento
      const [firstFile] = files
      expect(firstFile).to.have.property('file')
      expect(firstFile.file).to.be.an('string')
      expect(firstFile).to.have.property('lines')
      expect(firstFile.lines).to.be.an('array')

      // Validamos la primera linea del primer elemento
      const [firstline] = firstFile.lines
      expect(firstline).to.have.property('text')
      expect(firstline).to.have.property('number')
      expect(firstline).to.have.property('hex')
    })
  })
})
