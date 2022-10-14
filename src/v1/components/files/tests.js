import chai, { assert, expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

import { getSecretFileList } from './services.js'

describe('Archivos', () => {
	describe('Lista de archivos', () => {
		it('Deberia obtener la lista de archivos del API externa', async () => {
			const data = await getSecretFileList()

			assert.typeOf(data, 'object')
			expect(data).to.have.property('files')
			expect(data.files).to.be.an('array')
			const allString = data.files.every(item => typeof item == 'string')
			assert.equal(allString, true)
		})
	})
})
